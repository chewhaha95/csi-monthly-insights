/* Conflict Studies & Insights — service worker.
   Bump CACHE (v1 -> v2 ...) whenever you publish a new edition to force a refresh. */
const CACHE = 'csi-insights-v9';
const ASSETS = [
  './', './index.html', './data.js', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-512-maskable.png', './apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Only handle our own origin. Cross-origin requests (e.g. live weekly briefs
  // fetched from conflictstudiesandinsights.pages.dev) must pass through to the
  // network untouched — never route them through our cache.
  if (new URL(req.url).origin !== self.location.origin) return;
  // Page loads: network-first so a freshly published edition shows when online; cache fallback offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Content data: network-first too, so a freshly published edition's serials show when online (like the page itself).
  if (/\/data\.js(\?|$)/.test(new URL(req.url).pathname)) {
    e.respondWith(
      fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req))
    );
    return;
  }
  // Everything else (icons, fonts): cache-first, fill cache on first online fetch.
  e.respondWith(
    caches.match(req).then(r => r || fetch(req).then(rr => {
      const cp = rr.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return rr;
    }).catch(() => r))
  );
});
