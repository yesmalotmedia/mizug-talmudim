const getCategoryNameById = (id) => {
  let name;

  switch (id) {
    case 3:
      name = "בית מדרש";
      break;
    case 5:
      name = "דף יומי בתלמוד הירושלמי";
      break;
    case 10:
      name = "התלמוד הממוזג";
      break;
    case 1:
      name = "כללי";
      break;
    case 9:
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
    case 6:
      name = "שיעורי עיון";
      break;
    default:
      name = "Unknown";
  }

  return name;
};

export default getCategoryNameById;
