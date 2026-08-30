/* ===== واحد ۰: Bienvenue ! — خوش آمدید ===== */
EDITO.units[0] = {
  id: 0,
  title: 'Bienvenue !',
  fa: 'خوش آمدید!',
  theme: 'آشنایی با زبان فرانسه: الفبا، سلام و احوال‌پرسی، اعداد و جمله‌های کلاس درس',
  culture: {
    title: 'La bise 👋',
    body: 'در فرانسه به‌جای دست دادن، دوستان و آشنایان معمولاً «la bise» می‌کنند — بوسه‌ی سبک روی گونه (نه لب!). تعداد بوسه‌ها بسته به منطقه فرانسه بین ۲ تا ۴ تا فرق می‌کند. با غریبه‌ها و در محیط کاری رسمی، به‌جای بوسه دست می‌دهند و می‌گویند <b>Bonjour</b>. نکته مهم: وارد هر مغازه یا کافه‌ای که می‌شوی، گفتن <b>Bonjour</b> قبل از هر درخواستی یک ادب پایه محسوب می‌شود — فراموش کردنش بی‌ادبی به‌حساب می‌آید!'
  },
  lessons: [
    {
      id: 'u0l1',
      title: 'Salut !',
      fa: 'سلام! — الفبا و احوال‌پرسی',
      vocab: [
        { fr: 'bonjour', ipa: 'bɔ̃ʒuʁ', fa: 'سلام / روز بخیر (رسمی، تا غروب)', ex: 'Bonjour, madame !', exfa: 'سلام خانم!' },
        { fr: 'salut', ipa: 'saly', fa: 'سلام / خداحافظ (خودمانی)', ex: 'Salut, ça va ?', exfa: 'سلام، خوبی؟' },
        { fr: 'bonsoir', ipa: 'bɔ̃swaʁ', fa: 'عصر/شب بخیر', ex: 'Bonsoir, monsieur.', exfa: 'شب بخیر آقا.' },
        { fr: 'au revoir', ipa: 'o ʁəvwaʁ', fa: 'خداحافظ', ex: 'Au revoir, à demain !', exfa: 'خداحافظ، تا فردا!' },
        { fr: 'merci', ipa: 'mɛʁsi', fa: 'ممنون', ex: 'Merci beaucoup !', exfa: 'خیلی ممنون!' },
        { fr: "s'il vous plaît", ipa: 'sil vu plɛ', fa: 'لطفاً (رسمی)', ex: "Un café, s'il vous plaît.", exfa: 'یک قهوه، لطفاً.' },
        { fr: 'oui', ipa: 'wi', fa: 'بله', ex: 'Oui, merci.', exfa: 'بله، ممنون.' },
        { fr: 'non', ipa: 'nɔ̃', fa: 'نه', ex: 'Non, merci.', exfa: 'نه، ممنون.' },
        { fr: 'madame', ipa: 'madam', fa: 'خانم', ex: 'Bonjour, madame Dupont.', exfa: 'سلام خانم دوپون.' },
        { fr: 'monsieur', ipa: 'məsjø', fa: 'آقا', ex: 'Merci, monsieur.', exfa: 'ممنون آقا.' },
        { fr: 'pardon', ipa: 'paʁdɔ̃', fa: 'ببخشید', ex: 'Pardon, madame !', exfa: 'ببخشید خانم!' },
        { fr: 'bienvenue', ipa: 'bjɛ̃vny', fa: 'خوش آمدید', ex: 'Bienvenue en France !', exfa: 'به فرانسه خوش آمدید!' }
      ],
      phrases: [
        { fr: 'Ça va ?', fa: 'خوبی؟ / حالت چطوره؟' },
        { fr: 'Ça va bien, merci.', fa: 'خوبم، ممنون.' },
        { fr: 'Et toi ?', fa: 'و تو؟ (خودمانی)' },
        { fr: 'Et vous ?', fa: 'و شما؟ (رسمی)' },
        { fr: 'À bientôt !', fa: 'به‌زودی می‌بینمت!' },
        { fr: 'À demain !', fa: 'تا فردا!' }
      ],
      grammar: {
        title: 'Tu ou Vous ?',
        body: 'در فرانسه دو جور «تو/شما» داریم و انتخاب درست آن خیلی مهم است:<br>' +
          '• <b>tu</b> (تو): با دوستان، خانواده و بچه‌ها — مثل «تو» در فارسی.<br>' +
          '• <b>vous</b> (شما): با غریبه‌ها، افراد مسن‌تر و در محیط رسمی — مثل «شما» در فارسی.<br>' +
          'به همین شکل: <b>Salut</b> خودمانی است و <b>Bonjour</b> رسمی‌تر. اگر شک داری، همیشه از حالت رسمی استفاده کن!',
        examples: [
          { fr: 'Salut, ça va ? Et toi ?', fa: 'سلام خوبی؟ تو چطوری؟ (به دوست)' },
          { fr: 'Bonjour madame, comment allez-vous ?', fa: 'سلام خانم، حال شما چطور است؟ (رسمی)' }
        ]
      },
      phonetics: {
        title: 'الفبای فرانسه',
        body: 'الفبای فرانسه همان ۲۶ حرف انگلیسی است ولی تلفظ نام حروف فرق دارد. روی هر حرف بزن، بشنو و تکرار کن. این‌ها برای هجی‌کردن اسمت خیلی مهم‌اند!',
        items: [
          { fr: 'a', ipa: 'ɑ' }, { fr: 'b', ipa: 'be' }, { fr: 'c', ipa: 'se' }, { fr: 'd', ipa: 'de' },
          { fr: 'e', ipa: 'ə' }, { fr: 'f', ipa: 'ɛf' }, { fr: 'g', ipa: 'ʒe' }, { fr: 'h', ipa: 'aʃ' },
          { fr: 'i', ipa: 'i' }, { fr: 'j', ipa: 'ʒi' }, { fr: 'k', ipa: 'kɑ' }, { fr: 'l', ipa: 'ɛl' },
          { fr: 'm', ipa: 'ɛm' }, { fr: 'n', ipa: 'ɛn' }, { fr: 'o', ipa: 'o' }, { fr: 'p', ipa: 'pe' },
          { fr: 'q', ipa: 'ky' }, { fr: 'r', ipa: 'ɛʁ' }, { fr: 's', ipa: 'ɛs' }, { fr: 't', ipa: 'te' },
          { fr: 'u', ipa: 'y' }, { fr: 'v', ipa: 've' }, { fr: 'w', ipa: 'dublə ve' }, { fr: 'x', ipa: 'iks' },
          { fr: 'y', ipa: 'i ɡʁɛk' }, { fr: 'z', ipa: 'zɛd' },
          { fr: 'é — accent aigu', ipa: 'e', fa: 'مثل «اِ» کشیده: café' },
          { fr: 'è — accent grave', ipa: 'ɛ', fa: 'مثل «اِ» باز: père' },
          { fr: 'ç — cédille', ipa: 's', fa: 'ص/س تلفظ می‌شود: français' }
        ]
      },
      dialogue: {
        title: 'Premières salutations',
        lines: [
          { s: 'Léa', fr: 'Bonjour !', fa: 'سلام!' },
          { s: 'Karim', fr: 'Bonjour ! Ça va ?', fa: 'سلام! خوبی؟' },
          { s: 'Léa', fr: 'Ça va bien, merci. Et toi ?', fa: 'خوبم، ممنون. تو چطوری؟' },
          { s: 'Karim', fr: 'Ça va ! Au revoir, Léa !', fa: 'خوبم! خداحافظ لئا!' },
          { s: 'Léa', fr: 'Au revoir ! À demain !', fa: 'خداحافظ! تا فردا!' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'VO', topic: 'سلام و احوال‌پرسی', level: 'easy', q: 'ساعت ۹ شب به همسایه‌ات چه می‌گویی؟', options: ['Bonsoir !', 'Bonjour !', 'Salut !', 'Au revoir !'], correct: 0, explain: 'از عصر به بعد از Bonsoir استفاده می‌کنیم. Salut هم برای همسایه رسمی نیست.' },
        { type: 'mcq', skill: 'CO', topic: 'سلام و احوال‌پرسی', level: 'easy', q: '🎧 گوش کن — این جمله یعنی چه؟', audio: 'Ça va bien, merci. Et vous ?', audioFa: 'خوبم، ممنون. و شما؟', options: ['خوبم ممنون، شما چطور؟', 'خداحافظ، تا فردا', 'ببخشید خانم', 'خوش آمدید'], correct: 0, frOptions: false },
        { type: 'match', skill: 'VO', topic: 'سلام و احوال‌پرسی', level: 'easy', fa: 'هر عبارت را به معنی‌اش وصل کن:', pairs: [['Au revoir', 'خداحافظ'], ['Merci', 'ممنون'], ['Pardon', 'ببخشید'], ['À demain', 'تا فردا']] },
        { type: 'fill', skill: 'GR', topic: 'سلام و احوال‌پرسی', level: 'easy', fa: 'با دوستت خودمانی حرف می‌زنی. جای خالی را پر کن:', q: 'Salut ! Ça va ? Et ___ ?', answer: ['toi'], explain: 'با دوست از toi (خودمانی) استفاده می‌کنیم، نه vous.' },
        { type: 'dictation', skill: 'CO', topic: 'سلام و احوال‌پرسی', level: 'medium', text: 'Bonjour, ça va ?', trans: 'سلام، خوبی؟' },
        { type: 'order', skill: 'GR', topic: 'سلام و احوال‌پرسی', level: 'easy', answer: 'Ça va bien merci.', fa: 'جمله «خوبم ممنون» را بساز:' },
        { type: 'speak', skill: 'PO', topic: 'سلام و احوال‌پرسی', level: 'easy', text: 'Bonjour ! Ça va bien, merci.', fa: 'سلام! خوبم، ممنون.' },
        { type: 'mcq', skill: 'GR', topic: 'سلام و احوال‌پرسی', level: 'easy', q: 'به استاد دانشگاهت کدام را می‌گویی؟', options: ['Bonjour monsieur, comment allez-vous ?', 'Salut ! Ça va ?', 'Salut, à plus !', 'Coucou !'], correct: 0, explain: 'با استاد باید رسمی (vous) حرف بزنیم.' }
      ]
    },
    {
      id: 'u0l2',
      title: 'Les nombres et la classe',
      fa: 'اعداد ۰ تا ۲۰ و جمله‌های کلاس',
      vocab: [
        { fr: 'zéro', ipa: 'zeʁo', fa: '۰ صفر' },
        { fr: 'un', ipa: 'œ̃', fa: '۱ یک' },
        { fr: 'deux', ipa: 'dø', fa: '۲ دو' },
        { fr: 'trois', ipa: 'tʁwɑ', fa: '۳ سه' },
        { fr: 'quatre', ipa: 'katʁ', fa: '۴ چهار' },
        { fr: 'cinq', ipa: 'sɛ̃k', fa: '۵ پنج' },
        { fr: 'six', ipa: 'sis', fa: '۶ شش' },
        { fr: 'sept', ipa: 'sɛt', fa: '۷ هفت' },
        { fr: 'huit', ipa: 'ɥit', fa: '۸ هشت' },
        { fr: 'neuf', ipa: 'nœf', fa: '۹ نه' },
        { fr: 'dix', ipa: 'dis', fa: '۱۰ ده' },
        { fr: 'onze', ipa: 'ɔ̃z', fa: '۱۱ یازده' },
        { fr: 'douze', ipa: 'duz', fa: '۱۲ دوازده' },
        { fr: 'treize', ipa: 'tʁɛz', fa: '۱۳ سیزده' },
        { fr: 'quatorze', ipa: 'katɔʁz', fa: '۱۴ چهارده' },
        { fr: 'quinze', ipa: 'kɛ̃z', fa: '۱۵ پانزده' },
        { fr: 'seize', ipa: 'sɛz', fa: '۱۶ شانزده' },
        { fr: 'dix-sept', ipa: 'disɛt', fa: '۱۷ هفده' },
        { fr: 'dix-huit', ipa: 'dizɥit', fa: '۱۸ هجده' },
        { fr: 'dix-neuf', ipa: 'diznœf', fa: '۱۹ نوزده' },
        { fr: 'vingt', ipa: 'vɛ̃', fa: '۲۰ بیست' }
      ],
      phrases: [
        { fr: "Comment ça s'écrit ?", fa: 'چطور نوشته می‌شود؟ (هجی‌اش چیست؟)' },
        { fr: 'Vous pouvez répéter, s\'il vous plaît ?', fa: 'می‌شود تکرار کنید، لطفاً؟' },
        { fr: 'Je ne comprends pas.', fa: 'نمی‌فهمم.' },
        { fr: 'Qu\'est-ce que ça veut dire ?', fa: 'این یعنی چه؟' },
        { fr: 'Comment on dit « کتاب » en français ?', fa: 'به فرانسه به «کتاب» چه می‌گویند؟' },
        { fr: 'Plus lentement, s\'il vous plaît.', fa: 'آهسته‌تر، لطفاً.' }
      ],
      grammar: {
        title: 'Les nombres de 0 à 20',
        body: 'اعداد فرانسه را باید خوب حفظ کنی چون همه‌جا لازم می‌شوند (قیمت، شماره تلفن، ساعت...).<br>' +
          'نکته‌های تلفظی مهم:<br>' +
          '• <b>six</b> و <b>dix</b> در آخرِ جمله «سیس/دیس» تلفظ می‌شوند، ولی قبل از اسم، s آخر نمی‌آید: six livres «سی لیور».<br>' +
          '• در <b>vingt</b> حرف g و t خوانده نمی‌شوند: «وَن».<br>' +
          '• اعداد ۱۷ تا ۱۹ ترکیبی‌اند: dix-sept = ده+هفت.',
        examples: [
          { fr: "J'ai deux livres.", fa: 'من دو کتاب دارم.' },
          { fr: 'Le numéro huit', fa: 'شماره هشت' }
        ]
      },
      phonetics: {
        title: 'حروف بی‌صدای آخر واژه',
        body: 'در فرانسه معمولاً حروفِ آخر واژه‌ها (به‌خصوص s ،t ،d ،x و e بی‌تکیه) <b>خوانده نمی‌شوند</b>. این مهم‌ترین قانون تلفظ فرانسه است! گوش بده:',
        items: [
          { fr: 'Paris', ipa: 'paʁi', fa: 's آخر خوانده نمی‌شود' },
          { fr: 'salut', ipa: 'saly', fa: 't آخر خوانده نمی‌شود' },
          { fr: 'français', ipa: 'fʁɑ̃sɛ', fa: 's آخر خوانده نمی‌شود' },
          { fr: 'deux', ipa: 'dø', fa: 'x آخر خوانده نمی‌شود' },
          { fr: 'madame', ipa: 'madam', fa: 'e آخر خوانده نمی‌شود' }
        ]
      },
      dialogue: {
        title: 'Dans la classe',
        lines: [
          { s: 'Prof', fr: 'Bonjour à tous ! Je m\'appelle Marie Laurent.', fa: 'سلام به همه! اسم من ماری لوران است.' },
          { s: 'Sara', fr: 'Pardon madame, comment ça s\'écrit ?', fa: 'ببخشید خانم، چطور نوشته می‌شود؟' },
          { s: 'Prof', fr: 'L-A-U-R-E-N-T. Laurent.', fa: 'ل-ا-و-ر-ا-ن-ت. لوران.' },
          { s: 'Sara', fr: 'Merci ! Plus lentement, s\'il vous plaît.', fa: 'ممنون! آهسته‌تر لطفاً.' },
          { s: 'Prof', fr: 'Bien sûr. L... A... U...', fa: 'حتماً. ل... ا... و...' }
        ]
      },
      exercises: [
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — کدام عدد را شنیدی؟', audio: 'quinze', audioFa: 'پانزده', options: ['15', '5', '13', '16'], correct: 0 },
        { type: 'mcq', skill: 'CO', topic: 'اعداد', level: 'easy', q: '🎧 گوش کن — کدام عدد را شنیدی؟', audio: 'dix-huit', audioFa: 'هجده', options: ['18', '8', '10', '2'], correct: 0 },
        { type: 'fill', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'عدد ۱۲ را به حروف فرانسه بنویس:', q: '11 = onze, 12 = ___', answer: ['douze'] },
        { type: 'match', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'اعداد را جور کن:', pairs: [['sept', '۷'], ['dix-neuf', '۱۹'], ['quatre', '۴'], ['seize', '۱۶'], ['vingt', '۲۰']] },
        { type: 'dictation', skill: 'CO', topic: 'اعداد', level: 'medium', text: 'J\'ai treize livres.', trans: 'من سیزده کتاب دارم.' },
        { type: 'mcq', skill: 'VO', topic: 'جمله‌های کلاس', level: 'easy', q: 'وقتی معلم تند حرف می‌زند چه می‌گویی؟', options: ['Plus lentement, s\'il vous plaît.', 'Au revoir !', 'Ça va bien.', 'Bienvenue !'], correct: 0 },
        { type: 'speak', skill: 'PO', topic: 'جمله‌های کلاس', level: 'easy', text: 'Vous pouvez répéter, s\'il vous plaît ?', fa: 'می‌شود تکرار کنید لطفاً؟' },
        { type: 'order', skill: 'GR', topic: 'جمله‌های کلاس', level: 'easy', answer: 'Je ne comprends pas.', fa: 'جمله «نمی‌فهمم» را بساز:' },
        { type: 'mcq', skill: 'GR', topic: 'الفبا و تلفظ', level: 'easy', q: 'در واژه «salut» کدام حرف خوانده نمی‌شود؟', options: ['t آخر', 's اول', 'a', 'u'], correct: 0, frOptions: false, explain: 'حروف آخر واژه‌های فرانسه معمولاً بی‌صدا هستند: salut → «سالو».' }
      ]
    }
  ],
  bilan: {
    exercises: [
      { type: 'mcq', skill: 'CO', topic: 'سلام و احوال‌پرسی', level: 'easy', q: '🎧 گوش کن — این گفت‌وگو رسمی است یا خودمانی؟', audio: 'Salut ! Ça va ? Et toi ?', audioFa: 'سلام! خوبی؟ و تو؟', options: ['خودمانی', 'رسمی'], correct: 0, frOptions: false, explain: 'Salut و toi نشانه گفتار خودمانی هستند.' },
      { type: 'mcq', skill: 'CE', topic: 'سلام و احوال‌پرسی', level: 'easy', q: 'این پیام را بخوان. سارا کِی برمی‌گردد؟', qfr: 'Salut Léa ! Au revoir et à demain ! — Sara', options: ['فردا', 'امشب', 'هفته بعد', 'معلوم نیست'], correct: 0, frOptions: false },
      { type: 'fill', skill: 'GR', topic: 'سلام و احوال‌پرسی', level: 'easy', fa: 'مکالمه رسمی را کامل کن:', q: 'Bonjour madame, comment allez-___ ?', answer: ['vous'] },
      { type: 'dictation', skill: 'CO', topic: 'اعداد', level: 'medium', text: 'sept, onze, dix-sept', fa: 'سه عدد می‌شنوی' },
      { type: 'match', skill: 'VO', topic: 'اعداد', level: 'easy', fa: 'جور کن:', pairs: [['huit', '۸'], ['quatorze', '۱۴'], ['deux', '۲'], ['dix', '۱۰']] },
      { type: 'mcq', skill: 'VO', topic: 'جمله‌های کلاس', level: 'easy', q: '«Qu\'est-ce que ça veut dire ?» یعنی چه؟', options: ['این یعنی چه؟', 'چطور نوشته می‌شود؟', 'می‌شود تکرار کنید؟', 'خوش آمدید'], correct: 0, frOptions: false },
      { type: 'speak', skill: 'PO', topic: 'سلام و احوال‌پرسی', level: 'easy', text: 'Bonjour madame ! Ça va bien, merci beaucoup.', fa: 'سلام خانم! خوبم، خیلی ممنون.' },
      { type: 'order', skill: 'GR', topic: 'جمله‌های کلاس', level: 'easy', answer: 'Comment ça s\'écrit ?', fa: 'جمله «چطور نوشته می‌شود؟» را بساز:' },
      { type: 'write', skill: 'PE', topic: 'سلام و احوال‌پرسی', level: 'medium', prompt: 'یک پیام کوتاه به دوستت بنویس: سلام کن، حالش را بپرس و خداحافظی کن. (به فرانسه)', min: 5, sample: 'Salut Léa ! Ça va ? Moi, ça va bien. Au revoir, à demain !' }
    ]
  }
};
