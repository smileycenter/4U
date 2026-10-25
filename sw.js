const CACHE_NAME = 'family-app-cache-v1';
const urlsToCache = [
  './'
];

// تثبيت ملفات الكاش الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// استرجاع البيانات المحفوظة لضمان سرعة التطبيق
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
