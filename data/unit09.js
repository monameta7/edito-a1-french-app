/* ===== واحد ۹: Pas de chance ! — بدشانسی! ===== */
EDITO.units[9] = {
  id: 9,
  title: 'Pas de chance !',
  fa: 'بدشانسی!',
  theme: 'بدن و سلامتی، نزد پزشک، و passé composé با être',
  culture: {
    title: 'داروخانه با علامت صلیب سبز ➕',
    body: 'در فرانسه داروخانه‌ها (pharmacies) با یک علامت صلیب سبز چشمک‌زن مشخص می‌شوند و برای مشکلات جزئی می‌توانی مستقیم و بدون وقت قبلی با داروساز مشورت کنی. سیستم بیمه سلامت فرانسه (Sécurité sociale) بخش زیادی از هزینه پزشک و دارو را پوشش می‌دهد. اگر واقعاً حالت بد است، شماره اورژانس ۱۵ (SAMU) یا ۱۱۲ (اورژانس عمومی اروپا) را بگیر.'
  },
  lessons: [
    {
      id: 'u9l1',
      title: 'Le corps et la santé',
      fa: 'بدن و سلامتی',
      vocab: [
        { fr: 'le corps', ipa: 'kɔʁ', fa: 'بدن', ex: 'Le corps humain', exfa: 'بدن انسان' },
        { fr: 'la tête', ipa: 'tɛt', fa: 'سر', ex: 'J\'ai mal à la tête.', exfa: 'سرم درد می‌کند.' },
        { fr: 'le ventre', ipa: 'vɑ̃tʁ', fa: 'شکم', ex: 'Il a mal au ventre.', exfa: 'شکمش درد می‌کند.' },
        { fr: 'la gorge', ipa: 'ɡɔʁʒ', fa: 'گلو', ex: 'J\'ai mal à la gorge.', exfa: 'گلویم درد می‌کند.' },
        { fr: 'le dos', ipa: 'do', fa: 'کمر / پشت', ex: 'Mal au dos', exfa: 'کمردرد' },
        { fr: 'la main', ipa: 'mɛ̃', fa: 'دست', ex: 'Je me lave les mains.', exfa: 'دست‌هایم را می‌شویم.' },
        { fr: 'le pied', ipa: 'pje', fa: 'پا', ex: 'J\'ai mal au pied.', exfa: 'پایم درد می‌کند.' },
        { fr: 'la jambe', ipa: 'ʒɑ̃b', fa: 'ساق پا', ex: 'Une jambe cassée', exfa: 'یک پای شکسته' },
        { fr: 'le bras', ipa: 'bʁa', fa: 'بازو / دست', ex: 'Il a mal au bras.', exfa: 'بازویش درد می‌کند.' },
        { fr: 'malade', ipa: 'malad', fa: 'مریض', ex: 'Je suis malade.', exfa: 'مریضم.' },
        { fr: 'la fièvre', ipa: 'fjɛvʁ', fa: 'تب', ex: 'Elle a de la fièvre.', exfa: 'تب دارد.' },
        { fr: 'fatigué / fatiguée', ipa: 'fatiɡe', fa: 'خسته', ex: 'Je suis très fatiguée.', exfa: 'خیلی خسته‌ام.' },
        { fr: 'tousser', ipa: 'tuse', fa: 'سرفه کردن', ex: 'Il tousse beaucoup.', exfa: 'زیاد سرفه می‌کند.' },
        { fr: 'un rhume', ipa: 'ʁym', fa: 'سرماخوردگی', ex: 'J\'ai un rhume.', exfa: 'سرما خورده‌ام.' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce qui ne va pas ?', fa: 'چی شده؟ (مشکل چیست؟)' },
        { fr: 'J\'ai mal à...', fa: '... درد می‌کند' },
        { fr: 'Je ne me sens pas bien.', fa: 'حالم خوب نیست.' },
        { fr: 'Bon rétablissement !', fa: 'زود خوب شو! (شفای عاجل)' }
      ],
      grammar: {
        title: 'Avoir mal à + عضو بدن',
        body: 'برای گفتن درد از الگوی <b>avoir mal à + حرف تعریف + عضو</b> استفاده می‌کنیم. à با حرف تعریف ترکیب می‌شود:<br>' +
          '• à + la = à la: J\'ai mal <b>à la</b> tête. (سردرد دارم)<br>' +
          '• à + le = au: Il a mal <b>au</b> ventre. (دلش درد می‌کند)<br>' +
          '• à + les = aux: Elle a mal <b>aux</b> pieds. (پاهایش درد می‌کند)<br>' +
          '⚠️ برای اعضای بدن از صفت ملکی استفاده نمی‌کنیم: «سرم درد می‌کند» = J\'ai mal à la tête (نه ma tête!)',
        examples: [
          { fr: 'J\'ai mal à la gorge et je tousse.', fa: 'گلودرد دارم و سرفه می‌کنم.' },
          { fr: 'Après le sport, on a mal aux jambes.', fa: 'بعد از ورزش پاهایمان درد می‌کند.' }
        ]
      },
      phonetics: {
        title: 'اعضای بدن — تلفظ',
        body: 'چند واژه با حروف بی‌صدا:',
        items: [
          { fr: 'le corps', ipa: 'kɔʁ', fa: 'ps آخر بی‌صدا' },
          { fr: 'le bras', ipa: 'bʁa', fa: 's آخر بی‌صدا' },
          { fr: 'le pied', ipa: 'pje', fa: 'd آخر بی‌صدا' },
          { fr: 'le dos', ipa: 'do', fa: 's آخر بی‌صدا' }
        ]
      },
      dialogue: {
        title: 'Ça ne va pas ?',
        lines: [
          { s: 'Karim', fr: 'Ça va, Mona ? Tu as l\'air fatiguée.', fa: 'خوبی مونا؟ خسته به نظر می‌رسی.' },
          { s: 'Mona', fr: 'Non, ça ne va pas. J\'ai mal à la tête et à la gorge.', fa: 'نه، خوب نیستم. سردرد و گلودرد دارم.' },
          { s: 'Karim', fr: 'Tu as de la fièvre ?', fa: 'تب داری؟' },
          { s: 'Mona', fr: 'Oui, un peu. Et je tousse beaucoup.', fa: 'آره، کمی. و زیاد سرفه می‌کنم.' },
          { s: 'Karim', fr: 'C\'est un rhume. Il faut aller chez le médecin !', fa: 'سرماخوردگی است. باید بروی دکتر!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'بدن و سلامتی', level: 'hard', fa: 'à la / au / aux :', q: 'J\'ai mal ___ tête.', answer: ['à la', 'a la'] },
        { type: 'fill', skill: 'GR', topic: 'بدن و سلامتی', level: 'hard', fa: 'à la / au / aux :', q: 'Il a mal ___ ventre.', answer: ['au'] },
        { type: 'fill', skill: 'GR', topic: 'بدن و سلامتی', level: 'hard', fa: 'à la / au / aux :', q: 'Elle a mal ___ pieds.', answer: ['aux'] },
        { type: 'match', skill: 'VO', topic: 'بدن و سلامتی', level: 'medium', fa: 'اعضای بدن را جور کن:', pairs: [['la tête', 'سر'], ['le dos', 'کمر'], ['la main', 'دست'], ['la jambe', 'ساق پا'], ['la gorge', 'گلو']] },
        { type: 'mcq', skill: 'CO', topic: 'بدن و سلامتی', level: 'medium', q: '🎧 گوش کن — مشکل او چیست؟', audio: 'Je ne me sens pas bien. J\'ai mal au ventre depuis hier soir.', audioFa: 'حالم خوب نیست. از دیشب دلم درد می‌کند.', options: ['از دیشب دلش درد می‌کند', 'سردرد دارد', 'پایش شکسته', 'سرما خورده'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'بدن و سلامتی', level: 'hard', text: 'J\'ai mal à la gorge et j\'ai de la fièvre.', trans: 'گلودرد دارم و تب دارم.' },
        { type: 'order', skill: 'GR', topic: 'بدن و سلامتی', level: 'hard', answer: 'Je ne me sens pas bien.', fa: 'جمله «حالم خوب نیست» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'بدن و سلامتی', level: 'hard', text: 'Je suis malade. J\'ai mal à la tête et je tousse.', fa: 'مریضم. سردرد دارم و سرفه می‌کنم.' },
        { type: 'write', skill: 'PE', topic: 'بدن و سلامتی', level: 'hard', prompt: 'پیامی به همکارت بنویس: مریضی و امروز نمی‌آیی. (۲-۳ جمله)', min: 10, sample: 'Bonjour Julie, je suis malade aujourd\'hui. J\'ai de la fièvre et j\'ai mal à la gorge. Je ne peux pas venir au bureau, désolée.' }
      ]
    },
    {
      id: 'u9l2',
      title: 'Chez le médecin',
      fa: 'نزد پزشک',
      vocab: [
        { fr: 'un médecin / un docteur', ipa: 'medsɛ̃ / dɔktœʁ', fa: 'پزشک / دکتر', ex: 'Je vais chez le médecin.', exfa: 'می‌روم دکتر.' },
        { fr: 'un rendez-vous', ipa: 'ʁɑ̃devu', fa: 'وقت / قرار', ex: 'J\'ai rendez-vous à 15h.', exfa: 'ساعت ۳ وقت دارم.' },
        { fr: 'une ordonnance', ipa: 'ɔʁdɔnɑ̃s', fa: 'نسخه', ex: 'Voilà votre ordonnance.', exfa: 'بفرمایید نسخه‌تان.' },
        { fr: 'un médicament', ipa: 'medikamɑ̃', fa: 'دارو', ex: 'Prenez ce médicament.', exfa: 'این دارو را بخورید.' },
        { fr: 'un comprimé', ipa: 'kɔ̃pʁime', fa: 'قرص', ex: 'Un comprimé matin et soir', exfa: 'یک قرص صبح و شب' },
        { fr: 'se reposer', ipa: 'sə ʁəpoze', fa: 'استراحت کردن', ex: 'Il faut vous reposer.', exfa: 'باید استراحت کنید.' },
        { fr: 'dormir', ipa: 'dɔʁmiʁ', fa: 'خوابیدن', ex: 'Dormez huit heures.', exfa: 'هشت ساعت بخوابید.' },
        { fr: 'la grippe', ipa: 'ɡʁip', fa: 'آنفولانزا', ex: 'Vous avez la grippe.', exfa: 'آنفولانزا دارید.' },
        { fr: 'grave', ipa: 'ɡʁav', fa: 'جدی / وخیم', ex: 'Ce n\'est pas grave.', exfa: 'جدی نیست.' },
        { fr: 'aller mieux', ipa: 'ale mjø', fa: 'بهتر شدن', ex: 'Je vais mieux, merci.', exfa: 'بهترم، ممنون.' },
        { fr: 'la santé', ipa: 'sɑ̃te', fa: 'سلامتی', ex: 'La santé, c\'est important !', exfa: 'سلامتی مهم است!' },
        { fr: 'éviter', ipa: 'evite', fa: 'پرهیز کردن', ex: 'Évitez le sport cette semaine.', exfa: 'این هفته از ورزش پرهیز کنید.' }
      ],
      phrases: [
        { fr: 'Je voudrais prendre rendez-vous.', fa: 'می‌خواهم وقت بگیرم.' },
        { fr: 'Où avez-vous mal ?', fa: 'کجایتان درد می‌کند؟' },
        { fr: 'Depuis quand ?', fa: 'از کِی؟' },
        { fr: 'Ce n\'est pas grave.', fa: 'جدی نیست.' },
        { fr: 'Prenez ce médicament trois fois par jour.', fa: 'این دارو را روزی سه بار بخورید.' }
      ],
      grammar: {
        title: 'Les conseils — il faut / devoir / impératif',
        body: 'سه راه برای توصیه و دستور:<br>' +
          '۱) <b>il faut + مصدر</b>: Il faut dormir. (باید خوابید)<br>' +
          '۲) <b>devoir + مصدر</b>: Vous devez vous reposer. (باید استراحت کنید)<br>' +
          '۳) <b>امری</b>: Buvez de l\'eau ! Reposez-vous ! (در امریِ فعل انعکاسی، ضمیر بعد از فعل می‌آید)<br>' +
          '💊 «X بار در روز»: trois fois <b>par jour</b>',
        examples: [
          { fr: 'Il faut rester à la maison et vous reposer.', fa: 'باید خانه بمانید و استراحت کنید.' },
          { fr: 'Prenez un comprimé deux fois par jour.', fa: 'روزی دو بار یک قرص بخورید.' },
          { fr: 'Vous ne devez pas faire de sport.', fa: 'نباید ورزش کنید.' }
        ]
      },
      phonetics: {
        title: 'آوای [ɡʁ] و [kʁ]',
        body: 'خوشه‌های صامت با r:',
        items: [
          { fr: 'la grippe', ipa: 'ɡʁip', fa: 'آنفولانزا' },
          { fr: 'grave', ipa: 'ɡʁav', fa: 'جدی' },
          { fr: 'un comprimé', ipa: 'kɔ̃pʁime', fa: 'قرص' },
          { fr: 'prendre', ipa: 'pʁɑ̃dʁ', fa: 'گرفتن' }
        ]
      },
      dialogue: {
        title: 'La consultation',
        lines: [
          { s: 'Médecin', fr: 'Bonjour ! Alors, qu\'est-ce qui ne va pas ?', fa: 'سلام! خب، چی شده؟' },
          { s: 'Mona', fr: 'J\'ai mal à la tête et à la gorge, et je tousse.', fa: 'سردرد و گلودرد دارم و سرفه می‌کنم.' },
          { s: 'Médecin', fr: 'Depuis quand ?', fa: 'از کِی؟' },
          { s: 'Mona', fr: 'Depuis trois jours. Et j\'ai de la fièvre.', fa: 'از سه روز پیش. تب هم دارم.' },
          { s: 'Médecin', fr: 'C\'est la grippe, mais ce n\'est pas grave. Voilà une ordonnance.', fa: 'آنفولانزاست، ولی جدی نیست. بفرمایید نسخه.' },
          { s: 'Mona', fr: 'Merci docteur.', fa: 'ممنون دکتر.' },
          { s: 'Médecin', fr: 'Prenez les comprimés trois fois par jour, buvez beaucoup d\'eau et reposez-vous !', fa: 'قرص‌ها را روزی سه بار بخورید، آب زیاد بنوشید و استراحت کنید!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'نزد پزشک', level: 'medium', q: '🎧 گوش کن — دارو را چند بار در روز باید بخورد؟', audio: 'Prenez ce médicament deux fois par jour, matin et soir, pendant une semaine.', audioFa: 'این دارو را روزی دو بار، صبح و شب، به مدت یک هفته بخورید.', options: ['دو بار', 'سه بار', 'یک بار', 'چهار بار'], correct: 0, frOptions: false },
        { type: 'fill', skill: 'GR', topic: 'توصیه و دستور', level: 'hard', fa: 'توصیه بساز:', q: 'Il ___ boire beaucoup d\'eau.', answer: ['faut'] },
        { type: 'fill', skill: 'GR', topic: 'توصیه و دستور', level: 'hard', fa: 'devoir را صرف کن:', q: 'Vous ___ vous reposer.', answer: ['devez'] },
        { type: 'match', skill: 'VO', topic: 'نزد پزشک', level: 'medium', fa: 'جور کن:', pairs: [['une ordonnance', 'نسخه'], ['un comprimé', 'قرص'], ['la grippe', 'آنفولانزا'], ['se reposer', 'استراحت کردن']] },
        { type: 'mcq', skill: 'CE', topic: 'نزد پزشک', level: 'medium', q: 'نسخه را بخوان — کدام درست است؟', qfr: 'Ordonnance — M. Karimi : 1 comprimé matin et soir pendant 5 jours. Beaucoup d\'eau. Pas de sport cette semaine.', options: ['روزی دو قرص، بدون ورزش', 'روزی سه قرص', 'ورزش آزاد است', 'فقط دو روز دارو'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'نزد پزشک', level: 'hard', text: 'Je voudrais prendre rendez-vous avec le docteur.', trans: 'می‌خواهم با دکتر وقت بگیرم.' },
        { type: 'order', skill: 'GR', topic: 'توصیه و دستور', level: 'hard', answer: 'Il faut rester à la maison.', fa: 'جمله «باید خانه بمانید» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'نزد پزشک', level: 'hard', text: 'Bonjour docteur. J\'ai mal au ventre depuis deux jours.', fa: 'به دکتر توضیح بده' },
        { type: 'write', skill: 'PE', topic: 'توصیه و دستور', level: 'hard', prompt: 'دوستت سرما خورده. سه توصیه به او بنویس (با il faut / devoir / امری).', min: 10, sample: 'Ma pauvre ! Il faut te reposer. Tu dois boire beaucoup d\'eau et du thé chaud. Prends un médicament et dors bien ! Bon rétablissement !' }
      ]
    },
    {
      id: 'u9l3',
      title: 'Qu\'est-ce qui s\'est passé ?',
      fa: 'چه اتفاقی افتاد؟ — passé composé با être',
      vocab: [
        { fr: 'tomber', ipa: 'tɔ̃be', fa: 'افتادن', ex: 'Je suis tombé dans la rue.', exfa: 'در خیابان افتادم.' },
        { fr: 'arriver', ipa: 'aʁive', fa: 'رسیدن / اتفاق افتادن', ex: 'Qu\'est-ce qui est arrivé ?', exfa: 'چه اتفاقی افتاد؟' },
        { fr: 'rester', ipa: 'ʁɛste', fa: 'ماندن', ex: 'Je suis restée à la maison.', exfa: 'خانه ماندم.' },
        { fr: 'rentrer', ipa: 'ʁɑ̃tʁe', fa: 'برگشتن (به خانه)', ex: 'Il est rentré tard.', exfa: 'دیر برگشت خانه.' },
        { fr: 'sortir', ipa: 'sɔʁtiʁ', fa: 'بیرون رفتن', ex: 'Elle est sortie hier soir.', exfa: 'دیشب بیرون رفت.' },
        { fr: 'venir', ipa: 'vəniʁ', fa: 'آمدن', ex: 'Ils sont venus chez moi.', exfa: 'آمدند خانه من.' },
        { fr: 'naître', ipa: 'nɛtʁ', fa: 'به دنیا آمدن', ex: 'Je suis née en 1995.', exfa: 'در ۱۹۹۵ به دنیا آمدم.' },
        { fr: 'un accident', ipa: 'aksidɑ̃', fa: 'تصادف / حادثه', ex: 'Il a eu un accident.', exfa: 'تصادف کرد.' },
        { fr: 'l\'hôpital', ipa: 'opital', fa: 'بیمارستان', ex: 'Elle est allée à l\'hôpital.', exfa: 'به بیمارستان رفت.' },
        { fr: 'se casser', ipa: 'sə kɑse', fa: 'شکستن (عضو بدن)', ex: 'Il s\'est cassé la jambe.', exfa: 'پایش شکست.' },
        { fr: 'glisser', ipa: 'ɡlise', fa: 'لیز خوردن', ex: 'J\'ai glissé dans l\'escalier.', exfa: 'در پله‌ها لیز خوردم.' },
        { fr: 'pas de chance !', ipa: 'pa də ʃɑ̃s', fa: 'بدشانسی!', ex: 'Oh, pas de chance !', exfa: 'اوه، بدشانسی!' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce qui s\'est passé ?', fa: 'چه اتفاقی افتاد؟' },
        { fr: 'Ce n\'est rien.', fa: 'چیزی نیست.' },
        { fr: 'Quelle horreur !', fa: 'چه وحشتناک!' }
      ],
      grammar: {
        title: 'Le passé composé avec « être »',
        body: 'حدود ۱۵ فعلِ حرکت/تغییر حالت، گذشته‌شان را با <b>être</b> می‌سازند نه avoir:<br>' +
          '<b>aller، venir، arriver، partir، entrer، sortir، monter، descendre، tomber، rester، rentrer، naître، mourir</b> + همه فعل‌های انعکاسی<br>' +
          '⚠️ با être، اسم مفعول با فاعل <b>مطابقت</b> می‌کند:<br>' +
          '• Il est allé / Elle est allé<b>e</b> / Ils sont allé<b>s</b> / Elles sont allé<b>es</b>',
        table: {
          head: ['فاعل', 'مثال', 'معنی'],
          rows: [
            ['il', 'Il est tombé.', 'او افتاد'],
            ['elle', 'Elle est tombée.', 'او افتاد (زن)'],
            ['ils', 'Ils sont partis.', 'آنها رفتند'],
            ['elles', 'Elles sont parties.', 'آنها رفتند (زنان)'],
            ['فعل انعکاسی', 'Elle s\'est cassé la jambe.', 'پایش شکست']
          ]
        },
        examples: [
          { fr: 'Hier, je suis restée à la maison.', fa: 'دیروز خانه ماندم. (گوینده زن)' },
          { fr: 'Il est tombé et il est allé à l\'hôpital.', fa: 'افتاد و به بیمارستان رفت.' },
          { fr: 'Nous sommes rentrés à minuit.', fa: 'نیمه‌شب برگشتیم خانه.' }
        ]
      },
      phonetics: {
        title: 'است یا دارد؟ — est / a',
        body: 'در شنیدن گذشته، دقت کن فعل کمکی être است یا avoir:',
        items: [
          { fr: 'il est allé', ipa: 'il ɛ‿tale', fa: 'رفت (être)' },
          { fr: 'il a mangé', ipa: 'il a mɑ̃ʒe', fa: 'خورد (avoir)' },
          { fr: 'elle est sortie', ipa: 'ɛl ɛ sɔʁti', fa: 'بیرون رفت' },
          { fr: 'elle a fini', ipa: 'ɛl a fini', fa: 'تمام کرد' }
        ]
      },
      dialogue: {
        title: 'L\'accident de vélo',
        lines: [
          { s: 'Sara', fr: 'Karim ! Qu\'est-ce qui s\'est passé ? Ton bras !', fa: 'کریم! چه اتفاقی افتاد؟ دستت!' },
          { s: 'Karim', fr: 'Je suis tombé de vélo hier soir.', fa: 'دیشب از دوچرخه افتادم.' },
          { s: 'Sara', fr: 'Oh non ! Comment ?', fa: 'وای نه! چطور؟' },
          { s: 'Karim', fr: 'J\'ai glissé dans la rue. Je suis allé à l\'hôpital.', fa: 'در خیابان لیز خوردم. رفتم بیمارستان.' },
          { s: 'Sara', fr: 'C\'est grave ?', fa: 'جدی است؟' },
          { s: 'Karim', fr: 'Non, ce n\'est rien. Mais je suis resté trois heures aux urgences ! Pas de chance !', fa: 'نه، چیزی نیست. ولی سه ساعت در اورژانس ماندم! بدشانسی!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'GR', topic: 'passé composé با être', level: 'medium', q: 'کدام فعل با être صرف می‌شود؟', options: ['aller', 'manger', 'visiter', 'travailler'], correct: 0, explain: 'فعل‌های حرکت (aller، venir، tomber...) با être می‌آیند.' },
        { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'hard', fa: 'être یا avoir؟', q: 'Hier, elle ___ allée au cinéma.', answer: ['est'] },
        { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'hard', fa: 'مطابقت اسم مفعول:', q: 'Elles sont ___ à minuit. (rentrer)', answer: ['rentrées', 'rentrees'], explain: 'elles → مؤنث جمع → rentrées.' },
        { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'hard', fa: 'être یا avoir؟', q: 'Nous ___ mangé au restaurant.', answer: ['avons'], explain: 'manger با avoir می‌آید.' },
        { type: 'mcq', skill: 'CO', topic: 'حوادث', level: 'medium', q: '🎧 گوش کن — چه اتفاقی افتاد؟', audio: 'Ce matin, je suis tombée dans l\'escalier et je me suis cassé le bras.', audioFa: 'امروز صبح در پله‌ها افتادم و دستم شکست.', options: ['از پله افتاد و دستش شکست', 'تصادف ماشین کرد', 'سرما خورد', 'پایش لیز خورد ولی چیزی نشد'], correct: 0, frOptions: false },
        { type: 'match', skill: 'GR', topic: 'passé composé با être', level: 'medium', fa: 'جور کن (کدام با کدام؟):', pairs: [['aller', 'être'], ['sortir', 'être'], ['visiter', 'avoir'], ['prendre', 'avoir']] },
        { type: 'dictation', skill: 'CO', topic: 'passé composé با être', level: 'hard', text: 'Il est allé à l\'hôpital hier soir.', trans: 'دیشب به بیمارستان رفت.' },
        { type: 'order', skill: 'GR', topic: 'passé composé با être', level: 'hard', answer: 'Je suis restée à la maison.', fa: 'جمله «خانه ماندم» (گوینده زن) را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'حوادث', level: 'hard', text: 'Je suis tombé dans la rue, mais ce n\'est pas grave.', fa: 'اتفاق را تعریف کن' },
        { type: 'write', skill: 'PE', topic: 'passé composé با être', level: 'hard', prompt: 'دیروزت را تعریف کن: کجا رفتی، کِی برگشتی، چه کردی؟ (۴ جمله — حداقل دو فعل با être)', min: 14, sample: 'Hier matin, je suis allée au travail à huit heures. À midi, je suis sortie avec une collègue. On a mangé dans un café. Le soir, je suis rentrée à sept heures et je me suis couchée tôt.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'بدن و سلامتی', level: 'medium', q: '🎧 گوش کن — مشکل بیمار چیست؟', audio: 'Docteur, j\'ai mal à la gorge et à la tête, je tousse et j\'ai de la fièvre depuis deux jours.', audioFa: 'دکتر، گلودرد و سردرد دارم، سرفه می‌کنم و از دو روز پیش تب دارم.', options: ['گلودرد، سردرد، سرفه و تب', 'دل‌درد و کمردرد', 'پای شکسته', 'خستگی'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'حوادث', level: 'medium', q: 'پیام را بخوان — چرا نیامده؟', qfr: 'Désolée, je ne peux pas venir aujourd\'hui. Je suis tombée dans l\'escalier hier et je suis allée à l\'hôpital. J\'ai mal au dos. Le médecin dit : une semaine de repos !', options: ['از پله افتاده و باید استراحت کند', 'سرما خورده', 'مسافرت است', 'سرش شلوغ است'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'بدن و سلامتی', level: 'hard', fa: 'کامل کن:', q: 'Après le match, j\'ai mal ___ jambes.', answer: ['aux'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'hard', fa: 'être یا avoir؟', q: 'Ils ___ arrivés en retard.', answer: ['sont'] },
      { type: 'fill', skill: 'GR', topic: 'passé composé با être', level: 'hard', fa: 'مطابقت:', q: 'Elle est ___ chez le médecin. (aller)', answer: ['allée', 'allee'] },
      { type: 'fill', skill: 'GR', topic: 'توصیه و دستور', level: 'hard', fa: 'توصیه:', q: 'Il ___ prendre ce médicament trois fois par jour.', answer: ['faut'] },
      { type: 'match', skill: 'VO', topic: 'بدن و سلامتی', level: 'medium', fa: 'جور کن:', pairs: [['le ventre', 'شکم'], ['le bras', 'بازو'], ['la fièvre', 'تب'], ['un médicament', 'دارو']] },
      { type: 'order', skill: 'GR', topic: 'حوادث', level: 'hard', answer: 'Qu\'est-ce qui s\'est passé ?', fa: 'سؤال «چه اتفاقی افتاد؟» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'نزد پزشک', level: 'hard', text: 'Reposez-vous et buvez beaucoup d\'eau.', trans: 'استراحت کنید و آب زیاد بنوشید.' },
      { type: 'speak', skill: 'PO', topic: 'نزد پزشک', level: 'hard', text: 'Bonjour docteur, je ne me sens pas bien. J\'ai mal à la tête depuis hier.', fa: 'نزد دکتر' },
      { type: 'write', skill: 'PE', topic: 'حوادث', level: 'hard', prompt: 'یک اتفاق بد (واقعی یا خیالی) را تعریف کن: چه شد، کجا رفتی، الان چطوری؟ (۴-۵ جمله در گذشته)', min: 16, sample: 'La semaine dernière, je suis tombée de vélo dans le parc. J\'ai eu très mal au bras. Je suis allée à l\'hôpital avec mon frère. Le médecin a dit : ce n\'est pas grave. Maintenant, je vais mieux !' }
    ]
  }
};
