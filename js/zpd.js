/* ===== منطقهٔ تقریبی رشد (Zone of Proximal Development — نظریهٔ ویگوتسکی) =====
   ایدهٔ ویگوتسکی: یادگیری بهترین اثر را وقتی دارد که تمرین نه خیلی ساده باشد
   (که یادگیرنده به‌تنهایی و بدون تلاش انجامش می‌دهد) و نه خیلی سخت (که حتی با
   کمک هم نمی‌تواند) — بلکه دقیقاً یک قدم جلوتر از توانایی فعلی، جایی که هنوز
   قابل‌دستیابی است. این ماژول برای هر مهارت (CO/CE/PE/PO/GR/VO یا کلی "_all")
   سطح فعلی مناسب کاربر را دنبال می‌کند و بر اساس عملکرد اخیر، خودکار بالا/پایین
   می‌برد — به‌جای اینکه کاربر همیشه خودش حدس بزند سطحش کجاست. */
var ZPD = {
  ORDER: ['easy', 'medium', 'hard'],
  WINDOW: 6,          // چند پاسخ اخیر در همین سطح برای تصمیم‌گیری کافی است
  PROMOTE_PCT: 0.8,    // این‌قدر یا بیشتر درست → این سطح دیگر ZPD نیست، یک پله بالاتر برو
  DEMOTE_PCT: 0.4,     // این‌قدر یا کمتر درست → این سطح بیرون از دسترس است، یک پله برگرد

  _ensure: function (skillKey) {
    var z = Store.state.zpd || (Store.state.zpd = {});
    var key = skillKey || '_all';
    if (!z[key]) z[key] = { level: 'easy', recent: [] };
    return z[key];
  },

  /* سطح توصیه‌شدهٔ فعلی برای یک مهارت (یا کلی اگر skill داده نشود) */
  recommendedLevel: function (skill) {
    return this._ensure(skill).level;
  },

  /* بعد از هر پاسخ به یک تمرین صدا زده می‌شود. فقط پاسخ‌هایی که دقیقاً به
     سطح فعلی ZPD همان مهارت تعلق دارند در تصمیم بعدی حساب می‌شوند — پاسخ به
     سطح دیگر (مثلاً وقتی کاربر خودش دستی سطح دیگری انتخاب کرده) نادیده گرفته می‌شود. */
  record: function (skill, level, correct) {
    if (!level || this.ORDER.indexOf(level) < 0) return;
    var z = this._ensure(skill);
    if (level !== z.level) return;
    z.recent.push(correct ? 1 : 0);
    if (z.recent.length > this.WINDOW) z.recent.shift();
    if (z.recent.length >= this.WINDOW) {
      var pct = z.recent.reduce(function (a, b) { return a + b; }, 0) / z.recent.length;
      var idx = this.ORDER.indexOf(z.level);
      if (pct >= this.PROMOTE_PCT && idx < this.ORDER.length - 1) {
        z.level = this.ORDER[idx + 1];
        z.recent = [];
      } else if (pct <= this.DEMOTE_PCT && idx > 0) {
        z.level = this.ORDER[idx - 1];
        z.recent = [];
      }
    }
    Store.save();
  }
};
