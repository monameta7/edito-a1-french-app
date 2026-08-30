/* ===== واحد ۲: On va où ? — کجا برویم؟ ===== */
EDITO.units[2] = {
  id: 2,
  title: 'On va où ?',
  fa: 'کجا برویم؟',
  theme: 'شهر و مکان‌ها، il y a، حروف تعریف معین، فعل aller، پرسیدن و دادن آدرس',
  culture: {
    title: 'ورود به مغازه 🏪',
    body: 'وقتی وارد یک نانوایی، مغازه یا داروخانه در فرانسه می‌شوی، همیشه یک <b>Bonjour</b> بلند به همه می‌گویی — نه فقط به فروشنده. همین‌طور هنگام خروج، <b>Au revoir</b> گفتن عادی و منتظره است. بسیاری از شهرهای کوچک فرانسه بین ساعت ۱۲ تا ۱۴ برای ناهار مغازه‌هایشان را می‌بندند، پس قبل از رفتن ساعت کاری را چک کن!'
  },
  lessons: [
    {
      id: 'u2l1',
      title: 'Les lieux de la ville',
      fa: 'مکان‌های شهر',
      vocab: [
        { fr: 'une ville', ipa: 'vil', fa: 'شهر', ex: 'Paris est une belle ville.', exfa: 'پاریس شهر زیبایی است.' },
        { fr: 'une rue', ipa: 'ʁy', fa: 'خیابان', ex: 'J\'habite rue Pasteur.', exfa: 'در خیابان پاستور زندگی می‌کنم.' },
        { fr: 'une place', ipa: 'plas', fa: 'میدان', ex: 'La place de la République', exfa: 'میدان جمهوری' },
        { fr: 'un café', ipa: 'kafe', fa: 'کافه', ex: 'Il y a un café ici.', exfa: 'اینجا یک کافه هست.' },
        { fr: 'un restaurant', ipa: 'ʁɛstoʁɑ̃', fa: 'رستوران', ex: 'Le restaurant est ouvert.', exfa: 'رستوران باز است.' },
        { fr: 'un cinéma', ipa: 'sinema', fa: 'سینما', ex: 'On va au cinéma ?', exfa: 'بریم سینما؟' },
        { fr: 'un musée', ipa: 'myze', fa: 'موزه', ex: 'Le musée du Louvre', exfa: 'موزه لوور' },
        { fr: 'une gare', ipa: 'ɡaʁ', fa: 'ایستگاه قطار', ex: 'La gare est loin ?', exfa: 'ایستگاه دور است؟' },
        { fr: 'un hôtel', ipa: 'otɛl', fa: 'هتل', ex: 'L\'hôtel est dans le centre.', exfa: 'هتل در مرکز شهر است.' },
        { fr: 'une banque', ipa: 'bɑ̃k', fa: 'بانک', ex: 'La banque est fermée.', exfa: 'بانک بسته است.' },
        { fr: 'une pharmacie', ipa: 'faʁmasi', fa: 'داروخانه', ex: 'Il y a une pharmacie près d\'ici ?', exfa: 'نزدیک اینجا داروخانه هست؟' },
        { fr: 'une école', ipa: 'ekɔl', fa: 'مدرسه', ex: 'L\'école est petite.', exfa: 'مدرسه کوچک است.' },
        { fr: 'un parc', ipa: 'paʁk', fa: 'پارک', ex: 'Le parc est magnifique.', exfa: 'پارک فوق‌العاده است.' },
        { fr: 'un supermarché', ipa: 'sypɛʁmaʁʃe', fa: 'سوپرمارکت', ex: 'Je vais au supermarché.', exfa: 'به سوپرمارکت می‌روم.' }
      ],
      phrases: [
        { fr: 'Il y a...', fa: 'وجود دارد / هست' },
        { fr: 'Il n\'y a pas de...', fa: 'وجود ندارد / نیست' },
        { fr: 'Qu\'est-ce qu\'il y a dans ton quartier ?', fa: 'در محله‌ات چه چیزهایی هست؟' },
        { fr: 'C\'est ouvert / fermé.', fa: 'باز است / بسته است.' }
      ],
      grammar: {
        title: 'Les articles définis + « il y a »',
        body: 'دو نوع حرف تعریف تا حالا دیده‌ای:<br>' +
          '• <b>نامعین</b> un / une / des («یک، چندتا»): چیز ناشناخته — Il y a <b>un</b> café. (یک کافه‌ای هست)<br>' +
          '• <b>معین</b> le / la / l\' / les («آنِ مشخص»): چیز مشخص — <b>Le</b> café est ouvert. (آن کافه باز است)<br>' +
          'عبارت <b>il y a</b> یعنی «هست / وجود دارد» و همیشه همین شکل می‌ماند. منفی آن: <b>il n\'y a pas de</b> (بدون حرف تعریف!)',
        table: {
          head: ['', 'مذکر', 'مؤنث', 'قبل صدادار', 'جمع'],
          rows: [
            ['نامعین', 'un café', 'une rue', 'un hôtel', 'des cafés'],
            ['معین', 'le café', 'la rue', 'l\'hôtel', 'les cafés']
          ]
        },
        examples: [
          { fr: 'Dans ma ville, il y a un grand parc.', fa: 'در شهر من یک پارک بزرگ هست.' },
          { fr: 'Il n\'y a pas de cinéma ici.', fa: 'اینجا سینما نیست.' },
          { fr: 'La pharmacie est fermée.', fa: 'داروخانه بسته است.' }
        ]
      },
      phonetics: {
        title: 'آواهای [e] و [ɛ]',
        body: 'دو نوع «اِ» در فرانسه: <b>[e]</b> بسته (مثل é در café) و <b>[ɛ]</b> باز (مثل è یا ai). گوش کن و تفاوت را حس کن:',
        items: [
          { fr: 'un café', ipa: 'kafe', fa: 'بسته [e]' },
          { fr: 'un musée', ipa: 'myze', fa: 'بسته [e]' },
          { fr: 'près', ipa: 'pʁɛ', fa: 'باز [ɛ]' },
          { fr: 'français', ipa: 'fʁɑ̃sɛ', fa: 'باز [ɛ]' },
          { fr: 'une école', ipa: 'ekɔl', fa: 'بسته [e]' }
        ]
      },
      dialogue: {
        title: 'Mon quartier',
        lines: [
          { s: 'Nina', fr: 'Tu habites où, Karim ?', fa: 'کجا زندگی می‌کنی کریم؟' },
          { s: 'Karim', fr: 'J\'habite dans le centre, rue Pasteur.', fa: 'در مرکز شهر زندگی می‌کنم، خیابان پاستور.' },
          { s: 'Nina', fr: 'C\'est bien ? Qu\'est-ce qu\'il y a dans ton quartier ?', fa: 'خوب است؟ در محله‌ات چه چیزهایی هست؟' },
          { s: 'Karim', fr: 'Il y a un parc, des cafés et un petit cinéma.', fa: 'یک پارک، چند کافه و یک سینمای کوچک هست.' },
          { s: 'Nina', fr: 'Super ! Et il y a un supermarché ?', fa: 'عالی! سوپرمارکت هم هست؟' },
          { s: 'Karim', fr: 'Non, il n\'y a pas de supermarché, mais il y a une épicerie.', fa: 'نه، سوپرمارکت نیست، ولی یک بقالی هست.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'حرف تعریف معین', level: 'easy', fa: 'حرف تعریف معین درست را بگذار:', q: '___ pharmacie est fermée.', answer: ['La', 'la'], explain: 'pharmacie مؤنث است ← la.' },
        { type: 'fill', skill: 'GR', topic: 'حرف تعریف معین', level: 'easy', fa: 'حرف تعریف معین درست را بگذار:', q: '___ hôtel est dans le centre.', answer: ["L'", "l'", 'L', 'l'], explain: 'قبل از صدادار یا h بی‌صدا: \'l.' },
        { type: 'mcq', skill: 'GR', topic: 'حرف تعریف نامعین', level: 'easy', q: 'کدام جمله درست است؟', options: ['Il y a une banque ici.', 'Il y a un banque ici.', 'Il y a le banque ici.', 'Il y a banque ici.'], correct: 0, explain: 'banque مؤنث است و برای چیز ناشناخته une می‌آید.' },
        { type: 'mcq', skill: 'GR', topic: 'il y a', level: 'easy', q: 'منفیِ «Il y a un cinéma» چیست؟', options: ['Il n\'y a pas de cinéma.', 'Il n\'y a pas un cinéma.', 'Il y a ne pas cinéma.', 'Il n\'y a pas du cinéma.'], correct: 0, explain: 'در حالت منفی، un/une/des به de تبدیل می‌شود.' },
        { type: 'match', skill: 'VO', topic: 'شهر و مکان‌ها', level: 'easy', fa: 'مکان‌ها را جور کن:', pairs: [['la gare', 'ایستگاه قطار'], ['le musée', 'موزه'], ['la pharmacie', 'داروخانه'], ['le parc', 'پارک'], ['l\'école', 'مدرسه']] },
        { type: 'mcq', skill: 'CO', topic: 'شهر و مکان‌ها', level: 'easy', q: '🎧 گوش کن — در محله چه چیزی نیست؟', audio: 'Dans mon quartier, il y a un café et une pharmacie, mais il n\'y a pas de parc.', audioFa: 'در محله من یک کافه و یک داروخانه هست، ولی پارک نیست.', options: ['پارک', 'کافه', 'داروخانه', 'مدرسه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'il y a', level: 'medium', text: 'Il y a un café dans la rue.', trans: 'در خیابان یک کافه هست.' },
        { type: 'order', skill: 'GR', topic: 'il y a', level: 'easy', answer: 'Il y a un parc dans mon quartier.', fa: 'جمله «در محله من یک پارک هست» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'شهر و مکان‌ها', level: 'easy', text: 'Dans ma ville, il y a des cafés et un grand parc.', fa: 'در شهر من چند کافه و یک پارک بزرگ هست.' },
        { type: 'write', skill: 'PE', topic: 'شهر و مکان‌ها', level: 'medium', prompt: 'دو جمله درباره محله‌ات بنویس: چه چیزهایی هست و چه چیزی نیست؟', min: 8, sample: 'Dans mon quartier, il y a un parc et des restaurants. Il n\'y a pas de cinéma.' }
      ]
    },
    {
      id: 'u2l2',
      title: 'On y va comment ?',
      fa: 'چطور برویم؟ — فعل aller و وسایل نقلیه',
      vocab: [
        { fr: 'aller', ipa: 'ale', fa: 'رفتن', ex: 'Je vais au cinéma.', exfa: 'به سینما می‌روم.' },
        { fr: 'le métro', ipa: 'metʁo', fa: 'مترو', ex: 'Je prends le métro.', exfa: 'مترو سوار می‌شوم.' },
        { fr: 'le bus', ipa: 'bys', fa: 'اتوبوس', ex: 'Le bus numéro 12', exfa: 'اتوبوس شماره ۱۲' },
        { fr: 'un train', ipa: 'tʁɛ̃', fa: 'قطار', ex: 'Le train pour Lyon', exfa: 'قطارِ لیون' },
        { fr: 'un vélo', ipa: 'velo', fa: 'دوچرخه', ex: 'J\'y vais à vélo.', exfa: 'با دوچرخه می‌روم.' },
        { fr: 'une voiture', ipa: 'vwatyʁ', fa: 'ماشین', ex: 'Nous allons en voiture.', exfa: 'با ماشین می‌رویم.' },
        { fr: 'à pied', ipa: 'a pje', fa: 'پیاده', ex: 'Je vais au travail à pied.', exfa: 'پیاده سر کار می‌روم.' },
        { fr: 'un taxi', ipa: 'taksi', fa: 'تاکسی', ex: 'On prend un taxi ?', exfa: 'تاکسی بگیریم؟' },
        { fr: 'le travail', ipa: 'tʁavaj', fa: 'کار، محل کار', ex: 'Je vais au travail.', exfa: 'سر کار می‌روم.' },
        { fr: 'la maison', ipa: 'mɛzɔ̃', fa: 'خانه', ex: 'Je rentre à la maison.', exfa: 'به خانه برمی‌گردم.' },
        { fr: 'loin (de)', ipa: 'lwɛ̃', fa: 'دور (از)', ex: 'C\'est loin d\'ici ?', exfa: 'از اینجا دور است؟' },
        { fr: 'près (de)', ipa: 'pʁɛ', fa: 'نزدیک (به)', ex: 'C\'est près de la gare.', exfa: 'نزدیک ایستگاه است.' }
      ],
      phrases: [
        { fr: 'On va où ?', fa: 'کجا برویم؟' },
        { fr: 'On y va comment ?', fa: 'چطور برویم؟' },
        { fr: 'On y va !', fa: 'بزن بریم!' },
        { fr: 'Je vais au travail.', fa: 'سر کار می‌روم.' },
        { fr: 'C\'est à dix minutes.', fa: 'ده دقیقه راه است.' }
      ],
      grammar: {
        title: 'Le verbe « aller » + à la / au / aux',
        body: 'فعل <b>aller</b> (رفتن) بی‌قاعده است و خیلی پرکاربرد.<br>' +
          'بعد از aller برای مقصد از حرف اضافه <b>à</b> استفاده می‌کنیم، ولی à با حرف تعریف ترکیب می‌شود:<br>' +
          '• à + le = <b>au</b> → Je vais <b>au</b> cinéma.<br>' +
          '• à + la = <b>à la</b> → Je vais <b>à la</b> banque.<br>' +
          '• à + l\' = <b>à l\'</b> → Je vais <b>à l\'</b>hôtel.<br>' +
          '• à + les = <b>aux</b> → Je vais <b>aux</b> toilettes.<br>' +
          'ضمیر <b>on</b> در گفتار یعنی «ما» و مثل il/elle صرف می‌شود: On va au parc. (می‌رویم پارک)',
        table: {
          head: ['ضمیر', 'aller — رفتن'],
          rows: [
            ['je', 'vais'], ['tu', 'vas'], ['il / elle / on', 'va'],
            ['nous', 'allons'], ['vous', 'allez'], ['ils / elles', 'vont']
          ]
        },
        examples: [
          { fr: 'Je vais au supermarché à pied.', fa: 'پیاده به سوپرمارکت می‌روم.' },
          { fr: 'On va à la gare en taxi.', fa: 'با تاکسی به ایستگاه می‌رویم.' },
          { fr: 'Ils vont à l\'école en bus.', fa: 'آنها با اتوبوس به مدرسه می‌روند.' }
        ]
      },
      phonetics: {
        title: 'آواهای تودماغی [ɑ̃] و [ɔ̃]',
        body: 'فرانسه چند صدای «تودماغی» دارد که در فارسی نیستند. هوا هم از دهان و هم از بینی خارج می‌شود:<br>' +
          '<b>[ɑ̃]</b> مثل an/en و <b>[ɔ̃]</b> مثل on:',
        items: [
          { fr: 'en voiture', ipa: 'ɑ̃ vwatyʁ', fa: '[ɑ̃]' },
          { fr: 'le train', ipa: 'tʁɛ̃', fa: '[ɛ̃]' },
          { fr: 'on va', ipa: 'ɔ̃ va', fa: '[ɔ̃]' },
          { fr: 'la maison', ipa: 'mɛzɔ̃', fa: '[ɔ̃]' },
          { fr: 'cent / son', ipa: 'sɑ̃ / sɔ̃', fa: 'مقایسه کن!' }
        ]
      },
      dialogue: {
        title: 'On va au cinéma ?',
        lines: [
          { s: 'Léa', fr: 'On va au cinéma ce soir ?', fa: 'امشب بریم سینما؟' },
          { s: 'Karim', fr: 'Oui, super ! On y va comment ?', fa: 'آره، عالی! چطور بریم؟' },
          { s: 'Léa', fr: 'En métro. C\'est direct.', fa: 'با مترو. مستقیم است.' },
          { s: 'Karim', fr: 'C\'est loin de la station ?', fa: 'از ایستگاه دور است؟' },
          { s: 'Léa', fr: 'Non, c\'est à cinq minutes à pied.', fa: 'نه، پنج دقیقه پیاده است.' },
          { s: 'Karim', fr: 'Parfait, on y va !', fa: 'عالی، بزن بریم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', fa: 'aller را صرف کن:', q: 'Nous ___ à la gare.', answer: ['allons'] },
        { type: 'fill', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', fa: 'حرف اضافه درست (au / à la / à l\') را بگذار:', q: 'Je vais ___ cinéma.', answer: ['au'], explain: 'cinéma مذکر است: à + le = au.' },
        { type: 'fill', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', fa: 'حرف اضافه درست را بگذار:', q: 'Elle va ___ pharmacie.', answer: ['à la', 'a la'], explain: 'pharmacie مؤنث است: à la.' },
        { type: 'mcq', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', q: '«آنها به هتل می‌روند» به فرانسه:', options: ['Ils vont à l\'hôtel.', 'Ils vont au hôtel.', 'Ils allez à l\'hôtel.', 'Ils va à la hôtel.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'وسایل نقلیه', level: 'easy', fa: 'وسیله‌ها را جور کن:', pairs: [['le métro', 'مترو'], ['à pied', 'پیاده'], ['le vélo', 'دوچرخه'], ['la voiture', 'ماشین']] },
        { type: 'mcq', skill: 'CO', topic: 'وسایل نقلیه', level: 'easy', q: '🎧 گوش کن — او چطور سر کار می‌رود؟', audio: 'Moi, je vais au travail à vélo. C\'est rapide !', audioFa: 'من با دوچرخه سر کار می‌روم. سریع است!', options: ['با دوچرخه', 'با مترو', 'پیاده', 'با ماشین'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل aller و حرف اضافه à', level: 'medium', text: 'On va au restaurant ce soir.', trans: 'امشب به رستوران می‌رویم.' },
        { type: 'order', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', answer: 'Tu vas à la banque à pied ?', fa: 'سؤال «پیاده به بانک می‌روی؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'وسایل نقلیه', level: 'easy', text: 'Je vais au travail en métro. C\'est à vingt minutes.', fa: 'با مترو سر کار می‌روم. بیست دقیقه راه است.' }
      ]
    },
    {
      id: 'u2l3',
      title: 'L\'itinéraire',
      fa: 'مسیر — آدرس پرسیدن و دادن',
      vocab: [
        { fr: 'tourner', ipa: 'tuʁne', fa: 'پیچیدن', ex: 'Tournez à droite.', exfa: 'به راست بپیچید.' },
        { fr: 'continuer', ipa: 'kɔ̃tinɥe', fa: 'ادامه دادن', ex: 'Continuez tout droit.', exfa: 'مستقیم ادامه دهید.' },
        { fr: 'traverser', ipa: 'tʁavɛʁse', fa: 'عبور کردن (رد شدن)', ex: 'Traversez la place.', exfa: 'از میدان رد شوید.' },
        { fr: 'à droite', ipa: 'a dʁwat', fa: 'به راست / سمت راست', ex: 'La banque est à droite.', exfa: 'بانک سمت راست است.' },
        { fr: 'à gauche', ipa: 'a ɡoʃ', fa: 'به چپ / سمت چپ', ex: 'Tournez à gauche.', exfa: 'به چپ بپیچید.' },
        { fr: 'tout droit', ipa: 'tu dʁwa', fa: 'مستقیم', ex: 'Allez tout droit.', exfa: 'مستقیم بروید.' },
        { fr: 'devant', ipa: 'dəvɑ̃', fa: 'جلوی', ex: 'Devant la gare', exfa: 'جلوی ایستگاه' },
        { fr: 'derrière', ipa: 'dɛʁjɛʁ', fa: 'پشتِ', ex: 'Derrière l\'école', exfa: 'پشت مدرسه' },
        { fr: 'à côté de', ipa: 'a kote də', fa: 'کنارِ', ex: 'À côté de la pharmacie', exfa: 'کنار داروخانه' },
        { fr: 'en face de', ipa: 'ɑ̃ fas də', fa: 'روبه‌رویِ', ex: 'En face du café', exfa: 'روبه‌روی کافه' },
        { fr: 'entre', ipa: 'ɑ̃tʁ', fa: 'بینِ', ex: 'Entre la banque et le parc', exfa: 'بین بانک و پارک' },
        { fr: 'premier / première', ipa: 'pʁəmje / pʁəmjɛʁ', fa: 'اول / اولین', ex: 'La première rue à droite', exfa: 'اولین خیابان سمت راست' },
        { fr: 'deuxième', ipa: 'døzjɛm', fa: 'دوم', ex: 'La deuxième rue à gauche', exfa: 'دومین خیابان سمت چپ' }
      ],
      phrases: [
        { fr: 'Excusez-moi, où est la gare ?', fa: 'ببخشید، ایستگاه کجاست؟' },
        { fr: 'Pour aller à la gare, s\'il vous plaît ?', fa: 'برای رفتن به ایستگاه (از کدام طرف)، لطفاً؟' },
        { fr: 'Prenez la première rue à droite.', fa: 'اولین خیابان سمت راست را بروید.' },
        { fr: 'C\'est juste là.', fa: 'همین‌جاست.' },
        { fr: 'Merci beaucoup ! — De rien.', fa: 'خیلی ممنون! — خواهش می‌کنم.' }
      ],
      grammar: {
        title: 'L\'impératif — فعل امری',
        body: 'برای دادن دستور یا راهنمایی، فعل را <b>بدون ضمیر</b> می‌آوریم:<br>' +
          '• رسمی (vous): Tournez ! Continuez ! Prenez !<br>' +
          '• خودمانی (tu): Tourne ! Continue ! Prends !<br>' +
          '⚠️ در حالت امریِ tu برای فعل‌های -er، حرف s حذف می‌شود: Tu tournes → Tourne !',
        table: {
          head: ['فعل', 'امری با tu', 'امری با vous'],
          rows: [
            ['tourner', 'Tourne !', 'Tournez !'],
            ['continuer', 'Continue !', 'Continuez !'],
            ['traverser', 'Traverse !', 'Traversez !'],
            ['aller', 'Va !', 'Allez !']
          ]
        },
        examples: [
          { fr: 'Traversez la place et tournez à gauche.', fa: 'از میدان رد شوید و به چپ بپیچید.' },
          { fr: 'Va tout droit et prends la deuxième rue.', fa: 'مستقیم برو و خیابان دوم را بگیر.' }
        ]
      },
      phonetics: {
        title: 'آوای [ʁ] فرانسوی',
        body: 'حرف r فرانسه از تهِ گلو تلفظ می‌شود، شبیه «غ» نرم فارسی! تمرین کن:',
        items: [
          { fr: 'la rue', ipa: 'ʁy', fa: 'خیابان' },
          { fr: 'à droite', ipa: 'dʁwat', fa: 'راست' },
          { fr: 'derrière', ipa: 'dɛʁjɛʁ', fa: 'پشت' },
          { fr: 'le restaurant', ipa: 'ʁɛstoʁɑ̃', fa: 'رستوران' },
          { fr: 'Paris', ipa: 'paʁi', fa: 'پاریس' }
        ]
      },
      dialogue: {
        title: 'Où est le musée ?',
        lines: [
          { s: 'Touriste', fr: 'Excusez-moi, madame. Où est le musée, s\'il vous plaît ?', fa: 'ببخشید خانم. موزه کجاست، لطفاً؟' },
          { s: 'Passante', fr: 'Le musée ? Continuez tout droit et prenez la première rue à gauche.', fa: 'موزه؟ مستقیم ادامه بدهید و اولین خیابان سمت چپ را بروید.' },
          { s: 'Touriste', fr: 'La première à gauche...', fa: 'اولی سمت چپ...' },
          { s: 'Passante', fr: 'Oui. Le musée est en face du parc, à côté de la banque.', fa: 'بله. موزه روبه‌روی پارک است، کنار بانک.' },
          { s: 'Touriste', fr: 'C\'est loin ?', fa: 'دور است؟' },
          { s: 'Passante', fr: 'Non, c\'est à cinq minutes à pied.', fa: 'نه، پنج دقیقه پیاده است.' },
          { s: 'Touriste', fr: 'Merci beaucoup ! — De rien !', fa: 'خیلی ممنون! — خواهش می‌کنم!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'مسیر و جهت', level: 'easy', q: '🎧 گوش کن — باید کدام طرف بروی؟', audio: 'Traversez la place et tournez à droite. La pharmacie est juste là.', audioFa: 'از میدان رد شوید و به راست بپیچید. داروخانه همان‌جاست.', options: ['از میدان رد شو و بپیچ راست', 'مستقیم برو', 'بپیچ چپ', 'با مترو برو'], correct: 0, frOptions: false },
        { type: 'fill', skill: 'GR', topic: 'فعل امری', level: 'easy', fa: 'به یک غریبه (رسمی) بگو «بپیچید به چپ»:', q: '___ à gauche.', answer: ['Tournez', 'tournez'] },
        { type: 'fill', skill: 'GR', topic: 'فعل امری', level: 'easy', fa: 'به دوستت (خودمانی) بگو «مستقیم ادامه بده»:', q: '___ tout droit.', answer: ['Continue', 'continue'], explain: 'امری با tu برای فعل -er بدون s است.' },
        { type: 'match', skill: 'VO', topic: 'حروف اضافه مکان', level: 'easy', fa: 'جور کن:', pairs: [['en face de', 'روبه‌روی'], ['à côté de', 'کنار'], ['derrière', 'پشت'], ['entre', 'بین'], ['devant', 'جلوی']] },
        { type: 'mcq', skill: 'CE', topic: 'مسیر و جهت', level: 'easy', q: 'پیام را بخوان — کافه کجاست؟', qfr: 'Le café « Chez Paul » est en face de la gare, entre la banque et l\'hôtel.', options: ['روبه‌روی ایستگاه، بین بانک و هتل', 'پشت ایستگاه', 'داخل هتل', 'کنار موزه'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'مسیر و جهت', level: 'medium', text: 'Prenez la deuxième rue à droite.', trans: 'دومین خیابان سمت راست را بروید.' },
        { type: 'order', skill: 'GR', topic: 'مسیر و جهت', level: 'easy', answer: 'Où est la gare s\'il vous plaît ?', fa: 'سؤال «ایستگاه کجاست لطفاً؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'مسیر و جهت', level: 'easy', text: 'Excusez-moi, pour aller au musée, s\'il vous plaît ?', fa: 'ببخشید، برای رفتن به موزه (از کدام طرف)، لطفاً؟' },
        { type: 'write', skill: 'PE', topic: 'مسیر و جهت', level: 'medium', prompt: 'به یک توریست آدرس بده: از اینجا تا داروخانه (۲-۳ جمله امری).', min: 8, sample: 'Continuez tout droit. Prenez la première rue à gauche. La pharmacie est à côté de la banque.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'شهر و مکان‌ها', level: 'easy', q: '🎧 گوش کن — در محله چه چیزهایی هست؟', audio: 'Dans mon quartier, il y a une école, deux cafés et un petit parc, mais il n\'y a pas de musée.', audioFa: 'در محله من یک مدرسه، دو کافه و یک پارک کوچک هست، ولی موزه نیست.', options: ['مدرسه، دو کافه و پارک', 'موزه و سینما', 'فقط یک بانک', 'ایستگاه و هتل'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'مسیر و جهت', level: 'easy', q: '🎧 گوش کن — بانک کجاست؟', audio: 'La banque ? Tournez à gauche, c\'est en face du cinéma.', audioFa: 'بانک؟ به چپ بپیچید، روبه‌روی سینماست.', options: ['بپیچ چپ، روبه‌روی سینما', 'بپیچ راست، کنار پارک', 'مستقیم، پشت موزه', 'داخل ایستگاه'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'شهر و مکان‌ها', level: 'easy', q: 'آگهی را بخوان — هتل کجاست؟', qfr: 'Hôtel Le Soleil ** — dans le centre-ville, à côté de la gare, à dix minutes du musée. Restaurant ouvert.', options: ['مرکز شهر، کنار ایستگاه', 'بیرون شهر', 'روبه‌روی پارک', 'ده دقیقه تا ایستگاه'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', fa: 'کامل کن:', q: 'Vous ___ au travail en bus ?', answer: ['allez'] },
      { type: 'fill', skill: 'GR', topic: 'فعل aller و حرف اضافه à', level: 'easy', fa: 'au / à la / à l\' / aux :', q: 'On va ___ école à pied.', answer: ["à l'", "a l'", 'à l', 'a l'] },
      { type: 'fill', skill: 'GR', topic: 'il y a', level: 'easy', fa: 'منفی کن:', q: 'Il y a un parc. → Il n\'y a pas ___ parc.', answer: ['de'] },
      { type: 'match', skill: 'VO', topic: 'شهر و مکان‌ها', level: 'easy', fa: 'جور کن:', pairs: [['une gare', 'ایستگاه'], ['un supermarché', 'سوپرمارکت'], ['une banque', 'بانک'], ['un hôtel', 'هتل']] },
      { type: 'order', skill: 'GR', topic: 'فعل امری', level: 'easy', answer: 'Prenez la première rue à gauche.', fa: 'جمله «اولین خیابان سمت چپ را بروید» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'فعل aller و حرف اضافه à', level: 'medium', text: 'Je vais à la gare en taxi.', trans: 'با تاکسی به ایستگاه می‌روم.' },
      { type: 'speak', skill: 'PO', topic: 'مسیر و جهت', level: 'easy', text: 'Excusez-moi, où est la pharmacie ? C\'est loin d\'ici ?', fa: 'ببخشید، داروخانه کجاست؟ از اینجا دور است؟' },
      { type: 'write', skill: 'PE', topic: 'شهر و مکان‌ها', level: 'medium', prompt: 'محله‌ات را توصیف کن: چه چیزهایی دارد، چه چیزی ندارد، و تو چطور سر کار/دانشگاه می‌روی؟ (۴ جمله)', min: 14, sample: 'J\'habite dans un petit quartier. Il y a un parc, une école et des cafés. Il n\'y a pas de cinéma. Je vais au travail en métro.' }
    ]
  }
};
