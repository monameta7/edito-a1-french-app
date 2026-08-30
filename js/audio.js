/* ===== صدا: تلفظ (TTS) و تشخیص گفتار (STT) با locale فرانسه ===== */
/* بعضی موتورهای TTS مرورگر، واژه‌های فرانسه‌ای را که شبیه یک کلمهٔ انگلیسی رایج
   نوشته می‌شوند (مثلاً «marché» شبیه «march») گاهی با تلفظ انگلیسی می‌خوانند.
   این نگاشت فقط متنِ *گفته‌شده* را عوض می‌کند (با خط‌تیره میان هجاها که معمولاً
   موتور را مجبور می‌کند جدا و به‌فرانسه بخواند) — متن *نمایش‌داده‌شده* دست‌نخورده
   می‌ماند. اگر کلمهٔ دیگری هم اشتباه تلفظ شد، همین‌جا اضافه کن. */
var PRON_FIX = {
  'marché': 'mar-ché'
};
function applyPronFix(text) {
  var out = text;
  for (var word in PRON_FIX) {
    // \b در جاوااسکریپت حروف اکسان‌دار (مثل é) را «حرف» حساب نمی‌کند، پس اینجا
    // به‌جای \b از \p{L} (هر حرف یونیکد) با نگاه‌به‌جلو/عقب استفاده می‌شود.
    var re = new RegExp('(?<![\\p{L}])' + word + '(?![\\p{L}])', 'giu');
    out = out.replace(re, PRON_FIX[word]);
  }
  return out;
}

var Voice = {
  frVoices: [],

  init: function () {
    var self = this;
    function loadVoices() {
      var all = speechSynthesis.getVoices();
      self.frVoices = all.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf('fr') === 0; });
      // صداهای طبیعی Edge (Online Natural) را جلوتر بگذار
      self.frVoices.sort(function (a, b) {
        var an = /natural/i.test(a.name) ? 0 : 1, bn = /natural/i.test(b.name) ? 0 : 1;
        return an - bn;
      });
    }
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoices;
  },

  /* altIndex == null یعنی «هیچ صدای مشخصی خواسته نشده» → صدای ترجیحیِ ذخیره‌شده (اگر باشد) استفاده می‌شود؛
     altIndex عددی (حتی 0) یعنی دقیقاً همان اندیس در frVoices خواسته شده — نباید با ترجیحی جایگزین شود. */
  pick: function (altIndex) {
    if (!this.frVoices.length) return null;
    var pref = Store.state.settings.voiceName;
    if (altIndex == null && pref) {
      for (var i = 0; i < this.frVoices.length; i++)
        if (this.frVoices[i].name === pref) return this.frVoices[i];
    }
    return this.frVoices[(altIndex || 0) % this.frVoices.length];
  },

  /* خواندن یک متن فرانسه؛ برمی‌گرداند Promise */
  speak: function (text, opts) {
    opts = opts || {};
    var self = this;
    return new Promise(function (resolve) {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(applyPronFix(text));
      u.lang = 'fr-FR';
      var v = self.pick(opts.voiceIndex);
      if (v) u.voice = v;
      u.rate = opts.rate != null ? opts.rate : (opts.slow ? 0.65 : (Store.state.settings.rate || 1));
      u.onend = resolve;
      u.onerror = resolve;
      speechSynthesis.speak(u);
    });
  },

  /* پخش دیالوگ: هر گوینده با صدای متفاوت */
  speakDialogue: function (lines, opts) {
    opts = opts || {};
    var self = this, speakers = [];
    lines.forEach(function (l) { if (speakers.indexOf(l.s) < 0) speakers.push(l.s); });
    var chain = Promise.resolve();
    lines.forEach(function (l) {
      chain = chain.then(function () {
        return self.speak(l.fr, { voiceIndex: speakers.indexOf(l.s), slow: opts.slow });
      }).then(function () {
        return new Promise(function (r) { setTimeout(r, 350); });
      });
    });
    return chain;
  },

  stop: function () { speechSynthesis.cancel(); },

  /* ---- تشخیص گفتار ---- */
  sttAvailable: function () {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },

  /* گوش‌دادن به کاربر؛ resolve({alts, error}) — alts=null اگر خطا داشت، error کد خطاست */
  listen: function (onStart) {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return Promise.resolve({ alts: null, error: 'unsupported' });
    return new Promise(function (resolve) {
      var rec = new SR();
      rec.lang = 'fr-FR';
      rec.interimResults = false;
      rec.maxAlternatives = 3;
      var done = false;
      var finish = function (result) { if (!done) { done = true; clearTimeout(timer); resolve(result); } };
      // اگر مرورگر هیچ رویدادی صادر نکند (مثلاً روی file:// دسترسی میکروفون بی‌صدا رد شود)، بعد از ۸ ثانیه خطا بده
      var timer = setTimeout(function () { finish({ alts: null, error: 'timeout' }); }, 8000);
      rec.onresult = function (e) {
        var alts = [];
        for (var i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
        finish({ alts: alts, error: null });
      };
      rec.onerror = function (e) { finish({ alts: null, error: (e && e.error) || 'unknown' }); };
      rec.onend = function () { finish({ alts: null, error: 'no-speech' }); };
      if (onStart) onStart();
      try { rec.start(); } catch (e) { finish({ alts: null, error: 'start-failed' }); }
    });
  },

  /* مثل listen، ولی همزمان صدای خودِ کاربر را هم ضبط می‌کند تا بشود دوباره پخشش کرد؛
     همچنین به‌جای قطع خودکار بعد از اولین مکث (که برای کسانی که آهسته‌تر می‌خوانند
     جمله را نصفه قطع می‌کرد)، حالت continuous دارد و تا وقتی کاربر خودش دکمهٔ
     میکروفون را دوباره نزند (یا ۲۵ ثانیه به‌عنوان سقف ایمنی بگذرد) ادامه می‌دهد.
     برمی‌گرداند {promise, stop} — stop() را از بیرون صدا بزن تا ضبط را نگه دارد و نتیجه را بگیری. */
  listenWithRecording: function (onStart) {
    var self = this;
    if (!this.sttAvailable() || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || typeof MediaRecorder === 'undefined') {
      return { promise: this.listen(onStart).then(function (r) { r.audioUrl = null; return r; }), stop: function () {} };
    }
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var ctrl = { rec: null, stopped: false };
    var promise = navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      return new Promise(function (resolve) {
        var chunks = [];
        var mr = null;
        try { mr = new MediaRecorder(stream); } catch (e) { mr = null; }
        if (mr) {
          mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          try { mr.start(); } catch (e) { mr = null; }
        }
        var rec = new SR();
        ctrl.rec = rec;
        rec.lang = 'fr-FR';
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        var finalText = '';
        var done = false;
        var finish = function (result) {
          if (done) return;
          done = true;
          clearTimeout(timer);
          if (mr && mr.state !== 'inactive') {
            mr.onstop = function () {
              stream.getTracks().forEach(function (t) { t.stop(); });
              result.audioUrl = chunks.length ? URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/webm' })) : null;
              resolve(result);
            };
            mr.stop();
          } else {
            stream.getTracks().forEach(function (t) { t.stop(); });
            result.audioUrl = null;
            resolve(result);
          }
        };
        // سقف ایمنی — اگر کاربر یادش رفت خودش دکمه را بزند
        var timer = setTimeout(function () { ctrl.stopped = true; try { rec.stop(); } catch (e) { finish({ alts: finalText ? [finalText] : null, error: finalText ? null : 'timeout' }); } }, 25000);
        rec.onresult = function (e) {
          for (var i = e.resultIndex; i < e.results.length; i++) {
            if (e.results[i].isFinal) finalText = (finalText ? finalText + ' ' : '') + e.results[i][0].transcript;
          }
        };
        rec.onerror = function (e) { finish({ alts: finalText ? [finalText] : null, error: finalText ? null : ((e && e.error) || 'unknown') }); };
        rec.onend = function () { finish({ alts: finalText ? [finalText] : null, error: finalText ? null : 'no-speech' }); };
        if (onStart) onStart();
        try { rec.start(); } catch (e) { finish({ alts: null, error: 'start-failed' }); }
      });
    }).catch(function () {
      return self.listen(onStart).then(function (r) { r.audioUrl = null; return r; });
    });
    return {
      promise: promise,
      stop: function () {
        if (ctrl.stopped) return;
        ctrl.stopped = true;
        if (ctrl.rec) { try { ctrl.rec.stop(); } catch (e) {} }
      }
    };
  }
};

/* دکمه پخش صدا — کمکی برای ساخت HTML */
function audioBtn(text, label, slow) {
  var esc = text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  return '<button class="btn-audio" onclick="Voice.speak(\'' + esc + '\'' + (slow ? ',{slow:true}' : '') + ')">' +
    (label || '🔊') + '</button>';
}
