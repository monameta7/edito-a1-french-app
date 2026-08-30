/* ===== واحد ۱: Et vous ? — معرفی خود و دیگران ===== */
EDITO.units[1] = {
  id: 1,
  title: 'Et vous ?',
  fa: 'و شما؟',
  theme: 'معرفی خود: اسم، ملیت، شغل، سن — فعل‌های être ،avoir ،s\'appeler و حروف تعریف نامعین',
  culture: {
    title: 'حریم خصوصی و شغل 💼',
    body: 'برخلاف خیلی از فرهنگ‌ها، فرانسوی‌ها معمولاً در برخورد اول درباره‌ی حقوق یا وضعیت مالی سؤال نمی‌کنند — این موضوع خصوصی تلقی می‌شود. پرسیدن سن هم در محیط رسمی چندان معمول نیست. ولی پرسیدن شغل (<i>Qu\'est-ce que vous faites dans la vie ?</i>) کاملاً عادی و بخشی از آشنایی اولیه است.'
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
        { fr: 'un prénom', ipa: 'pʁenɔ̃', fa: 'اسم کوچک', ex: 'Mon prénom est Karim.', exfa: 'اسم کوچک من کریم است.' },
        { fr: 'un nom', ipa: 'nɔ̃', fa: 'نام خانوادگی', ex: 'Votre nom, s\'il vous plaît ?', exfa: 'نام خانوادگی‌تان، لطفاً؟' },
        { fr: 'enchanté / enchantée', ipa: 'ɑ̃ʃɑ̃te', fa: 'خوشوقتم (مرد / زن)', ex: 'Enchantée, madame !', exfa: 'خوشوقتم خانم!' },
        { fr: 'un ami / une amie', ipa: 'ami', fa: 'دوست (مرد / زن)', ex: 'C\'est mon ami Paul.', exfa: 'این دوستم پُل است.' }
      ],
      phrases: [
        { fr: 'Comment tu t\'appelles ?', fa: 'اسمت چیه؟ (خودمانی)' },
        { fr: 'Comment vous vous appelez ?', fa: 'اسم شما چیست؟ (رسمی)' },
        { fr: 'Je m\'appelle...', fa: 'اسم من ... است' },
        { fr: 'Qui c\'est ?', fa: 'او کیه؟' },
        { fr: 'C\'est...', fa: 'این/او ... است' },
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
          { fr: 'bonjour', ipa: 'bɔ̃ʒuʁ', fa: 'سلام' },
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
          { s: 'Thomas', fr: 'Bonjour Sara ! Vous êtes étudiante ?', fa: 'سلام سارا! شما دانشجو هستید؟' },
          { s: 'Sara', fr: 'Oui, je suis étudiante.', fa: 'بله، دانشجو هستم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'صرف درست فعل être:', q: 'Je ___ étudiante.', answer: ['suis'] },
        { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'صرف درست فعل être:', q: 'Vous ___ français ?', answer: ['êtes', 'etes'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل être', level: 'easy', q: 'کدام جمله درست است؟', options: ['Ils sont étudiants.', 'Ils est étudiants.', 'Ils suis étudiants.', 'Ils êtes étudiants.'], correct: 0, explain: 'با ils/elles همیشه sont می‌آید.' },
        { type: 'fill', skill: 'GR', topic: 'فعل s\'appeler', level: 'easy', fa: 'جای خالی را پر کن:', q: 'Elle ___ Marie.', answer: ["s'appelle", 's appelle', 'sappelle'], explain: 'سوم شخص: elle s\'appelle.' },
        { type: 'mcq', skill: 'CO', topic: 'معرفی خود', level: 'easy', q: '🎧 گوش کن — اسم این خانم چیست؟', audio: 'Bonjour, je m\'appelle Céline Martin. Je suis française.', audioFa: 'سلام، اسم من سلین مارتن است. من فرانسوی هستم.', options: ['Céline', 'Marie', 'Sara', 'Léa'], correct: 0 },
        { type: 'order', skill: 'GR', topic: 'معرفی خود', level: 'easy', answer: 'Je m\'appelle Mona.', fa: 'جمله «اسم من موناست» را بساز:' },
        { type: 'dictation', skill: 'CO', topic: 'معرفی خود', level: 'medium', text: 'Il s\'appelle Thomas.', trans: 'اسم او توماست.' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Bonjour ! Je m\'appelle Mona. Enchantée !', fa: 'سلام! اسم من موناست. خوشوقتم!' },
        { type: 'mcq', skill: 'CE', topic: 'معرفی خود', level: 'easy', q: 'این متن را بخوان — سارا کیست؟', qfr: 'Bonjour ! Je vous présente Sara. C\'est une amie. Elle est étudiante.', options: ['یک دوست دانشجو', 'معلم فرانسه', 'خواهر نویسنده', 'یک خانم فرانسوی'], correct: 0, frOptions: false },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'خودت را معرفی کن: سلام کن و اسمت را بگو. (دو جمله)', min: 5, sample: 'Bonjour ! Je m\'appelle Mona. Enchantée !' }
      ]
    },
    {
      id: 'u1l2',
      title: 'Nationalités et professions',
      fa: 'ملیت‌ها و شغل‌ها',
      vocab: [
        { fr: 'iranien / iranienne', ipa: 'iʁanjɛ̃ / iʁanjɛn', fa: 'ایرانی (مرد / زن)', ex: 'Je suis iranienne.', exfa: 'من ایرانی هستم. (زن)' },
        { fr: 'français / française', ipa: 'fʁɑ̃sɛ / fʁɑ̃sɛz', fa: 'فرانسوی', ex: 'Il est français.', exfa: 'او فرانسوی است.' },
        { fr: 'anglais / anglaise', ipa: 'ɑ̃ɡlɛ / ɑ̃ɡlɛz', fa: 'انگلیسی', ex: 'Elle est anglaise.', exfa: 'او انگلیسی است.' },
        { fr: 'allemand / allemande', ipa: 'almɑ̃ / almɑ̃d', fa: 'آلمانی', ex: 'Hans est allemand.', exfa: 'هانس آلمانی است.' },
        { fr: 'espagnol / espagnole', ipa: 'ɛspaɲɔl', fa: 'اسپانیایی', ex: 'Elle est espagnole.', exfa: 'او اسپانیایی است.' },
        { fr: 'chinois / chinoise', ipa: 'ʃinwa / ʃinwaz', fa: 'چینی', ex: 'Li est chinois.', exfa: 'لی چینی است.' },
        { fr: 'un étudiant / une étudiante', ipa: 'etydjɑ̃ / etydjɑ̃t', fa: 'دانشجو', ex: 'Je suis étudiante.', exfa: 'من دانشجو هستم.' },
        { fr: 'un professeur', ipa: 'pʁɔfesœʁ', fa: 'معلم / استاد', ex: 'Elle est professeur.', exfa: 'او معلم است.' },
        { fr: 'un médecin', ipa: 'medsɛ̃', fa: 'پزشک', ex: 'Mon père est médecin.', exfa: 'پدرم پزشک است.' },
        { fr: 'un ingénieur / une ingénieure', ipa: 'ɛ̃ʒenjœʁ', fa: 'مهندس', ex: 'Je suis ingénieure.', exfa: 'من مهندس هستم.' },
        { fr: 'un journaliste / une journaliste', ipa: 'ʒuʁnalist', fa: 'خبرنگار', ex: 'Il est journaliste.', exfa: 'او خبرنگار است.' },
        { fr: 'un pays', ipa: 'pei', fa: 'کشور', ex: 'L\'Iran est un grand pays.', exfa: 'ایران کشور بزرگی است.' },
        { fr: 'l\'Iran', ipa: 'iʁɑ̃', fa: 'ایران', ex: 'Je viens d\'Iran.', exfa: 'من اهل ایرانم.' },
        { fr: 'la France', ipa: 'fʁɑ̃s', fa: 'فرانسه', ex: 'J\'habite en France.', exfa: 'در فرانسه زندگی می‌کنم.' }
      ],
      phrases: [
        { fr: 'Quelle est votre nationalité ?', fa: 'ملیت شما چیست؟' },
        { fr: 'Quelle est votre profession ?', fa: 'شغل شما چیست؟' },
        { fr: 'Je viens d\'Iran.', fa: 'من اهل ایران هستم.' },
        { fr: 'Qu\'est-ce que vous faites dans la vie ?', fa: 'شغل‌تان چیست؟ (توی زندگی چه‌کار می‌کنید؟)' }
      ],
      grammar: {
        title: 'Le masculin et le féminin',
        body: 'در فرانسه صفت‌ها و اسم‌های شغل با <b>جنسیت</b> شخص تغییر می‌کنند. قاعده کلی: برای مؤنث یک <b>e-</b> به آخر اضافه می‌شود.<br>' +
          '• اگر واژه به صامت ختم شود، با افزودن e، آن صامت <b>خوانده می‌شود</b>: français «فرانسه» ← française «فرانسز»<br>' +
          '• واژه‌های ختم به <b>-ien</b> مؤنث‌شان <b>-ienne</b> است: iranien ← iranienne<br>' +
          '• واژه‌هایی که به e ختم می‌شوند تغییر نمی‌کنند: journaliste (مرد و زن یکسان)',
        table: {
          head: ['مذکر', 'مؤنث', 'معنی'],
          rows: [
            ['iranien', 'iranienne', 'ایرانی'],
            ['français', 'française', 'فرانسوی'],
            ['allemand', 'allemande', 'آلمانی'],
            ['étudiant', 'étudiante', 'دانشجو'],
            ['journaliste', 'journaliste', 'خبرنگار']
          ]
        },
        examples: [
          { fr: 'Karim est iranien. Sara est iranienne.', fa: 'کریم ایرانی است. سارا ایرانی است.' },
          { fr: 'Il est étudiant, elle est étudiante.', fa: 'او دانشجوست (مرد)، او دانشجوست (زن).' }
        ]
      },
      phonetics: {
        title: 'تلفظ مذکر و مؤنث',
        body: 'مهم‌ترین تفاوت شنیداری: در مذکر، صامت آخر بی‌صداست ولی در مؤنث خوانده می‌شود. با گوش‌دادن باید جنسیت را تشخیص بدهی:',
        items: [
          { fr: 'français / française', ipa: 'fʁɑ̃sɛ / fʁɑ̃sɛz', fa: 'ز آخر فقط در مؤنث' },
          { fr: 'étudiant / étudiante', ipa: 'etydjɑ̃ / etydjɑ̃t', fa: 'ت آخر فقط در مؤنث' },
          { fr: 'allemand / allemande', ipa: 'almɑ̃ / almɑ̃d', fa: 'د آخر فقط در مؤنث' },
          { fr: 'iranien / iranienne', ipa: 'iʁanjɛ̃ / iʁanjɛn', fa: 'تودماغی ← معمولی' }
        ]
      },
      dialogue: {
        title: 'D\'où venez-vous ?',
        lines: [
          { s: 'Julie', fr: 'Vous êtes française ?', fa: 'شما فرانسوی هستید؟' },
          { s: 'Mona', fr: 'Non, je suis iranienne. Je viens de Téhéran.', fa: 'نه، من ایرانی‌ام. اهل تهرانم.' },
          { s: 'Julie', fr: 'Ah, super ! Et qu\'est-ce que vous faites dans la vie ?', fa: 'اوه، عالی! و شغل‌تان چیست؟' },
          { s: 'Mona', fr: 'Je suis ingénieure. Et vous ?', fa: 'من مهندسم. و شما؟' },
          { s: 'Julie', fr: 'Moi, je suis journaliste.', fa: 'من خبرنگارم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'سارا یک خانم است. جمله را کامل کن:', q: 'Sara est ___. (ایرانی)', answer: ['iranienne'], explain: 'برای زن: iranienne با دو n و e.' },
        { type: 'mcq', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', q: 'کدام درست است؟ «توما (مرد) فرانسوی است.»', options: ['Thomas est français.', 'Thomas est française.', 'Thomas es français.', 'Thomas est francais e.'], correct: 0 },
        { type: 'mcq', skill: 'CO', topic: 'ملیت و جنسیت', level: 'easy', q: '🎧 گوش کن — این شخص زن است یا مرد؟', audio: 'C\'est une étudiante allemande.', audioFa: 'او یک دانشجوی آلمانی است. (زن)', options: ['زن', 'مرد', 'نمی‌شود فهمید'], correct: 0, frOptions: false, explain: 'étudiantE و allemandE — صامت آخر خوانده شد، پس مؤنث است.' },
        { type: 'match', skill: 'VO', topic: 'شغل‌ها', level: 'easy', fa: 'شغل‌ها را جور کن:', pairs: [['médecin', 'پزشک'], ['ingénieure', 'مهندس'], ['journaliste', 'خبرنگار'], ['professeur', 'معلم']] },
        { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'مؤنثِ « anglais » را بنویس:', q: 'Il est anglais. → Elle est ___.', answer: ['anglaise'] },
        { type: 'dictation', skill: 'CO', topic: 'شغل‌ها', level: 'medium', text: 'Elle est médecin.', trans: 'او پزشک است.' },
        { type: 'order', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', answer: 'Je viens d\'Iran.', fa: 'جمله «من اهل ایرانم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Je suis iranienne et je suis ingénieure.', fa: 'من ایرانی‌ام و مهندس هستم.' },
        { type: 'mcq', skill: 'CE', topic: 'معرفی خود', level: 'easy', q: 'پروفایل را بخوان — شغل لوکا چیست؟', qfr: 'Luca, 28 ans. Italien. Profession : journaliste à Rome.', options: ['خبرنگار', 'مهندس', 'دانشجو', 'پزشک'], correct: 0, frOptions: false },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'ملیت و شغلت را بنویس. (دو جمله)', min: 6, sample: 'Je suis iranienne. Je suis ingénieure à Téhéran.' }
      ]
    },
    {
      id: 'u1l3',
      title: 'L\'âge et les coordonnées',
      fa: 'سن و اطلاعات تماس',
      vocab: [
        { fr: 'avoir', ipa: 'avwaʁ', fa: 'داشتن', ex: 'J\'ai 30 ans.', exfa: 'من ۳۰ سال دارم.' },
        { fr: 'un an', ipa: 'ɑ̃', fa: 'سال (سن)', ex: 'Elle a vingt ans.', exfa: 'او بیست سال دارد.' },
        { fr: 'l\'âge', ipa: 'ɑʒ', fa: 'سن', ex: 'Quel âge as-tu ?', exfa: 'چند سالته؟' },
        { fr: 'un numéro de téléphone', ipa: 'nymeʁo də telefɔn', fa: 'شماره تلفن', ex: 'C\'est le 06 12 34 56 78.', exfa: 'شماره‌اش ۰۶۱۲۳۴۵۶۷۸ است.' },
        { fr: 'une adresse', ipa: 'adʁɛs', fa: 'آدرس', ex: 'Quelle est votre adresse ?', exfa: 'آدرس شما چیست؟' },
        { fr: 'un e-mail', ipa: 'imɛl', fa: 'ایمیل', ex: 'Mon e-mail, c\'est mona@mail.com.', exfa: 'ایمیلم mona@mail.com است.' },
        { fr: 'habiter', ipa: 'abite', fa: 'زندگی کردن، ساکن بودن', ex: 'J\'habite à Téhéran.', exfa: 'در تهران زندگی می‌کنم.' },
        { fr: 'parler', ipa: 'paʁle', fa: 'حرف زدن', ex: 'Je parle persan et anglais.', exfa: 'فارسی و انگلیسی حرف می‌زنم.' },
        { fr: 'trente', ipa: 'tʁɑ̃t', fa: '۳۰ سی', ex: 'trente et un = 31', exfa: '' },
        { fr: 'quarante', ipa: 'kaʁɑ̃t', fa: '۴۰ چهل', ex: 'quarante-deux = 42', exfa: '' },
        { fr: 'cinquante', ipa: 'sɛ̃kɑ̃t', fa: '۵۰ پنجاه', ex: 'cinquante-cinq = 55', exfa: '' },
        { fr: 'soixante', ipa: 'swasɑ̃t', fa: '۶۰ شصت', ex: 'soixante-huit = 68', exfa: '' },
        { fr: 'une langue', ipa: 'lɑ̃ɡ', fa: 'زبان', ex: 'Le persan est ma langue.', exfa: 'فارسی زبان من است.' }
      ],
      phrases: [
        { fr: 'Quel âge avez-vous ?', fa: 'چند سال دارید؟' },
        { fr: 'J\'ai ... ans.', fa: 'من ... سال دارم.' },
        { fr: 'Où habitez-vous ?', fa: 'کجا زندگی می‌کنید؟' },
        { fr: 'J\'habite à...', fa: 'در ... زندگی می‌کنم' },
        { fr: 'Quel est votre numéro de téléphone ?', fa: 'شماره تلفن‌تان چیست؟' }
      ],
      grammar: {
        title: 'Le verbe « avoir » + گفتن سن',
        body: 'فعل <b>avoir</b> (داشتن) دومین فعل مهم فرانسه است.<br>' +
          '⚠️ نکته مهم: در فرانسه سن را با <b>avoir</b> می‌گویند نه با être! یعنی «من ۳۰ سال <b>دارم</b>»: J\'ai 30 ans (نه Je suis 30!)<br>' +
          'دقت کن: قبل از صدادار، je به <b>\'j</b> تبدیل می‌شود: j\'ai.',
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
          { fr: 'Ils ont un ami français.', fa: 'آنها یک دوست فرانسوی دارند.' }
        ]
      },
      phonetics: {
        title: 'La liaison — اتصال',
        body: 'وقتی واژه‌ای به صامتِ بی‌صدا ختم شود و واژه بعدی با صدادار شروع شود، آن صامت <b>خوانده می‌شود</b> و به واژه بعد می‌چسبد. به s که مثل «ز» صدا می‌دهد دقت کن:',
        items: [
          { fr: 'vous avez', ipa: 'vu‿zave', fa: '«وو زاوه»' },
          { fr: 'nous avons', ipa: 'nu‿zavɔ̃', fa: '«نو زاوُن»' },
          { fr: 'ils ont', ipa: 'il‿zɔ̃', fa: '«ایل زُن»' },
          { fr: 'vingt ans', ipa: 'vɛ̃‿tɑ̃', fa: '«ون تان»' },
          { fr: 'deux ans', ipa: 'dø‿zɑ̃', fa: '«دو زان»' }
        ]
      },
      dialogue: {
        title: 'Inscription au club',
        lines: [
          { s: 'Employé', fr: 'Bonjour ! Votre nom, s\'il vous plaît ?', fa: 'سلام! نام‌تان لطفاً؟' },
          { s: 'Mona', fr: 'Je m\'appelle Mona Ahmadi. A-H-M-A-D-I.', fa: 'مونا احمدی هستم. ا-ح-م-د-ی.' },
          { s: 'Employé', fr: 'Merci. Quel âge avez-vous ?', fa: 'ممنون. چند سال دارید؟' },
          { s: 'Mona', fr: 'J\'ai trente-deux ans.', fa: 'سی‌ودو سال دارم.' },
          { s: 'Employé', fr: 'Où habitez-vous ?', fa: 'کجا زندگی می‌کنید؟' },
          { s: 'Mona', fr: 'J\'habite à Paris, 15 rue Victor Hugo.', fa: 'در پاریس زندگی می‌کنم، خیابان ویکتور هوگو، پلاک ۱۵.' },
          { s: 'Employé', fr: 'Et votre numéro de téléphone ?', fa: 'و شماره تلفن‌تان؟' },
          { s: 'Mona', fr: 'C\'est le 06 45 12 33 60.', fa: 'شماره‌ام ۰۶۴۵۱۲۳۳۶۰ است.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'صرف درست avoir:', q: 'J\'___ trente ans.', answer: ['ai'] },
        { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'صرف درست avoir:', q: 'Ils ___ un ami français.', answer: ['ont'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل avoir', level: 'easy', q: 'جمله درست برای «او (زن) ۲۵ سال دارد»:', options: ['Elle a vingt-cinq ans.', 'Elle est vingt-cinq ans.', 'Elle as vingt-cinq ans.', 'Elle a vingt-cinq.'], correct: 0, explain: 'سن با avoir + ans گفته می‌شود.' },
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — این خانم چند سال دارد؟', audio: 'J\'ai quarante-sept ans.', audioFa: 'چهل‌وهفت سال دارم.', options: ['47', '37', '57', '17'], correct: 0 },
        { type: 'dictation', skill: 'CO', topic: 'اعداد', level: 'medium', text: 'trente-trois, cinquante-neuf, soixante-quatre', fa: 'سه عدد می‌شنوی' },
        { type: 'fill', skill: 'GR', topic: 'فعل‌های -er', level: 'easy', fa: 'فعل habiter را صرف کن:', q: 'Nous ___ à Paris.', answer: ['habitons'], explain: 'فعل‌های -er با nous پسوند -ons می‌گیرند.' },
        { type: 'match', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'اعداد را جور کن:', pairs: [['quarante', '۴۰'], ['soixante', '۶۰'], ['trente et un', '۳۱'], ['cinquante-cinq', '۵۵']] },
        { type: 'order', skill: 'GR', topic: 'فعل avoir', level: 'easy', answer: 'Quel âge avez-vous ?', fa: 'سؤال «چند سال دارید؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'J\'ai trente ans et j\'habite à Téhéran.', fa: 'سی سال دارم و در تهران زندگی می‌کنم.' },
        { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'سن و شهر زندگی‌ات را بنویس + یک زبان که حرف می‌زنی. (سه جمله)', min: 9, sample: 'J\'ai trente ans. J\'habite à Téhéran. Je parle persan et anglais.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'معرفی خود', level: 'easy', q: '🎧 گوش کن — این خانم اهل کجاست؟', audio: 'Bonjour ! Je m\'appelle Yasmin, je suis iranienne et j\'habite à Lyon.', audioFa: 'سلام! اسم من یاسمین است، ایرانی‌ام و در لیون زندگی می‌کنم.', options: ['ایران', 'فرانسه', 'آلمان', 'اسپانیا'], correct: 0, frOptions: false, explain: 'iranienne یعنی ایرانی؛ ولی در لیون زندگی می‌کند.' },
      { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — چند سال دارد؟', audio: 'Il a soixante-deux ans.', audioFa: 'او شصت‌ودو سال دارد.', options: ['62', '52', '72', '42'], correct: 0 },
      { type: 'mcq', skill: 'CE', topic: 'معرفی خود', level: 'easy', q: 'پروفایل را بخوان — کدام جمله درست است؟', qfr: 'Amir Rahimi, 35 ans. Iranien. Médecin à Téhéran. Langues : persan, anglais, français.', options: ['امیر پزشک است و سه زبان بلد است', 'امیر مهندس است', 'امیر در پاریس زندگی می‌کند', 'امیر ۳۰ سال دارد'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'فعل être', level: 'easy', fa: 'être را صرف کن:', q: 'Nous ___ étudiants.', answer: ['sommes'] },
      { type: 'fill', skill: 'GR', topic: 'فعل avoir', level: 'easy', fa: 'avoir را صرف کن:', q: 'Vous ___ quel âge ?', answer: ['avez'] },
      { type: 'fill', skill: 'GR', topic: 'ملیت و جنسیت', level: 'easy', fa: 'شکل مؤنث را بنویس:', q: 'Il est iranien. → Elle est ___.', answer: ['iranienne'] },
      { type: 'match', skill: 'VO', topic: 'شغل‌ها', level: 'easy', fa: 'جور کن:', pairs: [['un médecin', 'پزشک'], ['une étudiante', 'دانشجو (زن)'], ['un professeur', 'معلم'], ['une ingénieure', 'مهندس (زن)']] },
      { type: 'order', skill: 'GR', topic: 'معرفی خود', level: 'easy', answer: 'Elle s\'appelle Sara et elle a vingt ans.', fa: 'جمله بساز: «اسم او ساراست و بیست سال دارد»' },
      { type: 'dictation', skill: 'CO', topic: 'معرفی خود', level: 'medium', text: 'J\'habite à Paris et je parle français.', trans: 'در پاریس زندگی می‌کنم و فرانسه حرف می‌زنم.' },
      { type: 'speak', skill: 'PO', topic: 'معرفی خود', level: 'easy', text: 'Je m\'appelle Mona, je suis iranienne, j\'ai trente ans.', fa: 'خودت را کامل معرفی کن' },
      { type: 'write', skill: 'PE', topic: 'معرفی خود', level: 'medium', prompt: 'یک پروفایل کامل برای خودت بنویس: اسم، ملیت، سن، شغل، شهر و زبان‌ها. (۵ جمله یا بیشتر)', min: 15, sample: 'Je m\'appelle Mona Ahmadi. Je suis iranienne. J\'ai trente ans. Je suis ingénieure. J\'habite à Téhéran et je parle persan, anglais et un peu français.' }
    ]
  }
};
