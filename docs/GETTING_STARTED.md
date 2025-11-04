# 🚀 התחלה מהירה — BibleAvatars

מדריך מהיר להתחלת עבודה עם BibleAvatars.

---

## 📋 דרישות מוקדמות

- **Git** — לניהול גרסאות
- **GitHub Account** — לשימוש ב-GitHub
- **עורך טקסט** — VSCode, Sublime, או כל עורך אחר
- **הבנה בסיסית ב-JSON** — מועיל אבל לא חובה

---

## 🛠️ התקנה

### 1. Clone את המאגר

```bash
git clone https://github.com/AnLoMinus/BibleAvatars.git
cd BibleAvatars
```

### 2. בדוק את המבנה

```bash
ls -la
```

אמור לראות:
- קבצי README, LICENSE, וכו׳
- תיקיית `docs/`
- תיקיית `.github/`
- מסמכי המאגר

---

## 📖 הבנת המבנה

### מסמכים ראשיים

1. **מאגר דמויות התנ״ך – גרסה מקיפה** — מבנה מלא עם יצירה גרפית
2. **מאגר דמויות — CharacterVault** — מבנה כללי
3. **מאגר דמויות התנ״ך — BibleHeroes** — מבנה בסיסי
4. **מאגר דמויות התנ״ך — קנבס עריכה** — רשימה כרונולוגית

### מבנה נתונים

כל דמות מוגדרת ב-JSON:

```json
{
  "name": "דוד המלך",
  "english_name": "King David",
  "nickname": "נעים זמירות ישראל",
  "tribe": "יהודה",
  "era": "מלכות ישראל המאוחדת",
  "symbol": "כינור זהב ✨",
  "energy_color": "ארגמן וזהב",
  "core_element": "אש",
  "mission": "לשיר את האמת האלוקית בתוך החושך",
  "strengths": ["תשובה", "אהבה", "מנהיגות", "עוז"],
  "weaknesses": ["תשוקה", "רגשנות"],
  "spiritual_level": "נשמה",
  "sefira": "מלכות",
  "archetype": "המלך המשורר",
  "quote": "ליבי ובשרי ירננו לאל חי"
}
```

---

## 🎯 צעדים ראשונים

### 1. קרא את התיעוד

- [README](../README.md) — סקירה כללית
- [ARCHITECTURE](./ARCHITECTURE.md) — מבנה הפרויקט
- [CONTRIBUTING](../CONTRIBUTING.md) — איך לתרום

### 2. בדוק דוגמאות

חפש דוגמאות במסמכים הראשיים:
- דמות לדוגמה במסמך "גרסה מקיפה"
- מבנה JSON ב-CONTRIBUTING

### 3. נסה משהו קטן

- הוסף דמות חדשה
- שפר תיעוד קיים
- תקן שגיאת כתיב

---

## 🔧 כלים מומלצים

### עורכים

- **VSCode** — עם הרחבות Markdown ו-JSON
- **Sublime Text** — קל ומהיר
- **Atom** — פתוח ומותאם אישית

### הרחבות VSCode

- Markdown Preview Enhanced
- JSON Tools
- GitLens

---

## ✅ בדיקות ראשוניות

### בדוק תקינות JSON

```bash
# אם יש Python מותקן
python3 -m json.tool your-file.json
```

### בדוק תקינות Markdown

רוב העורכים המודרניים בודקים Markdown אוטומטית.

---

## 🤝 תרומה ראשונה

### 1. Fork את המאגר

לחץ על "Fork" ב-GitHub.

### 2. צור Branch

```bash
git checkout -b my-first-contribution
```

### 3. בצע שינוי

ערוך קבצים, הוסף תוכן, וכו׳.

### 4. Commit ושלח

```bash
git add .
git commit -m "הוסף: תיאור השינוי"
git push origin my-first-contribution
```

### 5. פתח Pull Request

לך ל-GitHub וצור Pull Request.

---

## 📚 משאבי למידה

### תיעוד

- [מדריך תרומה](../CONTRIBUTING.md)
- [מדריך סגנון](./STYLE_GUIDE.md)
- [תמיכה](../SUPPORT.md)

### חיצוני

- [GitHub Guides](https://guides.github.com/)
- [JSON Schema](https://json-schema.org/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 🆘 צריכים עזרה?

- קרא את [SUPPORT.md](../SUPPORT.md)
- פתח [Issue](https://github.com/AnLoMinus/BibleAvatars/issues)
- צור קשר עם מובילי הפרויקט

---

## 🎉 מה הלאה?

עכשיו שאתה מוכן:

1. **קרא את התיעוד המלא** — [INDEX](./INDEX.md)
2. **בדוק את מפת הדרכים** — [ROADMAP](../ROADMAP.md)
3. **תרום משהו** — [CONTRIBUTING](../CONTRIBUTING.md)

---

**פסוק השראה:**

> "בְּכָל דֶּרֶךְ שֶׁתִּרְצוּ יֵלֵךְ אִתְּכֶם" (משלי ג׳, ו׳)

---

**תאריך עדכון אחרון:** ג׳ במרחשוון תשפ״ו · 4 בנובמבר 2025

