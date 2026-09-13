/* ===== واحد ۶: Qu'est-ce qu'on fait aujourd'hui ? — امروز چه‌کار کنیم؟ ===== */
EDITO.units[6] = {
  id: 6,
  title: 'Qu\'est-ce qu\'on fait aujourd\'hui ?',
  fa: 'امروز چه‌کار کنیم؟',
  theme: 'ساعت و بسامد، فعل‌های انعکاسیِ روزمره، دعوت‌کردن با pouvoir/vouloir، توصیف افراد',
  culture: {
    title: 'هفته ۳۵ ساعته و یکشنبه‌های آرام 🕰️',
    body: 'قانون کار فرانسه هفته کاری استاندارد را ۳۵ ساعت تعریف می‌کند. در شهرهای کوچک‌تر، بیشتر مغازه‌ها یکشنبه‌ها بسته‌اند. برای دعوت‌کردن، معمولاً چند روز قبل هماهنگ می‌شود، نه سر همان روز.'
  },
  lessons: [
    {
      id: 'u6l1',
      title: 'Quelle heure est-il ?',
      fa: 'ساعت چند است؟',
      vocab: [
        { fr: 'l\'heure', ipa: 'œʁ', fa: 'ساعت (زمان)', ex: 'Quelle heure est-il ?', exfa: 'ساعت چند است؟' },
        { fr: 'midi / minuit', ipa: 'midi / minɥi', fa: 'ظهر / نیمه‌شب', ex: 'Il est midi.', exfa: 'ظهر است.' },
        { fr: 'et demie / et quart / moins le quart', ipa: 'e dəmi / e kaʁ', fa: 'و نیم / و ربع / یک ربع کم', ex: 'Il est trois heures et quart.', exfa: 'ساعت سه و ربع است.' },
        { fr: 'le matin / l\'après-midi / le soir', ipa: 'matɛ̃ / apʁɛmidi / swaʁ', fa: 'صبح / بعدازظهر / شب', ex: 'Ce soir, on sort.', exfa: 'امشب بیرون می‌رویم.' },
        { fr: 'lundi, mardi, mercredi...', ipa: 'lœ̃di, maʁdi, mɛʁkʁədi', fa: 'روزهای هفته', ex: 'Lundi, je travaille.', exfa: 'دوشنبه کار می‌کنم.' },
        { fr: 'toujours / tous les jours', ipa: 'tuʒuʁ / tu le ʒuʁ', fa: 'همیشه / هر روز', ex: 'Je travaille tous les jours.', exfa: 'هر روز کار می‌کنم.' },
        { fr: 'parfois', ipa: 'paʁfwa', fa: 'گاهی', ex: 'Parfois, je sors le soir.', exfa: 'گاهی شب‌ها بیرون می‌روم.' },
        { fr: 'rarement', ipa: 'ʁaʁmɑ̃', fa: 'به‌ندرت', ex: 'Je vais rarement au cinéma.', exfa: 'به‌ندرت سینما می‌روم.' },
        { fr: 'ouvert / fermé', ipa: 'uvɛʁ / fɛʁme', fa: 'باز / بسته', ex: 'Ouvert de 9h à 18h', exfa: 'باز از ۹ تا ۱۸' }
      ],
      phrases: [
        { fr: 'Quelle heure est-il ?', fa: 'ساعت چند است؟' },
        { fr: 'À quelle heure ?', fa: 'ساعت چند؟ (چه ساعتی؟)' },
        { fr: 'Qu\'est-ce que tu fais le lundi ?', fa: 'دوشنبه‌ها چه‌کار می‌کنی؟' }
      ],
      grammar: {
        title: 'Dire l\'heure + les adverbes de fréquence',
        body: 'ساعت را با <b>Il est</b> می‌گوییم (همیشه il، حتی برای ساعت!):<br>' +
          '• Il est trois heures. | 3h15 = trois heures <b>et quart</b> | 3h30 = trois heures <b>et demie</b> | 3h45 = quatre heures <b>moins le quart</b><br><br>' +
          'برای گفتن «چقدر تکرار می‌شود»: <b>toujours</b> (همیشه) > <b>tous les jours</b> (هر روز) > <b>souvent</b> (اغلب) > <b>parfois</b> (گاهی) > <b>rarement</b> (به‌ندرت).',
        table: {
          head: ['ساعت', 'گفتار روزمره'],
          rows: [
            ['8h15', 'huit heures et quart'],
            ['8h30', 'huit heures et demie'],
            ['8h45', 'neuf heures moins le quart'],
            ['12h00', 'midi']
          ]
        },
        examples: [
          { fr: 'Le magasin est ouvert de neuf heures à dix-huit heures.', fa: 'مغازه از ۹ تا ۱۸ باز است.' },
          { fr: 'Je fais du sport parfois, mais je regarde la télé tous les jours.', fa: 'گاهی ورزش می‌کنم، ولی هر روز تلویزیون می‌بینم.' }
        ]
      },
      phonetics: {
        title: 'اتصال با heures',
        body: 'اعداد با heures اتصال می‌گیرند:',
        items: [
          { fr: 'deux heures', ipa: 'dø‿zœʁ', fa: '«دو زور»' },
          { fr: 'neuf heures', ipa: 'nœ‿vœʁ', fa: '«نو وور» — f به v تبدیل می‌شود!' }
        ]
      },
      dialogue: {
        title: 'On est en retard !',
        lines: [
          { s: 'Karim', fr: 'Quelle heure est-il ?', fa: 'ساعت چند است؟' },
          { s: 'Sara', fr: 'Il est sept heures et demie.', fa: 'هفت و نیم است.' },
          { s: 'Karim', fr: 'Oh non ! Le film commence à huit heures moins le quart !', fa: 'وای نه! فیلم یک ربع به هشت شروع می‌شود!' },
          { s: 'Sara', fr: 'Ce n\'est pas grave. On va rarement en retard, non ?', fa: 'مهم نیست. ما که به‌ندرت دیر می‌رسیم، نه؟' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'ساعت و زمان', level: 'easy', q: '🎧 گوش کن — ساعت چند است؟', audio: 'Il est quatre heures et demie.', audioFa: 'ساعت چهار و نیم است.', options: ['۴:۳۰', '۴:۱۵', '۵:۳۰', '۴:۴۵'], correct: 0, frOptions: false },
        { type: 'fill', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', fa: '«ساعت دو و ربع است» را کامل کن:', q: 'Il est deux heures et ___.', answer: ['quart'] },
        { type: 'mcq', skill: 'GR', topic: 'بسامد', level: 'medium', q: 'کدام به معنی «به‌ندرت» است؟', options: ['rarement', 'toujours', 'parfois', 'souvent'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'ساعت و زمان', level: 'easy', fa: 'روزها را جور کن:', pairs: [['lundi', 'دوشنبه'], ['vendredi', 'جمعه'], ['dimanche', 'یکشنبه'], ['mercredi', 'چهارشنبه']] },
        { type: 'dictation', skill: 'CO', topic: 'ساعت و زمان', level: 'hard', text: 'Le magasin est ouvert de neuf heures à midi.', trans: 'مغازه از ۹ تا ظهر باز است.' },
        { type: 'order', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', answer: 'Le film commence à huit heures.', fa: 'جمله «فیلم ساعت هشت شروع می‌شود» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'بسامد', level: 'medium', text: 'Je fais du sport parfois, mais je regarde la télé tous les jours.', fa: 'کارهای روزمره‌ات و بسامدشان را بگو' },
        { type: 'write', skill: 'PE', topic: 'بسامد', level: 'medium', prompt: 'بنویس چه کاری را همیشه، گاهی و به‌ندرت انجام می‌دهی. (۳ جمله)', min: 10, sample: 'Je travaille tous les jours. Je fais du sport parfois. Je vais rarement au cinéma.' }
      ]
    },
    {
      id: 'u6l2',
      title: 'Ma routine quotidienne',
      fa: 'روزمرگی من — فعل‌های انعکاسی',
      vocab: [
        { fr: 'se réveiller', ipa: 'sə ʁevɛje', fa: 'بیدار شدن', ex: 'Je me réveille à sept heures.', exfa: 'ساعت هفت بیدار می‌شوم.' },
        { fr: 'se lever', ipa: 'sə ləve', fa: 'از خواب بلند شدن', ex: 'Tu te lèves tôt ?', exfa: 'زود بلند می‌شوی؟' },
        { fr: 'se doucher / se laver', ipa: 'sə duʃe / sə lave', fa: 'دوش گرفتن / شستن', ex: 'Je me douche le matin.', exfa: 'صبح دوش می‌گیرم.' },
        { fr: 's\'habiller', ipa: 'sabije', fa: 'لباس پوشیدن', ex: 'Elle s\'habille vite.', exfa: 'او سریع لباس می‌پوشد.' },
        { fr: 'se coucher', ipa: 'sə kuʃe', fa: 'خوابیدن (به رختخواب رفتن)', ex: 'Je me couche à onze heures.', exfa: 'ساعت یازده می‌خوابم.' },
        { fr: 'dormir', ipa: 'dɔʁmiʁ', fa: 'خوابیدن (خواب بودن)', ex: 'Je dors huit heures.', exfa: 'هشت ساعت می‌خوابم.' },
        { fr: 'partir (de la maison)', ipa: 'paʁtiʁ', fa: 'رفتن (از خانه)', ex: 'Je pars à huit heures.', exfa: 'ساعت هشت (از خانه) می‌روم.' },
        { fr: 'sortir', ipa: 'sɔʁtiʁ', fa: 'بیرون رفتن', ex: 'Le vendredi, je sors avec des amis.', exfa: 'جمعه‌ها با دوستان بیرون می‌روم.' },
        { fr: 'tôt / tard', ipa: 'to / taʁ', fa: 'زود / دیر', ex: 'Je me lève tôt.', exfa: 'زود بیدار می‌شوم.' }
      ],
      phrases: [
        { fr: 'Tu te lèves à quelle heure ?', fa: 'ساعت چند بلند می‌شوی؟' },
        { fr: 'Je me réveille tôt.', fa: 'زود بیدار می‌شوم.' },
        { fr: 'Le week-end, je sors avec des amis.', fa: 'آخر هفته با دوستان بیرون می‌روم.' }
      ],
      grammar: {
        title: 'Les verbes pronominaux + partir/sortir/dormir',
        body: 'فعل‌های انعکاسی («روی خودِ شخص» انجام می‌شوند) یک ضمیر اضافه (<b>me/te/se/nous/vous/se</b>) قبل از فعل دارند:<br>' +
          'je <b>me</b> réveille، tu <b>te</b> lèves، il <b>se</b> couche، nous <b>nous</b> douchons، vous <b>vous</b> habillez، ils <b>se</b> lèvent<br><br>' +
          'فعل‌های partir، sortir، dormir هم صرف مشابهی دارند (بدون s در je/tu/il):',
        table: {
          head: ['ضمیر', 'se lever', 'sortir'],
          rows: [
            ['je', 'me lève', 'sors'],
            ['tu', 'te lèves', 'sors'],
            ['il / elle', 'se lève', 'sort'],
            ['nous', 'nous levons', 'sortons'],
            ['vous', 'vous levez', 'sortez'],
            ['ils / elles', 'se lèvent', 'sortent']
          ]
        },
        examples: [
          { fr: 'Je me réveille à sept heures et je me lève tout de suite.', fa: 'ساعت هفت بیدار می‌شوم و فوراً بلند می‌شوم.' },
          { fr: 'Le vendredi soir, on sort avec des amis.', fa: 'جمعه شب‌ها با دوستان بیرون می‌رویم.' }
        ]
      },
      phonetics: {
        title: 'e بی‌صدا در se، me، te',
        body: 'در گفتار سریع، ضمایر انعکاسی خیلی کوتاه ادا می‌شوند:',
        items: [
          { fr: 'je me lève', ipa: 'ʒəm lɛv', fa: '' },
          { fr: 'tu te couches', ipa: 'tyt kuʃ', fa: '' },
          { fr: 'il se douche', ipa: 'ils duʃ', fa: '' }
        ]
      },
      dialogue: {
        title: 'Une journée typique',
        lines: [
          { s: 'Emma', fr: 'Tu te lèves à quelle heure le matin ?', fa: 'صبح‌ها ساعت چند بلند می‌شوی؟' },
          { s: 'Mona', fr: 'Je me réveille à six heures et demie et je me lève tout de suite.', fa: 'ساعت شش‌ونیم بیدار می‌شوم و فوراً بلند می‌شوم.' },
          { s: 'Emma', fr: 'Et le soir ?', fa: 'و شب‌ها؟' },
          { s: 'Mona', fr: 'Je me couche vers onze heures. Je dors sept ou huit heures.', fa: 'حدود ساعت یازده می‌خوابم. هفت یا هشت ساعت می‌خوابم.' },
          { s: 'Emma', fr: 'Et tu sors souvent ?', fa: 'زیاد بیرون می‌روی؟' },
          { s: 'Mona', fr: 'Parfois, le week-end. Mais en semaine, je dors tôt !', fa: 'گاهی، آخر هفته‌ها. ولی وسط هفته زود می‌خوابم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'se lever را صرف کن:', q: 'Je ___ à sept heures.', answer: ['me lève'] },
        { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'se coucher را صرف کن:', q: 'Ils ___ tard.', answer: ['se couchent'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', q: '«صبح‌ها دوش می‌گیرم»:', options: ['Je me douche le matin.', 'Je douche le matin.', 'Je me douches le matin.', 'Je se douche le matin.'], correct: 0 },
        { type: 'fill', skill: 'GR', topic: 'sortir/partir', level: 'medium', fa: 'sortir را صرف کن:', q: 'Le vendredi, nous ___ avec des amis.', answer: ['sortons'] },
        { type: 'match', skill: 'VO', topic: 'روزمرگی', level: 'easy', fa: 'جور کن:', pairs: [['se réveiller', 'بیدار شدن'], ['se coucher', 'خوابیدن'], ["s'habiller", 'لباس پوشیدن'], ['dormir', 'خواب بودن']] },
        { type: 'mcq', skill: 'CO', topic: 'روزمرگی', level: 'medium', q: '🎧 گوش کن — ساعت چند می‌خوابد؟', audio: 'Le soir, je me couche à onze heures et je dors huit heures.', audioFa: 'شب‌ها ساعت یازده می‌خوابم و هشت ساعت می‌خوابم.', options: ['۱۱', '۱۰', '۹', 'نیمه‌شب'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل‌های انعکاسی', level: 'hard', text: 'Je me lève tôt et je me couche tard.', trans: 'زود بلند می‌شوم و دیر می‌خوابم.' },
        { type: 'order', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', answer: 'Tu te lèves à quelle heure ?', fa: 'سؤال «ساعت چند بلند می‌شوی؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'روزمرگی', level: 'medium', text: 'Je me réveille à sept heures et je me couche à onze heures.', fa: 'روزمرگی‌ات را بگو' },
        { type: 'write', skill: 'PE', topic: 'روزمرگی', level: 'hard', prompt: 'روزمرگی‌ات را بنویس: بیدار شدن، بلند شدن، بیرون رفتن، خوابیدن. (۴ جمله)', min: 14, sample: 'Je me réveille à sept heures. Je me lève et je m\'habille vite. Le vendredi soir, je sors avec des amis. Je me couche vers onze heures.' }
      ]
    },
    {
      id: 'u6l3',
      title: 'On sort ce soir ?',
      fa: 'امشب بیرون برویم؟ — دعوت و توصیف افراد',
      vocab: [
        { fr: 'vouloir / pouvoir', ipa: 'vulwaʁ / puvwaʁ', fa: 'خواستن / توانستن', ex: 'Tu veux venir ? Je ne peux pas.', exfa: 'می‌خواهی بیایی؟ نمی‌توانم.' },
        { fr: 'venir de + مصدر', ipa: 'vəniʁ də', fa: 'تازه ... کردن', ex: 'Je viens de finir mon travail.', exfa: 'تازه کارم را تمام کردم.' },
        { fr: 'libre / occupé', ipa: 'libʁ / ɔkype', fa: 'آزاد / مشغول', ex: 'Tu es libre demain ?', exfa: 'فردا آزادی؟' },
        { fr: 'sympa / drôle', ipa: 'sɛ̃pa / dʁol', fa: 'مهربان/باحال / بامزه', ex: 'Elle est très sympa.', exfa: 'او خیلی مهربان است.' },
        { fr: 'timide / sérieux', ipa: 'timid / seʁjø', fa: 'خجالتی / جدی', ex: 'Il est un peu timide.', exfa: 'او کمی خجالتی است.' },
        { fr: 'grand / petit', ipa: 'ɡʁɑ̃ / pəti', fa: 'قدبلند / کوتاه‌قد', ex: 'Il est grand et sympa.', exfa: 'او قدبلند و مهربان است.' },
        { fr: 'les cheveux, les yeux', ipa: 'ʃəvø, jø', fa: 'مو، چشم', ex: 'Elle a les cheveux longs.', exfa: 'او موی بلند دارد.' },
        { fr: 'dommage', ipa: 'dɔmaʒ', fa: 'حیف', ex: 'C\'est dommage !', exfa: 'حیف شد!' }
      ],
      phrases: [
        { fr: 'Tu veux venir avec nous ?', fa: 'می‌خواهی با ما بیایی؟' },
        { fr: 'Il/Elle est comment ?', fa: 'او چه شکلی/چطوری است؟' },
        { fr: 'Désolé(e), je ne peux pas.', fa: 'ببخشید، نمی‌توانم.' },
        { fr: 'Avec plaisir !', fa: 'با کمال میل!' }
      ],
      grammar: {
        title: 'pouvoir / vouloir + décrire une personne',
        body: 'برای دعوت‌کردن و پاسخ‌دادن، پرکاربردترین فعل‌ها vouloir (خواستن) و pouvoir (توانستن) هستند.<br>' +
          'وقتی می‌خواهی بگویی «چه کسی می‌آید» را توصیف کنی، بین <b>avoir</b> (اعضای بدن) و <b>être</b> (قد/شخصیت) انتخاب کن: Il <b>a</b> les cheveux courts. Elle <b>est</b> sympa.',
        table: {
          head: ['ضمیر', 'vouloir', 'pouvoir'],
          rows: [
            ['je', 'veux', 'peux'],
            ['tu', 'veux', 'peux'],
            ['il/elle/on', 'veut', 'peut'],
            ['nous', 'voulons', 'pouvons'],
            ['vous', 'voulez', 'pouvez'],
            ['ils/elles', 'veulent', 'peuvent']
          ]
        },
        examples: [
          { fr: 'Tu veux venir ? — Je ne peux pas, je viens de rentrer du travail.', fa: 'می‌خواهی بیایی؟ — نمی‌توانم، تازه از سر کار برگشتم.' },
          { fr: 'Léa vient aussi. Elle est drôle et elle a les cheveux longs.', fa: 'لئا هم می‌آید. بامزه است و موی بلند دارد.' }
        ]
      },
      phonetics: {
        title: 'آهنگ سؤالی',
        body: 'در گفتار روزمره، سؤال بله/نه فقط با <b>بالا بردن آهنگ صدا</b> در آخر جمله ساخته می‌شود:',
        items: [
          { fr: 'Tu viens ce soir ?', ipa: '↗', fa: 'آهنگ بالا = سؤال' },
          { fr: 'Elle est sympa ?', ipa: '↗', fa: 'سؤال' }
        ]
      },
      dialogue: {
        title: 'Une invitation',
        lines: [
          { s: 'Karim', fr: 'Salut Mona ! On sort ce soir, tu veux venir ?', fa: 'سلام مونا! امشب بیرون می‌رویم، می‌خواهی بیایی؟' },
          { s: 'Mona', fr: 'Avec plaisir ! Qui vient ?', fa: 'با کمال میل! چه کسانی می‌آیند؟' },
          { s: 'Karim', fr: 'Léa vient aussi. Tu la connais ?', fa: 'لئا هم می‌آید. او را می‌شناسی؟' },
          { s: 'Mona', fr: 'Non, elle est comment ?', fa: 'نه، چه شکلی است؟' },
          { s: 'Karim', fr: 'Elle est petite, drôle et elle a les cheveux blonds. Tu vas l\'adorer !', fa: 'کوتاه‌قد و بامزه است و موی بلوند دارد. حتماً عاشقش می‌شوی!' },
          { s: 'Mona', fr: 'Je viens de finir mon travail, je peux venir dans une heure.', fa: 'تازه کارم تمام شد، یک ساعت دیگر می‌توانم بیایم.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'pouvoir را صرف کن:', q: 'Désolée, je ne ___ pas venir ce soir.', answer: ['peux'] },
        { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'vouloir را صرف کن:', q: 'Vous ___ venir avec nous ?', answer: ['voulez'] },
        { type: 'fill', skill: 'GR', topic: 'توصیف افراد', level: 'medium', fa: 'avoir یا être؟', q: 'Elle ___ les cheveux blonds.', answer: ['a'] },
        { type: 'mcq', skill: 'GR', topic: 'venir de', level: 'medium', q: '«تازه کارم را تمام کردم» به فرانسه:', options: ['Je viens de finir mon travail.', 'Je viens finir mon travail.', 'Je viens de finis mon travail.', 'Je vient de finir mon travail.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'توصیف افراد', level: 'easy', fa: 'جور کن:', pairs: [['sympa', 'مهربان/باحال'], ['timide', 'خجالتی'], ['drôle', 'بامزه'], ['sérieux', 'جدی']] },
        { type: 'mcq', skill: 'CO', topic: 'دعوت و قرار', level: 'easy', q: '🎧 گوش کن — چرا نمی‌تواند بیاید؟', audio: 'Désolé, je ne peux pas venir, je viens de rentrer du travail et je suis très fatigué.', audioFa: 'ببخشید، نمی‌توانم بیایم، تازه از سر کار برگشتم و خیلی خسته‌ام.', options: ['تازه از سر کار برگشته و خسته است', 'مریض است', 'مسافرت است', 'مهمان دارد'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'دعوت و قرار', level: 'hard', text: 'Elle est sympa et elle a les yeux verts.', trans: 'او مهربان است و چشم‌های سبز دارد.' },
        { type: 'order', skill: 'GR', topic: 'دعوت و قرار', level: 'medium', answer: 'Tu es libre samedi soir ?', fa: 'سؤال «شنبه شب آزادی؟» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'دعوت و قرار', level: 'medium', text: 'Tu veux venir avec nous ? On sort ce soir avec Léa, elle est très drôle.', fa: 'دوستت را دعوت کن و کسی که می‌آید را توصیف کن' },
        { type: 'write', skill: 'PE', topic: 'دعوت و قرار', level: 'hard', prompt: 'یک پیام دعوت بنویس و کسی که می‌آید را توصیف کن. (۳-۴ جمله)', min: 12, sample: 'Salut Sara ! On sort ce soir, tu veux venir ? Léa vient aussi, elle est sympa et elle a les cheveux longs. Je viens de finir mon travail, je suis libre à huit heures.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'ساعت و زمان', level: 'easy', q: '🎧 گوش کن — قرار ساعت چند است؟', audio: 'On se retrouve samedi à six heures et demie devant le cinéma.', audioFa: 'شنبه ساعت شش و نیم جلوی سینما همدیگر را می‌بینیم.', options: ['شنبه ۶:۳۰', 'یکشنبه ۶:۳۰', 'شنبه ۷:۱۵', 'جمعه ۶:۰۰'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'روزمرگی', level: 'medium', q: '🎧 گوش کن — ساعت چند بلند می‌شود؟', audio: 'Je me réveille à six heures et je me lève tout de suite.', audioFa: 'ساعت شش بیدار می‌شوم و فوراً بلند می‌شوم.', options: ['۶', '۷', '۸', 'نیمی نمی‌گوید'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'دعوت و قرار', level: 'easy', q: 'پیام را بخوان — برنامه چیست؟', qfr: 'Coucou ! Dimanche après-midi, on sort avec Léa. Elle est très sympa, tu vas l\'adorer. Rendez-vous à 14h.', options: ['بیرون رفتن با لئا، ساعت ۲', 'کنسرت شب', 'سینما، ساعت ۴', 'مهمانی شام'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', fa: 'به فرانسه: «ساعت ۸:۴۵ است»', q: 'Il est neuf heures ___ le quart.', answer: ['moins'] },
      { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'se coucher را صرف کن:', q: 'Nous ___ à minuit.', answer: ['nous couchons'] },
      { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'pouvoir را صرف کن:', q: 'Ils ne ___ pas venir.', answer: ['peuvent'] },
      { type: 'fill', skill: 'GR', topic: 'توصیف افراد', level: 'medium', fa: 'avoir یا être؟', q: 'Il ___ grand et sympa.', answer: ['est'] },
      { type: 'match', skill: 'VO', topic: 'روزمرگی', level: 'easy', fa: 'جور کن:', pairs: [['se réveiller', 'بیدار شدن'], ['sortir', 'بیرون رفتن'], ['dormir', 'خواب بودن'], ['rarement', 'به‌ندرت']] },
      { type: 'order', skill: 'GR', topic: 'دعوت و قرار', level: 'medium', answer: 'Tu es libre samedi soir ?', fa: 'سؤال «شنبه شب آزادی؟» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'فعل‌های انعکاسی', level: 'hard', text: 'Je me lève tôt tous les jours.', trans: 'هر روز زود بلند می‌شوم.' },
      { type: 'speak', skill: 'PO', topic: 'دعوت و قرار', level: 'medium', text: 'On va au cinéma ce soir ? Le film commence à huit heures et demie.', fa: 'دوستت را دعوت کن' },
      { type: 'write', skill: 'PE', topic: 'روزمرگی', level: 'hard', prompt: 'روزمرگی‌ات را بنویس و یک دوست را که با او بیرون می‌روی توصیف کن. (۵ جمله)', min: 16, sample: 'Je me lève à sept heures tous les jours. Je pars au travail à huit heures. Le vendredi, je sors avec mon amie Léa. Elle est drôle et elle a les cheveux longs. Le week-end, je me couche tard.' }
    ]
  }
};
