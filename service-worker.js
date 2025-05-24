const CACHE_NAME = 'feriados-co-v1';
const FILES_TO_CACHE = [
  './index.html',
  './style.css',
  './offline.html',
  './js/festivos.js',
  './js/buscador.js',
  './js/filtro.js',
  './js/favoritos.js',
  './js/proximo.js',
  './icons/festivos.png',
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request)
      .then(resp => resp || fetch(evt.request))
      .catch(() => caches.match('./offline.html'))
  );
});
