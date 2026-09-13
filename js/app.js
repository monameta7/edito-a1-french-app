/* ===== راه‌انداز و مسیریابی ===== */

/* کمکی‌های سیلابس؛ روی EDITO.units کار می‌کنند */
var Curriculum = {
  unitIds: function () {
    return Object.keys(EDITO.units).map(Number).sort(function (a, b) { return a - b; });
  },
  allLessons: function () {
    var out = [];
    this.unitIds().forEach(function (uid) {
      (EDITO.units[uid].lessons || []).forEach(function (l) { out.push(l); });
    });
    return out;
  },
  nextLesson: function () {
    var all = this.allLessons();
    for (var i = 0; i < all.length; i++)
      if (!Store.state.lessonsDone[all[i].id]) return all[i];
    return null;
  },
  findLesson: function (id) {
    var all = this.allLessons();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  },
  unitOf: function (lessonId) {
    var m = lessonId.match(/^u(\d+)/);
    return EDITO.units[m ? +m[1] : 0];
  },
  /* انواع تمرینی که نمی‌توان خودکار (بدون دخالت کاربر) به‌عنوان تمرین اضافه/تقویتی درج کرد — چون نیاز به میکروفون یا تصحیح دستی دارند */
  NON_AUTO_TYPES: ['write', 'speak'],

  /* تمرین‌هایی از درس‌های خوانده‌شده که با مباحث ضعیف مطابقت دارند */
  exercisesForTopics: function (topics, n, excludeLessonId) {
    if (!topics.length) return [];
    var self = this;
    var pool = [];
    this.allLessons().forEach(function (l) {
      if (l.id === excludeLessonId || !Store.state.lessonsDone[l.id]) return;
      (l.exercises || []).forEach(function (ex) {
        if (self.NON_AUTO_TYPES.indexOf(ex.type) >= 0) return;
        if (topics.indexOf(ex.topic) >= 0) pool.push(ex);
      });
    });
    return shuffle(pool).slice(0, n);
  },

  /* همه تمرین‌های کل دوره در یک آرایه: درس‌ها + آزمون‌های واحد + DELF
     (سیلابس بعد از بارگذاری اولیه تغییر نمی‌کند، پس نتیجه کش می‌شود) */
  /* هر تمرین با _unitId علامت‌گذاری می‌شود (شماره واحدی که از آن آمده) تا بشود بر اساس واحد هم فیلتر کرد؛
     تمرین‌های DELF به هیچ واحدی تعلق ندارند، پس _unitId آنها undefined می‌ماند */
  allExercises: function () {
    if (this._allExercisesCache) return this._allExercisesCache;
    var pool = [];
    this.unitIds().forEach(function (uid) {
      var u = EDITO.units[uid];
      (u.lessons || []).forEach(function (l) {
        (l.exercises || []).forEach(function (ex) { ex._unitId = uid; pool.push(ex); });
      });
      if (u.bilan) (u.bilan.exercises || []).forEach(function (ex) { ex._unitId = uid; pool.push(ex); });
    });
    if (EDITO.delf) (EDITO.delf.exercises || []).forEach(function (ex) { pool.push(ex); });
    this._allExercisesCache = pool;
    return pool;
  },

  /* استخر تمرین‌های تصفیه‌شده بر اساس مهارت (CO/CE/PE/PO/GR/VO)، سطح (easy/medium/hard) و/یا شماره واحد — هرکدام null یعنی «هر چی» */
  exercisesByFilter: function (skill, level, unitId, n) {
    var pool = this.allExercises().filter(function (ex) {
      return (!skill || ex.skill === skill) && (!level || ex.level === level) && (unitId == null || ex._unitId === unitId);
    });
    pool = shuffle(pool);
    return n ? pool.slice(0, n) : pool;
  },

  countByFilter: function (skill, level, unitId) { return this.exercisesByFilter(skill, level, unitId).length; },

  /* کلید یکتا برای هر تمرین — برای جلوگیری از تکرار در تقویت مبحث */
  exerciseKey: function (ex) {
    return ex.topic + '|' + (ex.q || ex.text || ex.prompt || ex.fa || JSON.stringify(ex.answer || ''));
  },

  /* n تمرین «مشابه» (همان مبحث) از کل دوره، به‌جز آن‌هایی که در exclude هستند —
     برای وقتی جواب غلط می‌دهی تا مطمئن شویم مبحث را خوب یاد گرفته‌ای */
  similarExercises: function (topic, n, exclude) {
    var self = this;
    var pool = this.allExercises().filter(function (ex) {
      return ex.topic === topic && self.NON_AUTO_TYPES.indexOf(ex.type) < 0 && !exclude[self.exerciseKey(ex)];
    });
    pool = shuffle(pool);
    return pool.slice(0, n);
  }
};

/* ساخت ایندکس آیتم‌های لایتنر از همه درس‌ها */
function buildItemIndex() {
  EDITO.itemIndex = {};
  Curriculum.allLessons().forEach(function (l) {
    (l.vocab || []).forEach(function (v, i) {
      EDITO.itemIndex[l.id + ':v' + i] = v;
    });
    (l.phrases || []).forEach(function (p, i) {
      EDITO.itemIndex[l.id + ':p' + i] = p;
    });
  });
  // کلمات دستیِ کاربر (چون در data/ نیستند، محتوایشان از localStorage اضافه می‌شود)
  for (var id in Store.state.customWords) EDITO.itemIndex[id] = Store.state.customWords[id];
}

/* ---------- روتر ---------- */
function route() {
  var el = document.getElementById('app');
  Voice.stop();
  var hash = (location.hash || '#home').slice(1);
  var parts = hash.split('/');
  var name = parts[0] || 'home';

  document.querySelectorAll('.topbar nav a').forEach(function (a) {
    a.classList.toggle('active', a.dataset.nav === name);
  });
  closeNavMore();

  window.scrollTo(0, 0);
  switch (name) {
    case 'home': Views.home(el); break;
    case 'session': Views.session(el); break;
    case 'review': Views.review(el); break;
    case 'units': Views.units(el); break;
    case 'unit': Views.unit(el, +parts[1]); break;
    case 'lesson': Views.lesson(el, parts[1]); break;
    case 'verbs': Views.conjugator(el); break;
    case 'bilan': Views.bilan(el, +parts[1]); break;
    case 'delf': Views.delf(el); break;
    case 'badges': Views.badges(el); break;
    case 'practice': Views.practice(el); break;
    case 'dictionary': Views.dictionary(el); break;
    case 'chat': Views.chat(el, parts[1]); break;
    case 'settings': Views.settings(el); break;
    default: Views.home(el);
  }
}

/* ---------- منوی همبرگری موبایل ---------- */
function closeNavMore() {
  var more = document.querySelector('.nav-more'), btn = document.querySelector('.nav-toggle');
  if (!more || !more.classList.contains('open')) return;
  more.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

/* ---------- بوت ---------- */
window.addEventListener('DOMContentLoaded', function () {
  Store.load();
  applyTheme();
  Voice.init();
  buildItemIndex();
  CloudSync.init();
  CloudSync.onChange(function () {
    var name = (location.hash || '#home').slice(1).split('/')[0];
    if (name === 'settings' || name === 'home') route();
  });
  window.addEventListener('hashchange', route);
  route();

  var toggleBtn = document.querySelector('.nav-toggle'), navMore = document.querySelector('.nav-more');
  if (toggleBtn && navMore) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = navMore.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!navMore.classList.contains('open')) return;
      if (navMore.contains(e.target) || toggleBtn.contains(e.target)) return;
      closeNavMore();
    });
  }
});

/* ثبت Service Worker — اپ را قابل‌نصب (PWA) و تا حدی آفلاین می‌کند.
   روی file:// یا http (نه https/localhost) کار نمی‌کند — مرورگرها SW را فقط
   در بستر امن اجازه می‌دهند؛ localhost استثناست، پس در توسعه محلی هم کار می‌کند. */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () { /* بی‌صدا نادیده بگیر — قابلیت اصلی اپ به آن وابسته نیست */ });
  });
}
