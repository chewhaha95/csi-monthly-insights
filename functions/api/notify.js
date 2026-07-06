/* Broadcast a "new brief" push to every stored subscription.
   Token-protected so only the editor (or the scheduled workflow) can fire it.

   Trigger:  POST /api/notify   header  X-Notify-Token: <NOTIFY_TOKEN>
   Needs bindings/secrets: SUBS (KV), VAPID_PRIVATE_JWK, VAPID_SUBJECT (mailto:),
   NOTIFY_TOKEN. Payload-less — the service worker supplies the notification text. */
import { importVapidKey, sendPush } from '../_push.js';

export async function onRequestPost({ request, env }) {
  if (!env.SUBS || !env.VAPID_PRIVATE_JWK) return new Response('push not configured', { status: 503 });

  const token = request.headers.get('x-notify-token') || new URL(request.url).searchParams.get('token');
  if (!env.NOTIFY_TOKEN || token !== env.NOTIFY_TOKEN) return new Response('unauthorized', { status: 401 });

  const privKey = await importVapidKey(env.VAPID_PRIVATE_JWK);
  const subject = env.VAPID_SUBJECT || 'mailto:editor@csi-monthly-insights.pages.dev';

  let cursor, done = false, sent = 0, gone = 0, failed = 0;
  while (!done) {
    const list = await env.SUBS.list({ prefix: 'sub:', cursor, limit: 1000 });
    for (const k of list.keys) {
      const raw = await env.SUBS.get(k.name);
      if (!raw) continue;
      let status = 0;
      try { status = await sendPush(JSON.parse(raw), subject, privKey); } catch (e) { status = 0; }
      if (status === 201 || status === 200) sent++;
      else if (status === 404 || status === 410) { await env.SUBS.delete(k.name); gone++; }
      else failed++;
    }
    cursor = list.cursor;
    done = list.list_complete;
  }
  return new Response(JSON.stringify({ sent, gone, failed }), { headers: { 'content-type': 'application/json' } });
}
