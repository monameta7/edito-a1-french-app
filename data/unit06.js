/* ===== واحد ۶: Félicitations ! — تبریک! ===== */
EDITO.units[6] = {
  id: 6,
  title: 'Félicitations !',
  fa: 'تبریک!',
  theme: 'خانواده، صفت‌های ملکی، توصیف افراد، فعل‌های انعکاسی و مناسبت‌ها',
  culture: {
    title: 'چند بوسه؟ بستگی به منطقه دارد! 💋',
    body: 'تعداد رایج «la bise» بین اعضای خانواده و دوستان نزدیک از منطقه‌ای به منطقه دیگر فرانسه فرق دارد: در پاریس معمولاً ۲ تا، در برخی مناطق جنوبی یا غربی تا ۳ یا ۴ تا! اگر مطمئن نیستی، می‌توانی صبر کنی طرف مقابل شروع کند. جشن تولد در فرانسه معمولاً با کیک و آهنگ «Joyeux anniversaire» همراه است — دقیقاً مثل بسیاری جاهای دیگر دنیا.'
  },
  lessons: [
    {
      id: 'u6l1',
      title: 'La famille',
      fa: 'خانواده',
      vocab: [
        { fr: 'la famille', ipa: 'famij', fa: 'خانواده', ex: 'J\'ai une grande famille.', exfa: 'خانواده بزرگی دارم.' },
        { fr: 'le père / le papa', ipa: 'pɛʁ', fa: 'پدر / بابا', ex: 'Mon père a soixante ans.', exfa: 'پدرم شصت سال دارد.' },
        { fr: 'la mère / la maman', ipa: 'mɛʁ', fa: 'مادر / مامان', ex: 'Ma mère est professeure.', exfa: 'مادرم معلم است.' },
        { fr: 'les parents', ipa: 'paʁɑ̃', fa: 'والدین', ex: 'Mes parents habitent à Téhéran.', exfa: 'والدینم در تهران زندگی می‌کنند.' },
        { fr: 'un frère', ipa: 'fʁɛʁ', fa: 'برادر', ex: 'J\'ai deux frères.', exfa: 'دو برادر دارم.' },
        { fr: 'une sœur', ipa: 'sœʁ', fa: 'خواهر', ex: 'Ma sœur est mariée.', exfa: 'خواهرم متأهل است.' },
        { fr: 'un fils', ipa: 'fis', fa: 'پسر (فرزند)', ex: 'Leur fils a dix ans.', exfa: 'پسرشان ده سال دارد.' },
        { fr: 'une fille', ipa: 'fij', fa: 'دختر (فرزند/دختر)', ex: 'Ils ont une fille.', exfa: 'یک دختر دارند.' },
        { fr: 'le mari', ipa: 'maʁi', fa: 'شوهر', ex: 'Son mari est médecin.', exfa: 'شوهرش پزشک است.' },
        { fr: 'la femme', ipa: 'fam', fa: 'زن / همسر', ex: 'Sa femme s\'appelle Anne.', exfa: 'همسرش آن نام دارد.' },
        { fr: 'le grand-père / la grand-mère', ipa: 'ɡʁɑ̃pɛʁ / ɡʁɑ̃mɛʁ', fa: 'پدربزرگ / مادربزرگ', ex: 'Ma grand-mère a 80 ans.', exfa: 'مادربزرگم ۸۰ سال دارد.' },
        { fr: 'un oncle / une tante', ipa: 'ɔ̃kl / tɑ̃t', fa: 'عمو-دایی / عمه-خاله', ex: 'Mon oncle habite au Canada.', exfa: 'عمویم در کانادا زندگی می‌کند.' },
        { fr: 'un cousin / une cousine', ipa: 'kuzɛ̃ / kuzin', fa: 'پسرعمو... / دخترعمو...', ex: 'Mes cousins sont jeunes.', exfa: 'پسرعموهایم جوان‌اند.' },
        { fr: 'marié / mariée', ipa: 'maʁje', fa: 'متأهل', ex: 'Elle est mariée.', exfa: 'او متأهل است.' },
        { fr: 'célibataire', ipa: 'selibatɛʁ', fa: 'مجرد', ex: 'Il est célibataire.', exfa: 'او مجرد است.' }
      ],
      phrases: [
        { fr: 'Tu as des frères et sœurs ?', fa: 'برادر و خواهر داری؟' },
        { fr: 'Je suis l\'aîné(e).', fa: 'من بزرگ‌ترین (فرزند) هستم.' },
        { fr: 'C\'est qui sur la photo ?', fa: 'توی عکس کیست؟' }
      ],
      grammar: {
        title: 'Les adjectifs possessifs — mon / ma / mes...',
        body: 'صفت ملکی («مالِ من، مالِ تو...») با <b>اسم بعدش</b> مطابقت می‌کند نه با مالک!<br>' +
          '⚠️ قبل از اسم مؤنثی که با صدادار شروع شود، به‌جای ma از <b>mon</b> استفاده می‌شود: mon amie (دوستم — زن)',
        table: {
          head: ['مالک', 'مذکر', 'مؤنث', 'جمع'],
          rows: [
            ['من', 'mon père', 'ma mère', 'mes parents'],
            ['تو', 'ton frère', 'ta sœur', 'tes cousins'],
            ['او', 'son fils', 'sa fille', 'ses enfants'],
            ['ما', 'notre oncle', 'notre tante', 'nos parents'],
            ['شما', 'votre mari', 'votre femme', 'vos enfants'],
            ['آنها', 'leur père', 'leur mère', 'leurs enfants']
          ]
        },
        examples: [
          { fr: 'Ma sœur et son mari habitent à Paris.', fa: 'خواهرم و شوهرش در پاریس زندگی می‌کنند.' },
          { fr: 'Leurs enfants sont très jeunes.', fa: 'بچه‌هایشان خیلی کوچک‌اند.' },
          { fr: 'C\'est mon amie Sara.', fa: 'این دوستم ساراست. (amie مؤنث است ولی mon!)' }
        ]
      },
      phonetics: {
        title: 'آواهای [œʁ] و [ɛʁ]',
        body: 'تمرین دو پایانه پرتکرار خانواده:',
        items: [
          { fr: 'la sœur', ipa: 'sœʁ', fa: 'خواهر' },
          { fr: 'le père', ipa: 'pɛʁ', fa: 'پدر' },
          { fr: 'la mère', ipa: 'mɛʁ', fa: 'مادر' },
          { fr: 'le frère', ipa: 'fʁɛʁ', fa: 'برادر' }
        ]
      },
      dialogue: {
        title: 'La photo de famille',
        lines: [
          { s: 'Emma', fr: 'C\'est qui sur la photo, Mona ?', fa: 'توی عکس کی‌ها هستند مونا؟' },
          { s: 'Mona', fr: 'C\'est ma famille ! Là, ce sont mes parents, Reza et Shirin.', fa: 'خانواده‌ام است! اینجا والدینم هستند، رضا و شیرین.' },
          { s: 'Emma', fr: 'Et le jeune homme, c\'est ton frère ?', fa: 'و آن مرد جوان، برادرت است؟' },
          { s: 'Mona', fr: 'Oui, c\'est mon frère Ali. Il a vingt-cinq ans, il est célibataire.', fa: 'آره، برادرم علی است. بیست‌وپنج سال دارد و مجرد است.' },
          { s: 'Emma', fr: 'Et la petite fille ?', fa: 'و آن دختر کوچولو؟' },
          { s: 'Mona', fr: 'C\'est ma nièce, la fille de ma sœur. Elle est adorable !', fa: 'خواهرزاده‌ام است، دخترِ خواهرم. خیلی دوست‌داشتنی است!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی درست (mon/ma/mes):', q: '___ mère est professeure.', answer: ['Ma', 'ma'] },
        { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی درست:', q: '___ parents habitent à Téhéran. (مالِ من)', answer: ['Mes', 'mes'] },
        { type: 'mcq', skill: 'GR', topic: 'صفت ملکی', level: 'easy', q: '«دوستم سارا» (amie مؤنث):', options: ['mon amie Sara', 'ma amie Sara', 'mes amie Sara', 'sa amie Sara'], correct: 0, explain: 'قبل از مؤنثِ با صدادار: mon.' },
        { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی «آنها»:', q: '___ enfants sont jeunes. (بچه‌های آنها)', answer: ['Leurs', 'leurs'] },
        { type: 'match', skill: 'VO', topic: 'خانواده', level: 'easy', fa: 'جور کن:', pairs: [['la sœur', 'خواهر'], ['le mari', 'شوهر'], ['la tante', 'عمه/خاله'], ['le grand-père', 'پدربزرگ'], ['la fille', 'دختر']] },
        { type: 'mcq', skill: 'CO', topic: 'خانواده', level: 'easy', q: '🎧 گوش کن — علی چه نسبتی دارد؟', audio: 'Ali, c\'est le frère de Mona. Il a vingt-cinq ans et il est célibataire.', audioFa: 'علی، برادر مونا است. بیست‌وپنج سال دارد و مجرد است.', options: ['برادر مونا', 'شوهر مونا', 'پسرعموی مونا', 'پدر مونا'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'خانواده', level: 'hard', text: 'Ma sœur a deux enfants.', trans: 'خواهرم دو بچه دارد.' },
        { type: 'order', skill: 'GR', topic: 'صفت ملکی', level: 'medium', answer: 'Mon frère est célibataire.', fa: 'جمله «برادرم مجرد است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'خانواده', level: 'medium', text: 'J\'ai un frère et une sœur. Mes parents habitent à Téhéran.', fa: 'خانواده‌ات را معرفی کن' },
        { type: 'write', skill: 'PE', topic: 'خانواده', level: 'hard', prompt: 'خانواده‌ات را معرفی کن: چند نفرید، اسم‌ها، سن و شغل‌شان. (۴ جمله)', min: 14, sample: 'Dans ma famille, nous sommes cinq. Mon père s\'appelle Reza, il a soixante ans. Ma mère est professeure. J\'ai un frère et une sœur. Mon frère est étudiant.' }
      ]
    },
    {
      id: 'u6l2',
      title: 'Il est comment ?',
      fa: 'او چه شکلی است؟ — توصیف افراد',
      vocab: [
        { fr: 'beau / belle', ipa: 'bo / bɛl', fa: 'زیبا', ex: 'Elle est très belle.', exfa: 'او خیلی زیباست.' },
        { fr: 'jeune', ipa: 'ʒœn', fa: 'جوان', ex: 'Un homme jeune', exfa: 'یک مرد جوان' },
        { fr: 'vieux / vieille', ipa: 'vjø / vjɛj', fa: 'پیر', ex: 'Un vieux monsieur', exfa: 'یک آقای مسن' },
        { fr: 'grand / grande', ipa: 'ɡʁɑ̃ / ɡʁɑ̃d', fa: 'قدبلند', ex: 'Il est grand.', exfa: 'او قدبلند است.' },
        { fr: 'petit / petite', ipa: 'pəti / pətit', fa: 'قدکوتاه', ex: 'Elle est petite.', exfa: 'او قدکوتاه است.' },
        { fr: 'les cheveux', ipa: 'ʃəvø', fa: 'موها', ex: 'Elle a les cheveux longs.', exfa: 'موهایش بلند است.' },
        { fr: 'les yeux', ipa: 'jø', fa: 'چشم‌ها', ex: 'Il a les yeux verts.', exfa: 'چشم‌هایش سبز است.' },
        { fr: 'long / longue', ipa: 'lɔ̃ / lɔ̃ɡ', fa: 'بلند', ex: 'Les cheveux longs', exfa: 'موهای بلند' },
        { fr: 'court / courte', ipa: 'kuʁ / kuʁt', fa: 'کوتاه', ex: 'Les cheveux courts', exfa: 'موهای کوتاه' },
        { fr: 'blond / blonde', ipa: 'blɔ̃ / blɔ̃d', fa: 'بور', ex: 'Elle est blonde.', exfa: 'او بور است.' },
        { fr: 'brun / brune', ipa: 'bʁœ̃ / bʁyn', fa: 'مو مشکی/قهوه‌ای', ex: 'Il est brun.', exfa: 'او مو مشکی است.' },
        { fr: 'sympa (sympathique)', ipa: 'sɛ̃pa', fa: 'مهربان / باحال', ex: 'Elle est très sympa.', exfa: 'او خیلی مهربان است.' },
        { fr: 'drôle', ipa: 'dʁol', fa: 'بامزه', ex: 'Mon frère est drôle.', exfa: 'برادرم بامزه است.' },
        { fr: 'intelligent / intelligente', ipa: 'ɛ̃teliʒɑ̃ / -ɑ̃t', fa: 'باهوش', ex: 'Une fille intelligente', exfa: 'یک دختر باهوش' },
        { fr: 'timide', ipa: 'timid', fa: 'خجالتی', ex: 'Il est un peu timide.', exfa: 'او کمی خجالتی است.' }
      ],
      phrases: [
        { fr: 'Il / Elle est comment ?', fa: 'او چه شکلی است؟ / چطور آدمی است؟' },
        { fr: 'Il a l\'air sympa.', fa: 'به نظر مهربان می‌آید.' },
        { fr: 'Elle porte des lunettes.', fa: 'او عینک می‌زند.' }
      ],
      grammar: {
        title: 'La description — être + صفت / avoir + اسم',
        body: 'برای توصیف افراد دو الگو داریم:<br>' +
          '• <b>être + صفت</b>: Il est grand. Elle est sympa.<br>' +
          '• <b>avoir + les + عضو بدن + صفت</b>: Elle a les cheveux longs. Il a les yeux bleus.<br>' +
          '⚠️ صفت‌های beau و vieux قبل از اسم می‌آیند و شکل خاص دارند: un <b>bel</b> homme (مرد زیبا — قبل صدادار)، une <b>belle</b> femme، un <b>vieil</b> ami',
        examples: [
          { fr: 'Ma sœur est grande et brune. Elle a les yeux verts.', fa: 'خواهرم قدبلند و مو مشکی است. چشم‌هایش سبز است.' },
          { fr: 'Mon grand-père est vieux mais très drôle.', fa: 'پدربزرگم پیر است ولی خیلی بامزه.' }
        ]
      },
      phonetics: {
        title: 'آوای [ø] در yeux و cheveux',
        body: 'تمرین صدای [ø] که در توصیف زیاد می‌آید:',
        items: [
          { fr: 'les yeux', ipa: 'le‿zjø', fa: '«له زیو»' },
          { fr: 'les cheveux', ipa: 'le ʃəvø', fa: '«له شوو»' },
          { fr: 'bleu', ipa: 'blø', fa: 'آبی' },
          { fr: 'vieux', ipa: 'vjø', fa: 'پیر' }
        ]
      },
      dialogue: {
        title: 'Le nouveau collègue',
        lines: [
          { s: 'Sara', fr: 'Tu connais le nouveau collègue ?', fa: 'همکار جدید را می‌شناسی؟' },
          { s: 'Mona', fr: 'Non, il est comment ?', fa: 'نه، چه شکلی است؟' },
          { s: 'Sara', fr: 'Il est grand, brun, et il a les yeux verts. Il porte des lunettes.', fa: 'قدبلند و مو مشکی است و چشم‌های سبز دارد. عینک می‌زند.' },
          { s: 'Mona', fr: 'Et il est sympa ?', fa: 'و مهربان است؟' },
          { s: 'Sara', fr: 'Oui, très sympa et drôle ! Mais un peu timide.', fa: 'آره، خیلی مهربان و بامزه! ولی کمی خجالتی.' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'توصیف افراد', level: 'medium', fa: 'صفت را مطابقت بده:', q: 'Ma mère est ___ (زیبا).', answer: ['belle'] },
        { type: 'mcq', skill: 'GR', topic: 'توصیف افراد', level: 'easy', q: '«موهایش بلند است» به فرانسه:', options: ['Elle a les cheveux longs.', 'Elle est les cheveux longs.', 'Elle a cheveux long.', 'Ses cheveux est long.'], correct: 0, explain: 'توصیف اعضای بدن: avoir + les + اسم + صفت.' },
        { type: 'fill', skill: 'GR', topic: 'توصیف افراد', level: 'medium', fa: 'کامل کن:', q: 'Il ___ les yeux bleus.', answer: ['a'] },
        { type: 'match', skill: 'VO', topic: 'توصیف افراد', level: 'easy', fa: 'جور کن:', pairs: [['drôle', 'بامزه'], ['timide', 'خجالتی'], ['blond', 'بور'], ['vieux', 'پیر'], ['sympa', 'مهربان']] },
        { type: 'mcq', skill: 'CO', topic: 'توصیف افراد', level: 'easy', q: '🎧 گوش کن — این خانم چه شکلی است؟', audio: 'Elle est petite et blonde. Elle a les cheveux courts et les yeux bleus.', audioFa: 'او قدکوتاه و بور است. موهای کوتاه و چشمان آبی دارد.', options: ['قدکوتاه، بور، مو کوتاه، چشم آبی', 'قدبلند، مو مشکی', 'مو بلند و چشم سبز', 'پیر و عینکی'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'توصیف افراد', level: 'hard', text: 'Il est grand et il a les cheveux courts.', trans: 'او قدبلند است و موهای کوتاه دارد.' },
        { type: 'order', skill: 'GR', topic: 'توصیف افراد', level: 'medium', answer: 'Elle a les yeux verts.', fa: 'جمله «چشم‌هایش سبز است» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'توصیف افراد', level: 'medium', text: 'Mon frère est grand et brun. Il est très drôle.', fa: 'یک نفر از خانواده‌ات را توصیف کن' },
        { type: 'write', skill: 'PE', topic: 'توصیف افراد', level: 'hard', prompt: 'بهترین دوستت را توصیف کن: ظاهر و اخلاق. (۳-۴ جمله)', min: 12, sample: 'Ma meilleure amie s\'appelle Sara. Elle est petite et brune, avec les cheveux longs. Elle est très intelligente et drôle. Elle porte des lunettes.' }
      ]
    },
    {
      id: 'u6l3',
      title: 'Les fêtes et la routine',
      fa: 'جشن‌ها و برنامه روزانه',
      vocab: [
        { fr: 'un anniversaire', ipa: 'anivɛʁsɛʁ', fa: 'تولد', ex: 'Joyeux anniversaire !', exfa: 'تولدت مبارک!' },
        { fr: 'un mariage', ipa: 'maʁjaʒ', fa: 'عروسی', ex: 'Le mariage de ma cousine', exfa: 'عروسی دخترعمویم' },
        { fr: 'un cadeau', ipa: 'kado', fa: 'کادو', ex: 'J\'achète un cadeau.', exfa: 'کادو می‌خرم.' },
        { fr: 'un gâteau', ipa: 'ɡɑto', fa: 'کیک', ex: 'Un gâteau au chocolat', exfa: 'کیک شکلاتی' },
        { fr: 'féliciter', ipa: 'felisite', fa: 'تبریک گفتن', ex: 'Félicitations !', exfa: 'تبریک!' },
        { fr: 'se lever', ipa: 'sə ləve', fa: 'بیدار شدن / بلند شدن', ex: 'Je me lève à sept heures.', exfa: 'ساعت هفت بیدار می‌شوم.' },
        { fr: 'se coucher', ipa: 'sə kuʃe', fa: 'خوابیدن', ex: 'Je me couche à minuit.', exfa: 'نیمه‌شب می‌خوابم.' },
        { fr: 'se laver', ipa: 'sə lave', fa: 'خود را شستن (دوش گرفتن)', ex: 'Il se lave le matin.', exfa: 'او صبح دوش می‌گیرد.' },
        { fr: 's\'habiller', ipa: 'sabije', fa: 'لباس پوشیدن', ex: 'Je m\'habille vite.', exfa: 'سریع لباس می‌پوشم.' },
        { fr: 'se préparer', ipa: 'sə pʁepaʁe', fa: 'آماده شدن', ex: 'On se prépare pour la fête.', exfa: 'برای جشن آماده می‌شویم.' },
        { fr: 'janvier / février / mars', ipa: 'ʒɑ̃vje / fevʁije / maʁs', fa: 'ژانویه / فوریه / مارس', ex: '', exfa: '' },
        { fr: 'avril / mai / juin', ipa: 'avʁil / mɛ / ʒɥɛ̃', fa: 'آوریل / مه / ژوئن', ex: '', exfa: '' },
        { fr: 'juillet / août / septembre', ipa: 'ʒɥijɛ / ut / sɛptɑ̃bʁ', fa: 'ژوئیه / اوت / سپتامبر', ex: '', exfa: '' },
        { fr: 'octobre / novembre / décembre', ipa: 'ɔktɔbʁ / nɔvɑ̃bʁ / desɑ̃bʁ', fa: 'اکتبر / نوامبر / دسامبر', ex: '', exfa: '' }
      ],
      phrases: [
        { fr: 'Joyeux anniversaire !', fa: 'تولدت مبارک!' },
        { fr: 'Félicitations !', fa: 'تبریک!' },
        { fr: 'Bonne année !', fa: 'سال نو مبارک!' },
        { fr: 'C\'est quand, ton anniversaire ?', fa: 'تولدت کِی است؟' },
        { fr: 'C\'est le 15 mars.', fa: 'پانزدهم مارس است.' }
      ],
      grammar: {
        title: 'Les verbes pronominaux — فعل‌های انعکاسی',
        body: 'فعل‌هایی که کار روی خودِ فاعل انجام می‌شود، با ضمیر انعکاسی می‌آیند:<br>' +
          'laver = شستن (چیزی) ولی <b>se laver</b> = خود را شستن<br>' +
          'ضمیر انعکاسی با فاعل تغییر می‌کند:',
        table: {
          head: ['ضمیر', 'se lever — بیدار شدن'],
          rows: [
            ['je', 'me lève'],
            ['tu', 'te lèves'],
            ['il / elle / on', 'se lève'],
            ['nous', 'nous levons'],
            ['vous', 'vous levez'],
            ['ils / elles', 'se lèvent']
          ]
        },
        examples: [
          { fr: 'Je me lève à sept heures et je me prépare.', fa: 'ساعت هفت بیدار می‌شوم و آماده می‌شوم.' },
          { fr: 'Le dimanche, on se lève tard.', fa: 'یکشنبه‌ها دیر بیدار می‌شویم.' },
          { fr: 'Tu te couches à quelle heure ?', fa: 'ساعت چند می‌خوابی؟' }
        ]
      },
      phonetics: {
        title: 'ماه‌های سال — تلفظ',
        body: 'چند ماه با تلفظ خاص:',
        items: [
          { fr: 'janvier', ipa: 'ʒɑ̃vje', fa: 'ژانویه' },
          { fr: 'août', ipa: 'ut', fa: 'اوت — فقط «اوت»!' },
          { fr: 'juillet', ipa: 'ʒɥijɛ', fa: 'ژوئیه' },
          { fr: 'décembre', ipa: 'desɑ̃bʁ', fa: 'دسامبر' }
        ]
      },
      dialogue: {
        title: 'L\'anniversaire de Sara',
        lines: [
          { s: 'Karim', fr: 'C\'est quand, l\'anniversaire de Sara ?', fa: 'تولد سارا کِی است؟' },
          { s: 'Mona', fr: 'C\'est le douze juin. On fait une fête surprise !', fa: 'دوازدهم ژوئن. یک جشن سورپرایز می‌گیریم!' },
          { s: 'Karim', fr: 'Bonne idée ! Moi, j\'achète le cadeau.', fa: 'فکر خوبی است! من کادو می‌خرم.' },
          { s: 'Mona', fr: 'Et moi, je fais le gâteau. Samedi, je me lève tôt pour tout préparer.', fa: 'من هم کیک درست می‌کنم. شنبه زود بیدار می‌شوم که همه‌چیز را آماده کنم.' },
          { s: 'Karim', fr: 'Parfait ! Joyeux anniversaire, Sara !', fa: 'عالی! تولدت مبارک سارا!' }
        ]
      },
      exercises: [
        { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'فعل انعکاسی را کامل کن:', q: 'Je ___ lève à sept heures.', answer: ['me'] },
        { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'فعل انعکاسی را کامل کن:', q: 'Tu ___ couches à quelle heure ?', answer: ['te'] },
        { type: 'mcq', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'easy', q: '«ما آماده می‌شویم» به فرانسه:', options: ['Nous nous préparons.', 'Nous se préparons.', 'Nous me préparons.', 'Nous préparons nous.'], correct: 0 },
        { type: 'match', skill: 'VO', topic: 'ماه‌های سال', level: 'easy', fa: 'ماه‌ها را جور کن:', pairs: [['janvier', 'ژانویه'], ['août', 'اوت'], ['juin', 'ژوئن'], ['décembre', 'دسامبر']] },
        { type: 'mcq', skill: 'CO', topic: 'مناسبت‌ها', level: 'easy', q: '🎧 گوش کن — تولد او کِی است؟', audio: 'Mon anniversaire, c\'est le vingt-trois septembre.', audioFa: 'تولد من بیست‌وسوم سپتامبر است.', options: ['۲۳ سپتامبر', '۱۳ سپتامبر', '۲۳ اکتبر', '۳ سپتامبر'], correct: 0, frOptions: false },
        { type: 'dictation', skill: 'CO', topic: 'فعل‌های انعکاسی', level: 'hard', text: 'Le dimanche, je me lève tard.', trans: 'یکشنبه‌ها دیر بیدار می‌شوم.' },
        { type: 'order', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', answer: 'Elle se couche à minuit.', fa: 'جمله «او نیمه‌شب می‌خوابد» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'مناسبت‌ها', level: 'medium', text: 'Joyeux anniversaire ! Voilà un cadeau pour toi !', fa: 'تولدت مبارک! این هم کادو برای تو!' },
        { type: 'write', skill: 'PE', topic: 'فعل‌های انعکاسی', level: 'hard', prompt: 'برنامه روزانه‌ات را بنویس: کِی بیدار می‌شوی، چه می‌کنی، کِی می‌خوابی. (۴ جمله با فعل انعکاسی)', min: 14, sample: 'Je me lève à six heures et demie. Je me lave et je m\'habille. Je vais au travail à huit heures. Le soir, je me couche à onze heures.' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'خانواده', level: 'easy', q: '🎧 گوش کن — چند برادر و خواهر دارد؟', audio: 'Dans ma famille, nous sommes six : mes parents, mes deux frères, ma sœur et moi.', audioFa: 'در خانواده من شش نفریم: والدینم، دو برادرم، خواهرم و من.', options: ['دو برادر و یک خواهر', 'یک برادر و دو خواهر', 'سه برادر', 'فقط یک خواهر'], correct: 0, frOptions: false },
      { type: 'mcq', skill: 'CE', topic: 'مناسبت‌ها', level: 'easy', q: 'دعوت‌نامه را بخوان — جشن برای چیست؟', qfr: 'Invitation ! Samedi 20 mai à 19h — On fête le mariage de Julie et Thomas ! Chez les parents de Julie, 12 rue des Fleurs.', options: ['عروسی', 'تولد', 'سال نو', 'فارغ‌التحصیلی'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی (او):', q: 'Sara et ___ mari habitent à Lyon.', answer: ['son'] },
      { type: 'fill', skill: 'GR', topic: 'صفت ملکی', level: 'medium', fa: 'صفت ملکی (شما):', q: 'Comment s\'appellent ___ enfants ?', answer: ['vos'] },
      { type: 'fill', skill: 'GR', topic: 'فعل‌های انعکاسی', level: 'medium', fa: 'کامل کن:', q: 'Ils ___ lèvent à six heures.', answer: ['se'] },
      { type: 'fill', skill: 'GR', topic: 'توصیف افراد', level: 'medium', fa: 'کامل کن:', q: 'Elle ___ les cheveux longs et blonds.', answer: ['a'] },
      { type: 'match', skill: 'VO', topic: 'خانواده', level: 'easy', fa: 'جور کن:', pairs: [['l\'oncle', 'عمو/دایی'], ['la grand-mère', 'مادربزرگ'], ['le fils', 'پسر'], ['la femme', 'همسر']] },
      { type: 'order', skill: 'GR', topic: 'توصیف افراد', level: 'medium', answer: 'Mon père est grand et drôle.', fa: 'جمله «پدرم قدبلند و بامزه است» را بساز:' },
      { type: 'dictation', skill: 'CO', topic: 'مناسبت‌ها', level: 'hard', text: 'Joyeux anniversaire ! Voilà ton cadeau.', trans: 'تولدت مبارک! این هم کادویت.' },
      { type: 'speak', skill: 'PO', topic: 'خانواده', level: 'medium', text: 'Ma mère est petite et brune. Elle est très sympa.', fa: 'مادرت را توصیف کن' },
      { type: 'write', skill: 'PE', topic: 'خانواده', level: 'hard', prompt: 'یک نفر از خانواده‌ات را کامل معرفی کن: نسبت، اسم، سن، ظاهر، اخلاق و برنامه روزانه‌اش. (۵ جمله)', min: 16, sample: 'Mon frère s\'appelle Ali. Il a vingt-cinq ans et il est étudiant. Il est grand et brun, avec les yeux noirs. Il est très drôle mais un peu timide. Il se lève tard le week-end !' }
    ]
  }
};
