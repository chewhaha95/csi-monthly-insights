/* Store / remove a Web Push subscription. Needs a KV binding named SUBS.
   Stores nothing but the browser-issued push subscription (no identity). */
import { sha256hex } from '../_push.js';

async function keyFor(sub) { return 'sub:' + await sha256hex(sub.endpoint); }

export async function onRequestPost({ request, env }) {
  if (!env.SUBS) return new Response('push store not configured', { status: 503 });
  let sub;
  try { sub = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }
  if (!sub || typeof sub.endpoint !== 'string' || !/^https:\/\//.test(sub.endpoint)) return new Response('bad request', { status: 400 });
  await env.SUBS.put(await keyFor(sub), JSON.stringify(sub));
  return new Response('subscribed', { status: 201 });
}

export async function onRequestDelete({ request, env }) {
  if (!env.SUBS) return new Response('push store not configured', { status: 503 });
  let sub;
  try { sub = await request.json(); } catch (e) { return new Response('bad request', { status: 400 }); }
  if (sub && typeof sub.endpoint === 'string') await env.SUBS.delete(await keyFor(sub));
  return new Response('unsubscribed', { status: 200 });
}
