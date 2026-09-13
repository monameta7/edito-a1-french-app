/* ===== داشبورد، فهرست واحدها، جزئیات واحد و تنظیمات ===== */
var Views = window.Views || {};

/* ---------- خانه ---------- */
Views.home = function (el) {
  var st = Store.state;
  var due = SRS.dueCount();
  var doneToday = st.sessions.some(function (s) { return s.day === Store.today(); });
  var lesson = Curriculum.nextLesson();
  var all = Curriculum.allLessons();
  var doneCount = Object.keys(st.lessonsDone).length;
  var pct = all.length ? Math.round(100 * doneCount / all.length) : 0;

  var h = '<div class="card center" style="background:linear-gradient(135deg,var(--fr-bg),var(--card))">' +
    '<h2>Bonjour ! 👋</h2>' +
    '<div class="muted">' + (doneToday ? 'جلسه امروزت را کامل کرده‌ای — آفرین! 🎉' :
      (lesson ? 'درس بعدی: <b class="fr">' + Exercises.esc(lesson.title) + '</b> · ' + Exercises.esc(lesson.fa) : 'همه درس‌ها تمام شده! 🎓')) + '</div>' +
    '<div class="btnrow" style="justify-content:center">' +
    '<a href="#session"><button class="btn btn-lg">' + (doneToday ? 'تمرین بیشتر' : '▶️ شروع جلسه امروز') + '</button></a>' +
    (due ? '<a href="#review"><button class="btn-ghost btn-lg">🗂️ مرور (' + due + ')</button></a>' : '') +
    '</div></div>';

  h += '<div class="stat-row">' +
    '<div class="stat"><b>' + st.streak.count + ' <span class="flame">🔥</span></b><span>روز پیاپی</span>' +
    (st.streakFreezes ? '<span class="chip" style="margin-top:4px">🧊 × ' + st.streakFreezes + '</span>' : '') + '</div>' +
    '<div class="stat"><b>' + doneCount + '/' + all.length + '</b><span>درس کامل‌شده</span></div>' +
    '<div class="stat"><b>' + SRS.total() + '</b><span>کارت لایتنر</span></div>' +
    '<div class="stat"><b>' + due + '</b><span>مرور امروز</span></div></div>';

  /* سطح و XP */
  var lvl = Gamification.level(), lvlPct = Gamification.levelProgressPct();
  h += '<div class="card"><h3>⚡ سطح ' + lvl + ' <span class="muted">(' + st.xp + ' XP)</span></h3>' +
    '<div class="pbar"><div style="width:' + lvlPct + '%"></div></div>' +
    '<div class="muted">' + (Gamification.LEVEL_XP - (st.xp % Gamification.LEVEL_XP)) + ' XP تا سطح ' + (lvl + 1) + '</div></div>';

  /* هدف روزانه */
  var minToday = Store.minutesToday(), goal = st.settings.dailyGoalMinutes || 15;
  var goalPct = Math.min(100, Math.round(100 * minToday / goal));
  h += '<div class="card"><h3>🎯 هدف روزانه</h3><div class="pbar"><div style="width:' + goalPct + '%"></div></div>' +
    '<div class="muted">' + minToday + ' از ' + goal + ' دقیقه امروز' + (goalPct >= 100 ? ' — هدف امروز رسید! 🎉' : '') + '</div></div>';

  h += '<div class="card"><h3>📈 پیشرفت دوره A1</h3><div class="pbar"><div style="width:' + pct + '%"></div></div><div class="muted">' + pct + '٪ از کل درس‌ها</div></div>';

  /* تقویم فعالیت */
  h += '<div class="card"><h3>📅 تقویم فعالیت (۱۲ هفته اخیر)</h3>' + Gamification.heatmapHTML(12) + '</div>';

  /* پیش‌نمایش دستاوردها */
  var earnedCount = Object.keys(st.badges).length;
  h += '<div class="card unit-card" onclick="location.hash=\'#badges\'">' +
    '<div class="unit-num" style="background:var(--warn)">🏅</div>' +
    '<div class="unit-info"><b>دستاوردها</b><div class="muted">' + earnedCount + ' از ' + Gamification.BADGES.length + ' بج گرفته‌ای</div></div>' +
    '<div style="font-size:22px">›</div></div>';

  h += '<div class="card unit-card" onclick="location.hash=\'#practice\'">' +
    '<div class="unit-num" style="background:var(--accent)">🎯</div>' +
    '<div class="unit-info"><b>تمرین هدفمند</b><div class="muted">فقط شنیداری، فقط نوشتن، هر سطحی که بخواهی — خودت انتخاب کن</div></div>' +
    '<div style="font-size:22px">›</div></div>';

  h += '<div class="card unit-card" onclick="location.hash=\'#dictionary\'">' +
    '<div class="unit-num" style="background:var(--accent)">📖</div>' +
    '<div class="unit-info"><b>واژه‌نامه</b><div class="muted">جستجوی همه واژه‌های اپ با تلفظ، معنی و مثال</div></div>' +
    '<div style="font-size:22px">›</div></div>';

  h += '<div class="card unit-card" onclick="location.hash=\'#chat\'">' +
    '<div class="unit-num" style="background:var(--ok)">🗣️</div>' +
    '<div class="unit-info"><b>مکالمه زنده با معلم</b><div class="muted">' + (Chat.hasKey() ? 'مثل چت‌جی‌پی‌تی، به فرانسه گفت‌وگو کن و بازخورد بگیر' : 'نیاز به کلید API — از تنظیمات فعالش کن') + '</div></div>' +
    '<div style="font-size:22px">›</div></div>';

  /* مهارت‌ها */
  var skills = ['CO', 'CE', 'PE', 'PO', 'GR', 'VO'];
  var anySkill = skills.some(function (s) { return st.skills[s]; });
  if (anySkill) {
    h += '<div class="card"><h3>🎯 وضعیت مهارت‌ها</h3>';
    skills.forEach(function (sk) {
      var s = st.skills[sk];
      if (!s || s.right + s.wrong < 3) return;
      var p = Math.round(100 * s.right / (s.right + s.wrong));
      h += '<div class="skill-bar"><span class="lbl">' + SKILL_FA[sk] + '</span>' +
        '<div class="pbar"><div style="width:' + p + '%"></div></div><span class="val">' + p + '٪</span></div>';
    });
    h += '</div>';
  }

  /* نقاط ضعف */
  var weak = Store.weakTopics(5);
  if (weak.length) {
    h += '<div class="card"><h3>⚠️ نقاط ضعف تو</h3><div class="muted">این مباحث را بیشتر تمرین کن — در جلسه‌های بعدی خودکار برایت تمرین تقویتی می‌آید:</div>';
    weak.forEach(function (w) {
      h += '<div class="skill-bar"><span class="lbl">' + Exercises.esc(w.topic) + '</span>' +
        '<div class="pbar"><div style="width:' + w.pct + '%"></div></div><span class="val">' + w.pct + '٪</span></div>';
    });
    h += '</div>';
  }

  /* سخت‌ترین واژه‌ها */
  var hard = SRS.hardest(5);
  if (hard.length) {
    h += '<div class="card"><h3>🧗 سخت‌ترین واژه‌های تو</h3>';
    hard.forEach(function (x) {
      var it = EDITO.itemIndex[x.id];
      h += '<div class="vocab-row"><span class="vocab-fr">' + Exercises.esc(it.fr) + '</span>' + audioBtn(it.fr) +
        '<span class="vocab-fa">' + Exercises.esc(it.fa) + '</span><span class="chip bad">' + x.wrong + ' بار غلط</span></div>';
    });
    h += '</div>';
  }

  el.innerHTML = h;
};

/* ---------- فهرست واحدها ---------- */
Views.units = function (el) {
  var h = '<h2 style="margin:10px 4px">📚 واحدهای دوره Édito A1</h2>';
  Curriculum.unitIds().forEach(function (uid) {
    var u = EDITO.units[uid];
    var lessons = u.lessons || [];
    var done = lessons.filter(function (l) { return Store.state.lessonsDone[l.id]; }).length;
    var pct = lessons.length ? Math.round(100 * done / lessons.length) : 0;
    var bilan = Store.state.bilans[uid];
    h += '<div class="card unit-card" onclick="location.hash=\'#unit/' + uid + '\'">' +
      '<div class="unit-num">' + uid + '</div>' +
      '<div class="unit-info"><b class="fr">' + Exercises.esc(u.title) + '</b> — ' + Exercises.esc(u.fa) +
      '<div class="pbar small"><div style="width:' + pct + '%"></div></div>' +
      '<span class="muted">' + done + '/' + lessons.length + ' درس' +
      (bilan ? ' · آزمون: <span class="' + (bilan.pct >= 60 ? 'diff-ok' : 'diff-bad') + '">' + bilan.pct + '٪</span>' : '') +
      '</span></div>' +
      '<div style="font-size:22px">' + (pct === 100 ? '✅' : '📖') + '</div></div>';
  });
  h += '<div class="card unit-card" onclick="location.hash=\'#delf\'">' +
    '<div class="unit-num" style="background:var(--accent)">🎓</div>' +
    '<div class="unit-info"><b>آزمون آزمایشی DELF A1</b><div class="muted">بعد از اتمام واحدها</div></div></div>';
  el.innerHTML = h;
};

/* ---------- جزئیات یک واحد ---------- */
Views.unit = function (el, uid) {
  var u = EDITO.units[uid];
  if (!u) { el.innerHTML = '<div class="card">واحد یافت نشد.</div>'; return; }
  var h = '<div class="card"><h2>واحد ' + uid + ': <span class="fr">' + Exercises.esc(u.title) + '</span> — ' + Exercises.esc(u.fa) + '</h2>' +
    '<div class="muted">' + Exercises.esc(u.theme || '') + '</div></div>';
  if (u.culture) {
    h += '<div class="card"><h3>🇫🇷 نکته فرهنگی: ' + Exercises.esc(u.culture.title) + '</h3><div>' + u.culture.body + '</div></div>';
  }
  h += '<div class="card">';
  (u.lessons || []).forEach(function (l) {
    var d = Store.state.lessonsDone[l.id];
    h += '<div class="lesson-row" onclick="location.hash=\'#lesson/' + l.id + '\'">' +
      '<span class="lesson-st">' + (d ? '✅' : '▫️') + '</span>' +
      '<span class="fr" style="font-weight:600">' + Exercises.esc(l.title) + '</span>' +
      '<span class="muted" style="flex:1">' + Exercises.esc(l.fa) + '</span>' +
      (d ? '<span class="chip ok">' + d.score + '/' + d.total + '</span>' : '') + '</div>';
  });
  h += '</div>';
  if (u.bilan) {
    var bilan = Store.state.bilans[uid];
    h += '<div class="card"><h3>🏆 آزمون پایان واحد (Bilan)</h3>' +
      (bilan ? '<span class="chip ' + (bilan.pct >= 60 ? 'ok' : 'bad') + '">آخرین نمره: ' + bilan.pct + '٪</span>' : '<span class="muted">هنوز آزمون نداده‌ای.</span>') +
      '<div class="btnrow"><a href="#bilan/' + uid + '"><button class="btn">شروع آزمون</button></a></div></div>';
  }
  el.innerHTML = h;
};

/* ---------- گالری دستاوردها ---------- */
Views.badges = function (el) {
  var st = Store.state;
  var h = '<h2 style="margin:10px 4px">🏅 دستاوردها</h2>' +
    '<div class="muted" style="margin:0 4px 10px">' + Object.keys(st.badges).length + ' از ' + Gamification.BADGES.length + ' بج گرفته‌ای</div>' +
    '<div class="badge-grid">';
  Gamification.BADGES.forEach(function (b) {
    var earned = st.badges[b.id];
    h += '<div class="badge-card' + (earned ? '' : ' locked') + '">' +
      '<div class="badge-icon">' + (earned ? b.icon : '🔒') + '</div>' +
      '<b>' + Exercises.esc(b.title) + '</b>' +
      '<div class="muted" style="font-size:12px">' + Exercises.esc(b.desc) + '</div>' +
      (earned ? '<div class="chip ok" style="margin-top:6px">' + earned + '</div>' : '') + '</div>';
  });
  h += '</div>';
  el.innerHTML = h;
};

/* ---------- تمرین بر اساس سطح: مبتدی / متوسط / پیشرفته ---------- */
Views.practice = function (el) {
  var SKILLS = [
    { id: null, icon: '🔀', title: 'همه مهارت‌ها' },
    { id: 'CO', icon: '🎧', title: 'شنیداری' },
    { id: 'CE', icon: '📖', title: 'خواندن' },
    { id: 'PE', icon: '✍️', title: 'نوشتن' },
    { id: 'PO', icon: '🗣️', title: 'گفتاری' },
    { id: 'GR', icon: '📐', title: 'گرامر' },
    { id: 'VO', icon: '🔤', title: 'واژگان' }
  ];
  var LEVELS = [
    { id: null, icon: '🔀', title: 'همه سطح‌ها' },
    { id: 'easy', icon: '🟢', title: 'مبتدی' },
    { id: 'medium', icon: '🟡', title: 'متوسط' },
    { id: 'hard', icon: '🔴', title: 'پیشرفته' }
  ];
  var UNITS = [{ id: null, icon: '🔀', title: 'همه واحدها' }].concat(
    Curriculum.unitIds().map(function (uid) {
      var u = EDITO.units[uid];
      return { id: uid, icon: '📘', title: 'واحد ' + uid + ' — ' + u.title };
    })
  );
  var selSkill = null, selLevel = null, selUnit = null;

  el.innerHTML = '<h2 style="margin:10px 4px">🎯 تمرین هدفمند</h2>' +
    '<div class="muted" style="margin:0 4px 10px">مهارت، سطح و واحدی که می‌خواهی امروز روش تمرکز کنی را انتخاب کن — فقط همان می‌آید، نه همه قاطی.</div>' +
    '<div class="card">' +
    '<h3>۱) مهارت</h3><div class="btnrow picker skill-picker"></div>' +
    '<h3>۲) سطح</h3><div class="btnrow picker level-picker"></div>' +
    '<h3>۳) واحد</h3><div class="btnrow picker unit-picker" style="flex-wrap:wrap"></div>' +
    '<div class="muted zpd-hint" style="margin-top:6px"></div>' +
    '<div class="muted count-info" style="margin-top:10px"></div>' +
    '<div class="btnrow"><button class="btn btn-lg go-practice">شروع تمرین ▶️</button></div>' +
    '</div><div class="dq"></div>';

  var skillBox = el.querySelector('.skill-picker');
  var levelBox = el.querySelector('.level-picker');
  var unitBox = el.querySelector('.unit-picker');
  var countInfo = el.querySelector('.count-info');
  var zpdHint = el.querySelector('.zpd-hint');
  var goBtn = el.querySelector('.go-practice');

  function selectLevelBtn(levelId) {
    selLevel = levelId;
    levelBox.querySelectorAll('.picker-btn').forEach(function (x, i) {
      x.classList.toggle('sel', LEVELS[i].id === levelId);
    });
  }

  function pctText(skill, level) {
    var parts = [];
    if (skill) {
      var s = Store.state.skills[skill], p = s && (s.right + s.wrong) ? Math.round(100 * s.right / (s.right + s.wrong)) : null;
      if (p != null) parts.push('دقتت در ' + SKILL_FA[skill] + ': ' + p + '٪');
    }
    if (level) {
      var lp = Store.levelPct(level);
      if (lp != null) parts.push('دقتت در سطح ' + LEVELS.filter(function (x) { return x.id === level; })[0].title + ': ' + lp + '٪');
    }
    return parts.join(' · ');
  }

  function refresh() {
    var count = Curriculum.countByFilter(selSkill, selLevel, selUnit);
    var stat = pctText(selSkill, selLevel);
    countInfo.innerHTML = count + ' تمرین با این انتخاب موجود است' + (stat ? '<br>' + stat : '');
    goBtn.disabled = count === 0;
  }

  function updateZpdHint() {
    if (!selSkill || typeof ZPD === 'undefined') { zpdHint.innerHTML = ''; return; }
    var rec = ZPD.recommendedLevel(selSkill);
    var recTitle = LEVELS.filter(function (x) { return x.id === rec; })[0].title;
    zpdHint.innerHTML = '🎯 سطح پیشنهادی برای تو بر اساس پیشرفت اخیرت: <b>' + recTitle + '</b> — چون اپ خودش هر جا لازم بود سطح را کمی بالا/پایین می‌برد تا نه خیلی ساده باشد نه خیلی سخت.';
  }

  SKILLS.forEach(function (sk) {
    var b = document.createElement('button');
    b.className = 'btn-ghost picker-btn' + (sk.id === selSkill ? ' sel' : '');
    b.textContent = sk.icon + ' ' + sk.title;
    b.onclick = function () {
      selSkill = sk.id;
      skillBox.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      if (sk.id && typeof ZPD !== 'undefined') selectLevelBtn(ZPD.recommendedLevel(sk.id));
      updateZpdHint();
      refresh();
    };
    skillBox.appendChild(b);
  });
  LEVELS.forEach(function (lv) {
    var b = document.createElement('button');
    b.className = 'btn-ghost picker-btn' + (lv.id === selLevel ? ' sel' : '');
    b.textContent = lv.icon + ' ' + lv.title;
    b.onclick = function () {
      selLevel = lv.id;
      levelBox.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      refresh();
    };
    levelBox.appendChild(b);
  });
  UNITS.forEach(function (un) {
    var b = document.createElement('button');
    b.className = 'btn-ghost picker-btn' + (un.id === selUnit ? ' sel' : '');
    b.textContent = un.icon + ' ' + un.title;
    b.onclick = function () {
      selUnit = un.id;
      unitBox.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      refresh();
    };
    unitBox.appendChild(b);
  });
  skillBox.querySelector('.picker-btn').classList.add('sel');
  levelBox.querySelector('.picker-btn').classList.add('sel');
  unitBox.querySelector('.picker-btn').classList.add('sel');
  refresh();

  goBtn.onclick = function () {
    var pool = Curriculum.exercisesByFilter(selSkill, selLevel, selUnit, 12);
    if (!pool.length) { toast('فعلاً تمرینی با این انتخاب نیست.'); return; }
    el.querySelector('.card').style.display = 'none';
    var skillTitle = SKILLS.filter(function (x) { return x.id === selSkill; })[0].title;
    var levelTitle = LEVELS.filter(function (x) { return x.id === selLevel; })[0].title;
    var unitTitle = UNITS.filter(function (x) { return x.id === selUnit; })[0].title;
    var resultTitle = skillTitle + ' / ' + levelTitle + (selUnit != null ? ' / ' + unitTitle : '');
    Exercises.resetClock();
    ExerciseRunner.run(el.querySelector('.dq'), pool, function (r) {
      el.querySelector('.dq').innerHTML = '<div class="card center"><h2>نتیجه — ' + resultTitle + '</h2>' +
        '<div style="font-size:40px;margin:8px">' + r.right + '/' + r.total + '</div>' +
        '<div class="btnrow" style="justify-content:center"><a href="#practice"><button class="btn-ghost">تمرین دیگر</button></a>' +
        '<a href="#home"><button class="btn">خانه</button></a></div></div>';
      window.scrollTo(0, 0);
      Gamification.toastNew();
    }, resultTitle);
  };
};

/* ---------- درس مستقل (خارج از جلسه روزانه) ---------- */
var SKILL_MENU = {
  VO: { icon: '🔤', label: 'تمرین واژگان' },
  GR: { icon: '📐', label: 'تمرین گرامر' },
  CE: { icon: '📖', label: 'تمرین خواندن' },
  CO: { icon: '🎧', label: 'تمرین شنیداری' },
  PE: { icon: '✍️', label: 'تمرین نوشتاری' },
  PO: { icon: '🗣️', label: 'تمرین گفتاری' }
};

Views.lesson = function (el, lessonId) {
  var lesson = Curriculum.findLesson(lessonId);
  if (!lesson) { el.innerHTML = '<div class="card">درس یافت نشد.</div>'; return; }
  var u = Curriculum.unitOf(lessonId);
  var done = Store.state.lessonsDone[lesson.id];

  el.innerHTML = '<div class="card"><h2>📘 <span class="fr">' + Exercises.esc(lesson.title) + '</span> — ' + Exercises.esc(lesson.fa) + '</h2>' +
    '<div class="muted">واحد ' + u.id + ' · <span class="fr">' + Exercises.esc(u.title) + '</span></div>' +
    (done ? '<div style="margin-top:6px"><span class="chip ok">✅ قبلاً کامل شده — ' + done.score + '/' + done.total + '</span></div>' : '') +
    '<div class="btnrow"><button class="btn btn-lg full-lesson-btn">▶️ شروع کامل درس (همه بخش‌ها + تمرین‌ها)</button></div></div>';

  var namedParts = LessonRunner.buildNamedParts(lesson);
  var skillPool = {};
  (lesson.exercises || []).forEach(function (ex) { (skillPool[ex.skill] = skillPool[ex.skill] || []).push(ex); });
  var skillKeys = Object.keys(SKILL_MENU).filter(function (sk) { return skillPool[sk]; });

  var host = document.createElement('div');

  if (namedParts.length || skillKeys.length) {
    var menu = document.createElement('div');
    menu.className = 'card';
    menu.innerHTML = '<h3>یا مستقیم برو سراغ:</h3><div class="btnrow picker section-menu"></div>';
    el.appendChild(menu);
    var row = menu.querySelector('.section-menu');

    function selectBtn(active) {
      row.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
      active.classList.add('sel');
    }

    namedParts.forEach(function (p) {
      var b = document.createElement('button');
      b.className = 'btn-ghost picker-btn';
      b.textContent = p.icon + ' ' + p.label;
      b.onclick = function () {
        selectBtn(b);
        host.innerHTML = '';
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = p.html;
        host.appendChild(card);
        window.scrollTo(0, 0);
      };
      row.appendChild(b);
    });

    skillKeys.forEach(function (sk) {
      var meta = SKILL_MENU[sk], pool = skillPool[sk];
      var b = document.createElement('button');
      b.className = 'btn-ghost picker-btn';
      b.textContent = meta.icon + ' ' + meta.label + ' (' + pool.length + ')';
      b.onclick = function () {
        selectBtn(b);
        host.innerHTML = '';
        ExerciseRunner.run(host, pool, function (r) {
          Store.addActivity();
          Store.save();
          host.innerHTML = '<div class="card center"><h2>تمام شد ✅</h2><b>' + r.right + ' از ' + r.total + ' درست</b>' +
            '<div class="btnrow" style="justify-content:center"><a href="#unit/' + u.id + '"><button class="btn-ghost">بازگشت به واحد</button></a></div></div>';
          Gamification.toastNew();
        }, meta.label);
        window.scrollTo(0, 0);
      };
      row.appendChild(b);
    });
  }

  el.appendChild(host);

  el.querySelector('.full-lesson-btn').onclick = function () {
    el.innerHTML = '<div class="card"><h2>📘 <span class="fr">' + Exercises.esc(lesson.title) + '</span> — ' + Exercises.esc(lesson.fa) + '</h2></div>';
    var fullHost = document.createElement('div');
    el.appendChild(fullHost);
    LessonRunner.run(fullHost, lesson, function (r) {
      var first = !Store.state.lessonsDone[lesson.id];
      Store.state.lessonsDone[lesson.id] = { day: Store.today(), score: r.right, total: r.total };
      var added = SRS.addLesson(lesson);
      Store.save();
      fullHost.innerHTML = '<div class="card center"><h2>درس تمام شد ✅</h2>' +
        '<b>' + r.right + ' از ' + r.total + ' تمرین درست</b>' +
        (first ? '<div class="muted">' + added + ' کارت به لایتنر اضافه شد.</div>' : '') +
        '<div class="btnrow" style="justify-content:center"><a href="#unit/' + u.id + '"><button class="btn-ghost">بازگشت به واحد</button></a>' +
        '<a href="#home"><button class="btn">خانه</button></a></div></div>';
      window.scrollTo(0, 0);
      if (r.total && r.right / r.total >= 0.6 && typeof Confetti !== 'undefined') Confetti.burst({ count: 45 });
      Gamification.toastNew();
    });
  };
};

/* ---------- تنظیمات ---------- */
Views.settings = function (el) {
  var s = Store.state.settings;
  var voices = Voice.frVoices;
  var h = '';

  if (CloudSync.enabled) {
    var u = CloudSync.user;
    var uMeta = (u && u.user_metadata) || {};
    var uName = uMeta.full_name || uMeta.name || 'کاربر';
    var uAvatar = uMeta.avatar_url || uMeta.picture || '';
    h += '<div class="card"><h2>☁️ همگام‌سازی ابری</h2>';
    if (u) {
      h += '<div class="cloud-row">' +
        (uAvatar ? '<img class="cloud-avatar" src="' + Exercises.esc(uAvatar) + '">' : '<span class="cloud-avatar cloud-avatar-fallback">👤</span>') +
        '<div><b>' + Exercises.esc(uName) + '</b><div class="muted" style="font-size:13px">' + Exercises.esc(u.email || '') + '</div></div></div>' +
        '<div class="muted" style="margin-top:8px">پیشرفتت با همین حساب گوگل ذخیره می‌شود — از هر دستگاهی وارد شوی، همین‌جا ادامه می‌دهی.</div>' +
        '<div class="btnrow" style="margin-top:8px"><button class="btn-ghost cloud-signout">خروج از حساب</button></div>';
    } else {
      h += '<div class="muted">با گوگل وارد شو تا پیشرفتت (درس‌ها، XP، لایتنر) روی همه دستگاه‌هایت ذخیره بماند و با پاک‌شدن مرورگر از بین نرود.</div>' +
        '<div class="btnrow" style="margin-top:8px"><button class="btn cloud-signin">🔐 ورود با گوگل</button></div>';
    }
    h += '</div>';
  }

  h += '<div class="card"><h2>⚙️ تنظیمات</h2>' +
    '<h3>🎨 تم</h3><div class="btnrow">' +
    '<button class="btn-ghost th-light">☀️ روشن</button><button class="btn-ghost th-dark">🌙 تیره</button></div>' +
    '<h3>🔊 صدای فرانسه <span class="muted">(' + voices.length + ' صدا پیدا شد)</span></h3>';
  if (voices.length) {
    h += '<div class="voice-list">' + voices.map(function (v) {
      var natural = /natural|online/i.test(v.name);
      var sel = s.voiceName === v.name || (!s.voiceName && v === voices[0]);
      var locale = (v.lang || '').split('-')[1] || '';
      return '<div class="voice-row' + (sel ? ' sel' : '') + '" data-name="' + Exercises.esc(v.name) + '">' +
        '<button class="btn-audio voice-preview" data-name="' + Exercises.esc(v.name) + '">🔊</button>' +
        '<span class="voice-name fr">' + Exercises.esc(v.name) + '</span>' +
        (locale ? '<span class="chip">' + Exercises.esc(locale.toUpperCase()) + '</span>' : '') +
        (natural ? '<span class="chip ok">✨ طبیعی</span>' : '') +
        '<button class="btn-ghost voice-pick">' + (sel ? '✅ انتخاب‌شده' : 'انتخاب') + '</button>' +
        '</div>';
    }).join('') + '</div>' +
      '<details class="gr" style="margin-top:10px"><summary>صداهای بیشتری می‌خواهی؟</summary>' +
      '<div class="muted" style="margin-top:6px">این اپ خودش صدا نمی‌سازد — صداها را ویندوز/مرورگرت می‌دهد. برای صداهای بیشتر:</div>' +
      '<div class="muted" style="margin-top:6px">۱) از مرورگر <b>Edge</b> استفاده کن — چند صدای «Natural» فرانسوی به‌طور خودکار (با اینترنت) در دسترس است.<br>' +
      '۲) ویندوز: Settings ⟵ Time &amp; Language ⟵ Language &amp; region ⟵ «Add a language» ⟵ فرانسه (می‌توانی چند گویش را جدا اضافه کنی: France، Canada، Belgium، Switzerland — هرکدام صدای متفاوتی دارد) ⟵ بعد از نصب، مطمئن شو گزینهٔ «Speech» آن زبان هم نصب شده باشد.<br>' +
      '۳) بعد از نصب، این صفحه را رفرش کن — صداهای جدید خودکار همین‌جا نشان داده می‌شوند.</div></details>';
  } else {
    h += '<div class="feedback warn">هیچ صدای فرانسه‌ای روی این سیستم پیدا نشد — به همین دلیل تلفظ‌ها با صدای انگلیسیِ پیش‌فرض ویندوز خوانده می‌شوند (تلفظ اشتباه). این مشکل اپ نیست، صدای فرانسه هنوز روی ویندوز/مرورگرت نصب نشده.</div>' +
      '<div class="muted" style="margin-top:8px">برای حلش:</div>' +
      '<div class="muted" style="margin-top:6px">۱) از مرورگر <b>Edge</b> استفاده کن — چند صدای «Natural» فرانسوی به‌طور خودکار (با اینترنت) در دسترس است.<br>' +
      '۲) ویندوز: Settings ⟵ Time &amp; Language ⟵ Language &amp; region ⟵ «Add a language» ⟵ فرانسه (می‌توانی چند گویش را جدا اضافه کنی: France، Canada، Belgium، Switzerland — هرکدام صدای متفاوتی دارد) ⟵ بعد از نصب، مطمئن شو گزینهٔ «Speech» آن زبان هم نصب شده باشد.<br>' +
      '۳) بعد از نصب، مرورگر را کامل ببند و دوباره باز کن، و این صفحه را رفرش کن — صداهای جدید خودکار همین‌جا نشان داده می‌شوند.</div>';
  }
  h += '<h3>🎯 هدف روزانه</h3><div class="btnrow">' +
    [5, 10, 15, 30, 45, 60].map(function (m) {
      return '<button class="btn-ghost goal-btn" data-m="' + m + '">' + m + ' دقیقه' + (s.dailyGoalMinutes === m ? ' ✓' : '') + '</button>';
    }).join('') + '</div>';
  h += '<h3>🐢 سرعت پیش‌فرض گفتار</h3>' +
    '<div class="btnrow"><button class="btn-ghost r08">آهسته (0.8)</button><button class="btn-ghost r10">عادی (1.0)</button></div>' +
    '<div class="muted">سرعت فعلی: ' + (s.rate || 1) + '</div></div>';

  if (location.protocol === 'file:') {
    h += '<div class="card"><h2>🎤 میکروفون کار نمی‌کند؟</h2>' +
      '<div class="muted">الان اپ را مستقیم از یک فایل باز کرده‌ای (آدرس با <code>file://</code> شروع می‌شود). ' +
      'مرورگرها معمولاً در این حالت دسترسی به میکروفون را بی‌صدا مسدود می‌کنند. برای رفع این مشکل:</div>' +
      '<div class="muted" style="margin-top:6px">۱) فایل <b>start-server.bat</b> را در پوشه اپ دابل‌کلیک کن<br>' +
      '۲) در مرورگر آدرس <b class="fr">http://localhost:5173</b> را باز کن<br>' +
      '۳) از همان‌جا اپ را استفاده کن — همه‌چیز (پیشرفتت هم) همان است.</div></div>';
  }

  h += '<div class="card"><h2>🗣️ مکالمه زنده (کلید API آنتروپیک)</h2>' +
    '<div class="muted">برای فعال‌کردن بخش «مکالمه زنده با معلم» (که با هوش مصنوعی واقعی صحبت می‌کنی)، یک کلید API از حساب Anthropic خودت لازم داری. ' +
    'کلید فقط در همین مرورگر (localStorage) ذخیره می‌شود و در بکاپ‌های خروجی JSON قرار نمی‌گیرد. هزینه تقریبی هر جلسه ۳۰ دقیقه‌ای چند سنت است.</div>' +
    '<input class="ex-input api-key-input" type="password" placeholder="sk-ant-..." value="' + Exercises.esc(s.apiKey || '') + '" style="direction:ltr;text-align:left;margin-top:8px">' +
    '<div class="btnrow"><button class="btn save-key">ذخیره کلید</button>' +
    (s.apiKey ? '<button class="btn-bad clear-key">حذف کلید</button>' : '') + '</div></div>';

  h += '<div class="card"><h2>💾 بکاپ پیشرفت</h2>' +
    '<div class="btnrow"><button class="btn exp">📤 خروجی JSON</button>' +
    '<label class="btn-ghost" style="padding:9px 18px;border-radius:10px;cursor:pointer">📥 بازیابی از فایل<input type="file" accept=".json" style="display:none"></label></div></div>';

  h += '<div class="card"><h2>🧪 ابزار تست</h2><div class="muted">برای آزمایش سررسید لایتنر، یک روز به جلو برو (فقط مجازی — ساعت سیستم تغییر نمی‌کند). آفست فعلی: ' + (Store.state.dayOffset || 0) + ' روز — امروزِ اپ: ' + Store.today() + '</div>' +
    '<div class="btnrow"><button class="btn-ghost day-fwd">⏭️ +۱ روز</button><button class="btn-ghost day-reset">↩️ برگشت به امروز واقعی</button></div></div>';

  h += '<div class="card"><h2>🗑️ شروع از نو</h2><div class="muted">همه پیشرفت پاک می‌شود!</div>' +
    '<div class="btnrow"><button class="btn-bad reset">پاک‌کردن کل پیشرفت</button></div></div>';

  el.innerHTML = h;
  var signInBtn = el.querySelector('.cloud-signin');
  if (signInBtn) signInBtn.onclick = function () {
    signInBtn.disabled = true;
    signInBtn.textContent = 'در حال ورود...';
    CloudSync.signIn().catch(function (err) {
      toast('ورود انجام نشد — دوباره امتحان کن (' + (err && err.code ? err.code : 'خطا') + ')');
      signInBtn.disabled = false;
      signInBtn.textContent = '🔐 ورود با گوگل';
    });
  };
  var signOutBtn = el.querySelector('.cloud-signout');
  if (signOutBtn) signOutBtn.onclick = function () { CloudSync.signOut(); };

  el.querySelector('.th-light').onclick = function () { s.theme = 'light'; Store.save(); applyTheme(); };
  el.querySelector('.th-dark').onclick = function () { s.theme = 'dark'; Store.save(); applyTheme(); };
  el.querySelectorAll('.voice-preview').forEach(function (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      var idx = voices.findIndex(function (v) { return v.name === btn.dataset.name; });
      Voice.speak('Bonjour ! Je suis votre professeur de français.', { voiceIndex: idx >= 0 ? idx : 0 });
    };
  });
  el.querySelectorAll('.voice-pick').forEach(function (btn) {
    btn.onclick = function () {
      s.voiceName = btn.closest('.voice-row').dataset.name;
      Store.save();
      Views.settings(el);
    };
  });
  el.querySelector('.r08').onclick = function () { s.rate = 0.8; Store.save(); Views.settings(el); };
  el.querySelector('.r10').onclick = function () { s.rate = 1.0; Store.save(); Views.settings(el); };
  el.querySelectorAll('.goal-btn').forEach(function (btn) {
    btn.onclick = function () { s.dailyGoalMinutes = +btn.dataset.m; Store.save(); Views.settings(el); };
  });
  el.querySelector('.save-key').onclick = function () {
    s.apiKey = el.querySelector('.api-key-input').value.trim();
    Store.save();
    toast(s.apiKey ? 'کلید ذخیره شد ✅' : 'کلید خالی است');
    Views.settings(el);
  };
  var clearKeyBtn = el.querySelector('.clear-key');
  if (clearKeyBtn) clearKeyBtn.onclick = function () {
    s.apiKey = '';
    Store.save();
    toast('کلید حذف شد');
    Views.settings(el);
  };
  el.querySelector('.exp').onclick = function () { Store.exportJSON(); };
  el.querySelector('input[type=file]').onchange = function (e) {
    if (e.target.files[0]) Store.importJSON(e.target.files[0], function (ok) {
      toast(ok ? 'بازیابی شد ✅' : 'فایل نامعتبر بود ❌');
      /* رفرش کامل، نه فقط تغییر hash — تا اگر بکاپ قدیمی بود، load() فیلدهای جدید را پر کند و ایندکس آیتم‌ها دوباره ساخته شود */
      if (ok) { location.hash = '#home'; location.reload(); }
    });
  };
  el.querySelector('.day-fwd').onclick = function () { Store.state.dayOffset = (Store.state.dayOffset || 0) + 1; Store.save(); Views.settings(el); toast('امروزِ اپ: ' + Store.today()); };
  el.querySelector('.day-reset').onclick = function () { Store.state.dayOffset = 0; Store.save(); Views.settings(el); };
  el.querySelector('.reset').onclick = function () {
    if (confirm('مطمئنی؟ همه پیشرفت، لایتنر و نمره‌ها پاک می‌شود!')) { Store.reset(); location.hash = '#home'; location.reload(); }
  };
};

function applyTheme() {
  document.documentElement.setAttribute('data-theme', Store.state.settings.theme || 'light');
}
