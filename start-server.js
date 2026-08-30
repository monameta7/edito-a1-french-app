/* ===== سرور محلی ساده برای اپ Édito A1 =====
   چرا لازم است؟ مرورگرها (Chrome/Edge) معمولاً دسترسی به میکروفون را روی صفحاتی که
   مستقیم از یک فایل باز شده‌اند (آدرس با file:// شروع می‌شود) اجازه نمی‌دهند —
   حتی بدون نشان‌دادن پنجره درخواست اجازه! برای اینکه بخش گفتاری (تمرین‌های 🎤) کار کند،
   باید اپ را از طریق آدرس http://localhost باز کنی، نه با دابل‌کلیک روی index.html.

   نحوه اجرا: در همین پوشه دستور زیر را بزن (یا فایل start-server.bat را دابل‌کلیک کن):
     node start-server.js
   بعد در مرورگر بازش کن: http://localhost:5173 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5173;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.normalize(path.join(ROOT, reqPath));

  // جلوگیری از خروج از پوشه اپ
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('یافت نشد: ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('✅ اپ Édito A1 روی آدرس زیر در دسترس است:');
  console.log('   http://localhost:' + PORT);
  console.log('این پنجره را باز نگه دار تا اپ کار کند. برای توقف، Ctrl+C بزن.');
});
