/* ===== جستجوی مکمل در Wiktionary =====
   واژه‌نامهٔ خودِ اپ فقط حدود ۵۰۰ واژهٔ برگزیده (با ترجمهٔ فارسی) دارد. برای
   واژه‌هایی که آنجا نیست، این ماژول یک جستجوی زندهٔ اختیاری در ویکی‌فرهنگ
   فرانسه (fr.wiktionary.org, بدون کلید API، رایگان، CC BY-SA) انجام می‌دهد.
   فقط تعریف کوتاهِ هر بخش دستوری را نشان می‌دهد (نه مثال‌های ادبی طولانیِ
   نقل‌شده در خودِ صفحهٔ ویکی‌فرهنگ) و همیشه لینک صفحهٔ کامل را هم می‌دهد.
   نیاز به اینترنت دارد و فقط روی http(s) کار می‌کند، نه file://. */
var Wiktionary = {
  cache: {},

  lookup: function (word) {
    var self = this;
    var key = (word || '').trim().toLowerCase();
    if (!key) return Promise.resolve(null);
    if (key in this.cache) return Promise.resolve(this.cache[key]);
    if (location.protocol === 'file:') return Promise.reject({ kind: 'file' });
    var url = 'https://fr.wiktionary.org/w/api.php?action=query&titles=' + encodeURIComponent(key) +
      '&prop=extracts&format=json&explaintext=1&origin=*';
    return fetch(url).then(function (r) { return r.json(); }).then(function (data) {
      var pages = data.query && data.query.pages;
      var extract = '';
      if (pages) for (var id in pages) extract = pages[id].extract || '';
      var parsed = self._parseFrench(extract);
      self.cache[key] = parsed;
      return parsed;
    });
  },

  _parseFrench: function (extract) {
    if (!extract) return null;
    var m = extract.match(/==\s*Français\s*==([\s\S]*?)(\n==\s[^=]|$)/);
    if (!m) return null;
    var chunks = m[1].split(/\n===\s*/).slice(1);
    var entries = [];
    chunks.forEach(function (chunk) {
      var lines = chunk.split('\n');
      var heading = (lines[0] || '').replace(/\s*===\s*/g, '').trim();
      if (/étymologie|références|voir aussi|anagramme|prononciation/i.test(heading)) return;
      var rest = lines.slice(1).map(function (l) { return l.trim(); }).filter(Boolean);
      if (!rest.length) return;
      var headword = rest[0];
      var def = null;
      for (var i = 1; i < rest.length; i++) {
        if (rest[i].indexOf('— (') === -1) { def = rest[i]; break; }
      }
      if (def) entries.push({ heading: heading, headword: headword, def: def });
    });
    return entries.length ? entries : null;
  }
};
