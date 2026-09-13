/* ===== واحد ۲: Près de moi — نزدیک من ===== */
EDITO.units[2] = {
  id: 2,
  title: 'Près de moi',
  fa: 'نزدیک من',
  theme: 'محل زندگی و علاقه‌مندی‌ها (فعل‌های -er)، خانواده و وضعیت تأهل (صفت‌های ملکی)، شغل‌ها و مذکر/مؤنث آنها',
  culture: {
    title: 'Le déjeuner du dimanche 🍽️',
    body: 'در بسیاری از خانواده‌های فرانسوی، ناهار یکشنبه یک رسم مهم است: همه اعضای خانواده دور یک میز جمع می‌شوند. همچنین در فرانسه معمولاً پرسیدن شغل (<i>Qu\'est-ce que vous faites dans la vie ?</i>) کاملاً عادی و بخشی از آشنایی اولیه است، برخلاف پرسیدن سن یا حقوق.'
  },
  lessons: [
    {
      id: 'u2l1',
      title: 'J\'habite ici',
      fa: 'اینجا زندگی می‌کنم — علاقه‌مندی‌ها',
      vocab: [
        { fr: 'habiter', ipa: 'abite', fa: 'زندگی کردن، ساکن بودن', ex: 'J\'habite à Téhéran.', exfa: 'در تهران زندگی می‌کنم.' },
        { fr: 'un quartier', ipa: 'kaʁtje', fa: 'محله', ex: 'C\'est un quartier calme.', exfa: 'محله آرامی است.' },
        { fr: 'une ville', ipa: 'vil', fa: 'شهر', ex: 'J\'habite dans une grande ville.', exfa: 'در شهر بزرگی زندگی می‌کنم.' },
        { fr: 'la campagne', ipa: 'kɑ̃paɲ', fa: 'روستا / حومه', ex: 'Mes parents habitent à la campagne.', exfa: 'والدینم در روستا زندگی می‌کنند.' },
        { fr: 'aimer', ipa: 'eme', fa: 'دوست داشتن', ex: 'J\'aime la musique.', exfa: 'موسیقی را دوست دارم.' },
        { fr: 'détester', ipa: 'deteste', fa: 'متنفر بودن', ex: 'Je déteste le bruit.', exfa: 'از سروصدا متنفرم.' },
        { fr: 'adorer', ipa: 'adɔʁe', fa: 'عاشق بودن', ex: 'J\'adore le cinéma.', exfa: 'عاشق سینمام.' },
        { fr: 'la musique', ipa: 'myzik', fa: 'موسیقی', ex: 'J\'aime la musique classique.', exfa: 'موسیقی کلاسیک را دوست دارم.' },
        { fr: 'le cinéma', ipa: 'sinema', fa: 'سینما', ex: 'On aime le cinéma.', exfa: 'سینما را دوست داریم.' },
        { fr: 'le sport', ipa: 'spɔʁ', fa: 'ورزش', ex: 'Elle adore le sport.', exfa: 'او عاشق ورزش است.' },
        { fr: 'pourquoi', ipa: 'puʁkwa', fa: 'چرا', ex: 'Pourquoi tu aimes ça ?', exfa: 'چرا این را دوست داری؟' },
        { fr: 'parce que', ipa: 'paʁs kə', fa: 'چون / زیرا', ex: 'J\'aime ce quartier parce que c\'est calme.', exfa: 'این محله را دوست دارم چون آرام است.' }
      ],
      phrases: [
        { fr: 'Tu habites où ?', fa: 'کجا زندگی می‌کنی؟' },
        { fr: 'J\'habite dans un quartier calme.', fa: 'در یک محله آرام زندگی می‌کنم.' },
        { fr: 'Qu\'est-ce que tu aimes ?', fa: 'چه چیزی دوست داری؟' },
        { fr: 'J\'aime beaucoup / Je n\'aime pas du tout', fa: 'خیلی دوست دارم / اصلاً دوست ندارم' }
      ],
      grammar: {
        title: 'Les verbes en « -er » — habiter, aimer, détester',
        body: 'اکثر فعل‌های فرانسه به <b>-er</b> ختم می‌شوند و همه یک الگو دارند. کافی است -er را حذف کنی و پسوندها را اضافه کنی:<br>' +
          'ریشه (habit-، aim-، détest-) + <b>e / es / e / ons / ez / ent</b>',
        table: {
          head: ['ضمیر', 'habiter', 'aimer'],
          rows: [
            ['je / j\'', 'habite', 'aime'],
            ['tu', 'habites', 'aimes'],
            ['il / elle', 'habite', 'aime'],
            ['nous', 'habitons', 'aimons'],
            ['vous', 'habitez', 'aimez'],
            ['ils / elles', 'habitent', 'aiment']
          ]
        },
        examples: [
          { fr: 'J\'habite dans un petit quartier et j\'aime beaucoup ça.', fa: 'در یک محله کوچک زندگی می‌کنم و خیلی آن را دوست دارم.' },
          { fr: 'Ils détestent le bruit de la ville.', fa: 'آنها از سروصدای شهر متنفرند.' }
        ]
      },
      phonetics: {
        title: 'تلفظ فعل‌های -er',
        body: 'در چهار صرفِ je/tu/il/ils، پایانه‌های e، es، e، ent همه <b>بی‌صدا</b> هستند — یعنی این چهار صرف یک صدا دارند!',
        items: [
          { fr: 'j\'habite / il habite / ils habitent', ipa: 'abit', fa: 'هر سه: «ابیت»' },
          { fr: 'j\'aime / il aime / ils aiment', ipa: 'ɛm', fa: 'هر سه: «اِم»' },
          { fr: 'nous habitons', ipa: 'nuzabitɔ̃', fa: 'فقط اینجا صدا فرق می‌کند' }
        ]
      },
      dialogue: {
        title: 'Tu habites où ?',
        lines: [
          { s: 'Nina', fr: 'Tu habites où, Karim ?', fa: 'کجا زندگی می‌کنی کریم؟' },
          { s: 'Karim', fr: 'J\'habite dans un quartier calme, près du parc.', fa: 'در یک محله آرام زندگی می‌کنم، نزدیک پارک.' },
          { s: 'Nina', fr: 'Tu aimes ce quartier ?', fa: 'این محله را دوست داری؟' },
          { s: 'Karim', fr: 'Oui, j\'adore ! J\'aime la musique et il y a beaucoup de cafés.', fa: 'آره، عاشقشم! موسیقی را دوست دارم و کافه زیاد دارد.' },
          { s: 'Nina', fr: 'Moi, je déteste le centre-ville, c\'est trop bruyant. Je préfère la campagne.', fa: 'من از مرکز شهر متنفرم، خیلی پرسروصداست. روستا را ترجیح می‌دهم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل‌های -er', level: 'easy', fa: 'habiter را صرف کن:', q: 'Nous ___ à Paris.', answer: ['habitons'] },
        { type: 'fill', skill: 'GR', topic: 'فعل‌های -er', level: 'easy', fa: 'aimer را صرف کن:', q: 'Elle ___ la musique.', answer: ['aime'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل‌های -er', level: 'easy', q: 'کدام درست است؟', options: ['Ils habitent à Lyon.', 'Ils habites à Lyon.', 'Ils habitons à Lyon.', 'Ils habite à Lyon.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'محل زندگی', level: 'easy', fa: 'جور کن:', pairs: [['un quartier', 'محله'], ['une ville', 'شهر'], ['la campagne', 'روستا'], ['le bruit', 'سروصدا']] },
        { type: 'mcq', skill: 'CO', topic: 'علاقه‌مندی‌ها', level: 'easy', q: '🎧 گوش کن — او چه چیزی را دوست ندارد؟', audio: 'J\'aime la musique et le cinéma, mais je déteste le sport.', audioFa: 'موسیقی و سینما را دوست دارم، ولی از ورزش متنفرم.', options: ['ورزش', 'موسیقی', 'سینما', 'همه را دوست دارد'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل‌های -er', level: 'medium', text: 'J\'habite dans un quartier calme.', trans: 'در یک محله آرام زندگی می‌کنم.' },
        { type: 'order', skill: 'GR', topic: 'علاقه‌مندی‌ها', level: 'easy', answer: 'J\'aime beaucoup la musique.', fa: 'جمله «موسیقی را خیلی دوست دارم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'محل زندگی', level: 'easy', text: 'J\'habite dans un petit quartier. J\'aime beaucoup le cinéma.', fa: 'محل زندگی و علاقه‌مندی‌ات را بگو' },
        { type: 'write', skill: 'PE', topic: 'محل زندگی', level: 'medium', prompt: 'کجا زندگی می‌کنی و چرا آنجا را دوست داری؟ (۳ جمله با parce que)', min: 10, sample: 'J\'habite dans un quartier calme. J\'aime ce quartier parce qu\'il y a un parc. Je déteste le centre-ville parce que c\'est bruyant.' }
      ]
    },
    {
      id: 'u2l2',
      title: 'Ma famille',
      fa: 'خانواده من',
      vocab: [
        { fr: 'la famille', ipa: 'famij', fa: 'خانواده', ex: 'J\'ai une petite famille.', exfa: 'خانواده کوچکی دارم.' },
        { fr: 'les parents', ipa: 'paʁɑ̃', fa: 'والدین', ex: 'Mes parents habitent à Ispahan.', exfa: 'والدینم در اصفهان زندگی می‌کنند.' },
        { fr: 'le père / la mère', ipa: 'pɛʁ / mɛʁ', fa: 'پدر / مادر', ex: 'Mon père s\'appelle Ali.', exfa: 'اسم پدرم علی است.' },
        { fr: 'un frère / une sœur', ipa: 'fʁɛʁ / sœʁ', fa: 'برادر / خواهر', ex: 'J\'ai un frère et une sœur.', exfa: 'یک برادر و یک خواهر دارم.' },
        { fr: 'un fils / une fille', ipa: 'fis / fij', fa: 'پسر / دختر (فرزند)', ex: 'Ils ont deux fils.', exfa: 'دو پسر دارند.' },
        { fr: 'le mari / la femme', ipa: 'maʁi / fam', fa: 'شوهر / همسر (زن)', ex: 'Son mari est médecin.', exfa: 'شوهرش پزشک است.' },
        { fr: 'un enfant / des enfants', ipa: 'ɑ̃fɑ̃', fa: 'بچه / فرزند', ex: 'Ils ont trois enfants.', exfa: 'آنها سه فرزند دارند.' },
        { fr: 'célibataire', ipa: 'selibatɛʁ', fa: 'مجرد', ex: 'Il est célibataire.', exfa: 'او مجرد است.' },
        { fr: 'marié / mariée', ipa: 'maʁje', fa: 'متأهل', ex: 'Elle est mariée.', exfa: 'او متأهل است.' },
        { fr: 'divorcé / divorcée', ipa: 'divɔʁse', fa: 'مطلقه', ex: 'Mes parents sont divorcés.', exfa: 'والدینم طلاق گرفته‌اند.' },
        { fr: 'mon / ma / mes', ipa: 'mɔ̃ / ma / me', fa: 'مالِ من', ex: 'C\'est mon frère.', exfa: 'او برادرم است.' },
        { fr: 'ton / ta / tes, son / sa / ses', ipa: '', fa: 'مالِ تو، مالِ او', ex: 'C\'est ta sœur ?', exfa: 'او خواهرت است؟' }
      ],
      phrases: [
        { fr: 'Tu as des frères et sœurs ?', fa: 'برادر و خواهر داری؟' },
        { fr: 'Quelle est ta situation familiale ?', fa: 'وضعیت تأهلت چیست؟' },
        { fr: 'Je suis marié(e) / célibataire.', fa: 'متأهل / مجرد هستم.' }
      ],
      grammar: {
        title: 'Les adjectifs possessifs — mon / ma / mes...',
        body: 'صفت ملکی («مالِ من، مالِ تو...») با <b>اسم بعدش</b> مطابقت می‌کند نه با مالک!<br>' +
          '• قبل اسم مذکر: mon frère، ton père، son fils<br>' +
          '• قبل اسم مؤنث: ma sœur، ta mère، sa femme<br>' +
          '• قبل اسم جمع: mes parents، tes enfants، ses frères<br>' +
          '⚠️ قبل اسم مؤنث که با صدادار شروع شود، mon/ton/son می‌آید نه ma/ta/sa: <b>mon</b> amie (نه ma amie).',
        table: {
          head: ['', 'مذکر', 'مؤنث', 'جمع'],
          rows: [
            ['من', 'mon', 'ma', 'mes'],
            ['تو', 'ton', 'ta', 'tes'],
            ['او', 'son', 'sa', 'ses']
          ]
        },
        examples: [
          { fr: 'Mon père et ma mère habitent à Ispahan.', fa: 'پدر و مادرم در اصفهان زندگی می‌کنند.' },
          { fr: 'C\'est ton amie ? — Non, c\'est sa sœur.', fa: 'او دوستِ توست؟ — نه، خواهرِ اوست.' }
        ]
      },
      phonetics: {
        title: 'آواهای [œʁ] و [ɛʁ]',
        body: 'واژه‌های خانواده صداهای مشابهی دارند، دقت کن:',
        items: [
          { fr: 'la sœur', ipa: 'sœʁ', fa: '[œʁ] — خواهر' },
          { fr: 'le père', ipa: 'pɛʁ', fa: '[ɛʁ] — پدر' },
          { fr: 'la mère', ipa: 'mɛʁ', fa: '[ɛʁ] — مادر' },
          { fr: 'le frère', ipa: 'fʁɛʁ', fa: '[ɛʁ] — برادر' }
        ]
      },
      dialogue: {
        title: 'La photo de famille',
        lines: [
          { s: 'Léa', fr: 'C\'est qui, sur la photo ?', fa: 'توی عکس کیست؟' },
          { s: 'Karim', fr: 'C\'est ma famille ! Voilà mon père, ma mère et mon petit frère.', fa: 'خانواده منه! این پدرم، این مادرم و این برادر کوچکترم.' },
          { s: 'Léa', fr: 'Et cette dame ?', fa: 'و این خانم؟' },
          { s: 'Karim', fr: 'C\'est ma tante. Elle est célibataire, elle habite seule.', fa: 'عمه‌ام است. مجرد است، تنها زندگی می‌کند.' },
          { s: 'Léa', fr: 'Et toi ? Tu es marié ?', fa: 'تو چطور؟ متأهلی؟' },
          { s: 'Karim', fr: 'Non, pas encore ! Je suis célibataire.', fa: 'نه، هنوز نه! مجردم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی درست (mon/ma/mes):', q: 'C\'est ___ sœur. (مالِ من)', answer: ['ma'] },
        { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی درست (son/sa/ses):', q: 'Il aime ___ famille. (مالِ او)', answer: ['sa'] },
        { type: 'mcq', skill: 'GR', topic: 'صفت ملکی', level: 'medium', q: '«دوستم» (زن، اسم با صدادار) به فرانسه:', options: ['mon amie', 'ma amie', 'ta amie', 'son amie'], correct: 0, explain: 'قبل اسم مؤنث با صدادار: mon.' },
        { type: 'match', skill: 'VO', topic: 'خانواده', level: 'easy', fa: 'جور کن:', pairs: [['le père', 'پدر'], ['la mère', 'مادر'], ['un frère', 'برادر'], ['une sœur', 'خواهر'], ['les parents', 'والدین']] },
        { type: 'mcq', skill: 'CO', topic: 'خانواده', level: 'easy', q: '🎧 گوش کن — وضعیت تأهل او چیست؟', audio: 'Ma sœur est mariée, mais moi, je suis célibataire.', audioFa: 'خواهرم متأهل است، ولی من مجردم.', options: ['او مجرد است، خواهرش متأهل', 'هردو متأهل‌اند', 'او مطلقه است', 'هردو مجردند'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'خانواده', level: 'medium', text: 'Mon père et ma mère habitent à Lyon.', trans: 'پدر و مادرم در لیون زندگی می‌کنند.' },
        { type: 'order', skill: 'GR', topic: 'خانواده', level: 'medium', answer: 'Tu as des frères et sœurs ?', fa: 'سؤال «برادر و خواهر داری؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خانواده', level: 'medium', text: 'Voici mon père et ma mère. J\'ai un frère et une sœur.', fa: 'خانواده‌ات را معرفی کن' },
        { type: 'write', skill: 'PE', topic: 'خانواده', level: 'medium', prompt: 'خانواده‌ات را معرفی کن: چند نفرید، اسم‌شان چیست، وضعیت تأهل تو چیست؟ (۴ جمله)', min: 12, sample: 'J\'ai une petite famille. Mon père s\'appelle Ali et ma mère s\'appelle Maryam. J\'ai une sœur. Je suis célibataire.' }
      ]
    },
    {
      id: 'u2l3',
      title: 'Les métiers',
      fa: 'شغل‌ها',
      vocab: [
        { fr: 'un métier / une profession', ipa: 'metje / pʁɔfesjɔ̃', fa: 'شغل / حرفه', ex: 'Quel est ton métier ?', exfa: 'شغلت چیست؟' },
        { fr: 'un étudiant / une étudiante', ipa: 'etydjɑ̃ / etydjɑ̃t', fa: 'دانشجو', ex: 'Je suis étudiante.', exfa: 'من دانشجو هستم.' },
        { fr: 'un professeur', ipa: 'pʁɔfesœʁ', fa: 'معلم / استاد', ex: 'Elle est professeure.', exfa: 'او معلم است.' },
        { fr: 'un médecin', ipa: 'medsɛ̃', fa: 'پزشک', ex: 'Mon père est médecin.', exfa: 'پدرم پزشک است.' },
        { fr: 'un ingénieur / une ingénieure', ipa: 'ɛ̃ʒenjœʁ', fa: 'مهندس', ex: 'Je suis ingénieure.', exfa: 'من مهندس هستم.' },
        { fr: 'un journaliste / une journaliste', ipa: 'ʒuʁnalist', fa: 'خبرنگار', ex: 'Il est journaliste.', exfa: 'او خبرنگار است.' },
        { fr: 'un acteur / une actrice', ipa: 'aktœʁ / aktʁis', fa: 'بازیگر', ex: 'C\'est une actrice célèbre.', exfa: 'او بازیگر معروفی است.' },
        { fr: 'un employé / une employée', ipa: 'ɑ̃plwaje', fa: 'کارمند', ex: 'Il est employé de banque.', exfa: 'او کارمند بانک است.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu fais dans la vie ?', fa: 'شغلت چیست؟' },
        { fr: 'Je travaille comme...', fa: 'به‌عنوان ... کار می‌کنم' },
        { fr: 'Elle est professeure de français.', fa: 'او معلم فرانسه است.' }
      ],
      grammar: {
        title: 'Le masculin et le féminin des professions',
        body: 'مثل ملیت‌ها، اسم شغل‌ها هم با جنسیت شخص تغییر می‌کند:<br>' +
          '• اکثراً +e-: étudiant → étudiant<b>e</b><br>' +
          '• -eur → -euse یا -rice: acteur → act<b>rice</b><br>' +
          '• واژه‌های ختم به e تغییر نمی‌کنند: journaliste (مرد و زن یکسان)<br>' +
          '⚠️ بعد از être، حرف تعریف نمی‌آید: Elle est médecin. (نه une médecin)',
        table: {
          head: ['مذکر', 'مؤنث', 'معنی'],
          rows: [
            ['étudiant', 'étudiante', 'دانشجو'],
            ['acteur', 'actrice', 'بازیگر'],
            ['employé', 'employée', 'کارمند'],
            ['journaliste', 'journaliste', 'خبرنگار (بی‌تغییر)']
          ]
        },
        examples: [
          { fr: 'Il est étudiant, elle est étudiante.', fa: 'او دانشجوست (مرد)، او دانشجوست (زن).' },
          { fr: 'Ma sœur est ingénieure et mon frère est journaliste.', fa: 'خواهرم مهندس است و برادرم خبرنگار.' }
        ]
      },
      phonetics: {
        title: 'پایانه‌های شغل',
        body: 'گوش کن به تفاوت مذکر و مؤنث:',
        items: [
          { fr: 'étudiant / étudiante', ipa: 'etydjɑ̃ / etydjɑ̃t', fa: 'ت آخر فقط در مؤنث' },
          { fr: 'acteur / actrice', ipa: 'aktœʁ / aktʁis', fa: 'صدای کاملاً متفاوت' },
          { fr: 'employé / employée', ipa: 'ɑ̃plwaje', fa: 'یکسان تلفظ می‌شود' }
        ]
      },
      dialogue: {
        title: 'Qu\'est-ce que tu fais dans la vie ?',
        lines: [
          { s: 'Julie', fr: 'Et toi, Mona, qu\'est-ce que tu fais dans la vie ?', fa: 'و تو مونا، شغلت چیست؟' },
          { s: 'Mona', fr: 'Je suis ingénieure. Et mon mari est médecin.', fa: 'من مهندسم. و شوهرم پزشک است.' },
          { s: 'Julie', fr: 'Et ta sœur ?', fa: 'و خواهرت؟' },
          { s: 'Mona', fr: 'Elle est journaliste. Elle adore son métier !', fa: 'او خبرنگار است. عاشق شغلشه!' },
          { s: 'Julie', fr: 'Moi, je suis professeure. J\'aime beaucoup mes étudiants.', fa: 'من معلمم. دانشجوهایم را خیلی دوست دارم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'شغل‌ها', level: 'medium', fa: 'مؤنث بساز:', q: 'Il est étudiant. → Elle est ___.', answer: ['étudiante', 'etudiante'] },
        { type: 'fill', skill: 'GR', topic: 'شغل‌ها', level: 'medium', fa: 'مؤنث بساز:', q: 'Il est acteur. → Elle est ___.', answer: ['actrice'] },
        { type: 'mcq', skill: 'GR', topic: 'شغل‌ها', level: 'medium', q: 'کدام درست است؟', options: ['Elle est médecin.', 'Elle est une médecin.', 'Elle est la médecin.', 'Elle médecin.'], correct: 0, explain: 'بعد از être برای شغل حرف تعریف نمی‌آید.' },
        { type: 'match', skill: 'VO', topic: 'شغل‌ها', level: 'easy', fa: 'جور کن:', pairs: [['médecin', 'پزشک'], ['ingénieure', 'مهندس'], ['journaliste', 'خبرنگار'], ['professeur', 'معلم']] },
        { type: 'mcq', skill: 'CO', topic: 'شغل‌ها', level: 'medium', q: '🎧 گوش کن — شغل او چیست؟', audio: 'Je suis actrice. Mon frère est journaliste.', audioFa: 'من بازیگرم. برادرم خبرنگار است.', options: ['بازیگر', 'معلم', 'پزشک', 'کارمند'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'شغل‌ها', level: 'medium', text: 'Elle est médecin et il est ingénieur.', trans: 'او پزشک است و او مهندس.' },
        { type: 'order', skill: 'GR', topic: 'شغل‌ها', level: 'medium', answer: 'Qu\'est-ce que tu fais dans la vie ?', fa: 'سؤال «شغلت چیست؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'شغل‌ها', level: 'medium', text: 'Je suis ingénieure et mon frère est journaliste.', fa: 'شغل خودت و یکی از اعضای خانواده‌ات را بگو' },
        { type: 'write', skill: 'PE', topic: 'شغل‌ها', level: 'medium', prompt: 'شغل خودت و دو نفر از خانواده‌ات را بنویس. (۳ جمله)', min: 10, sample: 'Je suis ingénieure. Mon père est médecin. Ma sœur est journaliste.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'محل زندگی', level: 'easy', q: '🎧 گوش کن — کجا زندگی می‌کند و چه چیزی دوست دارد؟', audio: 'J\'habite à la campagne. J\'adore la nature, mais je déteste le bruit de la ville.', audioFa: 'در روستا زندگی می‌کنم. عاشق طبیعتم، ولی از سروصدای شهر متنفرم.', options: ['روستا، عاشق طبیعت', 'شهر، عاشق سینما', 'محله شلوغ', 'کنار دریا'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'خانواده', level: 'medium', q: '🎧 گوش کن — چند فرزند دارند؟', audio: 'Dans ma famille, nous sommes trois enfants : deux frères et une sœur.', audioFa: 'در خانواده من سه بچه هستیم: دو برادر و یک خواهر.', options: ['سه بچه', 'دو بچه', 'یک بچه', 'چهار بچه'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'شغل‌ها', level: 'easy', q: 'پروفایل را بخوان — امیر چه‌کاره است؟', qfr: 'Amir, 28 ans. Marié, un fils. Il est ingénieur et il adore son métier.', options: ['متأهل، مهندس', 'مجرد، دانشجو', 'مطلقه، پزشک', 'دو فرزند دارد'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'فعل‌های -er', level: 'easy', fa: 'کامل کن:', q: 'Nous ___ le sport. (aimer)', answer: ['aimons'] },
      { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی:', q: 'C\'est ___ frère. (مالِ تو)', answer: ['ton'] },
      { type: 'fill', skill: 'GR', topic: 'شغل‌ها', level: 'medium', fa: 'مؤنث بساز:', q: 'Il est acteur. → Elle est ___.', answer: ['actrice'] },
      { type: 'match', skill: 'VO', topic: 'خانواده', level: 'easy', fa: 'جور کن:', pairs: [['marié', 'متأهل'], ['célibataire', 'مجرد'], ['divorcé', 'مطلقه'], ['les parents', 'والدین']] },
      { type: 'order', skill: 'GR', topic: 'محل زندگی', level: 'easy', answer: 'J\'habite dans un quartier calme.', fa: 'جمله «در یک محله آرام زندگی می‌کنم» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'شغل‌ها', level: 'medium', text: 'Mon père est médecin et ma mère est professeure.', trans: 'پدرم پزشک است و مادرم معلم.' },
      { type: 'speak', skill: 'PO', topic: 'محل زندگی', level: 'medium', text: 'J\'habite dans un petit quartier. J\'ai une sœur et je suis ingénieure.', fa: 'خودت را کامل معرفی کن' },
      { type: 'write', skill: 'PE', topic: 'محل زندگی', level: 'medium', prompt: 'خودت را معرفی کن: کجا زندگی می‌کنی، چرا آنجا را دوست داری، خانواده‌ات و شغلت. (۵ جمله)', min: 16, sample: 'J\'habite dans un quartier calme à Téhéran. J\'aime ce quartier parce qu\'il y a un parc. J\'ai une sœur et un frère. Je suis célibataire. Je suis ingénieure et j\'adore mon métier.' }
    ]
  }
};
