/* ===== گیمیفیکیشن: سطح/XP، دستاوردها (بج)، تقویم فعالیت =====
   الهام از Duolingo (XP + استریک + بج) — بدون نیاز به سرور یا حساب کاربری.
   این فایل باید بعد از داده‌های واحدها (data/unitNN.js) و srs.js لود شود. */
var Gamification = {
  LEVEL_XP: 150,

  level: function (xp) { return Math.floor((xp == null ? Store.state.xp : xp) / this.LEVEL_XP) + 1; },
  levelProgressPct: function (xp) {
    xp = xp == null ? Store.state.xp : xp;
    return Math.round(100 * (xp % this.LEVEL_XP) / this.LEVEL_XP);
  },

  BADGES: [
    { id: 'first_lesson', icon: '🌱', title: 'اولین قدم', desc: 'اولین درس را تمام کردی', check: function (st) { return Object.keys(st.lessonsDone).length >= 1; } },
    { id: 'lessons_10', icon: '📘', title: 'ده درس', desc: 'ده درس را تمام کردی', check: function (st) { return Object.keys(st.lessonsDone).length >= 10; } },
    { id: 'lessons_25', icon: '📚', title: 'بیست‌وپنج درس', desc: 'بیش از نیمی از دوره را گذرانده‌ای', check: function (st) { return Object.keys(st.lessonsDone).length >= 25; } },
    { id: 'lessons_all', icon: '🎓', title: 'فارغ‌التحصیل A1', desc: 'همه درس‌های دوره را تمام کردی', check: function (st) {
        var all = (typeof Curriculum !== 'undefined') ? Curriculum.allLessons().length : 0;
        return all > 0 && Object.keys(st.lessonsDone).length >= all;
      } },
    { id: 'streak_3', icon: '🔥', title: 'سه روز پیاپی', desc: 'سه روز پشت‌سرهم تمرین کردی', check: function (st) { return st.streak.count >= 3; } },
    { id: 'streak_7', icon: '🔥', title: 'یک هفته پیاپی', desc: 'هفت روز پشت‌سرهم — عالی!', check: function (st) { return st.streak.count >= 7; } },
    { id: 'streak_30', icon: '🔥', title: 'یک ماه پیاپی', desc: 'سی روز پشت‌سرهم — شگفت‌انگیز!', check: function (st) { return st.streak.count >= 30; } },
    { id: 'srs_50', icon: '🗂️', title: '۵۰ کارت لایتنر', desc: '۵۰ کارت وارد سیستم مرور شد', check: function () { return (typeof SRS !== 'undefined') && SRS.total() >= 50; } },
    { id: 'srs_200', icon: '🗂️', title: '۲۰۰ کارت لایتنر', desc: '۲۰۰ کارت در حافظه‌ات جا خوش کرده', check: function () { return (typeof SRS !== 'undefined') && SRS.total() >= 200; } },
    { id: 'srs_master', icon: '🏆', title: 'استاد حافظه', desc: 'یک کارت به جعبه ۵ لایتنر رسید', check: function (st) {
        for (var id in st.srs) if (st.srs[id].box >= 5) return true;
        return false;
      } },
    { id: 'bilan_perfect', icon: '💯', title: 'نمره کامل', desc: '۱۰۰٪ در یک آزمون پایان واحد', check: function (st) {
        for (var u in st.bilans) if (st.bilans[u] && st.bilans[u].pct === 100) return true;
        return false;
      } },
    { id: 'delf_pass', icon: '🎖️', title: 'قبولی DELF A1', desc: 'در آزمون آزمایشی DELF قبول شدی', check: function (st) { return st.bilans.delf && st.bilans.delf.pct >= 50; } },
    { id: 'xp_500', icon: '⭐', title: '۵۰۰ امتیاز', desc: '۵۰۰ XP جمع کردی', check: function (st) { return st.xp >= 500; } },
    { id: 'xp_2000', icon: '🌟', title: '۲۰۰۰ امتیاز', desc: '۲۰۰۰ XP جمع کردی', check: function (st) { return st.xp >= 2000; } },
    { id: 'xp_5000', icon: '💫', title: '۵۰۰۰ امتیاز', desc: '۵۰۰۰ XP — واقعاً پرتلاش!', check: function (st) { return st.xp >= 5000; } },
    { id: 'chat_1', icon: '🗣️', title: 'اولین مکالمه', desc: 'یک نوبت مکالمه زنده با معلم انجام دادی', check: function (st) { return (st.conversationTurns || 0) >= 1; } },
    { id: 'chat_10', icon: '💬', title: 'مکالمه‌گر', desc: '۱۰ نوبت مکالمه زنده انجام دادی', check: function (st) { return (st.conversationTurns || 0) >= 10; } },
    { id: 'chat_50', icon: '🎙️', title: 'اهل گفتگو', desc: '۵۰ نوبت مکالمه زنده — عالی!', check: function (st) { return (st.conversationTurns || 0) >= 50; } }
  ],

  /* بج‌های «اتمام واحد» برای واحدهای ۰ تا ۱۲ */
  _initUnitBadges: function () {
    for (var uid = 0; uid <= 12; uid++) {
      (function (uid) {
        Gamification.BADGES.push({
          id: 'unit' + uid + '_done', icon: '✅', title: 'واحد ' + uid + ' تمام شد',
          desc: 'همه درس‌های این واحد را گذراندی',
          check: function () {
            var u = (typeof EDITO !== 'undefined') ? EDITO.units[uid] : null;
            if (!u || !u.lessons || !u.lessons.length) return false;
            return u.lessons.every(function (l) { return Store.state.lessonsDone[l.id]; });
          }
        });
      })(uid);
    }
  },

  /* بج‌های تازه‌کسب‌شده را ثبت و برمی‌گرداند */
  checkNew: function () {
    var st = Store.state, earned = [];
    this.BADGES.forEach(function (b) {
      if (!st.badges[b.id] && b.check(st)) {
        st.badges[b.id] = Store.today();
        earned.push(b);
      }
    });
    if (earned.length) Store.save();
    return earned;
  },

  /* بررسی + نمایش toast برای بج‌های جدید */
  toastNew: function () {
    var earned = this.checkNew();
    earned.forEach(function (b, i) {
      setTimeout(function () {
        toast('🏅 دستاورد جدید: ' + b.title);
        if (typeof Confetti !== 'undefined') Confetti.burst({ count: 30 });
      }, i * 1900);
    });
    return earned;
  },

  /* جشن رسیدن به سطح جدید — کانفتی + مودال کوتاه که خودش بسته می‌شود */
  celebrateLevelUp: function (level) {
    if (typeof document === 'undefined' || !document.body) return;
    if (typeof Confetti !== 'undefined') Confetti.burst({ count: 40 });
    var modal = document.createElement('div');
    modal.className = 'levelup-modal';
    modal.innerHTML = '<div class="levelup-card">' +
      '<div class="muted">سطح جدید 🎉</div>' +
      '<div class="lvl-num">' + level + '</div>' +
      '<div class="muted" style="margin-top:6px">همین‌طور ادامه بده!</div></div>';
    modal.onclick = function () { modal.remove(); };
    document.body.appendChild(modal);
    setTimeout(function () { if (modal.parentNode) modal.remove(); }, 2200);
  },

  /* ---- تقویم فعالیت (heatmap شبیه گیت‌هاب) ---- */
  heatmapHTML: function (weeks) {
    weeks = weeks || 12;
    var days = weeks * 7, cells = '', today = Store.today();
    for (var i = days - 1; i >= 0; i--) {
      var day = Store.addDays(today, -i);
      var count = Store.state.activity[day] || 0;
      var lvl = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 12 ? 3 : 4;
      cells += '<div class="cell h' + lvl + '" title="' + day + ' — ' + count + ' تمرین"></div>';
    }
    return '<div class="heatmap">' + cells + '</div>';
  }
};

Gamification._initUnitBadges();
