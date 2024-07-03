import getCategoryIdByName from "../geCategoryIdByName";

function filterLessons(data, filter) {
  let filteredLessons = data;
  const { freeQuery, category, masechet, rabbiName } = filter;

  // Free searching
  if (category === "כל השיעורים" || freeQuery === "" || !freeQuery) {
    return data;
  } else if (freeQuery?.trim() === "" || freeQuery == undefined) {
    console.log("params");

    filteredLessons = data.filter(
      (video) =>
        video.categories.includes(getCategoryIdByName(category)) &&
        video.rabbiName === rabbiName
    );
  }

  // Parameters searching
  else {
    console.log("free");
    filteredLessons = data.filter(
      (video) =>
        video.rabbiName.includes(freeQuery?.trim()) ||
        video.title.includes(freeQuery?.trim())
    );
  }
  return filteredLessons;
}

export default filterLessons;
