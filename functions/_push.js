/* Web Push (VAPID) helpers for the Cloudflare Pages Functions.
   Payload-less push: we only signal "something new" — the notification body
   is fixed in the service worker, so no RFC-8291 message encryption is needed,
   just the VAPID JWT (ES256) auth. Shared by /api/subscribe and /api/notify. */

// VAPID application-server public key (uncompressed P-256 point, base64url).
// Public — safe to commit. The matching private key is the VAPID_PRIVATE_JWK secret.
export const VAPID_PUBLIC = 'BG1CmTnY25ujCrZxcWLIlHYqre6M1RXk-C3alm7yVv5lsxCLyscVcJwdfYZtTX_-8SEgJFZj47GfZ7z7FAfQeUE';

const b64url = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64urlStr = str => b64url(new TextEncoder().encode(str));

export async function sha256hex(str) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('');
}

export function importVapidKey(jwkString) {
  return crypto.subtle.importKey('jwk', JSON.parse(jwkString), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
}

// Build a VAPID JWT for one push-service origin (the subscription endpoint's origin).
async function vapidJWT(audience, subject, privKey) {
  const header = b64urlStr(JSON.stringify({ typ: 'JWT', alg: 'ES256' }));
  const payload = b64urlStr(JSON.stringify({ aud: audience, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: subject }));
  const signingInput = header + '.' + payload;
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, privKey, new TextEncoder().encode(signingInput));
  return signingInput + '.' + b64url(sig); // subtle ECDSA returns raw r||s — exactly what JWS wants
}

// Send one payload-less push. Returns the HTTP status (201 = queued; 404/410 = gone).
export async function sendPush(subscription, subject, privKey) {
  const endpoint = subscription.endpoint;
  const jwt = await vapidJWT(new URL(endpoint).origin, subject, privKey);
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `vapid t=${jwt}, k=${VAPID_PUBLIC}`,
      'TTL': '86400',
      'Urgency': 'normal',
      'Content-Length': '0',
    },
  });
  return res.status;
}
