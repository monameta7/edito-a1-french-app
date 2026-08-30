/* ===== Service Worker — اپ را قابل‌نصب و تا حدی آفلاین می‌کند =====
   چون این اپ بدون build است (اسم فایل‌ها ثابت است، نه هش‌شده)، اگر index.html
   هم مثل بقیه فایل‌ها cache-first می‌شد، یک باگ واقعی پیش می‌آمد: بعد از دیپلوی
   یک آپدیت، ممکن بود index.html قدیمی (که تگ اسکریپت فایل جدید را ندارد) با
   app.js جدید (که به آن فایل جدید نیاز دارد) قاطی شود و صفحه با خطا بشکند.
   برای همین: HTML (ناوبری‌ها) همیشه network-first است — همیشه نسخه واقعی
   سرور را می‌گیرد و فقط اگر آفلاین بود از کش برمی‌گردد. فایل‌های استاتیک دیگر
   (css/js/تصاویر) همچنان cache-first با به‌روزرسانی در پس‌زمینه هستند تا لود
   بعدی سریع باشد. */
const CACHE_NAME = 'edito-a1-v2';
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

  /* ناوبری صفحه (بارگذاری/رفرش) یا خودِ index.html: همیشه اول شبکه، کش فقط برای حالت آفلاین */
  if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html') {
    e.respondWith(
      fetch(e.request).then(function (res) {
        if (res && res.status === 200) {
          var resClone = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, resClone); });
        }
        return res;
      }).catch(function () { return caches.match(e.request); })
    );
    return;
  }

  /* بقیه فایل‌های استاتیک: cache-first + به‌روزرسانی در پس‌زمینه */
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
