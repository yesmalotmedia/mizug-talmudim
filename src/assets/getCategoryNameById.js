const getCategoryNameById = (id) => {
  let name;

  switch (id) {
    case 3:
      name = "בית מדרש";
      break;
    case 5:
      name = "דף יומי בירושלמי";
      break;
    case 10:
      name = "התלמוד הממוזג";
      break;
    case 1:
      name = "כללי";
      break;
    case 18:
      name = "כללים";
      break;
    case 4:
      name = "מה חדש";
      break;
    case 12:
      name = "מסכת ברכות";
      break;
    case 11:
      name = "פרסומי הוצאה לאור";
      break;
    case 19:
      name = "עיון";
      break;
    default:
      name = "קטגוריה";
  }

  return name;
};

export default getCategoryNameById;
