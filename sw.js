// Retire the old offline worker for returning visitors. No new pages register it.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const legacyCaches = new Set([
      'main-precache-then-runtime',
      'precache-v1',
      'runtime',
      'main-precache-v1',
      'main-runtime'
    ]);
    const names = await caches.keys();
    await Promise.all(names.filter((name) => legacyCaches.has(name)).map((name) => caches.delete(name)));
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
