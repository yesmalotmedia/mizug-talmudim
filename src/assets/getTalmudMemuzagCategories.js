function getTalmudMemuzagCategories(data, filter) {
    const talmuds = new Map();
    const masecets = new Map();
    const perakim = new Map();
    const dapim = new Map();

    const selectedTalmud = filter.selectedTalmud;

    // הוספת "בבלי" ו"ירושלמי" תמיד לתוך ה-talmuds
    talmuds.set("בבלי", { name: "בבלי", value: "בבלי" });
    talmuds.set("ירושלמי", { name: "ירושלמי", value: "ירושלמי" });

    // כאן אנחנו לא מסננים את התלמודים, כל התלמודים יהיו בתוצאה
    const filteredData = data.filter(item => {
        // אם בחרת "הכל", אין סינון על התלמוד
        if (selectedTalmud === "הכל") return true;
        // אחרת, סינון לפי התלמוד שנבחר
        return item.talmud === selectedTalmud;
    });

    filteredData.forEach(item => {
        // הוספה של המסכת, רק אם היא בתלמוד הנבחר או אם "הכל" נבחר
        if (item.masecet) {
            if (selectedTalmud === "הכל" || item.talmud === selectedTalmud) {
                masecets.set(item.masecet, { name: item.masecet, value: item.masecet });
            }
        }
        // הוספה של הפרק, אם הוא בתלמוד או מסכת הנבחרים
        if (item.perek) {
            if (selectedTalmud === "הכל" || item.talmud === selectedTalmud || item.masecet === filter.selectedMasechet) {
                perakim.set(item.perek, { name: item.perek, value: item.perek });
            }
        }
        // הוספה של הדף, אם הוא בתלמוד, מסכת או פרק הנבחרים
        if (item.daf) {
            if (selectedTalmud === "הכל" || item.talmud === selectedTalmud || item.masecet === filter.selectedMasechet || item.perek === filter.selectedPerek) {
                dapim.set(item.daf, { name: item.daf, value: item.daf });
            }
        }
    });

    return {
        talmuds: Array.from(talmuds.values()), // תמיד החזרת כל התלמודים
        masecets: Array.from(masecets.values()), // מסכתות לפי בחירת התלמוד
        perakim: Array.from(perakim.values()), // פרקים לפי המסכת שנבחרה
        dapim: Array.from(dapim.values()), // דפים לפי הפרק שנבחר
    };
}

export default getTalmudMemuzagCategories;
