/* ===== نگاشت واژه → ایموجی (کمک بصری برای یادسپاری) =====
   کلیدها دقیقاً همان رشتهٔ fr هستند که در data/unitNN.js نوشته شده‌اند.
   عمداً همهٔ ۶۴۰+ واژه/عبارت را پوشش نمی‌دهد — فقط آن‌هایی که یک ایموجی
   واقعاً کمک‌کننده دارند (اسم‌های عینی، افعال پرکاربرد، رنگ‌ها، اعداد،
   احوال‌پرسی‌ها)؛ جمله‌های سؤالی/انتزاعی بلند عمداً بدون ایموجی می‌مانند. */
var WORD_EMOJI = {
  /* ضمایر */
  "je": "🙋", "tu": "👉", "il / elle": "🧑", "nous": "👥", "vous": "🫵", "ils / elles": "🧑‍🤝‍🧑",

  /* احوال‌پرسی و عبارات اجتماعی */
  "bonjour": "👋", "bonsoir": "🌙", "salut": "👋", "au revoir": "👋",
  "À bientôt !": "👋", "À demain !": "👋", "merci": "🙏", "pardon": "🙏",
  "s'il vous plaît": "🙏", "bravo": "👏", "bienvenue": "🤗", "Bienvenue chez moi !": "🏠",
  "Bon appétit !": "🍽️", "Bon voyage !": "✈️", "Bonne année !": "🎉", "Bonne idée !": "💡",
  "Félicitations !": "🎉", "féliciter": "🎉", "Joyeux anniversaire !": "🎂",
  "d'accord": "👍", "être d'accord": "👍", "oui": "👍", "non": "🙅",
  "enchanté / enchantée": "🤝", "Ça va ?": "🙂", "Avec plaisir !": "😊",

  /* اعداد */
  "zéro": "0️⃣", "un": "1️⃣", "deux": "2️⃣", "trois": "3️⃣", "quatre": "4️⃣", "cinq": "5️⃣",
  "six": "6️⃣", "sept": "7️⃣", "huit": "8️⃣", "neuf": "9️⃣", "dix": "🔟",
  "onze": "🔢", "douze": "🔢", "treize": "🔢", "quatorze": "🔢", "quinze": "🔢", "seize": "🔢",
  "dix-sept": "🔢", "dix-huit": "🔢", "dix-neuf": "🔢", "vingt": "🔢", "trente": "🔢",
  "quarante": "🔢", "cinquante": "🔢", "soixante": "🔢", "soixante-dix": "🔢",
  "quatre-vingts": "🔢", "quatre-vingt-dix": "🔢", "cent": "🔢", "deux cents": "🔢",
  "cinq cents": "🔢", "mille": "🔢", "premier / première": "🥇", "deuxième": "2️⃣",

  /* رنگ‌ها */
  "rouge": "🔴", "bleu / bleue": "🔵", "vert / verte": "🟢", "jaune": "🟡",
  "noir / noire": "⚫", "blanc / blanche": "⚪", "brun / brune": "🟤",

  /* خانواده و افراد */
  "la famille": "👨‍👩‍👧‍👦", "un ami / une amie": "👫", "un frère": "👦", "une sœur": "👧",
  "un fils": "👦", "une fille": "👧", "le père / le papa": "👨", "la mère / la maman": "👩",
  "le mari": "🤵", "la femme": "👩", "le grand-père / la grand-mère": "👴",
  "un oncle / une tante": "👨‍👩", "un cousin / une cousine": "👦", "les parents": "👪",
  "un / une collègue": "👔", "monsieur": "👨", "madame": "👩",
  "jeune": "👶", "vieux / vieille": "👴", "l'enfance": "🧒", "naître": "👶",
  "marié / mariée": "💍", "un mariage": "💒",

  /* حیوانات */
  "un chat": "🐱", "un chien": "🐶", "un cheval / des chevaux": "🐴",
  "un oiseau / des oiseaux": "🐦", "un animal / des animaux": "🐾",

  /* غذا و نوشیدنی */
  "manger": "🍽️", "boire": "🥤", "cuisiner": "🍳", "goûter": "😋",
  "le pain": "🍞", "le fromage": "🧀", "le lait": "🥛", "le thé": "🍵",
  "un café": "☕", "l'eau": "💧", "le riz": "🍚", "la viande": "🥩", "le poisson": "🐟",
  "un poisson": "🐟", "le poulet": "🍗", "un œuf / des œufs": "🥚",
  "les fruits": "🍎", "une pomme": "🍎", "une tomate": "🍅", "les légumes": "🥦",
  "une salade": "🥗", "une soupe": "🍲", "un plat": "🍲", "une entrée": "🥗",
  "un dessert": "🍰", "un gâteau": "🎂", "une glace": "🍦", "un restaurant": "🍽️",
  "l'addition": "🧾", "commander": "🧾", "une boulangerie": "🥖",
  "délicieux / délicieuse": "😋", "détester": "🤢",

  /* خانه */
  "la maison": "🏠", "une maison": "🏠", "un appartement": "🏢", "habiter": "🏠",
  "une adresse": "🏠", "louer": "🔑", "déménager": "📦", "un balcon": "🏠",
  "la chambre": "🛏️", "un lit": "🛏️", "la cuisine": "🍳", "le salon": "🛋️",
  "un canapé": "🛋️", "confortable": "🛋️", "la salle de bains": "🛁",
  "une fenêtre": "🪟", "une porte": "🚪", "une pièce": "🚪", "sortir": "🚪",
  "une chaise": "🪑", "une table": "🪑", "un meuble": "🪑", "un bureau": "🗄️",
  "une lampe": "💡", "une armoire": "🚪", "un jardin": "🌷", "un ascenseur": "🛗",
  "un étage": "🏢",

  /* لباس و خرید */
  "un vêtement": "👗", "porter": "👕", "s'habiller": "👕", "essayer": "👕",
  "la cabine d'essayage": "👗", "des chaussures": "👟", "un manteau": "🧥",
  "un pantalon": "👖", "une chemise": "👔", "une robe": "👗", "une jupe": "👗",
  "un tee-shirt": "👕", "acheter": "🛒", "acheter des souvenirs": "🛍️",
  "les courses": "🛒", "un marché": "🛒", "un magasin": "🏪", "un supermarché": "🏬",
  "les soldes": "🏷️", "une réduction": "🏷️", "coûter": "💰", "cher / chère": "💰",
  "pas cher": "💸", "gratuit / gratuite": "🆓", "libre": "🆓",
  "un prix": "💲", "en espèces": "💵", "par carte": "💳", "la caisse": "💳",
  "un euro": "💶", "un ticket / un reçu": "🧾", "un sac à dos": "🎒", "un cadeau": "🎁",

  /* بدن و سلامتی */
  "le corps": "🧍", "la tête": "😀", "la main": "✋", "le bras": "💪",
  "la jambe": "🦵", "le pied": "🦶", "les yeux": "👀", "les cheveux": "💇",
  "malade": "🤒", "la fièvre": "🤒", "la grippe": "🤧", "un rhume": "🤧",
  "tousser": "🤧", "se casser": "🤕", "tomber": "🤕", "un médecin": "👨‍⚕️",
  "un médecin / un docteur": "👨‍⚕️", "un infirmier / une infirmière": "👩‍⚕️",
  "l'hôpital": "🏥", "une pharmacie": "💊", "un médicament": "💊", "un comprimé": "💊",
  "la santé": "❤️", "fatigué / fatiguée": "😫",

  /* طبیعت و آب‌وهوا */
  "la nature": "🌳", "un arbre": "🌳", "une forêt": "🌲", "une fleur": "🌸",
  "un parc": "🌳", "la campagne": "🌾", "la montagne": "⛰️", "la mer": "🌊",
  "la plage": "🏖️", "un lac": "🏞️", "une rivière": "🏞️", "un nuage": "☁️",
  "il fait beau": "☀️", "il fait chaud": "🔥", "il fait froid": "🥶",
  "il fait mauvais": "🌧️", "il neige": "❄️", "il pleut": "🌧️",
  "il y a du soleil": "☀️", "il y a du vent": "🌬️", "la météo": "⛅",
  "la température": "🌡️", "un degré": "🌡️", "l'été": "☀️", "l'hiver": "❄️",
  "le printemps": "🌸", "l'automne": "🍂",

  /* زمان */
  "l'heure": "🕐", "maintenant": "⏰", "aujourd'hui": "📆", "demain": "📆",
  "hier": "📆", "midi": "🕛", "minuit": "🌙", "le matin": "🌅", "l'après-midi": "🌤️",
  "le soir": "🌆", "lundi": "📅", "mardi / mercredi / jeudi": "📅",
  "vendredi / samedi / dimanche": "📅", "janvier / février / mars": "📅",
  "avril / mai / juin": "📅", "juillet / août / septembre": "📅",
  "octobre / novembre / décembre": "📅", "en retard": "⏰", "attendre": "⏳",
  "patienter": "⏳", "un anniversaire": "🎂", "l'âge": "🎂", "un an": "🎂",

  /* سفر و حمل‌ونقل */
  "voyager": "✈️", "un voyage": "✈️", "partir": "✈️", "un avion": "✈️",
  "un aéroport": "✈️", "les vacances": "🏖️", "camper": "⛺", "une tente": "⛺",
  "un pique-nique": "🧺", "une randonnée": "🥾", "un billet": "🎫",
  "un passeport": "📔", "une valise": "🧳", "emporter": "🧳",
  "le train": "🚆", "un train": "🚆", "une gare": "🚉", "le bus": "🚌",
  "le métro": "🚇", "un taxi": "🚕", "une voiture": "🚗", "le vélo": "🚲",
  "un vélo": "🚲", "à pied": "🚶", "marcher": "🚶", "se promener": "🚶",
  "une ville": "🏙️", "une rue": "🛣️", "une place": "🏛️", "un hôtel": "🏨",
  "un musée": "🏛️", "un monument": "🗽", "visiter": "🗺️", "un pays": "🌍",
  "le monde": "🌍",

  /* پرچم‌های ملیت/کشور */
  "français / française": "🇫🇷", "la France": "🇫🇷", "l'Iran": "🇮🇷",
  "iranien / iranienne": "🇮🇷", "anglais / anglaise": "🇬🇧", "allemand / allemande": "🇩🇪",
  "espagnol / espagnole": "🇪🇸", "chinois / chinoise": "🇨🇳", "l'Italie": "🇮🇹",
  "le Maroc": "🇲🇦", "les États-Unis": "🇺🇸",

  /* شغل و کار */
  "le travail": "💼", "un travail / un emploi": "💼", "un métier": "💼",
  "travailler": "💼", "un entretien": "💼", "un stage": "💼", "une expérience": "💼",
  "un salaire": "💰", "le loyer": "💰", "un CV": "📄", "poser sa candidature": "📄",
  "un examen": "📝", "réussir": "🏆", "gagner": "🏆",
  "un professeur": "👩‍🏫", "un étudiant / une étudiante": "🎓", "une école": "🏫",
  "un avocat / une avocate": "⚖️", "un ingénieur / une ingénieure": "👷",
  "un cuisinier / une cuisinière": "👨‍🍳", "un journaliste / une journaliste": "📰",
  "un vendeur / une vendeuse": "🧑‍💼", "un serveur / une serveuse": "🤵",
  "une entreprise": "🏢", "une banque": "🏦", "une réunion": "👥",
  "un rendez-vous": "📅", "réserver": "📅",

  /* اوقات فراغت */
  "les loisirs": "🎮", "jouer au football": "⚽", "jouer de la guitare": "🎸",
  "écouter de la musique": "🎧", "regarder un film": "🎬", "un cinéma": "🎬",
  "un concert": "🎤", "danser": "💃", "lire": "📖", "une langue": "🗣️",
  "faire du sport": "🏃", "faire de la natation": "🏊", "nager": "🏊",
  "le ski": "⛷️", "glisser": "🛷", "une fête": "🎉", "un souvenir": "📸",
  "une photo": "📷", "inoubliable": "💖", "une ambiance": "🎶",

  /* صفات پرکاربرد */
  "grand / grande": "📏", "petit / petite": "🔹", "long / longue": "📏",
  "court / courte": "✂️", "beau / belle": "✨", "joli / jolie": "🌸",
  "intelligent / intelligente": "🧠", "intéressant / intéressante": "🤔",
  "ennuyeux / ennuyeuse": "😑", "drôle": "😂", "sympa (sympathique)": "😊",
  "timide": "😳", "calme": "😌", "bruyant / bruyante": "🔊", "clair / claire": "☀️",
  "occupé / occupée": "⏳", "motivé / motivée": "💪", "fier / fière": "🙌",
  "formidable": "🤩", "génial / géniale": "🤩", "nul / nulle": "👎",
  "meilleur / meilleure": "👍", "heureusement": "😌", "dommage": "😔",
  "pratique": "👍", "pas de chance !": "😬",

  /* افعال پرکاربرد */
  "aller": "🚶", "venir": "🚶", "arriver": "🏁", "rester": "🧍",
  "rentrer": "🏠", "avoir": "🤲", "prendre": "🤲", "chercher": "🔍",
  "trouver": "🔍", "apprendre": "📚", "connaître": "🧠", "savoir": "🧠",
  "penser": "🤔", "préférer": "❤️", "adorer": "😍", "aimer": "❤️",
  "choisir": "✅", "payer": "💳", "envoyer": "📤", "appeler": "📞",
  "téléphoner (à)": "📞", "rappeler": "📞", "Allô ?": "📞",
  "parler": "🗣️", "parler couramment": "🗣️", "oublier": "🤦", "perdre": "😢",
  "trouver un travail": "💼", "se lever": "⏰", "se coucher": "🛌",
  "se laver": "🚿", "se préparer": "🪞", "se reposer": "😌", "dormir": "😴",
  "s'appeler": "🙋", "inviter": "💌", "rencontrer": "🤝", "tourner": "🔄",
  "traverser": "🚶", "continuer": "➡️", "progresser": "📈",
  "se souvenir de": "💭",

  /* موقعیت مکانی */
  "à droite": "➡️", "à gauche": "⬅️", "tout droit": "⬆️", "devant": "⏩",
  "derrière": "⏪", "entre": "↔️", "dans": "📥", "sur / sous": "⬆️",
  "près (de)": "📍", "loin (de)": "🔭", "à côté de": "📍"
};

function wordEmoji(fr) { return WORD_EMOJI[fr] || ''; }
