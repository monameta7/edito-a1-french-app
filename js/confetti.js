/* ===== افکت کانفتی برای لحظه‌های شادی‌بخش =====
   پاسخ درست، اتمام درس/جلسه، بج جدید، رسیدن به سطح جدید — بدون هیچ
   کتابخانهٔ خارجی، فقط چند div که با CSS پرتاب و محو می‌شوند. */
var Confetti = {
  COLORS: ['#3355e0', '#7b3fe4', '#e63946', '#188a4e', '#f4b400', '#ff6b9c'],

  burst: function (opts) {
    opts = opts || {};
    var x = opts.x != null ? opts.x : window.innerWidth / 2;
    var y = opts.y != null ? opts.y : window.innerHeight / 3;
    var count = opts.count || 24;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'confetti-piece';
      var angle = Math.random() * Math.PI * 2;
      var dist = 50 + Math.random() * 110;
      var dx = Math.cos(angle) * dist;
      var dy = Math.sin(angle) * dist - 30;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.background = this.COLORS[i % this.COLORS.length];
      p.style.setProperty('--dx', dx + 'px');
      p.style.setProperty('--dy', dy + 'px');
      p.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      if (Math.random() > 0.5) p.style.borderRadius = '50%';
      p.style.animationDelay = (Math.random() * 0.12) + 's';
      document.body.appendChild(p);
      (function (el) { setTimeout(function () { el.remove(); }, 1300); })(p);
    }
  },

  /* از وسط یک المان DOM منفجر می‌شود (مثلاً دکمه‌ای که کاربر همین الان زده) */
  fromElement: function (el, count) {
    if (!el || !el.getBoundingClientRect) { this.burst({ count: count }); return; }
    var r = el.getBoundingClientRect();
    this.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, count: count });
  }
};

/* متن شناور کوچک (مثلاً «+۱۰ XP») که از یک نقطه بالا می‌رود و محو می‌شود */
function floatText(text, x, y, cls) {
  var t = document.createElement('div');
  t.className = 'float-text' + (cls ? ' ' + cls : '');
  t.textContent = text;
  t.style.left = x + 'px';
  t.style.top = y + 'px';
  document.body.appendChild(t);
  setTimeout(function () { t.remove(); }, 1100);
}
function floatTextFromElement(text, el, cls) {
  if (!el || !el.getBoundingClientRect) return;
  var r = el.getBoundingClientRect();
  floatText(text, r.left + r.width / 2, r.top, cls);
}
