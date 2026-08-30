/* ===== Service Worker — اپ را قابل‌نصب و تا حدی آفلاین می‌کند =====
   استراتژی: cache-first با به‌روزرسانی در پس‌زمینه (stale-while-revalidate).
   یعنی صفحه فوراً از کش لود می‌شود (حتی آفلاین)، و همزمان نسخه جدید از شبکه
   می‌آید و برای دفعه بعد در کش جایگزین می‌شود — پس بعد از هر آپدیت واقعی اپ،
   ممکن است کاربر یک‌بار رفرش اضافه نیاز داشته باشد تا نسخه جدید را ببیند. */
const CACHE_NAME = 'edito-a1-v1';
const CORE_ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(CORE_ASSETS); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; /* درخواست‌های خارجی (مثل API آنتروپیک) را دست‌نخورده بگذار */

  e.respondWith(
    caches.match(e.request).then(function (cached) {
      var fetchPromise = fetch(e.request).then(function (res) {
        if (res && res.status === 200) {
          var resClone = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, resClone); });
        }
        return res;
      }).catch(function () { return cached; });
      return cached || fetchPromise;
    })
  );
});
