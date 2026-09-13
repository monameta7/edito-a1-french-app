/* ===== موتور تمرین: رندر و تصحیح خودکار همه انواع تمرین =====
   هر تمرین: { type, skill, topic, ... }
   skill ها: CO شنیداری | CE خواندن | PE نوشتن | PO گفتار | GR گرامر | VO واژگان
   Exercises.render(el, ex, done) → پس از پاسخ، done({correct}) صدا زده می‌شود. */

var SKILL_FA = { CO: 'شنیداری', CE: 'خواندن', PE: 'نوشتن', PO: 'گفتاری', GR: 'گرامر', VO: 'واژگان' };
var LEVEL_FA = { easy: 'مبتدی', medium: 'متوسط', hard: 'پیشرفته' };
var LEVEL_ICON = { easy: '🟢', medium: '🟡', hard: '🔴' };

var Exercises = {
  _lastTick: null,
  resetClock: function () { this._lastTick = Date.now(); },

  /* --- نرمال‌سازی متن فرانسه برای مقایسه --- */
  norm: function (s) {
    return (s || '').toLowerCase()
      .replace(/[’ʼ`]/g, "'")
      .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
      .replace(/[.,!?;:«»"()]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  },
  stripAccents: function (s) {
    return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  },
  /* 2=دقیقاً درست | 1=درست ولی اکسان غلط | 0=غلط */
  compare: function (user, answers) {
    var u = this.norm(user), self = this;
    if (!u) return 0;
    var r = 0;
    (Array.isArray(answers) ? answers : [answers]).forEach(function (a) {
      var n = self.norm(a);
      if (u === n) r = Math.max(r, 2);
      else if (self.stripAccents(u) === self.stripAccents(n)) r = Math.max(r, 1);
    });
    return r;
  },

  esc: function (s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  /* دکمهٔ نمایش/مخفی‌کردن رونوشت شنیداری (متن فرانسه + ترجمه فارسی اگر باشد) */
  wireTranscript: function (box, audioText, audioFa) {
    var self = this;
    var btn = box.querySelector('.toggle-tr');
    var tbox = box.querySelector('.transcript-box');
    if (!btn || !tbox) return;
    btn.onclick = function () {
      var open = tbox.style.display !== 'none';
      if (open) {
        tbox.style.display = 'none';
        btn.textContent = '📝 نمایش رونوشت';
      } else {
        tbox.innerHTML = '<div class="fr-block">' + self.esc(audioText) + '</div>' +
          (audioFa ? '<div class="muted">' + self.esc(audioFa) + '</div>' : '<div class="muted">ترجمه‌ای ثبت نشده — از روی واژه‌های آشنا معنی را حدس بزن.</div>');
        tbox.style.display = 'block';
        btn.textContent = '🙈 مخفی کردن رونوشت';
      }
    };
  },

  /* مقایسه واژه‌به‌واژه برای دیکته با خروجی رنگی */
  diff: function (user, target) {
    var self = this;
    var uw = this.norm(user).split(' ').filter(Boolean);
    var tw = this.norm(target).split(' ').filter(Boolean);
    var html = [], correct = 0;
    for (var i = 0; i < tw.length; i++) {
      if (i < uw.length && uw[i] === tw[i]) { html.push('<span class="diff-ok">' + self.esc(tw[i]) + '</span>'); correct++; }
      else if (i < uw.length && self.stripAccents(uw[i]) === self.stripAccents(tw[i])) {
        html.push('<span class="diff-miss">' + self.esc(tw[i]) + '</span>'); correct += 0.5;
      } else html.push('<span class="diff-bad">' + self.esc(tw[i]) + '</span>');
    }
    return { html: '<span class="fr">' + html.join(' ') + '</span>', pct: tw.length ? correct / tw.length : 0 };
  },

  /* --- رندر اصلی --- */
  render: function (el, ex, done) {
    var self = this;
    el.innerHTML = '';
    var box = document.createElement('div');
    box.className = 'ex-box';
    el.appendChild(box);

    var finish = function (correct, opts) {
      Store.recordAnswer(ex.skill, ex.topic, !!correct);
      Store.recordLevel(ex.level, !!correct);
      Store.addActivity();
      if (typeof ZPD !== 'undefined') ZPD.record(ex.skill, ex.level, !!correct);
      var gained = correct ? (opts && opts.hinted ? 6 : 10) : (opts && opts.half ? 5 : 2);
      Store.addXP(gained);
      if (correct && typeof Confetti !== 'undefined') {
        Confetti.fromElement(box, 14);
        floatTextFromElement('+' + gained + ' XP', box);
      }
      var now = Date.now();
      if (Exercises._lastTick) Store.tick(now - Exercises._lastTick);
      Exercises._lastTick = now;
      setTimeout(function () { done({ correct: !!correct, half: opts && opts.half }); }, 0);
    };

    var head = '<div class="muted"><span class="chip">' + (SKILL_FA[ex.skill] || '') + '</span>' +
      (ex.topic ? '<span class="chip">' + this.esc(ex.topicFa || ex.topic) + '</span>' : '') +
      (ex.level ? '<span class="chip">' + LEVEL_ICON[ex.level] + ' ' + LEVEL_FA[ex.level] + '</span>' : '') + '</div>';

    switch (ex.type) {
      case 'mcq': this.mcq(box, ex, head, finish); break;
      case 'fill': this.fill(box, ex, head, finish); break;
      case 'match': this.match(box, ex, head, finish); break;
      case 'order': this.order(box, ex, head, finish); break;
      case 'dictation': this.dictation(box, ex, head, finish); break;
      case 'speak': this.speakEx(box, ex, head, finish); break;
      case 'write': this.writeEx(box, ex, head, finish); break;
      default: box.innerHTML = 'نوع تمرین ناشناخته'; finish(true);
    }
  },

  feedbackHTML: function (ok, ex, extra) {
    var cls = ok === true ? 'ok' : ok === 'warn' ? 'warn' : 'bad';
    var icon = ok === true ? '✅ آفرین!' : ok === 'warn' ? '🟡 تقریباً!' : '❌ اشتباه بود.';
    return '<div class="feedback ' + cls + '">' + icon + ' ' + (extra || '') +
      (ex && ex.explain ? '<div class="muted" style="margin-top:4px">💡 ' + ex.explain + '</div>' : '') + '</div>';
  },

  /* ---------- چهارگزینه‌ای (+ درک شنیداری وقتی audio دارد) ---------- */
  mcq: function (box, ex, head, finish) {
    var self = this;
    var h = head + '<div class="ex-q">' + ex.q + '</div>';
    if (ex.qfr) h += '<div class="fr-block">' + this.esc(ex.qfr) + '</div>';
    if (ex.audio) h += '<div class="btnrow">' + audioBtn(ex.audio, '🔊 پخش') + audioBtn(ex.audio, '🐢 آهسته', true) +
      '<button class="btn-ghost toggle-tr">📝 نمایش رونوشت</button></div>' +
      '<div class="transcript-box" style="display:none"></div>';
    h += '<div class="ex-opts"></div><div class="fb"></div>';
    box.innerHTML = h;
    if (ex.audio) Voice.speak(ex.audio);
    if (ex.audio) this.wireTranscript(box, ex.audio, ex.audioFa);
    var opts = box.querySelector('.ex-opts');
    var isFr = ex.frOptions !== false;
    /* ترتیب گزینه‌ها هر بار قاطی می‌شود تا جواب درست همیشه گزینه اول نباشد —
       خودِ ex.options/ex.correct دست‌نخورده می‌ماند، فقط ترتیب نمایش عوض می‌شود */
    var order = shuffle(ex.options.map(function (_, i) { return i; }));
    var correctPos = order.indexOf(ex.correct);
    order.forEach(function (origIdx, pos) {
      var d = document.createElement('div');
      d.className = 'ex-opt' + (isFr ? ' fr' : '');
      d.textContent = ex.options[origIdx];
      d.onclick = function () {
        if (box.dataset.done) return;
        box.dataset.done = 1;
        var ok = pos === correctPos;
        d.classList.add(ok ? 'right' : 'wrong');
        opts.children[correctPos].classList.add('right');
        box.querySelector('.fb').innerHTML = self.feedbackHTML(ok, ex,
          ok ? '' : 'پاسخ درست: <span class="fr">' + self.esc(ex.options[ex.correct]) + '</span>');
        finish(ok);
      };
      opts.appendChild(d);
    });
  },

  /* ---------- جای خالی ---------- */
  fill: function (box, ex, head, finish) {
    var self = this;
    var qHtml = this.esc(ex.q).replace(/___/g, '<b>______</b>');
    var answer = Array.isArray(ex.answer) ? ex.answer[0] : ex.answer;
    var hintLevel = 0;
    box.innerHTML = head + '<div class="ex-q">' + (ex.fa || 'جای خالی را پر کنید:') + '</div>' +
      '<div class="fr-block">' + qHtml + '</div>' +
      (ex.hint ? '<div class="muted">راهنما: ' + ex.hint + '</div>' : '') +
      '<input class="ex-input" type="text" autocomplete="off" placeholder="پاسخ به فرانسه...">' +
      '<div class="btnrow"><button class="btn">بررسی</button><button class="btn-ghost hint-btn">🪜 راهنمایی</button></div>' +
      '<div class="hint-box muted fr"></div>' +
      '<div class="fb"></div>';
    var input = box.querySelector('input'), btn = box.querySelector('.btn');
    var hintBtn = box.querySelector('.hint-btn'), hintBox = box.querySelector('.hint-box');
    hintBtn.onclick = function () {
      if (box.dataset.done) return;
      hintLevel = Math.min(hintLevel + 1, 3);
      hintBox.textContent = '🪜 ' + self.scaffoldHint(answer, hintLevel);
      if (hintLevel >= 3) hintBtn.disabled = true;
    };
    var check = function () {
      if (box.dataset.done) return;
      var r = self.compare(input.value, ex.answer);
      box.dataset.done = 1;
      var ansTxt = 'پاسخ درست: <span class="fr">' + self.esc(answer) + '</span>';
      if (r === 2) box.querySelector('.fb').innerHTML = self.feedbackHTML(true, ex);
      else if (r === 1) box.querySelector('.fb').innerHTML = self.feedbackHTML('warn', ex, 'درست است ولی اکسان‌ها را دقیق بنویس! ' + ansTxt);
      else box.querySelector('.fb').innerHTML = self.feedbackHTML(false, ex, ansTxt);
      finish(r >= 1, { half: r === 1, hinted: hintLevel > 0 });
    };
    btn.onclick = check;
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    input.focus();
  },

  /* راهنمایی پلکانی (داربست‌بندی ویگوتسکی‌وار): هر بار کلیک، کمی بیشتر از پاسخ
     را نشان می‌دهد — نه کل جواب، فقط یک تکیه‌گاه موقت تا خودِ کاربر ادامه بدهد. */
  scaffoldHint: function (answer, level) {
    var letters = answer.replace(/[^\p{L}]/gu, '').length;
    var revealCount = level === 1 ? 1 : level === 2 ? Math.ceil(letters / 2) : Math.max(letters - 1, 1);
    var shown = 0;
    return answer.split('').map(function (ch) {
      if (!/\p{L}/u.test(ch)) return ch;
      shown++;
      return shown <= revealCount ? ch : '_';
    }).join('');
  },

  /* ---------- جورکردنی ---------- */
  match: function (box, ex, head, finish) {
    var self = this;
    box.innerHTML = head + '<div class="ex-q">' + (ex.fa || 'موارد را جور کنید:') + '</div>' +
      '<div class="grid2"><div class="match-col left"></div><div class="match-col right"></div></div><div class="fb"></div>';
    var L = box.querySelector('.left'), R = box.querySelector('.right');
    var order = ex.pairs.map(function (_, i) { return i; });
    var shuffled = shuffle(order);
    var selL = null, doneCount = 0, errors = 0;
    ex.pairs.forEach(function (p, i) {
      var a = document.createElement('div');
      a.className = 'match-item fr'; a.textContent = p[0]; a.dataset.i = i;
      a.onclick = function () {
        if (a.classList.contains('done')) return;
        L.querySelectorAll('.sel').forEach(function (x) { x.classList.remove('sel'); });
        a.classList.add('sel'); selL = a;
        Voice.speak(p[0]);
      };
      L.appendChild(a);
    });
    shuffled.forEach(function (i) {
      var b = document.createElement('div');
      b.className = 'match-item'; b.textContent = ex.pairs[i][1]; b.dataset.i = i;
      b.onclick = function () {
        if (!selL || b.classList.contains('done')) return;
        /* مقایسه بر اساس متن، نه اندیس — چون ممکن است دو جفت مقدار سمت راستشان یکسان باشد */
        if (ex.pairs[i][1] === ex.pairs[+selL.dataset.i][1]) {
          b.classList.add('done'); selL.classList.add('done'); selL.classList.remove('sel');
          selL = null; doneCount++;
          if (doneCount === ex.pairs.length) {
            var ok = errors <= Math.floor(ex.pairs.length / 3);
            box.querySelector('.fb').innerHTML = self.feedbackHTML(ok, ex, errors ? (errors + ' خطا داشتی.') : '');
            finish(ok);
          }
        } else {
          errors++;
          b.classList.add('err');
          setTimeout(function () { b.classList.remove('err'); }, 500);
        }
      };
      R.appendChild(b);
    });
  },

  /* ---------- مرتب‌سازی جمله ---------- */
  order: function (box, ex, head, finish) {
    var self = this;
    var m = ex.answer.match(/^([\s\S]*?)\s*([.!?])$/);
    var words = (m ? m[1] : ex.answer).split(' ').filter(Boolean);
    var punct = m ? m[2] : '';
    var punctSpaced = punct && punct !== '.' ? ' ' + punct : punct;
    box.innerHTML = head + '<div class="ex-q">' + (ex.fa || 'واژه‌ها را به‌ترتیب درست بچین:') + '</div>' +
      '<div class="order-built"></div><div class="order-pool"></div>' +
      '<div class="btnrow"><button class="btn">بررسی</button><button class="btn-ghost undo">↩️ برگشت</button></div><div class="fb"></div>';
    var pool = box.querySelector('.order-pool'), built = box.querySelector('.order-built');
    shuffle(words).forEach(function (w) {
      var d = document.createElement('div');
      d.className = 'order-word'; d.textContent = w;
      d.onclick = function () { built.appendChild(d); };
      pool.appendChild(d);
    });
    box.querySelector('.undo').onclick = function () {
      var last = built.lastElementChild;
      if (last) pool.appendChild(last);
    };
    box.querySelector('.btn').onclick = function () {
      if (box.dataset.done) return;
      var got = Array.prototype.map.call(built.children, function (c) { return c.textContent; }).join(' ');
      var ok = self.norm(got) === self.norm(words.join(' '));
      box.dataset.done = 1;
      box.querySelector('.fb').innerHTML = self.feedbackHTML(ok, ex,
        'جمله درست: <span class="fr">' + self.esc(words.join(' ') + punctSpaced) + '</span> ' + audioBtn(ex.answer));
      if (ok) Voice.speak(ex.answer);
      finish(ok);
    };
  },

  /* ---------- دیکته ---------- */
  dictation: function (box, ex, head, finish) {
    var self = this;
    box.innerHTML = head + '<div class="ex-q">🎧 گوش کن و بنویس ' + (ex.fa ? '<span class="muted">(' + ex.fa + ')</span>' : '') + '</div>' +
      '<div class="btnrow">' + audioBtn(ex.text, '🔊 پخش') + audioBtn(ex.text, '🐢 آهسته', true) +
      (ex.trans ? '<button class="btn-ghost toggle-meaning">🙈 متوجه نشدم، معنی‌اش چیست؟</button>' : '') + '</div>' +
      (ex.trans ? '<div class="meaning-box" style="display:none"></div>' : '') +
      '<input class="ex-input" type="text" autocomplete="off" placeholder="آنچه شنیدی بنویس...">' +
      '<div class="btnrow"><button class="btn">بررسی</button></div><div class="fb"></div>';
    Voice.speak(ex.text);
    if (ex.trans) {
      var mBtn = box.querySelector('.toggle-meaning'), mBox = box.querySelector('.meaning-box');
      mBtn.onclick = function () {
        var open = mBox.style.display !== 'none';
        if (open) { mBox.style.display = 'none'; mBtn.textContent = '🙈 متوجه نشدم، معنی‌اش چیست؟'; }
        else {
          mBox.innerHTML = '<div class="muted">' + self.esc(ex.trans) + '</div>';
          mBox.style.display = 'block';
          mBtn.textContent = '🙈 مخفی کردن معنی';
        }
      };
    }
    var input = box.querySelector('input');
    var check = function () {
      if (box.dataset.done) return;
      box.dataset.done = 1;
      var d = self.diff(input.value, ex.text);
      var ok = d.pct >= 0.99 ? true : d.pct >= 0.7 ? 'warn' : false;
      box.querySelector('.fb').innerHTML = self.feedbackHTML(ok, ex,
        '<div>متن درست: ' + d.html + '</div>' +
        (ex.trans ? '<div class="muted">' + self.esc(ex.trans) + '</div>' : ''));
      finish(d.pct >= 0.7, { half: ok === 'warn' });
    };
    box.querySelector('.btn').onclick = check;
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
  },

  /* ---------- گفتار / تلفظ ---------- */
  speakEx: function (box, ex, head, finish) {
    var self = this;
    box.innerHTML = head + '<div class="ex-q">🗣️ این جمله را با صدای بلند بگو:</div>' +
      '<div class="fr-block big-fr" style="font-size:20px">' + this.esc(ex.text) + '</div>' +
      (ex.fa ? '<div class="muted">' + this.esc(ex.fa) + '</div>' : '') +
      '<div class="btnrow">' + audioBtn(ex.text, '🔊 بشنو') + audioBtn(ex.text, '🐢 آهسته', true) + '</div>' +
      '<div class="speak-box"></div><div class="fb"></div>';
    var sb = box.querySelector('.speak-box');
    if (Voice.sttAvailable()) {
      sb.innerHTML = '<button class="mic-btn">🎤</button><div class="muted mic-hint">میکروفون را بزن، با آرامش جمله را بگو، بعد دوباره روی میکروفون بزن تا تمام شود</div>';
      var mic = sb.querySelector('.mic-btn');
      var hint = sb.querySelector('.mic-hint');
      var activeHandle = null;
      mic.onclick = function () {
        if (box.dataset.done) return;
        if (activeHandle) { activeHandle.stop(); return; }
        var old = sb.querySelector('.mic-err'); if (old) old.remove();
        var oldPlay = sb.querySelector('.my-recording'); if (oldPlay) oldPlay.remove();
        mic.classList.add('listening');
        activeHandle = Voice.listenWithRecording(function () {
          hint.textContent = '🎙️ در حال شنیدن... هر وقت جمله‌ات تمام شد، دوباره روی میکروفون بزن.';
        });
        activeHandle.promise.then(function (res) {
          activeHandle = null;
          mic.classList.remove('listening');
          hint.textContent = 'میکروفون را بزن، با آرامش جمله را بگو، بعد دوباره روی میکروفون بزن تا تمام شود';
          var old2 = sb.querySelector('.mic-err'); if (old2) old2.remove();
          if (res.audioUrl) {
            sb.insertAdjacentHTML('beforeend', '<div class="my-recording btnrow"><audio controls src="' + res.audioUrl + '"></audio></div>');
          }
          if (box.dataset.done) return;
          if (!res.alts) {
            var msg = self.micErrorMessage(res.error);
            sb.insertAdjacentHTML('beforeend', '<div class="feedback warn mic-err">' + msg + '</div>');
            self.selfAssess(box, ex, finish);
            return;
          }
          box.dataset.done = 1;
          var best = 0, heard = res.alts[0];
          res.alts.forEach(function (a) {
            var d = self.diff(a, ex.text);
            if (d.pct > best) { best = d.pct; heard = a; }
          });
          var ok = best >= 0.8 ? true : best >= 0.5 ? 'warn' : false;
          box.querySelector('.fb').innerHTML = self.feedbackHTML(ok, ex,
            'شنیده شد: <span class="fr">' + self.esc(heard) + '</span>' +
            (ok !== true ? ' — دوباره گوش بده و تکرار کن ' + audioBtn(ex.text, '🔊', true) : ''));
          finish(best >= 0.5, { half: ok === 'warn' });
        });
      };
    } else {
      this.selfAssess(box, ex, finish);
    }
  },

  /* پیام فارسی مناسب برای هر کد خطای تشخیص گفتار */
  micErrorMessage: function (code) {
    var fileHint = (location.protocol === 'file:')
      ? ' نکته: چون اپ را مستقیم از یک فایل (file://) باز کرده‌ای، مرورگرها معمولاً اجازه دسترسی به میکروفون را در این حالت نمی‌دهند. برای رفع این مشکل، اپ را از طریق یک سرور محلی باز کن (فایل «start-server» در پوشه اپ را اجرا کن و آدرس http://localhost که نشان می‌دهد را باز کن).'
      : '';
    var messages = {
      'not-allowed': '🚫 دسترسی به میکروفون رد شد یا مسدود است.' + fileHint,
      'service-not-allowed': '🚫 مرورگر اجازه استفاده از سرویس تشخیص گفتار را نداد.' + fileHint,
      'audio-capture': '🎤 میکروفونی پیدا نشد — بررسی کن دستگاهی وصل باشد.',
      'network': '📡 مشکل اتصال اینترنت — تشخیص گفتار به اینترنت نیاز دارد.',
      'no-speech': '🔇 صدایی شنیده نشد — نزدیک‌تر به میکروفون حرف بزن.',
      'timeout': '⏱️ میکروفون پاسخ نداد.' + fileHint,
      'start-failed': '⚠️ میکروفون راه‌اندازی نشد.' + fileHint,
      'unsupported': 'این مرورگر از تشخیص گفتار پشتیبانی نمی‌کند — از Chrome یا Edge استفاده کن.'
    };
    return (messages[code] || ('خطای ناشناخته (' + code + ')')) + ' می‌توانی از خودارزیابی زیر استفاده کنی:';
  },

  selfAssess: function (box, ex, finish) {
    var fb = box.querySelector('.fb');
    if (box.querySelector('.sa')) return;
    fb.insertAdjacentHTML('beforebegin',
      '<div class="sa"><div class="muted">جمله را بگو، بعد صدای نمونه را بشنو و خودت را ارزیابی کن:</div>' +
      '<div class="btnrow"><button class="btn-ok">👍 خوب گفتم</button><button class="btn-bad">👎 نیاز به تمرین</button></div></div>');
    var sa = box.querySelector('.sa');
    sa.querySelector('.btn-ok').onclick = function () { if (!box.dataset.done) { box.dataset.done = 1; finish(true); } };
    sa.querySelector('.btn-bad').onclick = function () { if (!box.dataset.done) { box.dataset.done = 1; Voice.speak(ex.text, { slow: true }); finish(false); } };
  },

  /* ---------- نوشتار آزاد (تصحیح با معلم Claude) ---------- */
  writeEx: function (box, ex, head, finish) {
    var self = this;
    box.innerHTML = head + '<div class="ex-q">✍️ ' + ex.prompt + '</div>' +
      (ex.min ? '<div class="muted">حداقل ' + ex.min + ' واژه بنویس.</div>' : '') +
      '<textarea class="ex-input" rows="4" placeholder="Écris ici..."></textarea>' +
      '<div class="btnrow"><button class="btn">ثبت</button>' +
      '<button class="btn-ghost sample">👀 نمونه پاسخ</button>' +
      '<button class="btn-ghost copy">📋 کپی برای معلم</button></div><div class="fb"></div>';
    var ta = box.querySelector('textarea');
    box.querySelector('.sample').onclick = function () {
      box.querySelector('.fb').innerHTML = '<div class="feedback ok">نمونه پاسخ:<div class="fr-block">' + self.esc(ex.sample) + '</div></div>';
    };
    box.querySelector('.copy').onclick = function () {
      var msg = 'سلام! من دارم با اپ Édito A1 فرانسه یاد می‌گیرم. لطفاً به‌عنوان معلم فرانسه، نوشته من را تصحیح کن، خطاها را توضیح بده (به فارسی) و نسخه درست را بنویس.\n\n' +
        'صورت تمرین: ' + ex.prompt + '\n' +
        'سطح من: A1 (' + (ex.topic || '') + ')\n\n' +
        'نوشته من:\n' + ta.value;
      navigator.clipboard.writeText(msg).then(function () { toast('کپی شد! در جلسه Claude Code بچسبان تا تصحیح کنم. 📋'); });
    };
    box.querySelector('.btn').onclick = function () {
      if (box.dataset.done) return;
      var words = ta.value.trim().split(/\s+/).filter(Boolean).length;
      if (words < (ex.min || 3)) { toast('کمی بیشتر بنویس! (' + words + ' واژه)'); return; }
      box.dataset.done = 1;
      var fb = box.querySelector('.fb');
      var userText = ta.value;
      if (typeof Chat !== 'undefined') {
        fb.innerHTML = '<div class="feedback">⏳ در حال تصحیح آنلاین توسط معلم هوش‌مصنوعی...</div>';
        Chat.gradeWriting(ex, userText).then(function (reply) {
          if (!box.isConnected) return; /* کاربر قبل از رسیدن جواب به تمرین بعدی رفته */
          fb.innerHTML = '<div class="feedback ok teacher-fb">' + Chat.formatWritingFeedback(reply) + '</div>';
        }).catch(function (err) {
          if (!box.isConnected) return;
          fb.innerHTML = '<div class="feedback bad">' + Chat.errorMessage(err) + '</div>' +
            '<div style="margin-top:6px">نمونه پاسخ: <div class="fr-block">' + self.esc(ex.sample) + '</div></div>';
        });
      } else {
        fb.innerHTML =
          '<div class="feedback ok">ثبت شد ✅ (' + words + ' واژه)</div>' +
          '<div style="margin-top:6px">نمونه پاسخ: <div class="fr-block">' + self.esc(ex.sample) + '</div></div>';
      }
      finish(true);
    };
  }
};

/* در جای خودش (Fisher-Yates) درهم می‌کند؛ آرایه ورودی را تغییر نمی‌دهد */
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function toast(msg) {
  var t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(function () { t.classList.remove('show'); }, 2600);
}
