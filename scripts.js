// BibleAvatars - Interactive Scripts with Full Character Database

// Complete characters database - Chronological order starting with Adam
const allCharacters = [
    // ספר בראשית
    {
        id: 1,
        name: "אדם הראשון",
        english_name: "Adam",
        nickname: "אבי האנושות",
        tribe: "כל האנושות",
        era: "בריאת העולם",
        book: "בראשית",
        chapter: "ב׳",
        symbol: "🌳",
        energy_color: "זהב וירוק",
        core_element: "עפר",
        mission: "לבחור בין טוב לרע ולשמור על הבריאה",
        description: "נברא בצלם אלוקים, שורש האנושות. מייצג את היכולת לבחור בין טוב לרע ואת אחריות האדם על הבריאה.",
        strengths: ["בחירה חופשית", "אחריות", "צלם אלוקים"],
        weaknesses: ["חטא", "חוסר ציות"],
        spiritual_level: "נפש",
        sefira: "מלכות",
        archetype: "האדם הראשון",
        quote: "וַיִּבְרָא אֱלֹקִים אֶת הָאָדָם בְּצַלְמוֹ"
    },
    {
        id: 2,
        name: "חוה",
        english_name: "Eve",
        nickname: "אם כל חי",
        tribe: "כל האנושות",
        era: "בריאת העולם",
        book: "בראשית",
        chapter: "ב׳",
        symbol: "🌺",
        energy_color: "ורוד וירוק",
        core_element: "מים",
        mission: "להיות אם כל חי ולחבר את החיים לעולם",
        description: "אם כל חי, כוח הפיתוי והתיקון, מביאה את היסוד הנקבי והחיים לעולם.",
        strengths: ["חיים", "נשיות", "תיקון"],
        weaknesses: ["פיתוי", "חוסר סבלנות"],
        spiritual_level: "נפש",
        sefira: "מלכות",
        archetype: "האם הראשונה",
        quote: "וַיִּקְרָא הָאָדָם שֵׁם אִשְׁתּוֹ חַוָּה כִּי הִוא הָיְתָה אֵם כָּל חָי"
    },
    {
        id: 3,
        name: "קין",
        english_name: "Cain",
        nickname: "הבכור",
        tribe: "כל האנושות",
        era: "אחרי הבריאה",
        book: "בראשית",
        chapter: "ד׳",
        symbol: "⚔️",
        energy_color: "אדום",
        core_element: "אש",
        mission: "ללמוד תשובה וקבלת אחריות מוסרית",
        description: "הבכור הראשון, סמל הקנאה, החטא והתשובה. מלמד על קבלת אחריות מוסרית.",
        strengths: ["עבודה", "מסירות"],
        weaknesses: ["קנאה", "רצח", "חוסר תשובה"],
        spiritual_level: "נפש",
        sefira: "גבורה",
        archetype: "המתקן",
        quote: "הֲשֹׁמֵר אָחִי אָנֹכִי"
    },
    {
        id: 4,
        name: "הבל",
        english_name: "Abel",
        nickname: "הצדיק",
        tribe: "כל האנושות",
        era: "אחרי הבריאה",
        book: "בראשית",
        chapter: "ד׳",
        symbol: "🐑",
        energy_color: "לבן וזהב",
        core_element: "רוח",
        mission: "להיות נשמה זכה ותמים",
        description: "נשמה זכה שנרצחה לשם תיקון הדורות. סמל התום והתקרבות בלב נקי.",
        strengths: ["תום", "צדקות", "לב נקי"],
        weaknesses: ["תמימות"],
        spiritual_level: "רוח",
        sefira: "חסד",
        archetype: "הצדיק הראשון",
        quote: "וַיָּבֵא גַם הֶבֶל מִבְּכֹרוֹת צֹאנוֹ"
    },
    {
        id: 5,
        name: "שת",
        english_name: "Seth",
        nickname: "ממשיך הקו",
        tribe: "כל האנושות",
        era: "אחרי הבריאה",
        book: "בראשית",
        chapter: "ד׳",
        symbol: "🌿",
        energy_color: "ירוק",
        core_element: "עפר",
        mission: "למשיך את הקו האלוקי של האנושות",
        description: "ממשיך הקו האלוקי של האנושות הצדיקית לאחר קין והבל.",
        strengths: ["המשכיות", "צדקות", "אמונה"],
        weaknesses: [],
        spiritual_level: "נפש",
        sefira: "תפארת",
        archetype: "הממשיך",
        quote: "וַיִּקְרָא אֶת שְׁמוֹ שֵׁת כִּי שָׁת לִי אֱלֹקִים זֶרַע אַחֵר"
    },
    {
        id: 6,
        name: "נח",
        english_name: "Noah",
        nickname: "הצדיק",
        tribe: "כל האנושות",
        era: "דור המבול",
        book: "בראשית",
        chapter: "ו׳",
        symbol: "🚢",
        energy_color: "כחול וזהב",
        core_element: "מים",
        mission: "להיות הצדיק היחיד ולהושיע את האנושות",
        description: "הצדיק היחיד בדור המבול, בונה תיבת הישועה. מסמל התחלה חדשה ותיקון האנושות.",
        strengths: ["צדקות", "מסירות", "אמונה"],
        weaknesses: ["שתייה"],
        spiritual_level: "רוח",
        sefira: "יסוד",
        archetype: "הצדיק בדור",
        quote: "נֹחַ אִישׁ צַדִּיק תָּמִים הָיָה בְּדֹרֹתָיו"
    },
    {
        id: 8,
        name: "אברהם אבינו",
        english_name: "Abraham",
        nickname: "אב המון גויים",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "י״ב",
        symbol: "🔥",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להפיץ אמונה באחדות האל ולהיות אב האומה",
        description: "ראש המאמינים, מייסד האומה הישראלית, חסד ואמונה באחדות האל.",
        strengths: ["אמונה", "חסד", "אהבה אוניברסלית", "הכנסת אורחים"],
        weaknesses: ["פחד"],
        spiritual_level: "נשמה",
        sefira: "חסד",
        archetype: "אב האומה",
        quote: "וְהֶאֱמִין בַּה' וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה"
    },
    {
        id: 9,
        name: "שרה אמנו",
        english_name: "Sarah",
        nickname: "אם האומה",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "י״ב",
        symbol: "🏠",
        energy_color: "זהב ורוד",
        core_element: "אש",
        mission: "להיות אם האומה הישראלית",
        description: "אם האומה, דמות של עוצמה נשית, חסד וגבורה רוחנית.",
        strengths: ["אמונה", "עוצמה נשית", "גבורה רוחנית", "יופי"],
        weaknesses: ["צחוק של חוסר אמונה"],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "האם הקדושה",
        quote: "וַתִּצְחַק שָׂרָה בְּקִרְבָּהּ"
    },
    {
        id: 10,
        name: "יצחק אבינו",
        english_name: "Isaac",
        nickname: "העקוד",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "כ״א",
        symbol: "🪓",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות גבורה פנימית ולעקדת הנפש למען האמת",
        description: "גבורה פנימית, צניעות וקדושה. מייצג את עקדת הנפש למען האמת.",
        strengths: ["גבורה", "צניעות", "קדושה", "עקדה"],
        weaknesses: ["פחד"],
        spiritual_level: "נשמה",
        sefira: "גבורה",
        archetype: "העקוד",
        quote: "וַיַּעֲקֹד אֶת יִצְחָק בְּנוֹ"
    },
    {
        id: 11,
        name: "רבקה אמנו",
        english_name: "Rebecca",
        nickname: "הצדקת",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "כ״ד",
        symbol: "💧",
        energy_color: "כחול וזהב",
        core_element: "מים",
        mission: "לפעול במסירות וזריזות מתוך בהירות פנימית",
        description: "מסירות, זריזות וחסד פעיל. פועלת מתוך בהירות פנימית.",
        strengths: ["מסירות", "זריזות", "חסד", "בהירות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "הצדקת",
        quote: "וַתְּמַהֵר וַתְּעַר כַּדָּהּ אֶל הַשֹּׁקֶת"
    },
    {
        id: 12,
        name: "יעקב אבינו",
        english_name: "Jacob",
        nickname: "ישראל",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "כ״ה",
        symbol: "🪜",
        energy_color: "זהב וירוק",
        core_element: "רוח",
        mission: "לאחד שמים וארץ ולהיות עמוד האמת",
        description: "עמוד האמת, מאחד שמים וארץ, סמל היציבות הרוחנית.",
        strengths: ["אמת", "יציבות", "תיקון", "תפילה"],
        weaknesses: ["פחד", "תכסיסים"],
        spiritual_level: "נשמה",
        sefira: "תפארת",
        archetype: "עמוד האמת",
        quote: "וַיַּחֲלֹם וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה"
    },
    {
        id: 13,
        name: "לאה אמנו",
        english_name: "Leah",
        nickname: "הענווה",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "כ״ט",
        symbol: "💧",
        energy_color: "ירוק",
        core_element: "מים",
        mission: "להיות ענווה ודמעה שהולידה מלכים ונביאים",
        description: "ענווה ודמעה שהולידה מלכים ונביאים. תיקון דרך שתיקה וצניעות.",
        strengths: ["ענווה", "צניעות", "תפילה"],
        weaknesses: ["דמעה"],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "הענווה",
        quote: "וַתִּפְקַח עֵינֵי לֵאָה"
    },
    {
        id: 14,
        name: "רחל אמנו",
        english_name: "Rachel",
        nickname: "היפה",
        tribe: "יהודה",
        era: "אבות",
        book: "בראשית",
        chapter: "כ״ט",
        symbol: "🌸",
        energy_color: "ורוד וזהב",
        core_element: "אש",
        mission: "להיות יופי חיצוני ורוחני עם כוח תפילה",
        description: "יופי חיצוני ורוחני, כוח תפילה ומסירות.",
        strengths: ["יופי", "תפילה", "מסירות"],
        weaknesses: ["קנאה"],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "היפה",
        quote: "וְרָחֵל הָיְתָה יְפַת תֹּאַר וִיפַת מַרְאֶה"
    },
    {
        id: 15,
        name: "יוסף הצדיק",
        english_name: "Joseph",
        nickname: "הצדיק",
        tribe: "אפרים",
        era: "גלות מצרים",
        book: "בראשית",
        chapter: "ל״ז",
        symbol: "👔",
        energy_color: "זהב וכחול",
        core_element: "מים",
        mission: "להיות מגן ישראל בגלות ולחלום ולהגשים",
        description: "נבחן ביופי ובניסיון, מגן ישראל בגלות, חולם ומגשים.",
        strengths: ["יופי", "חלומות", "תיקון", "צדקות"],
        weaknesses: ["גאווה"],
        spiritual_level: "נשמה",
        sefira: "יסוד",
        archetype: "המגן",
        quote: "וַיִּזְכֹּר יוֹסֵף אֶת הַחֲלֹמוֹת"
    },
    {
        id: 16,
        name: "בנימין",
        english_name: "Benjamin",
        nickname: "בן הימין",
        tribe: "בנימין",
        era: "גלות מצרים",
        book: "בראשית",
        chapter: "מ״ה",
        symbol: "❤️",
        energy_color: "אדום וזהב",
        core_element: "אש",
        mission: "להיות טוהר פנימי ואחווה אמיתית",
        description: "טוהר פנימי ואחווה אמיתית. שומר הלב של ישראל.",
        strengths: ["טוהר", "אחווה", "אהבה"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "שומר הלב",
        quote: "בִּנְיָמִין זְאֵב יִטְרָף"
    },
    {
        id: 17,
        name: "יהודה",
        english_name: "Judah",
        nickname: "המנהיג",
        tribe: "יהודה",
        era: "גלות מצרים",
        book: "בראשית",
        chapter: "ל״ח",
        symbol: "👑",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות אחריות ומנהיגות עם תשובה",
        description: "אחריות ומנהיגות. מסמל תשובה ועמידה מול האמת.",
        strengths: ["אחריות", "מנהיגות", "תשובה"],
        weaknesses: ["חטא"],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "המנהיג",
        quote: "צָדַק מִמֶּנִּי"
    },
    // ספר שמות
    {
        id: 18,
        name: "משה רבנו",
        english_name: "Moses",
        nickname: "רבנו",
        tribe: "לוי",
        era: "יציאת מצרים",
        book: "שמות",
        chapter: "ב׳",
        symbol: "🪄",
        energy_color: "זהב-כחול",
        core_element: "רוח",
        mission: "להוציא את עם ישראל מעבדות לחירות ולהיות נביא האלוקים",
        description: "מנהיג, נביא ומחוקק. מביא את דבר ה׳ לעולם. מסמל ענווה ואומץ.",
        strengths: ["ענווה", "אמונה", "מנהיגות", "מסירות נפש"],
        weaknesses: ["כעס על העם", "דיבור קשה"],
        spiritual_level: "חיה",
        sefira: "תפארת",
        archetype: "המורה האלוקי",
        quote: "וַיַּעַל מֹשֶׁה אֶל הָאֱלֹקִים"
    },
    {
        id: 19,
        name: "אהרן הכהן",
        english_name: "Aaron",
        nickname: "הכהן הגדול",
        tribe: "לוי",
        era: "יציאת מצרים",
        book: "שמות",
        chapter: "ד׳",
        symbol: "🕯️",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות נושא השלום והאחדות",
        description: "נושא השלום והאחדות, מלמד רכות ואהבת הבריות.",
        strengths: ["שלום", "אהבה", "רכות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "חסד",
        archetype: "נושא השלום",
        quote: "וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ"
    },
    {
        id: 20,
        name: "מרים הנביאה",
        english_name: "Miriam",
        nickname: "הנביאה",
        tribe: "לוי",
        era: "יציאת מצרים",
        book: "שמות",
        chapter: "ט״ו",
        symbol: "🌊",
        energy_color: "כחול",
        core_element: "מים",
        mission: "להיות קול השירה והמים ולאחד את העם",
        description: "קול השירה והמים, נביאה שמאחדת את העם.",
        strengths: ["שירה", "נבואה", "אחדות"],
        weaknesses: ["דיבור"],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "קול הנשים",
        quote: "שִׁירוּ לַה' כִּי גָאֹה גָּאָה"
    },
    {
        id: 23,
        name: "יהושע בן נון",
        english_name: "Joshua",
        nickname: "תלמיד משה",
        tribe: "אפרים",
        era: "כניסה לארץ",
        book: "שמות",
        chapter: "י״ז",
        symbol: "🗡️",
        energy_color: "זהב וכחול",
        core_element: "אש",
        mission: "להיות תלמיד נאמן ולוחם אמונה ומעש",
        description: "תלמיד נאמן, נושא רוח משה, לוחם אמונה ומעש.",
        strengths: ["אמונה", "מעש", "נאמנות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "נצח",
        archetype: "התלמיד",
        quote: "חֲזַק וֶאֱמַץ"
    },
    // ספר שופטים
    {
        id: 29,
        name: "דבורה הנביאה",
        english_name: "Deborah",
        nickname: "השופטת",
        tribe: "אפרים",
        era: "שופטים",
        book: "שופטים",
        chapter: "ד׳",
        symbol: "🌳",
        energy_color: "ירוק וזהב",
        core_element: "רוח",
        mission: "להיות מנהיגה ומשוררת המשלבת רוח וניצחון",
        description: "מנהיגה ומשוררת, משלבת רוח וניצחון.",
        strengths: ["מנהיגות", "שירה", "רוח", "ניצחון"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "השופטת",
        quote: "עוּרִי עוּרִי דְּבוֹרָה"
    },
    {
        id: 31,
        name: "שמשון הגיבור",
        english_name: "Samson",
        nickname: "הגיבור",
        tribe: "דן",
        era: "שופטים",
        book: "שופטים",
        chapter: "י״ג",
        symbol: "💪",
        energy_color: "אדום וזהב",
        core_element: "אש",
        mission: "להיות כוח אדיר ולתקן דרך כאב",
        description: "כוח אדיר ויצר מתפרץ. מראה את דרך התיקון דרך כאב.",
        strengths: ["כוח", "גבורה"],
        weaknesses: ["יצר", "חוסר שליטה"],
        spiritual_level: "נפש",
        sefira: "גבורה",
        archetype: "הגיבור",
        quote: "וַיִּקְרָא שִׁמְשׁוֹן אֶל ה'"
    },
    // ספר שמואל
    {
        id: 32,
        name: "שמואל הנביא",
        english_name: "Samuel",
        nickname: "הנביא",
        tribe: "לוי",
        era: "מלכות",
        book: "שמואל א׳",
        chapter: "א׳",
        symbol: "📖",
        energy_color: "זהב",
        core_element: "רוח",
        mission: "להיות נביא ומחנך שמעמיד מלכים",
        description: "נביא ומחנך, שומע קול ה׳ ומעמיד מלכים.",
        strengths: ["נבואה", "חינוך", "צדקות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "תפארת",
        archetype: "הנביא",
        quote: "דַּבֵּר כִּי שֹׁמֵעַ עַבְדֶּךָ"
    },
    {
        id: 33,
        name: "שאול המלך",
        english_name: "Saul",
        nickname: "המלך הראשון",
        tribe: "בנימין",
        era: "מלכות",
        book: "שמואל א׳",
        chapter: "ט׳",
        symbol: "👑",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות מלך הראשון עם ענווה ואחריות",
        description: "מלך הראשון, ענווה שהפכה לגאווה. מלמד על אחריות וענווה במנהיגות.",
        strengths: ["ענווה", "מנהיגות"],
        weaknesses: ["גאווה", "חוסר ציות"],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "המלך הראשון",
        quote: "הֲלוֹא בֶן יָמִין אָנֹכִי מִקְּטַנֵּי שִׁבְטֵי יִשְׂרָאֵל"
    },
    {
        id: 34,
        name: "דוד המלך",
        english_name: "King David",
        nickname: "נעים זמירות ישראל",
        tribe: "יהודה",
        era: "מלכות ישראל המאוחדת",
        book: "שמואל א׳",
        chapter: "ט״ז",
        symbol: "🎵",
        energy_color: "ארגמן וזהב",
        core_element: "אש",
        mission: "לשיר את האמת האלוקית בתוך החושך",
        description: "משורר, לוחם ואוהב אמת. נעים זמירות ישראל.",
        strengths: ["תשובה", "אהבה", "מנהיגות", "עוז", "שירה"],
        weaknesses: ["תשוקה", "רגשנות"],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "המלך המשורר",
        quote: "ליבי ובשרי ירננו לאל חי"
    },
    {
        id: 36,
        name: "שלמה המלך",
        english_name: "Solomon",
        nickname: "החכם",
        tribe: "יהודה",
        era: "מלכות ישראל המאוחדת",
        book: "מלכים א׳",
        chapter: "ג׳",
        symbol: "💎",
        energy_color: "זהב וכחול",
        core_element: "רוח",
        mission: "להיות חכם מכל אדם ולבנות את המקדש",
        description: "חכם מכל אדם, בונה המקדש, שלמות היופי והבינה.",
        strengths: ["חכמה", "בינה", "שלום"],
        weaknesses: ["נשים", "עבודה זרה"],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "החכם",
        quote: "וַיִּתֵּן אֱלֹקִים חָכְמָה לִשְׁלֹמֹה"
    },
    {
        id: 37,
        name: "אליהו הנביא",
        english_name: "Elijah",
        nickname: "נביא האש",
        tribe: "לוי",
        era: "מלכות ישראל",
        book: "מלכים א׳",
        chapter: "י״ז",
        symbol: "🔥",
        energy_color: "אדום וזהב",
        core_element: "אש",
        mission: "להיות נביא אש ותיקון שמחבר שמים וארץ",
        description: "נביא אש ותיקון, מחבר שמים וארץ.",
        strengths: ["נבואה", "אש", "תיקון", "קנאות"],
        weaknesses: ["קנאות יתר"],
        spiritual_level: "חיה",
        sefira: "הוד",
        archetype: "נביא האש",
        quote: "חַי ה' אֱלֹקֵי יִשְׂרָאֵל אֲשֶׁר עָמַדְתִּי לְפָנָיו"
    },
    {
        id: 40,
        name: "ישעיהו הנביא",
        english_name: "Isaiah",
        nickname: "נביא הגאולה",
        tribe: "יהודה",
        era: "מלכות יהודה",
        book: "ישעיהו",
        chapter: "א׳",
        symbol: "🕊️",
        energy_color: "זהב",
        core_element: "רוח",
        mission: "להיות נביא הגאולה עם חזון השלום העתידי",
        description: "נביא הגאולה, חזון השלום העתידי.",
        strengths: ["נבואה", "גאולה", "שלום", "חזון"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "נצח",
        archetype: "נביא הגאולה",
        quote: "וְגָר זְאֵב עִם כֶּבֶשׂ וְנָמֵר עִם גְּדִי יִרְבָּץ"
    },
    {
        id: 43,
        name: "אסתר המלכה",
        english_name: "Esther",
        nickname: "המלכה",
        tribe: "יהודה",
        era: "גלות פרס",
        book: "מגילת אסתר",
        chapter: "ב׳",
        symbol: "👑",
        energy_color: "זהב וורוד",
        core_element: "אש",
        mission: "להיות נס נסתר עם אומץ נשי מול גורל",
        description: "נס נסתר, אומץ נשי מול גורל, מלמדת אמונה נסתרת.",
        strengths: ["אומץ", "אמונה", "יופי", "חכמה"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "המלכה",
        quote: "וּבְכֵן אֲבוֹא אֶל הַמֶּלֶךְ"
    },
    {
        id: 44,
        name: "מרדכי הצדיק",
        english_name: "Mordecai",
        nickname: "הצדיק",
        tribe: "יהודה",
        era: "גלות פרס",
        book: "מגילת אסתר",
        chapter: "ב׳",
        symbol: "📜",
        energy_color: "זהב",
        core_element: "רוח",
        mission: "להיות מנהיג רוחני שמאחד את העם בשעת סכנה",
        description: "מנהיג רוחני שמאחד את העם בשעת סכנה.",
        strengths: ["מנהיגות", "צדקות", "אמונה", "אחדות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "תפארת",
        archetype: "המנהיג",
        quote: "כִּי מָרְדֳּכַי הַיְּהוּדִי מִשְׁנֶה לַמֶּלֶךְ אֲחַשְׁוֵרוֹשׁ"
    },
    {
        id: 25,
        name: "פנחס",
        english_name: "Phinehas",
        nickname: "הקנאי",
        tribe: "לוי",
        era: "מסע המדבר",
        book: "במדבר",
        chapter: "כ״ה",
        symbol: "⚔️",
        energy_color: "אדום וזהב",
        core_element: "אש",
        mission: "להיות קנאי לאמת ולגיבור תיקון הקנאה לטובת אהבה טהורה",
        description: "קנאי לאמת, גיבור תיקון הקנאה לטובת אהבה טהורה.",
        strengths: ["קנאות", "אמת", "תיקון"],
        weaknesses: ["קנאות יתר"],
        spiritual_level: "נשמה",
        sefira: "הוד",
        archetype: "הקנאי",
        quote: "פִּינְחָס בֶּן אֶלְעָזָר בֶּן אַהֲרֹן הַכֹּהֵן"
    },
    {
        id: 30,
        name: "גדעון",
        english_name: "Gideon",
        nickname: "הגיבור",
        tribe: "מנשה",
        era: "שופטים",
        book: "שופטים",
        chapter: "ו׳",
        symbol: "🛡️",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות ענווה שהופכת לעוז ולסמל תיקון הפחד",
        description: "ענווה שהופכת לעוז. סמל לתיקון הפחד.",
        strengths: ["ענווה", "עוז", "תיקון"],
        weaknesses: ["פחד"],
        spiritual_level: "נשמה",
        sefira: "גבורה",
        archetype: "הגיבור",
        quote: "הִנֵּה אַלְפִּי הַדַּל בְּמְנַשֶּׁה"
    },
    {
        id: 28,
        name: "כלב בן יפונה",
        english_name: "Caleb",
        nickname: "המרגל",
        tribe: "יהודה",
        era: "כניסה לארץ",
        book: "יהושע",
        chapter: "י״ד",
        symbol: "🗻",
        energy_color: "ירוק וזהב",
        core_element: "עפר",
        mission: "להיות אמונה עזה והולך אחרי ה׳ בכל לבבו",
        description: "אמונה עזה, הולך אחרי ה׳ בכל לבבו.",
        strengths: ["אמונה", "עוז", "נאמנות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "נצח",
        archetype: "המאמין",
        quote: "וְעַבְדִּי כָלֵב עֵקֶב הָיְתָה רוּחַ אַחֶרֶת עִמּוֹ"
    },
    {
        id: 38,
        name: "אלישע הנביא",
        english_name: "Elisha",
        nickname: "תלמיד אליהו",
        tribe: "לוי",
        era: "מלכות ישראל",
        book: "מלכים ב׳",
        chapter: "ב׳",
        symbol: "💧",
        energy_color: "כחול וזהב",
        core_element: "מים",
        mission: "להיות תלמיד אליהו וממשיך דרכו בנסים ורחמים",
        description: "תלמיד אליהו, ממשיך דרכו בנסים ורחמים.",
        strengths: ["נסים", "רחמים", "תלמידות"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "יסוד",
        archetype: "התלמיד",
        quote: "וַיִּקַּח אֵלִיָּהוּ אֶת אַדַּרְתּוֹ וַיִּגְעַר בַּמַּיִם"
    },
    {
        id: 39,
        name: "חזקיהו המלך",
        english_name: "Hezekiah",
        nickname: "המלך הצדיק",
        tribe: "יהודה",
        era: "מלכות יהודה",
        book: "מלכים ב׳",
        chapter: "י״ח",
        symbol: "👑",
        energy_color: "זהב",
        core_element: "אש",
        mission: "להיות אמונה טהורה ללא פחד וגיבור הרוח",
        description: "אמונה טהורה ללא פחד, גיבור הרוח.",
        strengths: ["אמונה", "צדקות", "עוז"],
        weaknesses: [],
        spiritual_level: "נשמה",
        sefira: "מלכות",
        archetype: "המלך הצדיק",
        quote: "בַּה' אֱלֹקֵי יִשְׂרָאֵל בָּטָח"
    },
    {
        id: 41,
        name: "ירמיהו הנביא",
        english_name: "Jeremiah",
        nickname: "נביא הבכי",
        tribe: "לוי",
        era: "חורבן בית ראשון",
        book: "ירמיהו",
        chapter: "א׳",
        symbol: "😢",
        energy_color: "כחול",
        core_element: "מים",
        mission: "להיות נביא הבכי והנחמה ולחשוף עומק נשמה",
        description: "נביא הבכי והנחמה, חושף עומק נשמה.",
        strengths: ["נבואה", "רחמים", "אמת"],
        weaknesses: ["צער"],
        spiritual_level: "נשמה",
        sefira: "בינה",
        archetype: "נביא הבכי",
        quote: "מַה לִּי לְדַבֵּר וּלְהַזְהִיר"
    },
    {
        id: 42,
        name: "יחזקאל",
        english_name: "Ezekiel",
        nickname: "נביא המרכבה",
        tribe: "לוי",
        era: "גלות בבל",
        book: "יחזקאל",
        chapter: "א׳",
        symbol: "🌀",
        energy_color: "סגול וזהב",
        core_element: "רוח",
        mission: "להיות מראות אלוקים ומרכבת הספירות עם חזיונות הגאולה",
        description: "מראות אלוקים ומרכבת הספירות, חזיונות הגאולה.",
        strengths: ["נבואה", "חזיונות", "גאולה"],
        weaknesses: [],
        spiritual_level: "חיה",
        sefira: "כתר",
        archetype: "נביא המרכבה",
        quote: "וָאֶרְאֶה וְהִנֵּה רוּחַ סְעָרָה בָּאָה מִן הַצָּפוֹן"
    }
];

// Current character index for navigation
let currentCharacterIndex = 0;

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const charactersGrid = document.getElementById('charactersGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Navigation Toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Enhanced Character Card Generator
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.dataset.id = character.id;

    card.innerHTML = `
        <div class="character-image" style="background: linear-gradient(135deg, ${getColorForElement(character.core_element)});">
            <div class="character-symbol">${character.symbol}</div>
            <div class="character-energy-overlay"></div>
        </div>
        <div class="character-content">
            <div class="character-header">
                <h3 class="character-name">${character.name}</h3>
                <span class="character-number">#${character.id}</span>
            </div>
            <p class="character-english">${character.english_name}</p>
            <div class="character-tags">
                <span class="character-tribe">${character.tribe}</span>
                <span class="character-era">${character.era}</span>
            </div>
            <p class="character-quote">"${character.quote}"</p>
            <div class="character-stats">
                <span class="stat-item">
                    <span class="stat-icon">${character.symbol}</span>
                    <span class="stat-label">${character.core_element}</span>
                </span>
                <span class="stat-item">
                    <span class="stat-icon">✨</span>
                    <span class="stat-label">${character.spiritual_level}</span>
                </span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        showFullScreenCharacter(character);
    });

    return card;
}

// Get color gradient for element
function getColorForElement(element) {
    const colors = {
        'אש': '#F59E0B, #DC2626',
        'מים': '#3B82F6, #1D4ED8',
        'רוח': '#8B5CF6, #6366F1',
        'עפר': '#10B981, #059669'
    };
    return colors[element] || '#6B46C1, #8B5CF6';
}

// Display Characters
let displayedCharacters = 0;
const charactersPerPage = 12;

function displayCharacters() {
    const endIndex = Math.min(displayedCharacters + charactersPerPage, allCharacters.length);

    for (let i = displayedCharacters; i < endIndex; i++) {
        const characterCard = createCharacterCard(allCharacters[i]);
        charactersGrid.appendChild(characterCard);
    }

    displayedCharacters = endIndex;

    if (displayedCharacters >= allCharacters.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Load More Button
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        displayCharacters();
    });
}

// Full Screen Character Display
function showFullScreenCharacter(character) {
    currentCharacterIndex = allCharacters.findIndex(c => c.id === character.id);

    const fullScreen = document.createElement('div');
    fullScreen.className = 'character-fullscreen';
    fullScreen.innerHTML = `
        <div class="fullscreen-background" style="background: linear-gradient(135deg, ${getColorForElement(character.core_element)});">
            <div class="stars-overlay"></div>
        </div>
        <div class="fullscreen-content">
            <button class="close-fullscreen" aria-label="סגור">×</button>
            <div class="character-navigation">
                <button class="nav-character prev" ${currentCharacterIndex === 0 ? 'disabled' : ''}>←</button>
                <button class="nav-character next" ${currentCharacterIndex === allCharacters.length - 1 ? 'disabled' : ''}>→</button>
            </div>
            <div class="character-fullscreen-main">
                <div class="character-fullscreen-header">
                    <div class="character-fullscreen-icon">${character.symbol}</div>
                    <div class="character-fullscreen-title">
                        <h1>${character.name}</h1>
                        <h2>${character.english_name}</h2>
                        <p class="character-fullscreen-nickname">${character.nickname}</p>
                    </div>
                    <div class="character-fullscreen-number">#${character.id}</div>
                </div>
                <div class="character-fullscreen-body">
                    <div class="character-fullscreen-section">
                        <h3>📖 תיאור</h3>
                        <p>${character.description}</p>
                    </div>
                    <div class="character-fullscreen-grid">
                        <div class="character-fullscreen-card">
                            <h4>🎯 ייעוד</h4>
                            <p>${character.mission}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>📚 ספר ופרק</h4>
                            <p>${character.book} ${character.chapter}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>🏛️ שבט</h4>
                            <p>${character.tribe}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>⏳ תקופה</h4>
                            <p>${character.era}</p>
                        </div>
                    </div>
                    <div class="character-fullscreen-section">
                        <h3>💪 חוזקות</h3>
                        <div class="tags-list">
                            ${character.strengths.map(s => `<span class="tag tag-strength">${s}</span>`).join('')}
                        </div>
                    </div>
                    ${character.weaknesses.length > 0 ? `
                    <div class="character-fullscreen-section">
                        <h3>⚠️ חולשות</h3>
                        <div class="tags-list">
                            ${character.weaknesses.map(w => `<span class="tag tag-weakness">${w}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                    <div class="character-fullscreen-grid">
                        <div class="character-fullscreen-card">
                            <h4>🜂 ספירה</h4>
                            <p>${character.sefira}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>✨ רמה רוחנית</h4>
                            <p>${character.spiritual_level}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>🌊 יסוד</h4>
                            <p>${character.core_element}</p>
                        </div>
                        <div class="character-fullscreen-card">
                            <h4>🎨 צבע אנרגטי</h4>
                            <p>${character.energy_color}</p>
                        </div>
                    </div>
                    <div class="character-fullscreen-section">
                        <h3>📜 פסוק</h3>
                        <blockquote class="character-quote-large">"${character.quote}"</blockquote>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(fullScreen);
    document.body.style.overflow = 'hidden';

    // Close handlers
    const closeBtn = fullScreen.querySelector('.close-fullscreen');
    closeBtn.addEventListener('click', () => closeFullScreen(fullScreen));

    fullScreen.querySelector('.fullscreen-background').addEventListener('click', (e) => {
        if (e.target.classList.contains('fullscreen-background')) {
            closeFullScreen(fullScreen);
        }
    });

    // Navigation handlers
    const prevBtn = fullScreen.querySelector('.nav-character.prev');
    const nextBtn = fullScreen.querySelector('.nav-character.next');

    if (prevBtn && !prevBtn.disabled) {
        prevBtn.addEventListener('click', () => {
            if (currentCharacterIndex > 0) {
                closeFullScreen(fullScreen);
                setTimeout(() => showFullScreenCharacter(allCharacters[currentCharacterIndex - 1]), 300);
            }
        });
    }

    if (nextBtn && !nextBtn.disabled) {
        nextBtn.addEventListener('click', () => {
            if (currentCharacterIndex < allCharacters.length - 1) {
                closeFullScreen(fullScreen);
                setTimeout(() => showFullScreenCharacter(allCharacters[currentCharacterIndex + 1]), 300);
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function keyboardHandler(e) {
        if (e.key === 'Escape') {
            closeFullScreen(fullScreen);
            document.removeEventListener('keydown', keyboardHandler);
        } else if (e.key === 'ArrowRight' && currentCharacterIndex < allCharacters.length - 1) {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft' && currentCharacterIndex > 0) {
            prevBtn.click();
        }
    });
}

function closeFullScreen(fullScreen) {
    fullScreen.style.opacity = '0';
    fullScreen.style.transform = 'scale(0.95)';
    setTimeout(() => {
        if (document.body.contains(fullScreen)) {
            document.body.removeChild(fullScreen);
        }
        document.body.style.overflow = '';
    }, 300);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayCharacters();

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
