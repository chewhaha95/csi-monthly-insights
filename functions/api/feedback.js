/* Collect in-app feedback and Ask-assistant gap reports, and let the editor
   read them back. Reuses the existing SUBS KV binding under an 'fb:' prefix —
   notify.js/subscribe.js are scoped to 'sub:' keys, so the two never collide,
   and no new Cloudflare binding is needed.

   POST /api/feedback              (public)  body {message, kind?, contact?, meta?}
   GET  /api/feedback              (editor)  header X-Notify-Token: <NOTIFY_TOKEN>
        ?purge=1  deletes everything after reading. */

const MAX_MSG = 4000;
const KEEP_DAYS = 180;

function clip(v, n) { return (typeof v === 'string') ? v.slice(0, n) : ''; }

export async function onRequestPost({ request, env }) {
  if (!env.SUBS) return new Response('store not configured', { status: 503 });
  let body;
  try { body = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }
  const message = (body && typeof body.message === 'string') ? body.message.trim() : '';
  if (!message) return new Response('empty', { status: 400 });

  const rec = {
    message: message.slice(0, MAX_MSG),
    kind: (body.kind === 'gaps') ? 'gaps' : 'feedback',
    contact: clip(body.contact, 200),
    meta: (body.meta && typeof body.meta === 'object') ? body.meta : undefined,
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

  let cursor, done = false;
  const items = [];
  while (!done) {
    const list = await env.SUBS.list({ prefix: 'fb:', cursor, limit: 1000 });
    for (const k of list.keys) {
      const raw = await env.SUBS.get(k.name);
      if (raw) { try { items.push(JSON.parse(raw)); } catch (e) {} }
      if (purge) await env.SUBS.delete(k.name);
    }
    cursor = list.cursor;
    done = list.list_complete;
  }
  items.sort((a, b) => (a.t < b.t ? 1 : -1)); // newest first
  return new Response(JSON.stringify({ count: items.length, purged: purge, items }, null, 2),
    { headers: { 'content-type': 'application/json' } });
}
