const getCategoryIdByName = (name) => {
  let id;

  switch (name) {
    case "בית מדרש":
      id = 3;
      break;
    case "דף יומי בירושלמי":
      id = 5;
      break;
    case "התלמוד הממוזג":
      id = 10;
      break;
    case "כללי":
      id = 1;
      break;
    case "כללים":
      id = 18;
      break;
    case "מה חדש":
      id = 4;
      break;
    case "מסכת ברכות":
      id = 12;
      break;
    case "פרסומי הוצאה לאור":
      id = 11;
      break;
    case "עיון":
      id = 19;
      break;
    case "מועדים":
      id = 20;
      break;
    default:
      id = -1; // Return -1 if the name doesn't match any category
  }

  return id;
};

export default getCategoryIdByName;
