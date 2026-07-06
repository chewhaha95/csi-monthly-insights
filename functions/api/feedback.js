/* Collect in-app feedback and Ask-assistant gap reports, and let the editor
   read them back. Reuses the existing SUBS KV binding under an 'fb:' prefix —
   notify.js/subscribe.js are scoped to 'sub:' keys, so the two never collide,
   and no new Cloudflare binding is needed.

   POST /api/feedback              (public)  body {message, kind?, contact?, meta?}
   GET  /api/feedback              (editor)  header X-Notify-Token: <NOTIFY_TOKEN>
        ?purge=1  deletes everything after reading. */

const MAX_MSG = 4000;
const MAX_BODY = 16384; // bytes — well above any legitimate form submission
const KEEP_DAYS = 180;

function clip(v, n) { return (typeof v === 'string') ? v.slice(0, n) : ''; }
/* Only the fields the app actually sends, each bounded — never store a caller-
   shaped object (an unbounded meta blob could make the editor GET unreadable). */
function cleanMeta(m) {
  if (!m || typeof m !== 'object') return undefined;
  const out = {};
  if (typeof m.edition === 'string') out.edition = m.edition.slice(0, 40);
  if (typeof m.count === 'number' && isFinite(m.count)) out.count = m.count;
  if (m.auto === true) out.auto = true;
  return Object.keys(out).length ? out : undefined;
}

export async function onRequestPost({ request, env }) {
  if (!env.SUBS) return new Response('store not configured', { status: 503 });
  let body;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return new Response('too large', { status: 413 });
    body = JSON.parse(raw);
  } catch (e) { return new Response('bad request', { status: 400 }); }
  const message = (body && typeof body.message === 'string') ? body.message.trim() : '';
  if (!message) return new Response('empty', { status: 400 });

  const rec = {
    message: message.slice(0, MAX_MSG),
    kind: (body.kind === 'gaps') ? 'gaps' : 'feedback',
    contact: clip(body.contact, 200),
    meta: cleanMeta(body.meta),
    ua: clip(request.headers.get('user-agent') || '', 200),
    t: new Date().toISOString()
  };
  const id = 'fb:' + rec.t + '-' + crypto.randomUUID().slice(0, 8);
  await env.SUBS.put(id, JSON.stringify(rec), { expirationTtl: KEEP_DAYS * 86400 });
  return new Response(JSON.stringify({ ok: true }), { status: 201, headers: { 'content-type': 'application/json' } });
}

export async function onRequestGet({ request, env }) {
  if (!env.SUBS) return new Response('store not configured', { status: 503 });
  const url = new URL(request.url);
  const token = request.headers.get('x-notify-token') || url.searchParams.get('token');
  if (!env.NOTIFY_TOKEN || token !== env.NOTIFY_TOKEN) return new Response('unauthorized', { status: 401 });
  const purge = url.searchParams.get('purge') === '1';

  // Two phases: read everything first, delete only afterwards — an invocation
  // that aborts mid-read (op/CPU limits on a huge backlog) then loses nothing.
  // MAX_ITEMS keeps read+delete comfortably inside the per-invocation KV-op
  // budget; a `truncated` flag tells the editor to run the workflow again.
  const MAX_ITEMS = 400;
  let cursor, done = false, truncated = false;
  const items = [], keys = [];
  while (!done && keys.length < MAX_ITEMS) {
    const list = await env.SUBS.list({ prefix: 'fb:', cursor, limit: 1000 });
    for (const k of list.keys) {
      if (keys.length >= MAX_ITEMS) { truncated = true; break; }
      keys.push(k.name);
      const raw = await env.SUBS.get(k.name);
      if (raw) { try { items.push(JSON.parse(raw)); } catch (e) {} }
    }
    cursor = list.cursor;
    done = list.list_complete;
  }
  if (!done && !truncated) truncated = true;
  if (purge) for (const name of keys) await env.SUBS.delete(name);
  items.sort((a, b) => (a.t < b.t ? 1 : -1)); // newest first
  return new Response(JSON.stringify({ count: items.length, purged: purge, truncated, items }, null, 2),
    { headers: { 'content-type': 'application/json' } });
}
