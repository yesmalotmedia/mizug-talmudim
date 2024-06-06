const getRabbieNameById = (id) => {
  let rabbieName = "";

  switch (id) {
    case 13:
      rabbieName = "הרב ישי ויצמן";
      break;
    case 14:
      rabbieName = "הרב מנחם ויצמן";
      break;

    default:
      rabbieName = "חסר שם רב";
  }
  return rabbieName;
};

export default getRabbieNameById;
