/* ===== جلسه روزانه ۳۰ دقیقه‌ای + مرور لایتنر + نمایش درس ===== */

/* ---------- اجراکننده مجموعه تمرین ---------- */
var ExerciseRunner = {
  run: function (el, exercises, onDone, titleFa) {
    var queue = exercises.slice();
    var used = {};
    queue.forEach(function (ex) { used[Curriculum.exerciseKey(ex)] = true; });
    var i = 0, right = 0, results = [];
    var wrap = document.createElement('div');
    el.appendChild(wrap);
    Exercises.resetClock();
    function next() {
      if (i >= queue.length) { onDone({ right: right, total: queue.length, results: results }); return; }
      var ex = queue[i];
      wrap.innerHTML = '<div class="muted center">' + (titleFa || 'تمرین') + ' ' + (i + 1) + ' از ' + queue.length + '</div>';
      var host = document.createElement('div');
      wrap.appendChild(host);
      Exercises.render(host, ex, function (res) {
        if (res.correct) right++;
        results.push({ ex: ex, correct: res.correct });
        var fb = '';
        if (!res.correct && ex.topic) {
          var extra = Curriculum.similarExercises(ex.topic, 3, used);
          if (extra.length) {
            extra.forEach(function (e) { used[Curriculum.exerciseKey(e)] = true; });
            queue.splice.apply(queue, [i + 1, 0].concat(extra));
            fb = '<div class="muted center">🔁 برای این مبحث ' + extra.length + ' تمرین مشابه اضافه شد تا مطمئن شویم خوب یادش گرفته‌ای.</div>';
          }
        }
        if (fb) host.insertAdjacentHTML('beforeend', fb);
        var b = document.createElement('div');
        b.className = 'btnrow';
        b.innerHTML = '<button class="btn btn-lg">' + (i + 1 < queue.length ? 'بعدی ⬅️' : 'پایان تمرین‌ها ✅') + '</button>';
        b.querySelector('button').onclick = function () { i++; next(); };
        host.appendChild(b);
        b.querySelector('button').focus();
      });
    }
    next();
  }
};

/* ---------- فلش‌کارت لایتنر ---------- */
var Review = {
  /* نمایش یک دور مرور؛ onDone({right,total}) */
  run: function (el, ids, onDone) {
    var i = 0, right = 0;
    function next() {
      if (i >= ids.length) { onDone({ right: right, total: ids.length }); return; }
      var id = ids[i], item = EDITO.itemIndex[id], st = Store.state.srs[id];
      var toFa = st.box <= 2; // جعبه‌های پایین: فرانسه→فارسی، بالاتر: فارسی→فرانسه
      var emo = wordEmoji(item.fr);
      var emoHtml = emo ? '<div class="fc-emoji">' + emo + '</div>' : '';
      var front = toFa ? emoHtml + '<div class="big-fr fr">' + Exercises.esc(item.fr) + '</div>' +
        (item.ipa ? '<div class="ipa">[' + item.ipa + ']</div>' : '') +
        '<div class="btnrow" style="justify-content:center">' + audioBtn(item.fr) + '</div>'
        : '<div style="font-size:22px">' + Exercises.esc(item.fa) + '</div><div class="fc-hint">به فرانسه چی می‌شه؟</div>';
      var back = toFa ? '<div style="font-size:20px">' + Exercises.esc(item.fa) + '</div>'
        : emoHtml + '<div class="big-fr fr">' + Exercises.esc(item.fr) + '</div>' +
        (item.ipa ? '<div class="ipa">[' + item.ipa + ']</div>' : '') +
        '<div class="btnrow" style="justify-content:center">' + audioBtn(item.fr) + '</div>';
      if (item.ex) back += '<div class="muted fr" style="margin-top:6px">' + Exercises.esc(item.ex) + '</div>' +
        (item.exfa ? '<div class="muted">' + Exercises.esc(item.exfa) + '</div>' : '');

      el.innerHTML = '<div class="muted center">کارت ' + (i + 1) + ' از ' + ids.length +
        ' · جعبه ' + st.box + '</div>' +
        '<div class="flashcard"><div class="fc-front">' + front + '</div>' +
        '<div class="fc-answer" style="display:none">' + back + '</div>' +
        '<div class="btnrow" style="justify-content:center"><button class="btn btn-lg flip">نمایش پاسخ</button></div>' +
        '<div class="btnrow grade" style="display:none;justify-content:center">' +
        '<button class="btn-ok btn-lg">✅ بلد بودم</button><button class="btn-bad btn-lg">❌ بلد نبودم</button></div></div>';
      if (toFa) Voice.speak(item.fr);
      el.querySelector('.flip').onclick = function () {
        el.querySelector('.fc-answer').style.display = 'block';
        el.querySelector('.flip').style.display = 'none';
        el.querySelector('.grade').style.display = 'flex';
        if (!toFa) Voice.speak(item.fr);
      };
      el.querySelector('.btn-ok').onclick = function () { SRS.answer(id, true); Store.addXP(3); Store.addActivity(); right++; i++; next(); };
      el.querySelector('.btn-bad').onclick = function () { SRS.answer(id, false); Store.addXP(1); Store.addActivity(); i++; next(); };
    }
    next();
  }
};

/* ---------- نمایش محتوای یک درس (واژگان → گرامر → تلفظ → دیالوگ/متن) ---------- */
var LessonRunner = {
  /* بخش‌های درس را پشت‌سرهم نشان می‌دهد، بعد تمرین‌ها؛ آخر onDone({right,total}) */
  run: function (el, lesson, onDone) {
    var parts = this.buildParts(lesson);
    var i = 0;
    function show() {
      if (i >= parts.length) {
        // تمرین‌ها
        el.innerHTML = '<h2>📝 تمرین‌های درس</h2>';
        ExerciseRunner.run(el, lesson.exercises || [], onDone);
        return;
      }
      el.innerHTML = '<div class="muted center">بخش ' + (i + 1) + ' از ' + parts.length + '</div>';
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = parts[i];
      el.appendChild(card);
      var b = document.createElement('div');
      b.className = 'btnrow';
      b.innerHTML = '<button class="btn btn-lg">فهمیدم، بعدی ⬅️</button>';
      b.querySelector('button').onclick = function () { Voice.stop(); i++; show(); };
      el.appendChild(b);
      window.scrollTo(0, 0);
    }
    show();
  },

  buildParts: function (lesson) {
    return this.buildNamedParts(lesson).map(function (p) { return p.html; });
  },

  /* مثل buildParts ولی برای هر بخش کلید/آیکون/عنوان هم برمی‌گرداند —
     برای منوی انتخاب بخش در Views.lesson استفاده می‌شود. */
  buildNamedParts: function (lesson) {
    var parts = [], esc = Exercises.esc;

    /* واژگان */
    if (lesson.vocab && lesson.vocab.length) {
      var v = '<h2>🧠 واژگان جدید <span class="muted">(' + lesson.vocab.length + ' واژه — روی 🔊 بزن و تکرار کن)</span></h2>';
      lesson.vocab.forEach(function (w) {
        var emo = wordEmoji(w.fr);
        v += '<div class="vocab-row">' + (emo ? '<span class="vocab-emoji">' + emo + '</span>' : '') +
          '<span class="vocab-fr">' + esc(w.fr) + '</span>' +
          (w.ipa ? '<span class="ipa">[' + w.ipa + ']</span>' : '') +
          audioBtn(w.fr) +
          '<span class="vocab-fa">' + esc(w.fa) + '</span>' +
          (w.ex ? '<span class="vocab-ex fr">' + esc(w.ex) + '</span>' +
            (w.exfa ? '<span class="vocab-ex">' + esc(w.exfa) + '</span>' : '') : '') +
          '</div>';
      });
      parts.push({ key: 'vocab', icon: '🧠', label: 'واژگان', html: v });
    }

    /* عبارات کلیدی */
    if (lesson.phrases && lesson.phrases.length) {
      var p = '<h2>💬 عبارات کلیدی</h2>';
      lesson.phrases.forEach(function (w) {
        var emo = wordEmoji(w.fr);
        p += '<div class="vocab-row">' + (emo ? '<span class="vocab-emoji">' + emo + '</span>' : '') +
          '<span class="vocab-fr" style="min-width:auto">' + esc(w.fr) + '</span>' +
          audioBtn(w.fr) + '<span class="vocab-fa">' + esc(w.fa) + '</span></div>';
      });
      parts.push({ key: 'phrases', icon: '💬', label: 'عبارات کلیدی', html: p });
    }

    /* گرامر */
    if (lesson.grammar) {
      var g = lesson.grammar;
      var gh = '<h2>📖 گرامر: <span class="fr">' + esc(g.title) + '</span></h2><div>' + g.body + '</div>';
      if (g.table) {
        gh += '<table class="tbl">';
        if (g.table.head) gh += '<tr>' + g.table.head.map(function (c) { return '<th class="fr">' + esc(c) + '</th>'; }).join('') + '</tr>';
        g.table.rows.forEach(function (r) {
          gh += '<tr>' + r.map(function (c) { return '<td class="fr">' + esc(c) + '</td>'; }).join('') + '</tr>';
        });
        gh += '</table>';
      }
      if (g.examples) {
        gh += '<h3>مثال‌ها:</h3>';
        g.examples.forEach(function (e) {
          gh += '<div class="vocab-row"><span class="vocab-fr" style="min-width:auto">' + esc(e.fr) + '</span>' +
            audioBtn(e.fr) + '<span class="vocab-fa">' + esc(e.fa) + '</span></div>';
        });
      }
      parts.push({ key: 'grammar', icon: '📖', label: 'گرامر', html: gh });
    }

    /* تلفظ */
    if (lesson.phonetics) {
      var ph = lesson.phonetics;
      var phh = '<h2>🗣️ تلفظ: ' + esc(ph.title) + '</h2><div>' + ph.body + '</div>';
      if (ph.items) {
        phh += '<div style="margin-top:8px">';
        ph.items.forEach(function (it) {
          phh += '<div class="vocab-row"><span class="vocab-fr">' + esc(it.fr) + '</span>' +
            (it.ipa ? '<span class="ipa">[' + it.ipa + ']</span>' : '') + audioBtn(it.fr) +
            (it.fa ? '<span class="vocab-fa">' + esc(it.fa) + '</span>' : '') + '</div>';
        });
        phh += '</div><div class="muted">🎧 هر مورد را چند بار بشنو و بلند تکرار کن.</div>';
      }
      parts.push({ key: 'phonetics', icon: '🗣️', label: 'تلفظ', html: phh });
    }

    /* دیالوگ */
    if (lesson.dialogue) {
      var d = lesson.dialogue;
      var dh = '<h2>🎧 دیالوگ: <span class="fr">' + esc(d.title) + '</span></h2>' +
        '<div class="btnrow">' +
        '<button class="btn" onclick=\'Voice.speakDialogue(JSON.parse(this.dataset.l))\' data-l=\'' + JSON.stringify(d.lines).replace(/'/g, '&#39;') + '\'>▶️ پخش کامل</button>' +
        '<button class="btn-ghost" onclick=\'Voice.speakDialogue(JSON.parse(this.dataset.l),{slow:true})\' data-l=\'' + JSON.stringify(d.lines).replace(/'/g, '&#39;') + '\'>🐢 آهسته</button>' +
        '<button class="btn-ghost" onclick="Voice.stop()">⏹️</button></div>';
      d.lines.forEach(function (l) {
        dh += '<div class="dlg-line"><span class="dlg-speaker">' + esc(l.s) + '</span>' +
          '<span class="dlg-text">' + esc(l.fr) + ' ' + audioBtn(l.fr) +
          '<span class="dlg-fa">' + esc(l.fa) + '</span></span></div>';
      });
      dh += '<div class="muted">🎧 اول بدون نگاه‌کردن به متن گوش بده، بعد با متن، بعد جمله‌به‌جمله تکرار کن.</div>';
      parts.push({ key: 'dialogue', icon: '🎧', label: 'دیالوگ', html: dh });
    }

    /* متن خواندنی */
    if (lesson.reading) {
      var r = lesson.reading;
      var rh = '<h2>📄 خواندن: <span class="fr">' + esc(r.title) + '</span></h2>' +
        '<div class="fr-block" style="white-space:pre-line">' + esc(r.fr) + '</div>' +
        '<div class="btnrow">' + audioBtn(r.fr.replace(/\n/g, ' '), '🔊 بشنو') + '</div>' +
        '<details class="gr"><summary>ترجمه فارسی</summary><div style="white-space:pre-line">' + esc(r.fa) + '</div></details>';
      parts.push({ key: 'reading', icon: '📄', label: 'متن خواندن', html: rh });
    }

    return parts;
  }
};

/* ---------- نماها ---------- */
var Views = window.Views || {};

/* جلسه امروز */
Views.session = function (el) {
  var due = SRS.due(15);
  var lesson = Curriculum.nextLesson();
  var doneToday = Store.state.sessions.some(function (s) { return s.day === Store.today(); });

  el.innerHTML = '<div class="card session-head"><h2>▶️ جلسه امروز <span class="muted">(~۳۰ دقیقه)</span></h2>' +
    '<div class="steps">' +
    '<span class="st" data-s="0">🗂️ مرور (' + due.length + ')</span>' +
    '<span class="st" data-s="1">📘 درس جدید</span>' +
    '<span class="st" data-s="2">📝 تمرین</span>' +
    '<span class="st" data-s="3">🏁 جمع‌بندی</span></div></div>' +
    (doneToday ? '<div class="card"><b>امروز جلسه‌ات را کامل کرده‌ای! 🎉</b><div class="muted">می‌توانی دوباره تمرین کنی یا از «مرور لایتنر» و «واحدها» استفاده کنی.</div></div>' : '');

  var body = document.createElement('div');
  el.appendChild(body);
  var stepEls = el.querySelectorAll('.st');
  function setStep(n) {
    stepEls.forEach(function (s, i) {
      s.className = 'st' + (i < n ? ' done' : i === n ? ' on' : '');
    });
  }

  var stats = { reviewRight: 0, reviewTotal: 0, exRight: 0, exTotal: 0 };
  var xpStart = Store.state.xp;

  function stepReview() {
    setStep(0);
    if (!due.length) { stepLesson(); return; }
    body.innerHTML = '<div class="card"><h2>🗂️ مرور لایتنر</h2><div class="muted">' + due.length + ' کارت سررسید شده — اول مرور، بعد درس جدید!</div></div>';
    var host = document.createElement('div');
    body.appendChild(host);
    Review.run(host, due, function (r) {
      stats.reviewRight = r.right; stats.reviewTotal = r.total;
      stepLesson();
    });
  }

  function stepLesson() {
    setStep(1);
    if (!lesson) {
      body.innerHTML = '<div class="card"><h2>🎓 همه درس‌ها تمام شده!</h2><div class="muted">آزمون DELF نهایی را امتحان کن یا با مرور لایتنر ادامه بده.</div>' +
        '<div class="btnrow"><a href="#delf"><button class="btn">آزمون DELF A1</button></a></div></div>';
      finish();
      return;
    }
    body.innerHTML = '<div class="card"><h2>📘 درس جدید: <span class="fr">' + Exercises.esc(lesson.title) + '</span> — ' + Exercises.esc(lesson.fa) + '</h2>' +
      '<div class="muted">' + Exercises.esc(Curriculum.unitOf(lesson.id).fa) + ' · ' + Exercises.esc(Curriculum.unitOf(lesson.id).title) + '</div></div>';
    var host = document.createElement('div');
    body.appendChild(host);
    LessonRunner.run(host, lesson, function (r) {
      stats.exRight = r.right; stats.exTotal = r.total;
      setStep(2);
      stepBoost();
    });
  }

  /* تمرین تقویتی از نقاط ضعف */
  function stepBoost() {
    var weak = Store.weakTopics(3);
    var extra = Curriculum.exercisesForTopics(weak.map(function (w) { return w.topic; }), 3, lesson ? lesson.id : null);
    if (!extra.length) { finish(); return; }
    body.innerHTML = '<div class="card"><h2>💪 تمرین تقویتی</h2><div class="muted">چند تمرین از مباحثی که برایت سخت‌تر بوده‌اند: ' +
      weak.map(function (w) { return '<span class="chip warn">' + Exercises.esc(w.topic) + '</span>'; }).join('') + '</div></div>';
    var host = document.createElement('div');
    body.appendChild(host);
    ExerciseRunner.run(host, extra, function (r) {
      stats.exRight += r.right; stats.exTotal += r.total;
      finish();
    }, 'تمرین تقویتی');
  }

  function finish() {
    // ثبت درس و افزودن به لایتنر
    var added = 0;
    if (lesson) {
      Store.state.lessonsDone[lesson.id] = { day: Store.today(), score: stats.exRight, total: stats.exTotal };
      added = SRS.addLesson(lesson);
    }
    Store.state.sessions.push({ day: Store.today(), score: stats.reviewRight + stats.exRight, total: stats.reviewTotal + stats.exTotal });
    var streakInfo = Store.touchStreak();
    Store.save();
    finishSummary(added, streakInfo);
  }

  function finishSummary(added, streakInfo) {
    setStep(3);
    var pct = stats.exTotal ? Math.round(100 * stats.exRight / stats.exTotal) : 100;
    var mood = pct >= 80 ? 'عالی بود! 🌟' : pct >= 60 ? 'خوب پیش می‌ری! 👍' : 'اشکالی نداره، تکرار = یادگیری 💪';
    var xpGained = Store.state.xp - xpStart;
    body.innerHTML = '<div class="card center"><h2>🏁 جلسه امروز تمام شد!</h2>' +
      '<div style="font-size:40px;margin:8px">' + (pct >= 80 ? '🎉' : pct >= 60 ? '😊' : '🌱') + '</div>' +
      '<b>' + mood + '</b>' +
      '<div class="stat-row" style="margin-top:14px">' +
      '<div class="stat"><b>+' + xpGained + ' ⚡</b><span>امتیاز XP</span></div>' +
      '<div class="stat"><b>' + stats.reviewRight + '/' + stats.reviewTotal + '</b><span>مرور لایتنر</span></div>' +
      '<div class="stat"><b>' + stats.exRight + '/' + stats.exTotal + '</b><span>تمرین‌ها</span></div>' +
      '<div class="stat"><b>' + (added || 0) + '</b><span>کارت جدید لایتنر</span></div>' +
      '<div class="stat"><b>' + Store.state.streak.count + ' <span class="flame">🔥</span></b><span>روز پیاپی</span></div></div>' +
      '<div class="btnrow" style="justify-content:center"><a href="#home"><button class="btn btn-lg">بازگشت به خانه</button></a></div></div>';
    window.scrollTo(0, 0);
    if (pct >= 80 && typeof Confetti !== 'undefined') Confetti.burst({ count: 50 });
    if (streakInfo && streakInfo.freezeUsed) setTimeout(function () { toast('🧊 یک روز میس کردی ولی یخِ استریک نجاتش داد!'); }, 400);
    if (streakInfo && streakInfo.freezeEarned) setTimeout(function () { toast('🧊 یک یخِ استریک جدید گرفتی! (استریک ۷روزه)'); }, streakInfo.freezeUsed ? 2400 : 400);
    Gamification.toastNew();
  }

  stepReview();
};

/* مرور لایتنر مستقل */
Views.review = function (el) {
  el.innerHTML = '';
  var summary = document.createElement('div');
  el.appendChild(summary);
  var rv = document.createElement('div');
  rv.className = 'rv';
  el.appendChild(rv);

  function renderSummary() {
    var counts = SRS.boxCounts();
    var due = SRS.due();
    summary.innerHTML = '<div class="card"><h2>🗂️ جعبه‌های لایتنر</h2>' +
      '<div class="boxes">' + counts.map(function (c, i) {
        return '<div class="bx"><b>' + c + '</b><small>جعبه ' + (i + 1) + '<br>' + SRS.INTERVALS[i] + ' روز</small></div>';
      }).join('') + '</div>' +
      '<div class="muted center">' + (due.length ? due.length + ' کارت سررسید شده' : 'فعلاً کارتی سررسید نشده ✅') + '</div>' +
      (due.length ? '<div class="btnrow" style="justify-content:center">' +
        '<button class="btn btn-lg start">شروع مرور</button>' +
        '<a href="#chat/srs"><button class="btn-ghost btn-lg">🧠 مرور با معلم (گفت‌وگو)</button></a></div>' : '') +
      '</div>';
    if (due.length) {
      summary.querySelector('.start').onclick = function () {
        summary.querySelector('.card').style.display = 'none';
        Review.run(rv, due, function (r) {
          rv.innerHTML = '<div class="card center"><h2>مرور تمام شد ✅</h2>' +
            '<b>' + r.right + ' از ' + r.total + ' را بلد بودی</b>' +
            '<div class="btnrow" style="justify-content:center"><a href="#home"><button class="btn">خانه</button></a></div></div>';
          Gamification.toastNew();
        });
      };
    }
  }
  renderSummary();
  Views._renderAddWord(el, renderSummary);
};

/* فرم افزودن دستی کلمه/عبارت به لایتنر + فهرست کلمات دستیِ قبلی */
Views._renderAddWord = function (el, onAdd) {
  var wrap = document.createElement('div');
  wrap.className = 'card';
  wrap.innerHTML = '<h2>➕ افزودن کلمه به لایتنر</h2>' +
    '<div class="muted">اول در واژه‌های خودِ اپ جستجو کن — فارسی یا فرانسه، فرقی نمی‌کند. اگر پیدا شد، فقط با یک کلیک اضافه‌اش کن.</div>' +
    '<input class="ex-input search-word" type="text" placeholder="جستجو... مثلاً chat یا گربه" style="direction:rtl;text-align:right;margin-top:8px">' +
    '<div class="search-results" style="margin-top:6px"></div>' +
    '<details class="gr" style="margin-top:14px"><summary>پیدا نکردی؟ خودت دستی وارد کن</summary>' +
    '<div class="grid2" style="margin-top:8px">' +
    '<div><label class="muted">فرانسه *</label><input class="ex-input add-fr" type="text" placeholder="مثال: le chat"></div>' +
    '<div><label class="muted">فارسی *</label><input class="ex-input add-fa" type="text" placeholder="مثال: گربه" style="direction:rtl;text-align:right"></div>' +
    '<div><label class="muted">تلفظ (اختیاری)</label><input class="ex-input add-ipa" type="text" placeholder="مثال: ʃa"></div>' +
    '<div><label class="muted">مثال (اختیاری)</label><input class="ex-input add-ex" type="text" placeholder="مثال: Le chat dort."></div>' +
    '</div>' +
    '<div class="btnrow"><button class="btn add-word-btn">افزودن به لایتنر</button></div>' +
    '<div class="fb"></div></details>' +
    '<div class="custom-list" style="margin-top:10px"></div>';
  el.appendChild(wrap);

  var searchInput = wrap.querySelector('.search-word');
  var resultsBox = wrap.querySelector('.search-results');
  function renderSearch(q) {
    q = (q || '').trim().toLowerCase();
    if (!q) { resultsBox.innerHTML = ''; return; }
    var all = buildDictionaryList();
    var matches = all.filter(function (w) {
      return w.fr.toLowerCase().indexOf(q) >= 0 || w.fa.toLowerCase().indexOf(q) >= 0 || (w.ipa || '').toLowerCase().indexOf(q) >= 0;
    }).slice(0, 20);
    if (!matches.length) { resultsBox.innerHTML = '<div class="muted">چیزی پیدا نشد — از فرم دستی زیر استفاده کن.</div>'; return; }
    var h = '';
    matches.forEach(function (w) {
      var inBox = SRS.inLeitner(w.id);
      var emo = wordEmoji(w.fr);
      h += '<div class="vocab-row">' + (emo ? '<span class="vocab-emoji">' + emo + '</span>' : '') +
        '<span class="vocab-fr fr">' + Exercises.esc(w.fr) + '</span>' +
        (w.ipa ? '<span class="ipa">[' + Exercises.esc(w.ipa) + ']</span>' : '') +
        '<span class="vocab-fa">' + Exercises.esc(w.fa) + '</span>' +
        (inBox ? '<span class="chip ok">✅ در جعبه لایتنر</span>' : '<button class="btn-ghost add-existing-btn" data-id="' + w.id + '">➕ افزودن</button>') +
        '</div>';
    });
    resultsBox.innerHTML = h;
    resultsBox.querySelectorAll('.add-existing-btn').forEach(function (b) {
      b.onclick = function () {
        if (SRS.addExisting(b.dataset.id)) {
          toast('به جعبه لایتنر اضافه شد ✅');
          renderSearch(searchInput.value);
          if (onAdd) onAdd();
        }
      };
    });
  }
  searchInput.addEventListener('input', function () { renderSearch(searchInput.value); });

  function renderList() {
    var list = SRS.customList();
    var box = wrap.querySelector('.custom-list');
    if (!list.length) { box.innerHTML = ''; return; }
    var h = '<h3>کلمات دستیِ تو (' + list.length + ')</h3>';
    list.forEach(function (w) {
      h += '<div class="vocab-row"><span class="vocab-fr">' + Exercises.esc(w.fr) + '</span>' +
        audioBtn(w.fr) + '<span class="vocab-fa">' + Exercises.esc(w.fa) + '</span>' +
        '<span class="chip">جعبه ' + w.box + '</span>' +
        '<button class="btn-ghost del-word" data-id="' + w.id + '">🗑️</button></div>';
    });
    box.innerHTML = h;
    box.querySelectorAll('.del-word').forEach(function (btn) {
      btn.onclick = function () {
        SRS.removeCustom(btn.dataset.id);
        renderList();
        toast('حذف شد');
      };
    });
  }
  renderList();

  wrap.querySelector('.add-word-btn').onclick = function () {
    var fr = wrap.querySelector('.add-fr').value.trim();
    var fa = wrap.querySelector('.add-fa').value.trim();
    var ipa = wrap.querySelector('.add-ipa').value.trim();
    var ex = wrap.querySelector('.add-ex').value.trim();
    var fb = wrap.querySelector('.fb');
    if (!fr || !fa) {
      fb.innerHTML = '<div class="feedback bad">فرانسه و فارسی هر دو لازم است.</div>';
      return;
    }
    SRS.addCustom({ fr: fr, fa: fa, ipa: ipa, ex: ex });
    fb.innerHTML = '<div class="feedback ok">اضافه شد! ✅ همین الان هم می‌توانی مرورش کنی.</div>';
    wrap.querySelector('.add-fr').value = '';
    wrap.querySelector('.add-fa').value = '';
    wrap.querySelector('.add-ipa').value = '';
    wrap.querySelector('.add-ex').value = '';
    renderList();
    if (onAdd) onAdd();
  };
};
