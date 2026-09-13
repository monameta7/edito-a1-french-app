/* ===== مکالمه زنده با معلم فرانسه (Claude API) =====
   به‌طور پیش‌فرض از یک کلید مشترک روی سرور (api/anthropic.js) استفاده می‌شود — نیازی
   به کلید شخصی نیست، فقط یک سقف رایگان روزانه دارد. اگر کاربر خودش در تنظیمات یک کلید
   API آنتروپیک وارد کند (فقط در localStorage همین مرورگر ذخیره می‌شود)، به‌جای آن مستقیم
   از مرورگر به Anthropic وصل می‌شود و دیگر محدودیتی ندارد. */
var Chat = {
  MODEL: 'claude-sonnet-5',
  MAX_TOKENS: 400,

  LEVEL_PROMPT: {
    easy: 'سطح مبتدی (A1 پایه): فقط زمان حال، جملات کوتاه و ساده، واژگان روزمره (سلام، معرفی، خانواده، غذا). خیلی آهسته و ساده پیش برو.',
    medium: 'سطح متوسط (A1 قوی): زمان حال + آینده نزدیک (futur proche) + کمی گذشته ساده، جملات کمی بلندتر، موضوعات متنوع‌تر (خرید، برنامه روزانه، سفر).',
    hard: 'سطح پیشرفته (پایان A1): passé composé و imparfait را هم به‌کار ببر، جملات پیچیده‌تر، بحث درباره نظرات و خاطرات و برنامه‌ها.'
  },

  systemPrompt: function (level, topic) {
    return 'تو یک معلم بومی و صمیمی زبان فرانسه هستی که داری با یک زبان‌آموز فارسی‌زبان مبتدی (سطح A1، بر اساس کتاب Édito) مکالمه تمرینی انجام می‌دهی.\n' +
      'سطح این جلسه: ' + this.LEVEL_PROMPT[level] + '\n' +
      (topic ? 'موضوع مکالمه: ' + topic + '\n' : 'موضوع مکالمه: هرچه پیش آمد، از موضوعات آشنای سطح A1.\n') +
      '\nقوانین پاسخ (خیلی مهم — دقیقاً همین قالب را رعایت کن):\n' +
      '۱) همیشه دقیقاً به همین شکل دو خط جواب بده، نه بیشتر:\n' +
      'FR: <یک یا دو جمله فرانسه ساده و طبیعی، در ادامه مکالمه، که با یک سؤال کوتاه تمام می‌شود تا مکالمه ادامه پیدا کند>\n' +
      'FA: <بازخورد کوتاه فارسی روی جمله فرانسه‌ای که کاربر همین الان نوشت — اگر اشتباه داشت با محبت تصحیح کن و دلیلش را در یک جمله بگو؛ اگر درست بود «عالی بود!» یا مشابه بگو>\n' +
      '۲) اگر این اولین پیام توست (کاربر هنوز چیزی ننوشته)، خط FA را خالی نگذار — یک خوشامد کوتاه فارسی بنویس.\n' +
      '۳) جمله‌های FR باید دقیقاً هم‌سطح باشند — کلمه سخت یا گرامر بالاتر از سطح گفته‌شده استفاده نکن.\n' +
      '۴) هرگز از این قالب دو خطی خارج نشو، توضیح اضافه یا مقدمه ننویس.';
  },

  /* آیا کاربر کلید شخصی خودش را وارد کرده؟ (اختیاری — بدون آن هم از سهمیه مشترک استفاده می‌شود) */
  hasKey: function () { return !!(Store.state.settings.apiKey || '').trim(); },

  /* فراخوانی مشترک Claude API — هم برای مکالمه زنده و هم تصحیح نوشتار استفاده می‌شود.
     اگر کلید شخصی وجود داشته باشد مستقیم از مرورگر به Anthropic وصل می‌شود، وگرنه از
     واسط مشترک روی سرور (api/anthropic.js) که سقف رایگان روزانه دارد استفاده می‌کند. */
  _call: function (system, messages, maxTokens) {
    var ownKey = (Store.state.settings.apiKey || '').trim();
    var url = ownKey ? 'https://api.anthropic.com/v1/messages' : '/api/anthropic';
    var headers = { 'content-type': 'application/json' };
    if (ownKey) {
      headers['x-api-key'] = ownKey;
      headers['anthropic-version'] = '2023-06-01';
      headers['anthropic-dangerous-direct-browser-access'] = 'true';
    }
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        model: this.MODEL,
        max_tokens: maxTokens,
        system: system,
        messages: messages
      })
    }).then(function (res) {
      if (!res.ok) {
        return res.json().catch(function () { return null; }).then(function (errBody) {
          var msg = errBody && errBody.error && errBody.error.message;
          var err = new Error(msg || ('HTTP ' + res.status));
          err.status = res.status;
          throw err;
        });
      }
      return res.json();
    }).then(function (data) {
      var block = (data.content || []).filter(function (b) { return b.type === 'text'; })[0];
      return block ? block.text : '';
    });
  },

  /* یک پیام به Claude می‌فرستد؛ history آرایه‌ای از {role,content} فرانسه/فارسی است */
  send: function (history, level, topic) {
    return this._call(this.systemPrompt(level, topic), history, this.MAX_TOKENS);
  },

  /* ===== جلسه مرور فاصله‌دار (لایتنر) با معلم — بر پایه سیستم لایتنر + منطق فواصل SM-2 =====
     برخلاف مکالمه آزاد، اینجا آیتم‌ها را خودِ اپ (از SRS.dueDetailed) می‌دهد و پیشرفت
     واقعی جعبه‌ها همچنان با کارت‌های خودکار همین صفحه (✅/❌) به‌روز می‌شود — این گفت‌وگو
     یک تمرینِ عمیق‌ترِ مکمل است، نه جایگزین رسمی موتور لایتنرِ اپ. */
  srsSystemPrompt: function (items) {
    var list = items.map(function (it, i) {
      return (i + 1) + '. ' + it.fr + (it.ipa ? ' [' + it.ipa + ']' : '') + ' — ' + it.fa +
        (it.ex ? ' | مثال: ' + it.ex + (it.exfa ? ' (' + it.exfa + ')' : '') : '') +
        ' — جعبه فعلی: ' + it.box + (it.wrong ? ' — قبلاً ' + it.wrong + ' بار غلط زده' : '');
    }).join('\n');
    return 'تو مربی «مرور فاصله‌دار» (Spaced Repetition) زبان فرانسه‌ی من هستی، بر پایه سیستم لایتنر. ' +
      'من فارسی‌زبانم، سطحم A1، با سیلابس Édito A1 کار می‌کنم. همه توضیحات را فارسی بده.\n' +
      'هدف این جلسه یادگیری لغت جدید نیست — انتقال همین لغات و عبارات از حافظه کوتاه‌مدت به بلندمدت است. ' +
      'هیچ لغتی از خودت اضافه نکن، فقط با فهرست زیر کار کن.\n\n' +
      '=== قوانین جلسه ===\n' +
      '۱) آیتم‌ها را هرگز به ترتیبِ فهرست زیر یا بر اساس موضوع مشترک نپرس — عمداً قاطی (interleave) کن.\n' +
      '۲) نوع سؤال را بر اساس «جعبه فعلی» هر آیتم انتخاب کن:\n' +
      '   • جعبه ۱ یا ۲ → فرانسه به فارسی (بازشناسی: کلمه فرانسه را نشان بده، معنی را بپرس)\n' +
      '   • جعبه ۳ یا ۴ → فارسی به فرانسه (تولید: معنی فارسی را بده، بخواه به فرانسه بنویسد — با accent و elision درست)\n' +
      '   • جعبه ۵ → کاربردی: یک موقعیت واقعی کوتاه بده و بخواه با آن کلمه جمله بسازد\n' +
      '۳) سؤال‌ها را یکی‌یکی بپرس و منتظر پاسخ من بمان — هرگز جواب را قبل از پاسخ من نشان نده. ' +
      'بعد از هر پاسخ: درست/غلط + شکل صحیح + یک جمله دلیل، کوتاه.\n' +
      '۴) accent و elision جزو پاسخ درست‌اند: J\'habite نه Je habite، d\'Iran نه de Iran. اگر این‌ها را جا انداختم، اشتباه حساب کن.\n' +
      '۵) تلفظ را با نویسه فارسی بنویس، ولی هرگز R فرانسوی را معادل «ر» فارسی یا «ق» عربی نگیر — اگر لازم شد جدا توضیح بده.\n' +
      '۶) این خطاهای رایج من را زیر نظر بگیر و هرجا دیدی گوشزد کن: نوشتن ju به‌جای je؛ حذف elision؛ افتادن یا اشتباه‌گذاشتن accent و à؛ ' +
      'مؤنث‌کردن نام زبان‌ها (نام زبان‌ها در فرانسه همیشه مذکرند)؛ نبود مطابقت جمع صفت با cheveux؛ به‌کاربردن avoir به‌جای être با chauve؛ غلط املایی در کلمات پرکاربرد.\n' +
      '۷) حداکثر ۲۰ آیتم در هر جلسه (فهرست زیر همین سقف را رعایت کرده). اگر پیام من «جلسه پنج‌دقیقه‌ای» بود، فقط ۸ تای اول فهرست را بپرس و بخش جمله‌سازی پایانی را حذف کن.\n' +
      '۸) در پایان جلسه (وقتی همه آیتم‌ها پرسیده شدند)، این دو بخش را بده:\n' +
      '   «### جمله‌سازی» — سه جمله تولیدی از من بخواه که لغات ضعیف‌تر را با گرامری که تازه خوانده‌ام ترکیب کند.\n' +
      '   «### جدول تصحیح» — جدولی با ستون‌های «آنچه نوشتم | شکل درست | قاعده» برای همه خطاهای این جلسه.\n' +
      '   نیازی به دادن جدول وضعیت جعبه‌ها نیست — این اپ خودش پیشرفت جعبه‌ها را جدا نگه می‌دارد.\n\n' +
      '=== آیتم‌های امروز (فقط همین‌ها را بپرس) ===\n' + list + '\n\n' +
      'همین الان شروع کن: اولین سؤال را (قاطی‌شده، نه به ترتیب بالا) بپرس.';
  },

  sendSrs: function (history, items) {
    return this._call(this.srsSystemPrompt(items), history, 1200);
  },

  /* متن دوخطی FR/FA را جدا می‌کند */
  parseReply: function (text) {
    var frMatch = text.match(/FR:\s*([\s\S]*?)(?:\nFA:|$)/i);
    var faMatch = text.match(/FA:\s*([\s\S]*)$/i);
    return {
      fr: frMatch ? frMatch[1].trim() : text.trim(),
      fa: faMatch ? faMatch[1].trim() : ''
    };
  },

  /* سیستم‌پرامپت تصحیح نوشتار آزاد — طبق نقش معلم در TEACHER.md */
  writeSystemPrompt: function (ex) {
    return 'تو معلم حرفه‌ای و صبور زبان فرانسه هستی که داری نوشتار یک زبان‌آموز فارسی‌زبان مبتدی (سطح A1، سیلابس Édito) را تصحیح می‌کنی.\n' +
      'صورت تمرین: ' + ex.prompt + '\n' +
      (ex.topic ? 'مبحث: ' + ex.topic + '\n' : '') +
      '\nخروجی را دقیقاً با این ساختار و به فارسی بنویس (هیچ مقدمه یا توضیح اضافه بیرون از این قالب ننویس):\n\n' +
      '### خطاها\n' +
      'هر خطا را در یک خط جدا با این قالب بنویس: «قسمت اشتباه» ← «تصحیح درست» — دلیل خطا و قاعده گرامری مرتبط را با جزئیات کافی و به‌زبان ساده توضیح بده (گرامر، املا، اکسان، انتخاب واژه، ساختار جمله). اگر خطایی نبود فقط بنویس: هیچ خطایی نداشت! 🎉\n\n' +
      '### نسخه تصحیح‌شده\n' +
      'کل متن را به‌صورت تصحیح‌شده، طبیعی و کامل به فرانسه بنویس.\n\n' +
      '### نمره\n' +
      'یک عدد از ۱۰.\n\n' +
      '### بازخورد\n' +
      'یک یا دو جمله تشویق‌کننده به فارسی، و اگر الگوی خطای تکراری دیدی، یک پیشنهاد کوتاه برای تمرین بیشتر.';
  },

  /* تصحیح آنلاین یک نوشتار آزاد؛ Promise<string خام از مدل> */
  gradeWriting: function (ex, userText) {
    return this._call(this.writeSystemPrompt(ex), [{ role: 'user', content: userText }], 1000);
  },

  /* متن پاسخ معلم (با تیترهای ###) را به HTML امن تبدیل می‌کند */
  formatWritingFeedback: function (text) {
    var esc = Exercises.esc;
    var lines = (text || '').split('\n');
    var html = '', para = [];
    function flush() {
      if (para.length) { html += '<p>' + para.join('<br>') + '</p>'; para = []; }
    }
    lines.forEach(function (line) {
      var h = line.match(/^###\s+(.+)/);
      if (h) { flush(); html += '<h4>' + esc(h[1].trim()) + '</h4>'; }
      else if (!line.trim()) { flush(); }
      else para.push(esc(line));
    });
    flush();
    return html;
  },

  errorMessage: function (err) {
    if (err.status === 401) return '🔑 کلید API نامعتبر است. در تنظیمات دوباره بررسی و از نو کپی کن (بدون فاصله اضافه).';
    if (err.status === 403) return '🚫 دسترسی رد شد — کلید ممکن است غیرفعال یا محدودشده باشد.';
    if (err.status === 429) return this.hasKey() ? '⏳ محدودیت نرخ درخواست — کمی صبر کن و دوباره امتحان کن.' : (err.message || '⏳ سقف رایگان امروز پر شده — فردا دوباره امتحان کن.');
    if (err.status === 400 && /credit|billing/i.test(err.message || '')) return '💳 اعتبار حساب Anthropic تمام شده یا روش پرداخت ثبت نشده.';
    if (err.status) return '⚠️ خطای سرور (' + err.status + '): ' + (err.message || '');
    if (location.protocol === 'file:') {
      return '📡 اتصال به سرور Anthropic ناموفق بود — چون اپ را با دابل‌کلیک (file://) باز کرده‌ای، مرورگر این درخواست را مسدود می‌کند. فایل start-server.bat را اجرا کن و از آدرس http://localhost:5173 استفاده کن.';
    }
    return '📡 مشکل اتصال به اینترنت یا سرور Anthropic (' + (err.message || 'اتصال برقرار نشد') + '). دوباره امتحان کن.';
  }
};

var Views = window.Views || {};

Views.chat = function (el, mode) {
  var isSrs = mode === 'srs';
  var conv = isSrs ? Store.state.srsConversation : Store.state.conversation;
  var LEVELS = [
    { id: 'easy', icon: '🟢', title: 'مبتدی' },
    { id: 'medium', icon: '🟡', title: 'متوسط' },
    { id: 'hard', icon: '🔴', title: 'پیشرفته' }
  ];

  if (isSrs && !conv.messages.length) conv.items = SRS.dueDetailed(20);

  var fileWarning = location.protocol === 'file:'
    ? '<div class="card"><div class="feedback bad">⚠️ اپ را با دابل‌کلیک روی فایل باز کرده‌ای (آدرس با file:// شروع می‌شود). این بخش روی این حالت کار نمی‌کند چون مرورگر درخواست به سرور Anthropic را مسدود می‌کند. فایل <b>start-server.bat</b> را اجرا کن و از آدرس <b class="fr">http://localhost:5173</b> استفاده کن.</div></div>'
    : '';
  var quotaNote = Chat.hasKey() ? '' :
    '<div class="muted" style="margin-top:6px">💬 این بخش رایگان و بدون نیاز به کلید کار می‌کند (با یک سقف روزانه مشترک). برای استفاده نامحدود، کلید شخصی‌ات را در <a href="#settings">تنظیمات</a> وارد کن.</div>';

  var headerCard = isSrs
    ? '<div class="card"><h2>🧠 مرور فاصله‌دار با معلم</h2>' + quotaNote +
      '<div class="muted" style="margin-top:6px">معلم هوش‌مصنوعی از روی همان لغاتی که امروز در جعبه لایتنرت سررسید شده‌اند سؤال می‌پرسد — قاطی‌شده، نه به ترتیب درس. پیشرفت جعبه‌ها همچنان با کارت‌های ✅/❌ همین صفحه ثبت می‌شود؛ این یک تمرین عمیق‌تر مکمل است.</div>' +
      '<div class="btnrow"><button class="btn new-chat">🔄 جلسه جدید</button></div></div>'
    : '<div class="card"><h2>🗣️ مکالمه زنده با معلم</h2>' + quotaNote +
      '<div class="btnrow picker level-pick"></div>' +
      '<input class="ex-input topic-input" type="text" placeholder="موضوع دلخواه (اختیاری) — مثلاً: خانواده، سفر، رستوران" style="direction:rtl;text-align:right;margin-top:8px">' +
      '<div class="btnrow"><button class="btn new-chat">🔄 مکالمه جدید</button></div></div>';

  el.innerHTML = fileWarning + headerCard +
    '<div class="chat-log"></div>' +
    '<div class="card chat-input-card">' +
    '<div class="btnrow speak-row"></div>' +
    '<textarea class="ex-input chat-input" rows="2" placeholder="' + (isSrs ? 'پاسخت را بنویس...' : 'به فرانسه بنویس... (یا از میکروفون استفاده کن)') + '"></textarea>' +
    '<div class="btnrow"><button class="btn send-btn">ارسال ➤</button></div>' +
    '<div class="chat-status muted"></div></div>';

  var log = el.querySelector('.chat-log');
  var input = el.querySelector('.chat-input');
  var status = el.querySelector('.chat-status');
  var topicInput = el.querySelector('.topic-input');

  if (!isSrs) {
    var levelPick = el.querySelector('.level-pick');
    LEVELS.forEach(function (lv) {
      var b = document.createElement('button');
      b.className = 'btn-ghost picker-btn' + (lv.id === conv.level ? ' sel' : '');
      b.textContent = lv.icon + ' ' + lv.title;
      b.onclick = function () {
        conv.level = lv.id;
        Store.save();
        levelPick.querySelectorAll('.picker-btn').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
      };
      levelPick.appendChild(b);
    });
  }

  function renderAssistantHtml(text) {
    if (!isSrs) {
      var parsed = Chat.parseReply(text);
      return (parsed.fr ? '<div class="fr chat-fr">' + Exercises.esc(parsed.fr) + ' ' + audioBtn(parsed.fr) + '</div>' : '') +
        (parsed.fa ? '<div class="chat-fa">' + Exercises.esc(parsed.fa) + '</div>' : '');
    }
    return Chat.formatWritingFeedback(text);
  }

  function renderLog() {
    log.innerHTML = '';
    if (!conv.messages.length) {
      if (isSrs) {
        if (!conv.items || !conv.items.length) {
          log.innerHTML = '<div class="muted center">فعلاً کارتی سررسید نشده — بعداً دوباره سر بزن! ✅</div>';
        } else {
          log.innerHTML = '<div class="muted center">' + conv.items.length + ' آیتم امروز سررسید شده. آماده‌ای؟</div>' +
            '<div class="btnrow" style="justify-content:center"><button class="btn btn-lg start-srs">شروع جلسه ▶️</button></div>';
          log.querySelector('.start-srs').onclick = function () { sendMessage('بزن بریم!'); };
        }
      } else {
        log.innerHTML = '<div class="muted center">هنوز چیزی ننوشتی — یک پیام بفرست تا مکالمه شروع شود!</div>';
      }
      return;
    }
    conv.messages.forEach(function (m) {
      var div = document.createElement('div');
      if (m.role === 'user') {
        div.className = 'chat-msg user';
        div.innerHTML = '<div class="chat-bubble' + (isSrs ? '' : ' fr') + '">' + Exercises.esc(m.content) + '</div>';
      } else {
        div.className = 'chat-msg assistant';
        div.innerHTML = '<div class="chat-bubble">' + renderAssistantHtml(m.content) + '</div>';
      }
      log.appendChild(div);
    });
    log.scrollTop = log.scrollHeight;
  }
  renderLog();

  function setBusy(busy) {
    el.querySelector('.send-btn').disabled = busy;
    input.disabled = busy;
    status.textContent = busy ? '⏳ در حال فکر کردن...' : '';
  }

  function requestReply() {
    setBusy(true);
    status.innerHTML = '';
    var promise = isSrs ? Chat.sendSrs(conv.messages, conv.items) : Chat.send(conv.messages, conv.level, topicInput.value.trim());
    promise
      .then(function (reply) {
        conv.messages.push({ role: 'assistant', content: reply });
        Store.state.conversationTurns++;
        Store.addXP(8);
        Store.addActivity();
        Store.save();
        renderLog();
        setBusy(false);
        if (!isSrs) {
          var parsed = Chat.parseReply(reply);
          if (parsed.fr) Voice.speak(parsed.fr);
        }
        Gamification.toastNew();
      })
      .catch(function (err) {
        setBusy(false);
        status.innerHTML = '<span class="chip bad">' + Chat.errorMessage(err) + '</span> ' +
          '<button class="btn-ghost retry-btn">تلاش دوباره</button>';
        status.querySelector('.retry-btn').onclick = requestReply;
      });
  }

  function sendMessage(text) {
    text = (text || '').trim();
    if (!text) return;
    conv.messages.push({ role: 'user', content: text });
    Store.save();
    renderLog();
    input.value = '';
    requestReply();
  }

  el.querySelector('.send-btn').onclick = function () { sendMessage(input.value); };
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input.value); }
  });

  el.querySelector('.new-chat').onclick = function () {
    if (conv.messages.length && !confirm((isSrs ? 'جلسه' : 'مکالمه') + ' فعلی پاک شود؟')) return;
    conv.messages = [];
    if (isSrs) conv.items = SRS.dueDetailed(20);
    Store.save();
    renderLog();
  };

  if (Voice.sttAvailable()) {
    var speakRow = el.querySelector('.speak-row');
    speakRow.innerHTML = '<button class="mic-btn" style="width:52px;height:52px;font-size:24px">🎤</button><span class="muted">میکروفون را بزن و به فرانسه حرف بزن</span>';
    var mic = speakRow.querySelector('.mic-btn');
    mic.onclick = function () {
      mic.classList.add('listening');
      Voice.listen().then(function (res) {
        mic.classList.remove('listening');
        if (res && res.alts && res.alts[0]) {
          input.value = res.alts[0];
        } else if (res && res.error) {
          status.innerHTML = '<span class="chip warn">' + Exercises.micErrorMessage(res.error) + '</span>';
        }
      });
    };
  }
};
