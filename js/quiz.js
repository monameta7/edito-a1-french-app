/* ===== آزمون‌های Bilan (پایان واحد) و DELF نهایی + نمره‌دهی مهارتی ===== */
var Quiz = {
  /* اجرای آزمون؛ نمره به تفکیک مهارت ذخیره می‌شود */
  run: function (el, exercises, titleFa, onDone) {
    var bySkill = {};
    var host = document.createElement('div');
    el.innerHTML = '';
    el.appendChild(host);
    var i = 0, right = 0;
    Exercises.resetClock();
    function next() {
      if (i >= exercises.length) {
        onDone({ right: right, total: exercises.length, bySkill: bySkill });
        return;
      }
      var ex = exercises[i];
      host.innerHTML = '<div class="muted center">' + titleFa + ' — سؤال ' + (i + 1) + ' از ' + exercises.length + '</div>' +
        '<div class="pbar small"><div style="width:' + Math.round(100 * i / exercises.length) + '%"></div></div>';
      var q = document.createElement('div');
      host.appendChild(q);
      Exercises.render(q, ex, function (res) {
        var s = bySkill[ex.skill] || (bySkill[ex.skill] = { r: 0, t: 0 });
        s.t++;
        if (res.correct) { s.r++; right++; }
        var b = document.createElement('div');
        b.className = 'btnrow';
        b.innerHTML = '<button class="btn btn-lg">' + (i + 1 < exercises.length ? 'سؤال بعدی ⬅️' : 'پایان آزمون 🏁') + '</button>';
        b.querySelector('button').onclick = function () { i++; next(); };
        q.appendChild(b);
      });
    }
    next();
  },

  resultHTML: function (r, passPct) {
    var pct = r.total ? Math.round(100 * r.right / r.total) : 0;
    var pass = pct >= (passPct || 60);
    var h = '<div class="card center"><h2>' + (pass ? '🎉 قبول شدی!' : '📚 نیاز به مرور داری') + '</h2>' +
      '<div style="font-size:44px;margin:6px">' + pct + '٪</div>' +
      '<div class="muted">' + r.right + ' پاسخ درست از ' + r.total + '</div></div>' +
      '<div class="card"><h3>نمره به تفکیک مهارت:</h3>';
    for (var sk in r.bySkill) {
      var s = r.bySkill[sk], p = Math.round(100 * s.r / s.t);
      h += '<div class="skill-bar"><span class="lbl">' + (SKILL_FA[sk] || sk) + '</span>' +
        '<div class="pbar"><div style="width:' + p + '%"></div></div>' +
        '<span class="val">' + p + '٪</span></div>';
    }
    h += '</div>';
    return h;
  }
};

var Views = window.Views || {};

/* آزمون پایان واحد */
Views.bilan = function (el, unitId) {
  var unit = EDITO.units[unitId];
  if (!unit || !unit.bilan) { el.innerHTML = '<div class="card">آزمونی برای این واحد یافت نشد.</div>'; return; }
  var prev = Store.state.bilans[unitId];
  el.innerHTML = '<div class="card"><h2>🏆 آزمون واحد ' + unitId + ': <span class="fr">' + Exercises.esc(unit.title) + '</span></h2>' +
    '<div class="muted">' + unit.bilan.exercises.length + ' سؤال از هر چهار مهارت + گرامر و واژگان. برای قبولی ۶۰٪ لازم است.</div>' +
    (prev ? '<div class="chip ' + (prev.pct >= 60 ? 'ok' : 'bad') + '">آخرین نمره: ' + prev.pct + '٪ (' + prev.day + ')</div>' : '') +
    '<div class="btnrow"><button class="btn btn-lg">شروع آزمون</button></div></div><div class="qz"></div>';
  el.querySelector('.btn').onclick = function () {
    el.querySelector('.card').style.display = 'none';
    Quiz.run(el.querySelector('.qz'), unit.bilan.exercises, 'آزمون واحد ' + unitId, function (r) {
      var pct = r.total ? Math.round(100 * r.right / r.total) : 0;
      Store.state.bilans[unitId] = { day: Store.today(), pct: pct, bySkill: r.bySkill };
      Store.save();
      el.querySelector('.qz').innerHTML = Quiz.resultHTML(r) +
        '<div class="btnrow" style="justify-content:center"><a href="#unit/' + unitId + '"><button class="btn-ghost">بازگشت به واحد</button></a>' +
        '<a href="#home"><button class="btn">خانه</button></a></div>';
      window.scrollTo(0, 0);
      Gamification.toastNew();
    });
  };
};

/* آزمون DELF A1 نهایی */
Views.delf = function (el) {
  if (!EDITO.delf) { el.innerHTML = '<div class="card">آزمون DELF هنوز آماده نیست.</div>'; return; }
  el.innerHTML = '<div class="card"><h2>🎓 آزمون آزمایشی DELF A1</h2>' +
    '<div class="muted">شبیه‌سازی آزمون رسمی DELF A1 با چهار بخش: شنیداری (CO)، خواندن (CE)، نوشتن (PE) و گفتاری (PO). ' +
    EDITO.delf.exercises.length + ' سؤال — بدون عجله جواب بده!</div>' +
    '<div class="btnrow"><button class="btn btn-lg">شروع آزمون DELF</button></div></div><div class="qz"></div>';
  el.querySelector('.btn').onclick = function () {
    el.querySelector('.card').style.display = 'none';
    Quiz.run(el.querySelector('.qz'), EDITO.delf.exercises, 'DELF A1', function (r) {
      var pct = r.total ? Math.round(100 * r.right / r.total) : 0;
      Store.state.bilans['delf'] = { day: Store.today(), pct: pct, bySkill: r.bySkill };
      Store.save();
      el.querySelector('.qz').innerHTML = Quiz.resultHTML(r, 50) +
        '<div class="card muted">در DELF واقعی، نمره قبولی ۵۰ از ۱۰۰ است و هر مهارت حداقل ۵ از ۲۵ می‌خواهد. ' +
        'برای بخش‌های نوشتاری و گفتاری واقعی، از دکمه «کپی برای معلم» استفاده کن تا در جلسه Claude Code ارزیابی دقیق بگیری.</div>' +
        '<div class="btnrow" style="justify-content:center"><a href="#home"><button class="btn">خانه</button></a></div>';
      Gamification.toastNew();
    });
  };
};
