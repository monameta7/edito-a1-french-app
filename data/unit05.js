/* ===== واحد ۵: C'est quoi le programme ? — برنامه چیست؟ ===== */
EDITO.units[5] = {
  id: 5,
  title: 'C\'est quoi le programme ?',
  fa: 'برنامه چیست؟',
  theme: 'ساعت، روزهای هفته، اوقات فراغت، دعوت کردن، futur proche و فعل‌های pouvoir/vouloir',
  culture: {
    title: 'هفته ۳۵ ساعته و یکشنبه‌های آرام 🕰️',
    body: 'قانون کار فرانسه هفته کاری استاندارد را ۳۵ ساعت تعریف می‌کند و اکثر فرانسوی‌ها تعطیلات سالانه‌ی نسبتاً طولانی (حدود ۵ هفته) دارند. در شهرهای کوچک‌تر، بیشتر مغازه‌ها یکشنبه‌ها و گاهی دوشنبه‌ها بسته‌اند — پس اگر برنامه خرید داری، این را در نظر بگیر! برای دعوت‌کردن، معمولاً چند روز قبل هماهنگ می‌شود، نه سر همان روز.'
  },
  lessons: [
    {
      id: 'u5l1',
      title: 'Quelle heure est-il ?',
      fa: 'ساعت چند است؟',
      vocab: [
        { fr: 'l\'heure', ipa: 'œʁ', fa: 'ساعت (زمان)', ex: 'Quelle heure est-il ?', exfa: 'ساعت چند است؟' },
        { fr: 'midi', ipa: 'midi', fa: 'ظهر', ex: 'Il est midi.', exfa: 'ظهر است.' },
        { fr: 'minuit', ipa: 'minɥi', fa: 'نیمه‌شب', ex: 'Il est minuit.', exfa: 'نیمه‌شب است.' },
        { fr: 'et demie', ipa: 'e dəmi', fa: 'و نیم', ex: 'Il est deux heures et demie.', exfa: 'ساعت دو و نیم است.' },
        { fr: 'et quart', ipa: 'e kaʁ', fa: 'و ربع', ex: 'Il est trois heures et quart.', exfa: 'ساعت سه و ربع است.' },
        { fr: 'moins le quart', ipa: 'mwɛ̃ lə kaʁ', fa: 'یک ربع کم', ex: 'Il est cinq heures moins le quart.', exfa: 'یک ربع به پنج است.' },
        { fr: 'le matin', ipa: 'matɛ̃', fa: 'صبح', ex: 'Je travaille le matin.', exfa: 'صبح کار می‌کنم.' },
        { fr: 'l\'après-midi', ipa: 'apʁɛmidi', fa: 'بعدازظهر', ex: 'L\'après-midi, je suis libre.', exfa: 'بعدازظهر آزادم.' },
        { fr: 'le soir', ipa: 'swaʁ', fa: 'عصر / شب', ex: 'Ce soir, on sort.', exfa: 'امشب بیرون می‌رویم.' },
        { fr: 'lundi', ipa: 'lœ̃di', fa: 'دوشنبه', ex: 'Lundi, je travaille.', exfa: 'دوشنبه کار می‌کنم.' },
        { fr: 'mardi / mercredi / jeudi', ipa: 'maʁdi / mɛʁkʁədi / ʒødi', fa: 'سه‌شنبه / چهارشنبه / پنجشنبه', ex: '', exfa: '' },
        { fr: 'vendredi / samedi / dimanche', ipa: 'vɑ̃dʁədi / samdi / dimɑ̃ʃ', fa: 'جمعه / شنبه / یکشنبه', ex: '', exfa: '' },
        { fr: 'aujourd\'hui', ipa: 'oʒuʁdɥi', fa: 'امروز', ex: 'Aujourd\'hui, c\'est lundi.', exfa: 'امروز دوشنبه است.' },
        { fr: 'demain', ipa: 'dəmɛ̃', fa: 'فردا', ex: 'À demain !', exfa: 'تا فردا!' },
        { fr: 'ouvert / fermé', ipa: 'uvɛʁ / fɛʁme', fa: 'باز / بسته', ex: 'Ouvert de 9h à 18h', exfa: 'باز از ۹ تا ۱۸' }
      ],
      phrases: [
        { fr: 'Quelle heure est-il ?', fa: 'ساعت چند است؟' },
        { fr: 'Il est... heures.', fa: 'ساعت ... است.' },
        { fr: 'À quelle heure ?', fa: 'ساعت چند؟ (چه ساعتی؟)' },
        { fr: 'De 9 heures à 18 heures', fa: 'از ساعت ۹ تا ۱۸' }
      ],
      grammar: {
        title: 'Dire l\'heure — گفتن ساعت',
        body: 'ساعت را با <b>Il est</b> می‌گوییم (همیشه il، حتی برای ساعت!):<br>' +
          '• Il est trois heures. (ساعت ۳ است)<br>' +
          '• 3h15 = trois heures <b>et quart</b> | 3h30 = trois heures <b>et demie</b> | 3h45 = quatre heures <b>moins le quart</b> (یک ربع به ۴)<br>' +
          '• در برنامه‌های رسمی (قطار، سینما...) ساعت ۲۴تایی می‌گویند: 18h30 = dix-huit heures trente<br>' +
          '⚠️ روزهای هفته حرف تعریف نمی‌گیرند مگر برای «هر ...»: lundi = این دوشنبه، <b>le</b> lundi = دوشنبه‌ها',
        table: {
          head: ['ساعت', 'گفتار روزمره'],
          rows: [
            ['8h00', 'huit heures'],
            ['8h15', 'huit heures et quart'],
            ['8h30', 'huit heures et demie'],
            ['8h45', 'neuf heures moins le quart'],
            ['12h00', 'midi'],
            ['00h00', 'minuit']
          ]
        },
        examples: [
          { fr: 'Le magasin est ouvert de neuf heures à dix-huit heures.', fa: 'مغازه از ۹ تا ۱۸ باز است.' },
          { fr: 'Le film commence à vingt heures trente.', fa: 'فیلم ساعت ۲۰:۳۰ شروع می‌شود.' }
        ]
      },
      phonetics: {
        title: 'اتصال با heures',
        body: 'اعداد با heures اتصال می‌گیرند:',
        items: [
          { fr: 'deux heures', ipa: 'dø‿zœʁ', fa: '«دو زور»' },
          { fr: 'trois heures', ipa: 'tʁwa‿zœʁ', fa: '«تروا زور»' },
          { fr: 'six heures', ipa: 'si‿zœʁ', fa: '«سی زور»' },
          { fr: 'neuf heures', ipa: 'nœ‿vœʁ', fa: '«نو وور» — f به v تبدیل می‌شود!' },
          { fr: 'dix heures', ipa: 'di‿zœʁ', fa: '«دی زور»' }
        ]
      },
      dialogue: {
        title: 'On est en retard !',
        lines: [
          { s: 'Karim', fr: 'Quelle heure est-il ?', fa: 'ساعت چند است؟' },
          { s: 'Sara', fr: 'Il est sept heures et demie.', fa: 'هفت و نیم است.' },
          { s: 'Karim', fr: 'Oh non ! Le film commence à huit heures moins le quart !', fa: 'وای نه! فیلم یک ربع به هشت شروع می‌شود!' },
          { s: 'Sara', fr: 'Ce n\'est pas grave, le cinéma est à côté. On y va à pied.', fa: 'مهم نیست، سینما همین بغل است. پیاده می‌رویم.' },
          { s: 'Karim', fr: 'D\'accord, on y va !', fa: 'باشه، بزن بریم!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'ساعت و زمان', level: 'easy', q: '🎧 گوش کن — ساعت چند است؟', audio: 'Il est quatre heures et demie.', audioFa: 'ساعت چهار و نیم است.', options: ['۴:۳۰', '۴:۱۵', '۵:۳۰', '۴:۴۵'], correct: 0, frOptions: false },
        { type: 'mcq', skill: 'CO', topic: 'ساعت و زمان', level: 'easy', q: '🎧 گوش کن — ساعت چند است؟', audio: 'Il est neuf heures moins le quart.', audioFa: 'یک ربع به نه است.', options: ['۸:۴۵', '۹:۱۵', '۹:۴۵', '۸:۱۵'], correct: 0, frOptions: false, explain: 'moins le quart یعنی یک ربع کم: ۸:۴۵.' },
        { type: 'fill', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', fa: '«ساعت دو و ربع است» را کامل کن:', q: 'Il est deux heures et ___.', answer: ['quart'] },
        { type: 'match', skill: 'VO', topic: 'ساعت و زمان', level: 'easy', fa: 'جور کن:', pairs: [['midi', 'ظهر'], ['minuit', 'نیمه‌شب'], ['le matin', 'صبح'], ['le soir', 'شب']] },
        { type: 'match', skill: 'VO', topic: 'ساعت و زمان', level: 'easy', fa: 'روزها را جور کن:', pairs: [['lundi', 'دوشنبه'], ['vendredi', 'جمعه'], ['dimanche', 'یکشنبه'], ['mercredi', 'چهارشنبه']] },
        { type: 'dictation', skill: 'CO', topic: 'ساعت و زمان', level: 'hard', text: 'Le magasin est ouvert de neuf heures à midi.', trans: 'مغازه از ۹ تا ظهر باز است.' },
        { type: 'order', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', answer: 'Le film commence à huit heures.', fa: 'جمله «فیلم ساعت هشت شروع می‌شود» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'ساعت و زمان', level: 'medium', text: 'Il est trois heures et demie de l\'après-midi.', fa: 'ساعت سه و نیم بعدازظهر است.' },
        { type: 'mcq', skill: 'CE', topic: 'ساعت و زمان', level: 'easy', q: 'تابلو را بخوان — یکشنبه‌ها موزه چطور است؟', qfr: 'Musée d\'Art Moderne — Horaires : mardi-samedi 10h-18h, dimanche 10h-13h, fermé le lundi', options: ['فقط صبح باز است', 'کل روز باز است', 'بسته است', 'تا ۱۸ باز است'], correct: 0, frOptions: false }
      ]
    },
    {
      id: 'u5l2',
      title: 'Les loisirs',
      fa: 'اوقات فراغت',
      vocab: [
        { fr: 'les loisirs', ipa: 'lwaziʁ', fa: 'اوقات فراغت / تفریحات', ex: 'Quels sont tes loisirs ?', exfa: 'تفریحاتت چیست؟' },
        { fr: 'faire du sport', ipa: 'fɛʁ dy spɔʁ', fa: 'ورزش کردن', ex: 'Je fais du sport le samedi.', exfa: 'شنبه‌ها ورزش می‌کنم.' },
        { fr: 'faire de la natation', ipa: 'natasjɔ̃', fa: 'شنا کردن', ex: 'Elle fait de la natation.', exfa: 'او شنا می‌کند.' },
        { fr: 'jouer au football', ipa: 'ʒwe o futbol', fa: 'فوتبال بازی کردن', ex: 'Il joue au football.', exfa: 'او فوتبال بازی می‌کند.' },
        { fr: 'jouer de la guitare', ipa: 'ɡitaʁ', fa: 'گیتار زدن', ex: 'Tu joues de la guitare ?', exfa: 'گیتار می‌زنی؟' },
        { fr: 'écouter de la musique', ipa: 'ekute', fa: 'موسیقی گوش دادن', ex: 'J\'écoute de la musique.', exfa: 'موسیقی گوش می‌دهم.' },
        { fr: 'regarder un film', ipa: 'ʁəɡaʁde', fa: 'فیلم دیدن', ex: 'On regarde un film ce soir ?', exfa: 'امشب فیلم ببینیم؟' },
        { fr: 'lire', ipa: 'liʁ', fa: 'خواندن (کتاب)', ex: 'J\'aime lire.', exfa: 'خواندن را دوست دارم.' },
        { fr: 'danser', ipa: 'dɑ̃se', fa: 'رقصیدن', ex: 'Elle adore danser.', exfa: 'او عاشق رقصیدن است.' },
        { fr: 'voyager', ipa: 'vwajaʒe', fa: 'سفر کردن', ex: 'Nous aimons voyager.', exfa: 'ما سفر را دوست داریم.' },
        { fr: 'cuisiner', ipa: 'kɥizine', fa: 'آشپزی کردن', ex: 'Je cuisine le dimanche.', exfa: 'یکشنبه‌ها آشپزی می‌کنم.' },
        { fr: 'sortir', ipa: 'sɔʁtiʁ', fa: 'بیرون رفتن', ex: 'On sort ce soir ?', exfa: 'امشب بیرون برویم؟' }
      ],
      phrases: [
        { fr: 'Qu\'est-ce que tu fais le week-end ?', fa: 'آخر هفته چه‌کار می‌کنی؟' },
        { fr: 'J\'aime beaucoup...', fa: 'خیلی دوست دارم...' },
        { fr: 'Je déteste...', fa: 'متنفرم از...' },
        { fr: 'C\'est ma passion !', fa: 'عشقِ من است!' }
      ],
      grammar: {
        title: 'Le verbe « faire » + faire du / jouer au',
        body: 'فعل <b>faire</b> (انجام دادن) بی‌قاعده و فوق پرکاربرد است.<br>' +
          'برای فعالیت‌ها:<br>' +
          '• <b>faire du/de la</b> + ورزش/فعالیت: faire du sport، faire de la natation<br>' +
          '• <b>jouer au</b> + بازی/ورزش توپی: jouer au football، jouer au tennis<br>' +
          '• <b>jouer de la/du</b> + ساز موسیقی: jouer de la guitare، jouer du piano',
        table: {
          head: ['ضمیر', 'faire — انجام دادن'],
          rows: [
            ['je', 'fais'], ['tu', 'fais'], ['il / elle / on', 'fait'],
            ['nous', 'faisons'], ['vous', 'faites'], ['ils / elles', 'font']
          ]
        },
        examples: [
          { fr: 'Je fais du sport et je joue au tennis.', fa: 'ورزش می‌کنم و تنیس بازی می‌کنم.' },
          { fr: 'Elle joue du piano. C\'est sa passion.', fa: 'او پیانو می‌زند. عشقِ اوست.' },
          { fr: 'Qu\'est-ce que vous faites le week-end ?', fa: 'آخر هفته چه‌کار می‌کنید؟' }
        ]
      },
      phonetics: {
        title: 'e بی‌صدا در گفتار روان',
        body: 'در گفتار سریع، <b>e</b> کوتاه وسط واژه‌ها اغلب حذف می‌شود:',
        items: [
          { fr: 'le week-end', ipa: 'lə wikɛnd', fa: '' },
          { fr: 'samedi', ipa: 'samdi', fa: '«سامدی» — e وسط حذف' },
          { fr: 'Je ne sais pas', ipa: 'ʒən sɛ pa', fa: 'در گفتار: «ژُن سه پا»' },
          { fr: 'la natation', ipa: 'natasjɔ̃', fa: '' }
        ]
      },
      dialogue: {
        title: 'Le week-end de Mona',
        lines: [
          { s: 'Emma', fr: 'Qu\'est-ce que tu fais le week-end, Mona ?', fa: 'آخر هفته چه‌کار می‌کنی مونا؟' },
          { s: 'Mona', fr: 'Le samedi matin, je fais de la natation. Et l\'après-midi, je lis ou j\'écoute de la musique.', fa: 'شنبه صبح شنا می‌کنم. بعدازظهر کتاب می‌خوانم یا موسیقی گوش می‌دهم.' },
          { s: 'Emma', fr: 'Tu joues d\'un instrument ?', fa: 'ساز می‌زنی؟' },
          { s: 'Mona', fr: 'Oui, je joue un peu de la guitare. Et toi ?', fa: 'آره، کمی گیتار می‌زنم. تو چی؟' },
          { s: 'Emma', fr: 'Moi, je joue au tennis avec mon frère. Et le dimanche, je cuisine. J\'adore ça !', fa: 'من با برادرم تنیس بازی می‌کنم. و یکشنبه‌ها آشپزی می‌کنم. عاشقشم!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل faire', level: 'medium', fa: 'faire را صرف کن:', q: 'Nous ___ du sport le samedi.', answer: ['faisons'] },
        { type: 'fill', skill: 'GR', topic: 'اوقات فراغت', level: 'medium', fa: 'faire du / jouer au / jouer de la :', q: 'Il ___ au football le dimanche.', answer: ['joue'] },
        { type: 'mcq', skill: 'GR', topic: 'اوقات فراغت', level: 'easy', q: '«او گیتار می‌زند» به فرانسه:', options: ['Elle joue de la guitare.', 'Elle joue à la guitare.', 'Elle fait au guitare.', 'Elle joue guitare.'], correct: 0, explain: 'ساز موسیقی: jouer de la/du.' },
        { type: 'mcq', skill: 'CO', topic: 'اوقات فراغت', level: 'easy', q: '🎧 گوش کن — تفریح او چیست؟', audio: 'Moi, le week-end, je fais de la natation et je regarde des films.', audioFa: 'من آخر هفته‌ها شنا می‌کنم و فیلم می‌بینم.', options: ['شنا و فیلم دیدن', 'فوتبال و آشپزی', 'گیتار و رقص', 'کتاب و سفر'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'اوقات فراغت', level: 'easy', fa: 'جور کن:', pairs: [['lire', 'خواندن'], ['cuisiner', 'آشپزی'], ['danser', 'رقصیدن'], ['voyager', 'سفر کردن']] },
        { type: 'dictation', skill: 'CO', topic: 'فعل faire', level: 'hard', text: 'Qu\'est-ce que tu fais ce week-end ?', trans: 'این آخر هفته چه‌کار می‌کنی؟' },
        { type: 'order', skill: 'GR', topic: 'اوقات فراغت', level: 'medium', answer: 'J\'aime écouter de la musique.', fa: 'جمله «موسیقی گوش دادن را دوست دارم» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'اوقات فراغت', level: 'medium', text: 'Le week-end, je fais du sport et je regarde des films.', fa: 'آخر هفته ورزش می‌کنم و فیلم می‌بینم.' },
        { type: 'write', skill: 'PE', topic: 'اوقات فراغت', level: 'hard', prompt: 'تفریحات آخر هفته‌ات را بنویس: چه می‌کنی، چه دوست داری، چه دوست نداری. (۳-۴ جمله)', min: 12, sample: 'Le week-end, je fais de la natation et je lis. J\'aime beaucoup la musique. Je déteste le football. Le dimanche, je cuisine avec ma famille.' }
      ]
    },
    {
      id: 'u5l3',
      title: 'On sort ce soir ?',
      fa: 'امشب بیرون برویم؟ — دعوت و برنامه‌ریزی',
      vocab: [
        { fr: 'inviter', ipa: 'ɛ̃vite', fa: 'دعوت کردن', ex: 'Je t\'invite au restaurant.', exfa: 'به رستوران دعوتت می‌کنم.' },
        { fr: 'une fête', ipa: 'fɛt', fa: 'جشن / مهمانی', ex: 'On fait une fête samedi.', exfa: 'شنبه مهمانی می‌گیریم.' },
        { fr: 'un concert', ipa: 'kɔ̃sɛʁ', fa: 'کنسرت', ex: 'On va à un concert.', exfa: 'به کنسرت می‌رویم.' },
        { fr: 'vouloir', ipa: 'vulwaʁ', fa: 'خواستن', ex: 'Tu veux venir ?', exfa: 'می‌خواهی بیایی؟' },
        { fr: 'pouvoir', ipa: 'puvwaʁ', fa: 'توانستن', ex: 'Je ne peux pas ce soir.', exfa: 'امشب نمی‌توانم.' },
        { fr: 'venir', ipa: 'vəniʁ', fa: 'آمدن', ex: 'Tu viens avec nous ?', exfa: 'با ما می‌آیی؟' },
        { fr: 'devoir', ipa: 'dəvwaʁ', fa: 'باید (مجبور بودن)', ex: 'Je dois travailler.', exfa: 'باید کار کنم.' },
        { fr: 'libre', ipa: 'libʁ', fa: 'آزاد (بیکار)', ex: 'Tu es libre demain ?', exfa: 'فردا آزادی؟' },
        { fr: 'occupé / occupée', ipa: 'ɔkype', fa: 'مشغول', ex: 'Je suis très occupée.', exfa: 'خیلی سرم شلوغ است.' },
        { fr: 'd\'accord', ipa: 'dakɔʁ', fa: 'باشه / موافقم', ex: 'D\'accord, à samedi !', exfa: 'باشه، تا شنبه!' },
        { fr: 'dommage', ipa: 'dɔmaʒ', fa: 'حیف', ex: 'C\'est dommage !', exfa: 'حیف شد!' },
        { fr: 'un rendez-vous', ipa: 'ʁɑ̃devu', fa: 'قرار', ex: 'On a rendez-vous à 8 heures.', exfa: 'ساعت ۸ قرار داریم.' }
      ],
      phrases: [
        { fr: 'Tu veux venir avec nous ?', fa: 'می‌خواهی با ما بیایی؟' },
        { fr: 'Avec plaisir !', fa: 'با کمال میل!' },
        { fr: 'Désolé(e), je ne peux pas.', fa: 'ببخشید، نمی‌توانم.' },
        { fr: 'On se retrouve où ?', fa: 'کجا همدیگر را ببینیم؟' },
        { fr: 'Bonne idée !', fa: 'فکر خوبی است!' }
      ],
      grammar: {
        title: 'Le futur proche + pouvoir / vouloir / devoir',
        body: '<b>Futur proche</b> (آینده نزدیک) ساده‌ترین راه حرف زدن از آینده است:<br>' +
          '<b>aller (صرف‌شده) + مصدر فعل</b><br>' +
          '• Je <b>vais regarder</b> un film. (می‌خواهم فیلم ببینم / فیلم خواهم دید)<br>' +
          '• On <b>va faire</b> une fête. (مهمانی می‌گیریم)<br><br>' +
          'سه فعل مهم که بعدشان مصدر می‌آید:',
        table: {
          head: ['ضمیر', 'vouloir خواستن', 'pouvoir توانستن', 'devoir باید'],
          rows: [
            ['je', 'veux', 'peux', 'dois'],
            ['tu', 'veux', 'peux', 'dois'],
            ['il/elle/on', 'veut', 'peut', 'doit'],
            ['nous', 'voulons', 'pouvons', 'devons'],
            ['vous', 'voulez', 'pouvez', 'devez'],
            ['ils/elles', 'veulent', 'peuvent', 'doivent']
          ]
        },
        examples: [
          { fr: 'Demain, je vais faire du sport.', fa: 'فردا ورزش خواهم کرد.' },
          { fr: 'Tu veux venir ? — Je ne peux pas, je dois travailler.', fa: 'می‌خواهی بیایی؟ — نمی‌توانم، باید کار کنم.' }
        ]
      },
      phonetics: {
        title: 'آهنگ سؤالی',
        body: 'در گفتار روزمره، سؤال بله/نه فقط با <b>بالا بردن آهنگ صدا</b> در آخر جمله ساخته می‌شود. گوش کن:',
        items: [
          { fr: 'Tu viens ce soir ?', ipa: '↗', fa: 'آهنگ بالا = سؤال' },
          { fr: 'Tu viens ce soir.', ipa: '↘', fa: 'آهنگ پایین = خبر' },
          { fr: 'On va au concert ?', ipa: '↗', fa: 'سؤال' },
          { fr: 'Vous êtes libre demain ?', ipa: '↗', fa: 'سؤال' }
        ]
      },
      dialogue: {
        title: 'Une invitation',
        lines: [
          { s: 'Karim', fr: 'Salut Mona ! Samedi soir, on va faire une fête chez moi. Tu veux venir ?', fa: 'سلام مونا! شنبه شب خانه من مهمانی می‌گیریم. می‌خواهی بیایی؟' },
          { s: 'Mona', fr: 'Avec plaisir ! C\'est à quelle heure ?', fa: 'با کمال میل! ساعت چند است؟' },
          { s: 'Karim', fr: 'À vingt heures. Sara va venir aussi.', fa: 'ساعت هشت شب. سارا هم می‌آید.' },
          { s: 'Mona', fr: 'Super ! Je vais faire un gâteau. Et dimanche, tu es libre ? Il y a un concert au parc.', fa: 'عالی! من کیک درست می‌کنم. یکشنبه هم آزادی؟ در پارک کنسرت هست.' },
          { s: 'Karim', fr: 'Dimanche, désolé, je ne peux pas. Je dois travailler. C\'est dommage !', fa: 'یکشنبه، ببخشید، نمی‌توانم. باید کار کنم. حیف!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'futur proche', level: 'medium', fa: 'با futur proche کامل کن:', q: 'Demain, je ___ regarder un film. (aller)', answer: ['vais'] },
        { type: 'fill', skill: 'GR', topic: 'futur proche', level: 'medium', fa: 'با futur proche کامل کن:', q: 'Nous ___ faire une fête samedi.', answer: ['allons'] },
        { type: 'mcq', skill: 'GR', topic: 'futur proche', level: 'easy', q: '«او (زن) قرار است بیاید» به فرانسه:', options: ['Elle va venir.', 'Elle vient aller.', 'Elle va vient.', 'Elle aller venir.'], correct: 0, explain: 'futur proche = aller صرف‌شده + مصدر.' },
        { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'pouvoir را صرف کن:', q: 'Désolée, je ne ___ pas venir ce soir.', answer: ['peux'] },
        { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'vouloir را صرف کن:', q: 'Vous ___ venir avec nous ?', answer: ['voulez'] },
        { type: 'mcq', skill: 'CO', topic: 'دعوت و قرار', level: 'easy', q: '🎧 گوش کن — چرا نمی‌تواند بیاید؟', audio: 'Désolé, je ne peux pas venir samedi, je dois travailler.', audioFa: 'ببخشید، شنبه نمی‌توانم بیایم، باید کار کنم.', options: ['باید کار کند', 'مریض است', 'مسافرت است', 'مهمان دارد'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'دعوت و قرار', level: 'hard', text: 'Tu veux venir au concert avec nous ?', trans: 'می‌خواهی با ما به کنسرت بیایی؟' },
        { type: 'order', skill: 'GR', topic: 'futur proche', level: 'medium', answer: 'On va aller au cinéma demain.', fa: 'جمله «فردا به سینما خواهیم رفت» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'دعوت و قرار', level: 'medium', text: 'Tu es libre samedi soir ? Je t\'invite au restaurant !', fa: 'شنبه شب آزادی؟ به رستوران دعوتت می‌کنم!' },
        { type: 'write', skill: 'PE', topic: 'دعوت و قرار', level: 'hard', prompt: 'یک پیام دعوت بنویس: دوستت را به یک برنامه دعوت کن (چی، کِی، ساعت چند). (۳ جمله)', min: 10, sample: 'Salut Sara ! Samedi soir, on va aller au concert au parc. Tu veux venir avec nous ? On se retrouve à sept heures devant la gare.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'ساعت و زمان', level: 'easy', q: '🎧 گوش کن — قرار ساعت چند است؟', audio: 'On se retrouve samedi à six heures et demie devant le cinéma.', audioFa: 'شنبه ساعت شش و نیم جلوی سینما همدیگر را می‌بینیم.', options: ['شنبه ۶:۳۰', 'یکشنبه ۶:۳۰', 'شنبه ۷:۱۵', 'جمعه ۶:۰۰'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CO', topic: 'دعوت و قرار', level: 'easy', q: '🎧 گوش کن — جواب او چیست؟', audio: 'Une fête ? Avec plaisir ! Je vais faire un gâteau.', audioFa: 'مهمانی؟ با کمال میل! یک کیک درست می‌کنم.', options: ['قبول می‌کند و کیک می‌آورد', 'رد می‌کند', 'باید کار کند', 'نمی‌داند'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'دعوت و قرار', level: 'easy', q: 'پیام را بخوان — برنامه چیست؟', qfr: 'Coucou ! Dimanche après-midi, on va faire de la natation à la piscine. Rendez-vous à 14h. Tu viens ? Bises, Emma', options: ['شنا در استخر، ساعت ۲ بعدازظهر', 'کنسرت در پارک، شب', 'سینما، ساعت ۴', 'مهمانی شام'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'ساعت و زمان', level: 'medium', fa: 'به فرانسه: «ساعت ۸:۴۵ است»', q: 'Il est neuf heures ___ le quart.', answer: ['moins'] },
      { type: 'fill', skill: 'GR', topic: 'فعل faire', level: 'medium', fa: 'faire را صرف کن:', q: 'Qu\'est-ce que vous ___ le dimanche ?', answer: ['faites'] },
      { type: 'fill', skill: 'GR', topic: 'futur proche', level: 'medium', fa: 'futur proche بساز:', q: 'Ils ___ venir à la fête.', answer: ['vont'] },
      { type: 'fill', skill: 'GR', topic: 'فعل pouvoir و vouloir', level: 'medium', fa: 'devoir را صرف کن:', q: 'Je ne peux pas, je ___ travailler.', answer: ['dois'] },
      { type: 'match', skill: 'VO', topic: 'اوقات فراغت', level: 'easy', fa: 'جور کن:', pairs: [['faire de la natation', 'شنا'], ['jouer au tennis', 'تنیس'], ['jouer du piano', 'پیانو'], ['regarder un film', 'فیلم دیدن']] },
      { type: 'dictation', skill: 'CO', topic: 'futur proche', level: 'hard', text: 'Demain, on va faire une fête chez moi.', trans: 'فردا خانه من مهمانی می‌گیریم.' },
      { type: 'order', skill: 'GR', topic: 'دعوت و قرار', level: 'medium', answer: 'Tu es libre samedi soir ?', fa: 'سؤال «شنبه شب آزادی؟» را بساز:' },
      { type: 'speak', skill: 'PO', topic: 'دعوت و قرار', level: 'medium', text: 'On va au cinéma ce soir ? Le film commence à huit heures et demie.', fa: 'دوستت را دعوت کن' },
      { type: 'write', skill: 'PE', topic: 'دعوت و قرار', level: 'hard', prompt: 'برنامه آخر هفته آینده‌ات را با futur proche بنویس. (۴ جمله)', min: 14, sample: 'Ce week-end, je vais faire de la natation samedi matin. L\'après-midi, je vais retrouver mes amis au café. Le soir, on va regarder un film. Dimanche, je vais cuisiner pour ma famille.' }
    ]
  }
};
