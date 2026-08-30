/* ===== موتور لایتنر (Spaced Repetition) =====
   ۵ جعبه با فواصل ۱/۲/۴/۸/۱۶ روز.
   آیتم‌ها از واژگان و عبارات کلیدی درس‌ها ساخته می‌شوند و
   محتوایشان از EDITO.itemIndex (ساخته‌شده در app.js) خوانده می‌شود. */
var SRS = {
  INTERVALS: [1, 2, 4, 8, 16],

  /* افزودن آیتم‌های یک درس بعد از اتمام آن */
  addLesson: function (lesson) {
    var t = Store.today(), added = 0;
    (lesson.vocab || []).forEach(function (v, i) {
      var id = lesson.id + ':v' + i;
      if (!Store.state.srs[id]) {
        Store.state.srs[id] = { box: 1, due: Store.addDays(t, 1), right: 0, wrong: 0 };
        added++;
      }
    });
    (lesson.phrases || []).forEach(function (p, i) {
      var id = lesson.id + ':p' + i;
      if (!Store.state.srs[id]) {
        Store.state.srs[id] = { box: 1, due: Store.addDays(t, 1), right: 0, wrong: 0 };
        added++;
      }
    });
    Store.save();
    return added;
  },

  /* افزودن دستی یک کلمه/عبارت به لایتنر — همین امروز سررسید می‌شود */
  addCustom: function (word) {
    var id = 'custom:' + Date.now() + Math.floor(Math.random() * 1000);
    Store.state.customWords[id] = {
      fr: word.fr, fa: word.fa,
      ipa: word.ipa || '', ex: word.ex || '', exfa: word.exfa || ''
    };
    Store.state.srs[id] = { box: 1, due: Store.today(), right: 0, wrong: 0 };
    EDITO.itemIndex[id] = Store.state.customWords[id];
    Store.save();
    return id;
  },

  /* افزودن یک آیتم موجود (با id شناخته‌شده از EDITO.itemIndex، مثلاً از واژه‌نامه) به
     لایتنر — بدون کپی‌کردن محتوا، چون محتوایش همین الان در itemIndex هست. */
  addExisting: function (id) {
    if (Store.state.srs[id] || !EDITO.itemIndex[id]) return false;
    Store.state.srs[id] = { box: 1, due: Store.today(), right: 0, wrong: 0 };
    Store.save();
    return true;
  },

  inLeitner: function (id) { return !!Store.state.srs[id]; },

  removeCustom: function (id) {
    delete Store.state.customWords[id];
    delete Store.state.srs[id];
    delete EDITO.itemIndex[id];
    Store.save();
  },

  customList: function () {
    return Object.keys(Store.state.customWords).map(function (id) {
      var w = Store.state.customWords[id], srsInfo = Store.state.srs[id];
      return { id: id, fr: w.fr, fa: w.fa, box: srsInfo ? srsInfo.box : 1 };
    }).sort(function (a, b) { return b.id.localeCompare(a.id); });
  },

  /* آیتم‌های سررسیدشدهٔ امروز (جعبه‌های پایین اول) */
  due: function (limit) {
    var t = Store.today(), out = [];
    for (var id in Store.state.srs) {
      var it = Store.state.srs[id];
      if (it.due <= t && EDITO.itemIndex[id]) out.push({ id: id, box: it.box });
    }
    out.sort(function (a, b) { return a.box - b.box || (Math.random() - 0.5); });
    return (limit ? out.slice(0, limit) : out).map(function (x) { return x.id; });
  },

  dueCount: function () { return this.due().length; },

  /* ثبت پاسخ: درست → جعبه بعدی، غلط → جعبه ۱ */
  answer: function (id, correct) {
    var it = Store.state.srs[id];
    if (!it) return;
    if (correct) { it.box = Math.min(it.box + 1, 5); it.right++; }
    else { it.box = 1; it.wrong++; }
    it.due = Store.addDays(Store.today(), this.INTERVALS[it.box - 1]);
    Store.save();
  },

  boxCounts: function () {
    var c = [0, 0, 0, 0, 0];
    for (var id in Store.state.srs) c[Store.state.srs[id].box - 1]++;
    return c;
  },

  total: function () { return Object.keys(Store.state.srs).length; },

  /* سخت‌ترین آیتم‌ها (بیشترین پاسخ غلط) */
  hardest: function (n) {
    var out = [];
    for (var id in Store.state.srs) {
      var it = Store.state.srs[id];
      if (it.wrong >= 2 && EDITO.itemIndex[id]) out.push({ id: id, wrong: it.wrong });
    }
    out.sort(function (a, b) { return b.wrong - a.wrong; });
    return out.slice(0, n || 5);
  }
};
