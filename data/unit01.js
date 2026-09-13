/* ===== واحد ۱: Je suis... — من هستم... ===== */
EDITO.units[1] = {
  id: 1,
  title: 'Je suis...',
  fa: 'من هستم...',
  theme: 'معرفی خود: اسم، ملیت، سن — فعل‌های être، avoir، s\'appeler، parler، صفت پرسشی quel، اوقات فراغت، اعداد ۳۲ تا ۱۰۰',
  culture: {
    title: 'حریم خصوصی 💼',
    body: 'برخلاف خیلی از فرهنگ‌ها، فرانسوی‌ها معمولاً در برخورد اول درباره‌ی حقوق یا سن سؤال نمی‌کنند — این موضوع خصوصی تلقی می‌شود. اما پرسیدن اهل‌کجا بودن و زبان‌هایی که بلدی، بخشی کاملاً عادی از آشنایی اولیه است.'
  },
  lessons: [
    {
      id: 'u1l1',
      title: 'Je me présente',
      fa: 'خودم را معرفی می‌کنم',
      vocab: [
        { fr: 'je', ipa: 'ʒə', fa: 'من', ex: 'Je suis Sara.', exfa: 'من سارا هستم.' },
        { fr: 'tu', ipa: 'ty', fa: 'تو', ex: 'Tu es étudiant ?', exfa: 'تو دانشجویی؟' },
        { fr: 'il / elle', ipa: 'il / ɛl', fa: 'او (مرد / زن)', ex: 'Elle est iranienne.', exfa: 'او (زن) ایرانی است.' },
        { fr: 'nous', ipa: 'nu', fa: 'ما', ex: 'Nous sommes amis.', exfa: 'ما دوست هستیم.' },
        { fr: 'vous', ipa: 'vu', fa: 'شما', ex: 'Vous êtes français ?', exfa: 'شما فرانسوی هستید؟' },
        { fr: 'ils / elles', ipa: 'il / ɛl', fa: 'آنها (مذکر / مؤنث)', ex: 'Ils sont étudiants.', exfa: 'آنها دانشجو هستند.' },
        { fr: 's\'appeler', ipa: 'saple', fa: 'نام داشتن', ex: 'Je m\'appelle Mona.', exfa: 'اسم من موناست.' },
        { fr: 'être', ipa: 'ɛtʁ', fa: 'بودن', ex: 'Je suis étudiante.', exfa: 'من دانشجو هستم.' },
        { fr: 'parler', ipa: 'paʁle', fa: 'حرف زدن', ex: 'Je parle persan.', exfa: 'فارسی حرف می‌زنم.' },
        { fr: 'un prénom', ipa: 'pʁenɔ̃', fa: 'اسم کوچک', ex: 'Mon prénom est Karim.', exfa: 'اسم کوچک من کریم است.' },
        { fr: 'un nom', ipa: 'nɔ̃', fa: 'نام خانوادگی', ex: 'Votre nom, s\'il vous plaît ?', exfa: 'نام خانوادگی‌تان، لطفاً؟' },
        { fr: 'enchanté / enchantée', ipa: 'ɑ̃ʃɑ̃te', fa: 'خوشوقتم (مرد / زن)', ex: 'Enchantée, madame !', exfa: 'خوشوقتم خانم!' }
      ],
      phrases: [
        { fr: 'Comment tu t\'appelles ?', fa: 'اسمت چیه؟ (خودمانی)' },
        { fr: 'Comment vous vous appelez ?', fa: 'اسم شما چیست؟ (رسمی)' },
        { fr: 'Je m\'appelle...', fa: 'اسم من ... است' },
        { fr: 'Quel est votre prénom ?', fa: 'اسم کوچک‌تان چیست؟' },
        { fr: 'Je vous présente...', fa: '... را به شما معرفی می‌کنم' }
      ],
      grammar: {
        title: 'Le verbe « être » et « s\'appeler »',
        body: 'فعل <b>être</b> (بودن) مهم‌ترین فعل فرانسه است و کاملاً بی‌قاعده. باید صرفش را حفظ کنی. ' +
          'فعل <b>s\'appeler</b> (نام داشتن) هم برای گفتن اسم به کار می‌رود.<br>' +
          'نکته: در فرانسه برخلاف فارسی، آوردن ضمیر (je ،tu ،il...) قبل از فعل <b>اجباری</b> است.',
        table: {
          head: ['ضمیر', 'être — بودن', 's\'appeler — نام داشتن'],
          rows: [
            ['je', 'suis', 'm\'appelle'],
            ['tu', 'es', 't\'appelles'],
            ['il / elle', 'est', 's\'appelle'],
            ['nous', 'sommes', 'nous appelons'],
            ['vous', 'êtes', 'vous appelez'],
            ['ils / elles', 'sont', 's\'appellent']
          ]
        },
        examples: [
          { fr: 'Je m\'appelle Mona et je suis iranienne.', fa: 'اسم من موناست و ایرانی هستم.' },
          { fr: 'Il s\'appelle Thomas. Il est français.', fa: 'اسم او توماست. فرانسوی است.' },
          { fr: 'Vous êtes madame Laurent ?', fa: 'شما خانم لوران هستید؟' }
        ]
      },
      phonetics: {
        title: 'آوای [y] فرانسوی (u)',
        body: 'حرف <b>u</b> در فرانسه صدایی دارد که در فارسی نیست: لب‌ها را مثل «او» گرد کن ولی «ای» بگو! با <b>ou</b> (که همان «او» فارسی است) اشتباهش نگیر:',
        items: [
          { fr: 'tu', ipa: 'ty', fa: 'تو — با لب گرد' },
          { fr: 'vous', ipa: 'vu', fa: 'شما — «او» معمولی' },
          { fr: 'salut', ipa: 'saly', fa: 'سلام' },
          { fr: 'su / sous', ipa: 'sy / su', fa: 'مقایسه کن!' }
        ]
      },
      dialogue: {
        title: 'Enchanté !',
        lines: [
          { s: 'Thomas', fr: 'Bonjour ! Je m\'appelle Thomas. Et vous ?', fa: 'سلام! اسم من توماست. و شما؟' },
          { s: 'Mona', fr: 'Bonjour ! Moi, c\'est Mona.', fa: 'سلام! من مونا هستم.' },
          { s: 'Thomas', fr: 'Enchanté, Mona !', fa: 'خوشوقتم مونا!' },
          { s: 'Mona', fr: 'Enchantée ! Je vous présente Sara, c\'est une amie.', fa: 'خوشوقتم! سارا را معرفی می‌کنم، یک دوست است.' },
          { s: 'Thomas', fr: 'Bonjour Sara ! Vous parlez français ?', fa: 'سلام سارا! شما فرانسه صحبت می‌کنید؟' },
          { s: 'Sara', fr: 'Un peu ! Je parle surtout persan et anglais.', fa: 'کمی! بیشتر فارسی و انگلیسی حرف می‌زنم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'صرف درست فعل être:', q: 'Je ___ étudiante.', answer: ['suis'] },
        { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'صرف درست فعل être:', q: 'Vous ___ français ?', answer: ['êtes', 'etes'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل être', level: 'easy', q: 'کدام جمله درست است؟', options: ['Ils sont étudiants.', 'Ils est étudiants.', 'Ils suis étudiants.', 'Ils êtes étudiants.'], correct: 0, explain: 'با ils/elles همیشه sont می‌آید.' },
        { type: 'fill', skill: 'GR', topic: 'فعل s\'appeler', level: 'easy', fa: 'جای خالی را پر کن:', q: 'Elle ___ Marie.', answer: ["s'appelle", 's appelle', 'sappelle'], explain: 'سوم شخص: elle s\'appelle.' },
        { type: 'mcq', skill: 'CO', topic: 'معرفی خود', level: 'easy', q: '🎧 گوش کن — اسم این خانم چیست؟', audio: 'Bonjour, je m\'appelle Céline Martin. Je parle français et anglais.', audioFa: 'سلام، اسم من سلین مارتن است. فرانسه و انگلیسی حرف می‌زنم.', options: ['Céline', 'Marie', 'Sara', 'Léa'], correct: 0 },
        { type: 'order', skill: 'GR', topic: 'معرفی خود', level: 'easy', answer: 'Je m\'appelle Mona.', fa: 'جمله «اسم من موناست» را بساز:' },
        { type: 'dictation', skill: 'CO', topic: 'معرفی خود', level: 'medium', text: 'Il s\'appelle Thomas.', trans: 'اسم او توماست.' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Bonjour ! Je m\'appelle Mona. Enchantée !', fa: 'سلام! اسم من موناست. خوشوقتم!' },
        { type: 'mcq', skill: 'CE', topic: 'معرفی خود', level: 'easy', q: 'این متن را بخوان — سارا کیست؟', qfr: 'Bonjour ! Je vous présente Sara. C\'est une amie. Elle parle persan et anglais.', options: ['یک دوست که دو زبان بلد است', 'معلم فرانسه', 'خواهر نویسنده', 'یک خانم فرانسوی'], correct: 0, frOptions: false },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'خودت را معرفی کن: سلام کن و اسمت را بگو. (دو جمله)', min: 5, sample: 'Bonjour ! Je m\'appelle Mona. Enchantée !' }
      ]
    },
    {
      id: 'u1l2',
      title: 'Nationalités et loisirs',
      fa: 'ملیت‌ها و اوقات فراغت',
      vocab: [
        { fr: 'iranien / iranienne', ipa: 'iʁanjɛ̃ / iʁanjɛn', fa: 'ایرانی (مرد / زن)', ex: 'Je suis iranienne.', exfa: 'من ایرانی هستم. (زن)' },
        { fr: 'français / française', ipa: 'fʁɑ̃sɛ / fʁɑ̃sɛz', fa: 'فرانسوی', ex: 'Il est français.', exfa: 'او فرانسوی است.' },
        { fr: 'anglais / anglaise', ipa: 'ɑ̃ɡlɛ / ɑ̃ɡlɛz', fa: 'انگلیسی', ex: 'Elle est anglaise.', exfa: 'او انگلیسی است.' },
        { fr: 'allemand / allemande', ipa: 'almɑ̃ / almɑ̃d', fa: 'آلمانی', ex: 'Hans est allemand.', exfa: 'هانس آلمانی است.' },
        { fr: 'espagnol / espagnole', ipa: 'ɛspaɲɔl', fa: 'اسپانیایی', ex: 'Elle est espagnole.', exfa: 'او اسپانیایی است.' },
        { fr: 'chinois / chinoise', ipa: 'ʃinwa / ʃinwaz', fa: 'چینی', ex: 'Li est chinois.', exfa: 'لی چینی است.' },
        { fr: 'un pays', ipa: 'pei', fa: 'کشور', ex: 'L\'Iran est un grand pays.', exfa: 'ایران کشور بزرگی است.' },
        { fr: 'l\'Iran', ipa: 'iʁɑ̃', fa: 'ایران', ex: 'Je viens d\'Iran.', exfa: 'من اهل ایرانم.' },
        { fr: 'la France', ipa: 'fʁɑ̃s', fa: 'فرانسه', ex: 'J\'habite en France.', exfa: 'در فرانسه زندگی می‌کنم.' },
        { fr: 'les loisirs', ipa: 'lwaziʁ', fa: 'اوقات فراغت / سرگرمی', ex: 'Quels sont tes loisirs ?', exfa: 'سرگرمی‌هایت چیست؟' },
        { fr: 'le cinéma', ipa: 'sinema', fa: 'سینما', ex: 'J\'aime le cinéma.', exfa: 'سینما را دوست دارم.' },
        { fr: 'la musique', ipa: 'myzik', fa: 'موسیقی', ex: 'J\'écoute de la musique.', exfa: 'موسیقی گوش می‌دهم.' },
        { fr: 'le sport', ipa: 'spɔʁ', fa: 'ورزش', ex: 'Je fais du sport.', exfa: 'ورزش می‌کنم.' },
        { fr: 'la lecture', ipa: 'lɛktyʁ', fa: 'کتاب‌خوانی', ex: 'J\'aime la lecture.', exfa: 'کتاب‌خوانی را دوست دارم.' }
      ],
      phrases: [
        { fr: 'Quelle est votre nationalité ?', fa: 'ملیت شما چیست؟' },
        { fr: 'Je viens d\'Iran.', fa: 'من اهل ایران هستم.' },
        { fr: 'Quels sont tes loisirs ?', fa: 'سرگرمی‌هایت چیست؟' },
        { fr: 'J\'aime le cinéma et la musique.', fa: 'سینما و موسیقی را دوست دارم.' }
      ],
      grammar: {
        title: 'Le masculin/féminin des nationalités + « quel »',
        body: 'در فرانسه صفت‌های ملیت با <b>جنسیت</b> شخص تغییر می‌کنند. قاعده کلی: برای مؤنث یک <b>e-</b> به آخر اضافه می‌شود؛ اگر واژه به صامت ختم شود، این e باعث می‌شود آن صامت <b>خوانده شود</b>: français «فرانسه» ← française «فرانسز».<br><br>' +
          'برای پرسیدن «کدام / چه»، از صفت پرسشی <b>quel</b> استفاده می‌کنیم که با اسم بعدش مطابقت دارد:<br>' +
          '<b>quel</b> (مذکر) — <b>quelle</b> (مؤنث) — <b>quels/quelles</b> (جمع)<br>' +
          'Quel<b>le</b> est votre nationalité ? | Quel<b>s</b> sont tes loisirs ?',
        table: {
          head: ['مذکر', 'مؤنث', 'معنی'],
          rows: [
            ['iranien', 'iranienne', 'ایرانی'],
            ['français', 'française', 'فرانسوی'],
            ['allemand', 'allemande', 'آلمانی'],
            ['quel', 'quelle', 'کدام / چه']
          ]
        },
        examples: [
          { fr: 'Karim est iranien. Sara est iranienne.', fa: 'کریم ایرانی است. سارا ایرانی است.' },
          { fr: 'Quel est ton pays ? — L\'Iran.', fa: 'کشورت کدام است؟ — ایران.' }
        ]
      },
      phonetics: {
        title: 'تلفظ مذکر و مؤنث',
        body: 'مهم‌ترین تفاوت شنیداری: در مذکر، صامت آخر بی‌صداست ولی در مؤنث خوانده می‌شود:',
        items: [
          { fr: 'français / française', ipa: 'fʁɑ̃sɛ / fʁɑ̃sɛz', fa: 'ز آخر فقط در مؤنث' },
          { fr: 'allemand / allemande', ipa: 'almɑ̃ / almɑ̃d', fa: 'د آخر فقط در مؤنث' },
          { fr: 'iranien / iranienne', ipa: 'iʁanjɛ̃ / iʁanjɛn', fa: 'تودماغی ← معمولی' }
        ]
      },
      dialogue: {
        title: 'D\'où venez-vous ?',
        lines: [
          { s: 'Julie', fr: 'Vous êtes française ?', fa: 'شما فرانسوی هستید؟' },
          { s: 'Mona', fr: 'Non, je suis iranienne. Je viens de Téhéran.', fa: 'نه، من ایرانی‌ام. اهل تهرانم.' },
          { s: 'Julie', fr: 'Ah, super ! Et quels sont tes loisirs ?', fa: 'اوه، عالی! و سرگرمی‌هایت چیست؟' },
          { s: 'Mona', fr: 'J\'aime la lecture et le cinéma. Et toi ?', fa: 'کتاب‌خوانی و سینما را دوست دارم. تو چی؟' },
          { s: 'Julie', fr: 'Moi, j\'adore la musique et le sport.', fa: 'من عاشق موسیقی و ورزشم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'سارا یک خانم است. جمله را کامل کن:', q: 'Sara est ___. (ایرانی)', answer: ['iranienne'], explain: 'برای زن: iranienne با دو n و e.' },
        { type: 'mcq', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', q: 'کدام درست است؟ «توما (مرد) فرانسوی است.»', options: ['Thomas est français.', 'Thomas est française.', 'Thomas es français.', 'Thomas est francais e.'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'صفت پرسشی quel', level: 'medium', fa: 'quel یا quelle؟', q: '___ est votre nationalité ?', answer: ['Quelle', 'quelle'], explain: 'nationalité مؤنث است: quelle.' },
        { type: 'mcq', skill: 'CO', topic: 'ملیت و جنسیت', level: 'easy', q: '🎧 گوش کن — این شخص زن است یا مرد؟', audio: 'C\'est une étudiante allemande.', audioFa: 'او یک دانشجوی آلمانی است. (زن)', options: ['زن', 'مرد', 'نمی‌شود فهمید'], correct: 0, frOptions: false, explain: 'étudiantE و allemandE — صامت آخر خوانده شد، پس مؤنث است.' },
        { type: 'match', skill: 'VO', topic: 'اوقات فراغت', level: 'easy', fa: 'جور کن:', pairs: [['le cinéma', 'سینما'], ['la musique', 'موسیقی'], ['le sport', 'ورزش'], ['la lecture', 'کتاب‌خوانی']] },
        { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'مؤنثِ « anglais » را بنویس:', q: 'Il est anglais. → Elle est ___.', answer: ['anglaise'] },
        { type: 'dictation', skill: 'CO', topic: 'اوقات فراغت', level: 'medium', text: 'J\'aime le cinéma et la musique.', trans: 'سینما و موسیقی را دوست دارم.' },
        { type: 'order', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', answer: 'Je viens d\'Iran.', fa: 'جمله «من اهل ایرانم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Je suis iranienne. J\'aime la lecture et le sport.', fa: 'من ایرانی‌ام. کتاب‌خوانی و ورزش را دوست دارم.' },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'ملیت و دو تا از سرگرمی‌هایت را بنویس. (دو جمله)', min: 6, sample: 'Je suis iranienne. J\'aime la lecture et la musique.' }
      ]
    },
    {
      id: 'u1l3',
      title: 'Quel âge as-tu ?',
      fa: 'چند سالته؟ — سن و اعداد ۳۲ تا ۱۰۰',
      vocab: [
        { fr: 'avoir', ipa: 'avwaʁ', fa: 'داشتن', ex: 'J\'ai 30 ans.', exfa: 'من ۳۰ سال دارم.' },
        { fr: 'un an', ipa: 'ɑ̃', fa: 'سال (سن)', ex: 'Elle a vingt ans.', exfa: 'او بیست سال دارد.' },
        { fr: 'l\'âge', ipa: 'ɑʒ', fa: 'سن', ex: 'Quel âge as-tu ?', exfa: 'چند سالته؟' },
        { fr: 'trente', ipa: 'tʁɑ̃t', fa: '۳۰ سی', ex: 'trente et un = 31', exfa: '' },
        { fr: 'quarante', ipa: 'kaʁɑ̃t', fa: '۴۰ چهل', ex: 'quarante-deux = 42', exfa: '' },
        { fr: 'cinquante', ipa: 'sɛ̃kɑ̃t', fa: '۵۰ پنجاه', ex: 'cinquante-cinq = 55', exfa: '' },
        { fr: 'soixante', ipa: 'swasɑ̃t', fa: '۶۰ شصت', ex: 'soixante-huit = 68', exfa: '' },
        { fr: 'soixante-dix', ipa: 'swasɑ̃tdis', fa: '۷۰ هفتاد', ex: '70 = 60+10 !', exfa: '' },
        { fr: 'quatre-vingts', ipa: 'katʁəvɛ̃', fa: '۸۰ هشتاد', ex: '80 = 4×20 !', exfa: '' },
        { fr: 'quatre-vingt-dix', ipa: 'katʁəvɛ̃dis', fa: '۹۰ نود', ex: '90 = 4×20+10 !', exfa: '' },
        { fr: 'cent', ipa: 'sɑ̃', fa: '۱۰۰ صد', ex: 'Cent ans !', exfa: 'صد سال!' }
      ],
      phrases: [
        { fr: 'Quel âge avez-vous ?', fa: 'چند سال دارید؟' },
        { fr: 'J\'ai ... ans.', fa: 'من ... سال دارم.' },
        { fr: 'Quel âge as-tu ?', fa: 'چند سالته؟ (خودمانی)' }
      ],
      grammar: {
        title: 'Le verbe « avoir » + گفتن سن',
        body: 'فعل <b>avoir</b> (داشتن) دومین فعل مهم فرانسه است.<br>' +
          '⚠️ نکته مهم: در فرانسه سن را با <b>avoir</b> می‌گویند نه با être! یعنی «من ۳۰ سال <b>دارم</b>»: J\'ai 30 ans (نه Je suis 30!)<br>' +
          'اعداد فرانسه از ۷۰ به بعد عجیب می‌شوند: 70 = soixante-dix (۶۰+۱۰) | 80 = quatre-vingts (۴×۲۰) | 90 = quatre-vingt-dix (۴×۲۰+۱۰).',
        table: {
          head: ['ضمیر', 'avoir — داشتن'],
          rows: [
            ['j\'', 'ai'],
            ['tu', 'as'],
            ['il / elle', 'a'],
            ['nous', 'avons'],
            ['vous', 'avez'],
            ['ils / elles', 'ont']
          ]
        },
        examples: [
          { fr: 'J\'ai trente ans.', fa: 'من سی سال دارم.' },
          { fr: 'Tu as quel âge ? — J\'ai vingt-cinq ans.', fa: 'چند سالته؟ — بیست‌وپنج سالمه.' },
          { fr: 'Elle a quatre-vingt-cinq ans.', fa: 'او هشتادوپنج سال دارد.' }
        ]
      },
      phonetics: {
        title: 'La liaison — اتصال با ans',
        body: 'وقتی واژه‌ای به صامتِ بی‌صدا ختم شود و واژه بعدی با صدادار شروع شود، آن صامت خوانده می‌شود:',
        items: [
          { fr: 'vingt ans', ipa: 'vɛ̃‿tɑ̃', fa: '«ون تان»' },
          { fr: 'deux ans', ipa: 'dø‿zɑ̃', fa: '«دو زان»' },
          { fr: 'quatre-vingts ans', ipa: 'katʁəvɛ̃‿zɑ̃', fa: '«کاتغوون زان»' }
        ]
      },
      dialogue: {
        title: 'Inscription au club',
        lines: [
          { s: 'Employé', fr: 'Bonjour ! Votre nom, s\'il vous plaît ?', fa: 'سلام! نام‌تان لطفاً؟' },
          { s: 'Mona', fr: 'Je m\'appelle Mona Ahmadi. A-H-M-A-D-I.', fa: 'مونا احمدی هستم. ا-ح-م-د-ی.' },
          { s: 'Employé', fr: 'Merci. Quel âge avez-vous ?', fa: 'ممنون. چند سال دارید؟' },
          { s: 'Mona', fr: 'J\'ai trente-deux ans.', fa: 'سی‌ودو سال دارم.' },
          { s: 'Employé', fr: 'Et votre grand-mère, ici avec vous ?', fa: 'و مادربزرگ‌تان، اینجا با شما؟' },
          { s: 'Mona', fr: 'Oui, elle a quatre-vingt-quatre ans !', fa: 'بله، هشتادوچهار سال دارد!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'صرف درست avoir:', q: 'J\'___ trente ans.', answer: ['ai'] },
        { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'صرف درست avoir:', q: 'Ils ___ soixante ans.', answer: ['ont'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل avoir', level: 'easy', q: 'جمله درست برای «او (زن) ۲۵ سال دارد»:', options: ['Elle a vingt-cinq ans.', 'Elle est vingt-cinq ans.', 'Elle as vingt-cinq ans.', 'Elle a vingt-cinq.'], correct: 0, explain: 'سن با avoir + ans گفته می‌شود.' },
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'medium', q: '🎧 گوش کن — این خانم چند سال دارد؟', audio: 'J\'ai quatre-vingt-sept ans.', audioFa: 'هشتادوهفت سال دارم.', options: ['87', '67', '97', '77'], correct: 0 },
        { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'medium', fa: 'عدد ۹۰ را به حروف فرانسه بنویس:', q: '90 = ___', answer: ['quatre-vingt-dix', 'quatre vingt dix'] },
        { type: 'match', skill: 'VO', topic: 'اعداد', level: 'medium', fa: 'اعداد را جور کن:', pairs: [['soixante-dix', '۷۰'], ['quatre-vingts', '۸۰'], ['quatre-vingt-dix', '۹۰'], ['cent', '۱۰۰']] },
        { type: 'dictation', skill: 'CO', topic: 'اعداد', level: 'medium', text: 'trente-trois, cinquante-neuf, quatre-vingt-quatre', fa: 'سه عدد می‌شنوی' },
        { type: 'order', skill: 'GR', topic: 'فعل avoir', level: 'easy', answer: 'Quel âge avez-vous ?', fa: 'سؤال «چند سال دارید؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'J\'ai trente ans et ma grand-mère a quatre-vingts ans.', fa: 'سی سال دارم و مادربزرگم هشتاد سال دارد.' },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'سنت و سن یکی از اعضای خانواده‌ات را بنویس. (دو جمله)', min: 8, sample: 'J\'ai trente ans. Ma mère a soixante ans.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'معرفی خود', level: 'easy', q: '🎧 گوش کن — این خانم اهل کجاست؟', audio: 'Bonjour ! Je m\'appelle Yasmin, je suis iranienne et j\'aime la musique.', audioFa: 'سلام! اسم من یاسمین است، ایرانی‌ام و موسیقی را دوست دارم.', options: ['ایران', 'فرانسه', 'آلمان', 'اسپانیا'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'medium', q: '🎧 گوش کن — چند سال دارد؟', audio: 'Il a quatre-vingt-douze ans.', audioFa: 'او نودودو سال دارد.', options: ['92', '82', '72', '42'], correct: 0 },
      { type: 'mcq', skill: 'CE', topic: 'معرفی خود', level: 'easy', q: 'پروفایل را بخوان — کدام جمله درست است؟', qfr: 'Amir Rahimi, 35 ans. Iranien. Il aime le sport et la lecture.', options: ['امیر ورزش و کتاب‌خوانی را دوست دارد', 'امیر فرانسوی است', 'امیر عاشق موسیقی است', 'امیر ۳۰ سال دارد'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'être را صرف کن:', q: 'Nous ___ étudiants.', answer: ['sommes'] },
      { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'avoir را صرف کن:', q: 'Vous ___ quel âge ?', answer: ['avez'] },
      { type: 'fill', skill: 'GR', topic: 'صفت پرسشی quel', level: 'medium', fa: 'quel یا quelle؟', q: '___ sont tes loisirs ?', answer: ['Quels', 'quels'] },
      { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'شکل مؤنث را بنویس:', q: 'Il est iranien. → Elle est ___.', answer: ['iranienne'] },
      { type: 'match', skill: 'VO', topic: 'اعداد', level: 'medium', fa: 'جور کن:', pairs: [['soixante-dix', '۷۰'], ['quatre-vingts', '۸۰'], ['cent', '۱۰۰'], ['quarante', '۴۰']] },
      { type: 'order', skill: 'GR', topic: 'معرفی خود', level: 'easy', answer: 'Elle s\'appelle Sara et elle a vingt ans.', fa: 'جمله بساز: «اسم او ساراست و بیست سال دارد»' },
      { type: 'dictation', skill: 'CO', topic: 'معرفی خود', level: 'medium', text: 'J\'aime le cinéma et je parle anglais.', trans: 'سینما را دوست دارم و انگلیسی حرف می‌زنم.' },
      { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Je m\'appelle Mona, je suis iranienne, j\'ai trente ans.', fa: 'خودت را کامل معرفی کن' },
      { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'یک پروفایل کامل برای خودت بنویس: اسم، ملیت، سن، سرگرمی‌ها. (۵ جمله یا بیشتر)', min: 15, sample: 'Je m\'appelle Mona Ahmadi. Je suis iranienne. J\'ai trente ans. J\'aime la lecture et le cinéma. Je parle persan, anglais et un peu français.' }
    ]
  }
};
