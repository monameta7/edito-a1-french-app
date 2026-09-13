/* ===== واحد ۱۰: Au travail ! — سر کار! ===== */
EDITO.units[10] = {
  id: 10,
  title: 'Au travail !',
  fa: 'سر کار!',
  theme: 'دانشگاه و تحصیلات، دنیای کار و مدت‌زمان (depuis/pendant)، ضمایر مفعولی me/te/nous/vous، ضمایر نسبی qui/que',
  culture: {
    title: 'Vous در محل کار 🤝',
    body: 'حتی در بسیاری از شرکت‌های فرانسوی نسبتاً غیررسمی، همکاران در ابتدا از «vous» استفاده می‌کنند تا طرف مقابل خودش پیشنهاد «on se tutoie ?» (به هم tu بگوییم؟) بدهد. رزومه فرانسوی (CV) معمولاً کوتاه و یک‌صفحه‌ای است و اغلب همراه با یک عکس رسمی فرستاده می‌شود.'
  },
  lessons: [
    {
      id: 'u10l1',
      title: 'Les études',
      fa: 'تحصیلات دانشگاهی',
      vocab: [
        { fr: 'l\'université', ipa: 'ynivɛʁsite', fa: 'دانشگاه', ex: 'Je vais à l\'université.', exfa: 'به دانشگاه می‌روم.' },
        { fr: 'les études', ipa: 'etyd', fa: 'تحصیلات', ex: 'Je fais des études d\'ingénieur.', exfa: 'تحصیلات مهندسی می‌خوانم.' },
        { fr: 'un cours', ipa: 'kuʁ', fa: 'کلاس درس', ex: 'J\'ai un cours à neuf heures.', exfa: 'ساعت نه کلاس دارم.' },
        { fr: 'un diplôme', ipa: 'diplom', fa: 'مدرک', ex: 'J\'ai un diplôme d\'ingénieur.', exfa: 'مدرک مهندسی دارم.' },
        { fr: 'une matière', ipa: 'matjɛʁ', fa: 'درس (رشته)', ex: 'Les mathématiques, c\'est ma matière préférée.', exfa: 'ریاضی درسِ موردعلاقه‌ام است.' },
        { fr: 'un métier', ipa: 'metje', fa: 'شغل / حرفه', ex: 'C\'est un beau métier.', exfa: 'شغل خوبی است.' },
        { fr: 'un ingénieur / un médecin / un avocat', ipa: 'ɛ̃ʒenjœʁ / medsɛ̃ / avɔka', fa: 'مهندس / پزشک / وکیل', ex: 'Elle est ingénieure.', exfa: 'او مهندس است.' },
        { fr: 'pendant', ipa: 'pɑ̃dɑ̃', fa: 'به مدتِ', ex: 'J\'ai étudié pendant cinq ans.', exfa: 'پنج سال درس خواندم.' },
        { fr: 'il y a', ipa: 'il ja', fa: '... پیش', ex: 'J\'ai fini mes études il y a deux ans.', exfa: 'دو سال پیش درسم را تمام کردم.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu étudies ?', fa: 'چه رشته‌ای می‌خوانی؟' },
        { fr: 'J\'étudie l\'informatique.', fa: 'کامپیوتر می‌خوانم.' },
        { fr: 'Depuis quand tu travailles ici ?', fa: 'از کِی اینجا کار می‌کنی؟' }
      ],
      grammar: {
        title: 'La durée — depuis / pendant / il y a',
        body: 'سه ابزار برای بیان مدت‌زمان که با هم اشتباه می‌شوند:<br>' +
          '• <b>depuis</b> + فعل حال: کاری که هنوز ادامه دارد — Je travaille ici <b>depuis</b> trois ans. (سه سال است، هنوز ادامه دارد)<br>' +
          '• <b>pendant</b> + مدت: طول‌کشیدنِ یک کار (تمام‌شده یا نشده) — J\'ai étudié <b>pendant</b> cinq ans.<br>' +
          '• <b>il y a</b> + مدت: نشان‌دهنده «چند وقت پیش» یک اتفاق در گذشته — J\'ai fini mes études <b>il y a</b> deux ans.',
        examples: [
          { fr: 'J\'étudie l\'informatique depuis deux ans.', fa: 'دو سال است کامپیوتر می‌خوانم.' },
          { fr: 'J\'ai fait mes études pendant quatre ans et j\'ai eu mon diplôme il y a un an.', fa: 'چهار سال درس خواندم و یک سال پیش مدرکم را گرفتم.' }
        ]
      },
      phonetics: {
        title: 'depuis / pendant — تلفظ',
        body: 'به این دو کلمه‌ی کلیدی گوش کن:',
        items: [
          { fr: 'depuis', ipa: 'dəpɥi', fa: '' },
          { fr: 'pendant', ipa: 'pɑ̃dɑ̃', fa: '' },
          { fr: 'l\'université', ipa: 'ynivɛʁsite', fa: '' }
        ]
      },
      dialogue: {
        title: 'Tes études',
        lines: [
          { s: 'Paul', fr: 'Qu\'est-ce que tu as étudié, Mona ?', fa: 'چی خوانده‌ای مونا؟' },
          { s: 'Mona', fr: 'J\'ai fait des études d\'ingénieur pendant cinq ans à l\'université.', fa: 'پنج سال در دانشگاه مهندسی خوانده‌ام.' },
          { s: 'Paul', fr: 'Et tu as ton diplôme depuis quand ?', fa: 'مدرکت را از کِی داری؟' },
          { s: 'Mona', fr: 'J\'ai eu mon diplôme il y a quatre ans. Depuis, je travaille comme ingénieure.', fa: 'چهار سال پیش مدرکم را گرفتم. از آن موقع مهندسم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'depuis/pendant/il y a', level: 'hard', fa: 'کدام درست است؟', q: 'Je travaille ici ___ trois ans. (هنوز ادامه دارد)', answer: ['depuis'] },
        { type: 'fill', skill: 'GR', topic: 'depuis/pendant/il y a', level: 'hard', fa: 'کدام درست است؟', q: 'J\'ai étudié ___ cinq ans. (طول‌مدت)', answer: ['pendant'] },
        { type: 'fill', skill: 'GR', topic: 'depuis/pendant/il y a', level: 'hard', fa: 'کدام درست است؟', q: 'J\'ai fini mes études ___ deux ans. (دو سال پیش)', answer: ['il y a'] },
        { type: 'match', skill: 'VO', topic: 'دانشگاه', level: 'medium', fa: 'جور کن:', pairs: [['l\'université', 'دانشگاه'], ['un diplôme', 'مدرک'], ['une matière', 'درس'], ['un cours', 'کلاس درس']] },
        { type: 'mcq', skill: 'CO', topic: 'دانشگاه', level: 'medium', q: '🎧 گوش کن — چند سال تحصیل کرده؟', audio: 'J\'ai étudié la médecine pendant six ans à l\'université.', audioFa: 'شش سال در دانشگاه پزشکی خوانده‌ام.', options: ['۶ سال', '۴ سال', '۲ سال', '۸ سال'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'دانشگاه', level: 'hard', text: 'J\'étudie à l\'université depuis deux ans.', trans: 'دو سال است در دانشگاه درس می‌خوانم.' },
        { type: 'order', skill: 'GR', topic: 'دانشگاه', level: 'hard', answer: 'J\'ai eu mon diplôme il y a un an.', fa: 'جمله «یک سال پیش مدرکم را گرفتم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'دانشگاه', level: 'hard', text: 'J\'ai étudié l\'ingénierie pendant cinq ans. J\'ai mon diplôme depuis quatre ans.', fa: 'درباره تحصیلاتت بگو' },
        { type: 'write', skill: 'PE', topic: 'دانشگاه', level: 'hard', prompt: 'درباره تحصیلاتت بنویس: چی خواندی، چند سال، از کِی مدرک داری. (۳ جمله با depuis/pendant/il y a)', min: 12, sample: 'J\'ai fait des études d\'ingénieur pendant cinq ans. J\'ai eu mon diplôme il y a quatre ans. Je travaille comme ingénieure depuis quatre ans.' }
      ]
    },
    {
      id: 'u10l2',
      title: 'Au téléphone',
      fa: 'پشت تلفن',
      vocab: [
        { fr: 'téléphoner (à) / appeler', ipa: 'telefɔne / aple', fa: 'تلفن زدن (به)', ex: 'Je t\'appelle ce soir.', exfa: 'امشب بهت زنگ می‌زنم.' },
        { fr: 'rappeler', ipa: 'ʁaple', fa: 'دوباره زنگ زدن', ex: 'Vous pouvez me rappeler ?', exfa: 'می‌شود به من زنگ بزنید؟' },
        { fr: 'un message', ipa: 'mesaʒ', fa: 'پیام', ex: 'Il nous a laissé un message.', exfa: 'او برایمان پیام گذاشت.' },
        { fr: 'un portable', ipa: 'pɔʁtabl', fa: 'موبایل', ex: 'Mon portable ne marche pas.', exfa: 'موبایلم کار نمی‌کند.' },
        { fr: 'occupé / occupée', ipa: 'ɔkype', fa: 'مشغول / اشغال', ex: 'La ligne est occupée.', exfa: 'خط اشغال است.' },
        { fr: 'une réunion', ipa: 'ʁeynjɔ̃', fa: 'جلسه', ex: 'Il est en réunion.', exfa: 'در جلسه است.' },
        { fr: 'de la part de', ipa: 'də la paʁ', fa: 'از طرفِ', ex: 'C\'est de la part de qui ?', exfa: 'از طرف چه کسی؟' }
      ],
      phrases: [
        { fr: 'Allô ?', fa: 'الو؟' },
        { fr: 'Il peut me rappeler ?', fa: 'می‌تواند به من زنگ بزند؟' },
        { fr: 'Elle vous a appelé ce matin.', fa: 'امروز صبح به شما زنگ زد.' }
      ],
      grammar: {
        title: 'Les pronoms COD — me, m\', te, t\', nous, vous',
        body: 'وقتی خودمان یا مخاطب‌مان مفعول جمله هستیم، از این ضمایر (قبل از فعل) استفاده می‌کنیم:<br>' +
          '• <b>me / m\'</b> (من را): Tu <b>m\'</b>appelles ce soir ?<br>' +
          '• <b>te / t\'</b> (تو را): Je <b>t\'</b>invite.<br>' +
          '• <b>nous</b> (ما را): Il <b>nous</b> a laissé un message.<br>' +
          '• <b>vous</b> (شما را): Elle <b>vous</b> rappelle demain.',
        table: {
          head: ['ضمیر فاعلی', 'ضمیر مفعولی'],
          rows: [
            ['je', 'me / m\''],
            ['tu', 'te / t\''],
            ['nous', 'nous'],
            ['vous', 'vous']
          ]
        },
        examples: [
          { fr: 'Il peut me rappeler au bureau ?', fa: 'می‌تواند به من در دفتر زنگ بزند؟' },
          { fr: 'Elle nous a téléphoné hier soir.', fa: 'دیشب به ما زنگ زد.' }
        ]
      },
      phonetics: {
        title: 'تلفن — گفتن شماره',
        body: 'شماره‌های فرانسوی دو رقم دو رقم خوانده می‌شوند:',
        items: [
          { fr: 'zéro six, douze, quarante-cinq', ipa: '06 12 45', fa: '۰۶ ۱۲ ۴۵' }
        ]
      },
      dialogue: {
        title: 'Un appel au bureau',
        lines: [
          { s: 'Secrétaire', fr: 'Entreprise Solex, bonjour !', fa: 'شرکت سولکس، سلام!' },
          { s: 'Mona', fr: 'Bonjour, je voudrais parler à monsieur Dupont.', fa: 'سلام، می‌خواهم با آقای دوپون صحبت کنم.' },
          { s: 'Secrétaire', fr: 'Il est en réunion. Il peut vous rappeler ?', fa: 'در جلسه است. می‌تواند به شما زنگ بزند؟' },
          { s: 'Mona', fr: 'Oui, il peut me rappeler au 06 12 45 33 20.', fa: 'بله، می‌تواند به این شماره به من زنگ بزند.' },
          { s: 'Secrétaire', fr: 'D\'accord, je lui dis de vous rappeler.', fa: 'باشه، بهش می‌گویم به شما زنگ بزند.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ضمایر مفعولی me/te', level: 'hard', fa: 'با ضمیر:', q: 'Tu ___ appelles ce soir ? (من را)', answer: ['m\''] },
        { type: 'fill', skill: 'GR', topic: 'ضمایر مفعولی me/te', level: 'hard', fa: 'با ضمیر:', q: 'Il ___ a laissé un message. (ما را)', answer: ['nous'] },
        { type: 'mcq', skill: 'GR', topic: 'ضمایر مفعولی me/te', level: 'medium', q: '«بهت زنگ می‌زنم» به فرانسه:', options: ['Je t\'appelle.', 'Je te appelle.', 'J\'appelle te.', 'Je appelle toi.'], correct: 0 },
        { type: 'mcq', skill: 'CO', topic: 'تلفن', level: 'medium', q: '🎧 گوش کن — چرا آقای دوپون جواب نمی‌دهد؟', audio: 'Désolée, monsieur Dupont est en réunion. Il peut vous rappeler cet après-midi ?', audioFa: 'ببخشید، آقای دوپون در جلسه است. می‌تواند بعدازظهر به شما زنگ بزند؟', options: ['در جلسه است', 'مرخصی است', 'مریض است', 'رفته ناهار'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'تلفن', level: 'medium', fa: 'جور کن:', pairs: [['rappeler', 'دوباره زنگ زدن'], ['un message', 'پیام'], ['une réunion', 'جلسه'], ['occupé', 'اشغال']] },
        { type: 'dictation', skill: 'CO', topic: 'تلفن', level: 'hard', text: 'Il peut me rappeler ce soir ?', trans: 'می‌تواند امشب به من زنگ بزند؟' },
        { type: 'order', skill: 'GR', topic: 'تلفن', level: 'hard', answer: 'Je voudrais parler à madame Martin.', fa: 'جمله «می‌خواهم با خانم مارتن صحبت کنم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'تلفن', level: 'hard', text: 'Allô, bonjour ! Vous pouvez me rappeler, s\'il vous plaît ?', fa: 'تلفنی صحبت کن' },
        { type: 'write', skill: 'PE', topic: 'تلفن', level: 'hard', prompt: 'یک پیام تلفنی بنویس: کی هستی، چرا زنگ زدی، شماره‌ات. (۳ جمله)', min: 10, sample: 'Bonjour, c\'est Mona Ahmadi. Je téléphone pour le rendez-vous de jeudi. Vous pouvez me rappeler au 06 12 45 33 20 ?' }
      ]
    },
    {
      id: 'u10l3',
      title: 'Chercher un travail',
      fa: 'جستجوی کار',
      vocab: [
        { fr: 'une entreprise', ipa: 'ɑ̃tʁəpʁiz', fa: 'شرکت', ex: 'Une entreprise internationale', exfa: 'یک شرکت بین‌المللی' },
        { fr: 'une annonce', ipa: 'anɔ̃s', fa: 'آگهی', ex: 'J\'ai vu une annonce.', exfa: 'یک آگهی دیدم.' },
        { fr: 'un CV / un entretien', ipa: 'seve / ɑ̃tʁətjɛ̃', fa: 'رزومه / مصاحبه', ex: 'J\'ai un entretien demain.', exfa: 'فردا مصاحبه دارم.' },
        { fr: 'une expérience', ipa: 'ɛkspeʁjɑ̃s', fa: 'تجربه', ex: 'Trois ans d\'expérience', exfa: 'سه سال تجربه' },
        { fr: 'motivé / motivée', ipa: 'mɔtive', fa: 'باانگیزه', ex: 'Je suis très motivée.', exfa: 'خیلی باانگیزه‌ام.' },
        { fr: 'vraiment / tellement', ipa: 'vʁɛmɑ̃ / tɛlmɑ̃', fa: 'واقعاً / اونقدر', ex: 'C\'est vraiment intéressant !', exfa: 'واقعاً جالب است!' },
        { fr: 'un poste', ipa: 'pɔst', fa: 'موقعیت شغلی', ex: 'Un poste qui m\'intéresse', exfa: 'موقعیتی که برایم جالب است' }
      ],
      phrases: [
        { fr: 'Pourquoi voulez-vous ce poste ?', fa: 'چرا این شغل را می‌خواهید؟' },
        { fr: 'C\'est une entreprise que je connais bien.', fa: 'شرکتی است که خوب می‌شناسم.' },
        { fr: 'C\'est un poste qui m\'intéresse beaucoup.', fa: 'موقعیتی است که خیلی برایم جالب است.' }
      ],
      grammar: {
        title: 'Les pronoms relatifs « qui » et « que »',
        body: 'برای وصل‌کردن دو جمله بدون تکرار اسم، از ضمایر نسبی استفاده می‌کنیم:<br>' +
          '• <b>qui</b> = فاعلِ جمله دوم: C\'est un poste. <b>Le poste</b> m\'intéresse. → C\'est un poste <b>qui</b> m\'intéresse.<br>' +
          '• <b>que</b> = مفعولِ جمله دوم: C\'est une entreprise. Je connais <b>l\'entreprise</b>. → C\'est une entreprise <b>que</b> je connais.<br>' +
          'برای تأکید از <b>vraiment</b> یا <b>tellement</b> استفاده کن: C\'est vraiment intéressant !',
        examples: [
          { fr: 'C\'est un métier qui me passionne vraiment.', fa: 'شغلی است که واقعاً به آن علاقه دارم.' },
          { fr: 'L\'entreprise que je connais cherche un ingénieur.', fa: 'شرکتی که می‌شناسم دنبال یک مهندس می‌گردد.' }
        ]
      },
      phonetics: {
        title: 'واژه‌های مصاحبه',
        body: 'این واژه‌ها را در مصاحبه لازم داری:',
        items: [
          { fr: 'un entretien', ipa: 'ɑ̃tʁətjɛ̃', fa: 'مصاحبه' },
          { fr: 'motivée', ipa: 'mɔtive', fa: 'باانگیزه' }
        ]
      },
      dialogue: {
        title: 'L\'entretien d\'embauche',
        lines: [
          { s: 'Directrice', fr: 'Bonjour madame Ahmadi. Pourquoi voulez-vous ce poste ?', fa: 'سلام خانم احمدی. چرا این شغل را می‌خواهید؟' },
          { s: 'Mona', fr: 'C\'est un poste qui m\'intéresse vraiment, et c\'est une entreprise que je connais bien.', fa: 'موقعیتی است که واقعاً برایم جالب است، و شرکتی است که خوب می‌شناسم.' },
          { s: 'Directrice', fr: 'Très bien ! Et votre expérience ?', fa: 'خیلی خوب! و تجربه‌تان؟' },
          { s: 'Mona', fr: 'J\'ai quatre ans d\'expérience et je suis tellement motivée !', fa: 'چهار سال تجربه دارم و اونقدر باانگیزه‌ام!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'ضمایر نسبی qui/que', level: 'hard', fa: 'qui یا que؟', q: 'C\'est un poste ___ m\'intéresse.', answer: ['qui'] },
        { type: 'fill', skill: 'GR', topic: 'ضمایر نسبی qui/que', level: 'hard', fa: 'qui یا que؟', q: 'C\'est une entreprise ___ je connais.', answer: ['que', "qu'"] },
        { type: 'mcq', skill: 'GR', topic: 'ضمایر نسبی qui/que', level: 'medium', q: 'کدام درست است؟', options: ['C\'est un métier qui me passionne.', 'C\'est un métier que me passionne.', 'C\'est un métier qui je connais.', 'C\'est un métier que passionne.'], correct: 0, explain: 'passionner فاعل دارد (métier) پس qui.' },
        { type: 'mcq', skill: 'CO', topic: 'کار و شغل', level: 'medium', q: '🎧 گوش کن — چرا این شغل را می‌خواهد؟', audio: 'C\'est un poste qui m\'intéresse vraiment, dans une entreprise que je connais bien.', audioFa: 'موقعیتی است که واقعاً برایم جالب است، در شرکتی که خوب می‌شناسم.', options: ['برایش جالب است و شرکت را می‌شناسد', 'فقط برای حقوق است', 'شرکت را نمی‌شناسد', 'اجباری است'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'کار و شغل', level: 'medium', fa: 'جور کن:', pairs: [['un CV', 'رزومه'], ['un entretien', 'مصاحبه'], ['une annonce', 'آگهی'], ['un poste', 'موقعیت شغلی']] },
        { type: 'dictation', skill: 'CO', topic: 'کار و شغل', level: 'hard', text: 'J\'ai un entretien demain matin.', trans: 'فردا صبح مصاحبه دارم.' },
        { type: 'order', skill: 'GR', topic: 'ضمایر نسبی qui/que', level: 'hard', answer: 'C\'est une entreprise que je connais bien.', fa: 'جمله «این شرکتی است که خوب می‌شناسم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'کار و شغل', level: 'hard', text: 'J\'ai quatre ans d\'expérience et je suis vraiment motivée.', fa: 'در مصاحبه از خودت بگو' },
        { type: 'write', skill: 'PE', topic: 'کار و شغل', level: 'hard', prompt: 'یک معرفی کوتاه برای مصاحبه کاری بنویس با یک جمله qui و یک جمله que. (۴ جمله)', min: 14, sample: 'Je m\'appelle Mona Ahmadi. C\'est un poste qui m\'intéresse vraiment. C\'est une entreprise que je connais bien. Je suis très motivée pour ce poste.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'کار و شغل', level: 'medium', q: '🎧 گوش کن — چند سال است کار می‌کند؟', audio: 'Je travaille comme infirmière depuis huit ans. C\'est un métier qui me passionne.', audioFa: 'هشت سال است پرستاری می‌کنم. شغلی است که به آن علاقه دارم.', options: ['۸ سال', '۵ سال', '۲ سال', '۱۰ سال'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'تلفن', level: 'medium', q: 'یادداشت را بخوان — چه باید بکند؟', qfr: 'Message pour M. Blanc : Mme Ahmadi vous a appelé. Elle veut que vous la rappeliez au 06 12 45 33 20.', options: ['به خانم احمدی زنگ بزند', 'ایمیل بفرستد', 'به جلسه برود', 'پیام بگذارد'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'depuis/pendant/il y a', level: 'hard', fa: 'کدام درست است؟', q: 'Je travaille ici ___ deux ans.', answer: ['depuis'] },
      { type: 'fill', skill: 'GR', topic: 'ضمایر مفعولی me/te', level: 'hard', fa: 'با ضمیر:', q: 'Elle ___ a téléphoné hier. (ما را)', answer: ['nous'] },
      { type: 'fill', skill: 'GR', topic: 'ضمایر نسبی qui/que', level: 'hard', fa: 'qui یا que؟', q: 'C\'est un travail ___ j\'adore.', answer: ['que', "qu'"] },
      { type: 'match', skill: 'VO', topic: 'کار و شغل', level: 'medium', fa: 'جور کن:', pairs: [['l\'université', 'دانشگاه'], ['une entreprise', 'شرکت'], ['un diplôme', 'مدرک'], ['un entretien', 'مصاحبه']] },
      { type: 'order', skill: 'GR', topic: 'تلفن', level: 'hard', answer: 'Vous pouvez me rappeler ?', fa: 'سؤال «می‌شود به من زنگ بزنید؟» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'کار و شغل', level: 'hard', text: 'C\'est un poste qui m\'intéresse vraiment.', trans: 'موقعیتی است که واقعاً برایم جالب است.' },
      { type: 'speak', skill: 'PO', topic: 'کار و شغل', level: 'hard', text: 'Bonjour, je téléphone pour l\'annonce. Le poste est toujours libre ?', fa: 'برای آگهی کار زنگ بزن' },
      { type: 'write', skill: 'PE', topic: 'کار و شغل', level: 'hard', prompt: 'یک ایمیل کوتاه برای درخواست کار بنویس با استفاده از qui/que و depuis/pendant. (۴-۵ جمله)', min: 16, sample: 'Bonjour, je m\'appelle Mona Ahmadi. Je pose ma candidature pour ce poste, qui m\'intéresse vraiment. J\'ai étudié l\'ingénierie pendant cinq ans. Je travaille dans ce domaine depuis quatre ans. Cordialement, Mona Ahmadi' }
    ]
  }
};
