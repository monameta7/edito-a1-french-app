/* ===== ذخیره‌سازی پیشرفت در localStorage ===== */
var Store = {
  KEY: 'edito-a1-v1',
  state: null,

  defaults: function () {
    return {
      version: 1,
      createdAt: new Date().toISOString(),
      dayOffset: 0,                 // برای تست: جابه‌جایی مجازی روزها
      streak: { count: 0, lastDay: null },
      sessions: [],                 // { day, score, total }
      lessonsDone: {},              // lessonId -> { day, score, total }
      bilans: {},                   // unitId  -> { day, pct, bySkill: {CO:{r,t},...} }
      srs: {},                      // itemId  -> { box, due, right, wrong }
      topics: {},                   // topic   -> { right, wrong }  ← ردیابی نقاط ضعف
      skills: {},                   // CO/CE/PE/PO/GR/VO -> { right, wrong }
      levels: { easy: { right: 0, wrong: 0 }, medium: { right: 0, wrong: 0 }, hard: { right: 0, wrong: 0 } },
      settings: { theme: 'light', rate: 1.0, voiceName: null, dailyGoalMinutes: 15, apiKey: '' },
      xp: 0,
      streakFreezes: 1,             // تعداد «یخ‌های استریک» — هر ۷ روز پیاپی +۱ می‌شود
      badges: {},                   // badgeId -> روز کسب
      activity: {},                 // day -> تعداد تمرین پاسخ‌داده‌شده (برای تقویم پیشرفت)
      minutes: {},                  // day -> ثانیه فعالیت واقعی (برای هدف روزانه)
      customWords: {},               // itemId -> { fr, fa, ipa, ex, exfa } ← کلمات دستی کاربر
      conversation: { level: 'easy', messages: [] }, // مکالمه زنده جاری با معلم AI
      srsConversation: { messages: [] }, // جلسه مرور فاصله‌دار (لایتنر) با معلم AI
      conversationTurns: 0,          // مجموع نوبت‌های مکالمه (برای دستاورد)
      zpd: {}                        // skill(یا "_all") -> {level, recent:[0/1,...]} ← منطقهٔ تقریبی رشد (نظریهٔ ویگوتسکی)
    };
  },

  load: function () {
    try {
      var raw = localStorage.getItem(this.KEY);
      this.state = raw ? JSON.parse(raw) : this.defaults();
    } catch (e) { this.state = this.defaults(); }
    // کلیدهای جدید در نسخه‌های بعدی
    var d = this.defaults();
    for (var k in d) if (!(k in this.state)) this.state[k] = d[k];
    for (var sk in d.settings) if (!(sk in this.state.settings)) this.state.settings[sk] = d.settings[sk];
    return this.state;
  },

  save: function () {
    localStorage.setItem(this.KEY, JSON.stringify(this.state));
    if (typeof CloudSync !== 'undefined') CloudSync.queuePush();
  },

  /* تاریخ به شکل YYYY-MM-DD */
  _fmtDate: function (d) {
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  },

  /* روز جاری به شکل YYYY-MM-DD (با احتساب dayOffset برای تست) */
  today: function () {
    var d = new Date();
    d.setDate(d.getDate() + (this.state.dayOffset || 0));
    return this._fmtDate(d);
  },

  addDays: function (day, n) {
    var p = day.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return this._fmtDate(d);
  },

  /* ثبت نتیجه یک پاسخ برای ردیابی نقاط ضعف */
  recordAnswer: function (skill, topic, correct) {
    if (skill) {
      var s = this.state.skills[skill] || (this.state.skills[skill] = { right: 0, wrong: 0 });
      correct ? s.right++ : s.wrong++;
    }
    if (topic) {
      var t = this.state.topics[topic] || (this.state.topics[topic] = { right: 0, wrong: 0 });
      correct ? t.right++ : t.wrong++;
    }
    this.save();
  },

  /* streak: هر روزی که جلسه کامل شود — با پشتیبانی از «یخ استریک» برای یک روز میس‌شده */
  touchStreak: function () {
    var t = this.today(), st = this.state.streak;
    var result = { changed: false, freezeUsed: false, freezeEarned: false };
    if (st.lastDay === t) return result;
    result.changed = true;
    var yesterday = this.addDays(t, -1), twoDaysAgo = this.addDays(t, -2);
    if (st.lastDay === yesterday || st.lastDay === null) {
      st.count = (st.lastDay === yesterday) ? st.count + 1 : 1;
    } else if (st.lastDay === twoDaysAgo && this.state.streakFreezes > 0) {
      this.state.streakFreezes--;
      st.count += 1;
      result.freezeUsed = true;
    } else {
      st.count = 1;
    }
    if (st.count > 0 && st.count % 7 === 0) {
      this.state.streakFreezes = Math.min(this.state.streakFreezes + 1, 3);
      result.freezeEarned = true;
    }
    st.lastDay = t;
    this.save();
    return result;
  },

  /* ---- گیمیفیکیشن: XP، فعالیت روزانه، زمان فعال ---- */
  addXP: function (n) {
    var before = this.state.xp;
    this.state.xp += n;
    this.save();
    if (typeof Gamification !== 'undefined') {
      var oldLevel = Gamification.level(before), newLevel = Gamification.level(this.state.xp);
      if (newLevel > oldLevel) Gamification.celebrateLevelUp(newLevel);
    }
  },

  addActivity: function () {
    var d = this.today();
    this.state.activity[d] = (this.state.activity[d] || 0) + 1;
    this.save();
  },

  /* ثبت زمان فعال بین دو پاسخ؛ فاصله‌های بزرگ (بی‌کاری) نادیده گرفته می‌شود */
  tick: function (ms) {
    if (!ms || ms <= 0 || ms > 5 * 60 * 1000) return;
    var d = this.today();
    this.state.minutes[d] = (this.state.minutes[d] || 0) + ms;
    this.save();
  },

  minutesToday: function () {
    return Math.round((this.state.minutes[this.today()] || 0) / 60000);
  },

  /* ثبت نتیجه یک پاسخ برای آمار سطح‌بندی (مبتدی/متوسط/پیشرفته) */
  recordLevel: function (level, correct) {
    if (!level || !this.state.levels[level]) return;
    var l = this.state.levels[level];
    correct ? l.right++ : l.wrong++;
    this.save();
  },

  levelPct: function (level) {
    var l = this.state.levels[level];
    var total = l.right + l.wrong;
    return total ? Math.round(100 * l.right / total) : null;
  },

  /* ضعیف‌ترین مباحث (حداقل ۳ پاسخ ثبت‌شده) */
  weakTopics: function (n) {
    var out = [];
    for (var topic in this.state.topics) {
      var t = this.state.topics[topic], total = t.right + t.wrong;
      if (total >= 3) out.push({ topic: topic, pct: Math.round(100 * t.right / total), total: total });
    }
    out.sort(function (a, b) { return a.pct - b.pct; });
    return out.slice(0, n || 5).filter(function (x) { return x.pct < 75; });
  },

  /* در خروجی/بکاپ، کلید API را حذف می‌کنیم تا در فایل ذخیره‌شده لو نرود */
  exportJSON: function () {
    var clone = JSON.parse(JSON.stringify(this.state));
    if (clone.settings) clone.settings.apiKey = '';
    var blob = new Blob([JSON.stringify(clone, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'edito-a1-progress-' + this.today() + '.json';
    a.click();
  },

  importJSON: function (file, cb) {
    var self = this, fr = new FileReader();
    fr.onload = function () {
      try {
        var obj = JSON.parse(fr.result);
        if (!obj || typeof obj.srs !== 'object') throw new Error('bad file');
        // کلید API فعلی این مرورگر را حفظ کن؛ بکاپ‌ها هیچ‌وقت کلید ندارند
        var keepKey = self.state.settings && self.state.settings.apiKey;
        self.state = obj;
        if (!self.state.settings) self.state.settings = {};
        self.state.settings.apiKey = keepKey || self.state.settings.apiKey || '';
        self.save(); cb(true);
      } catch (e) { cb(false); }
    };
    fr.readAsText(file);
  },

  reset: function () {
    localStorage.removeItem(this.KEY);
    this.state = this.defaults();
    this.save();
  }
};
