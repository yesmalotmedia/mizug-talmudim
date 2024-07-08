import getCategoryIdByName from "../geCategoryIdByName";

function filterLessons(data, filter) {
  console.log(filter);
  let filteredLessons = data;
  const { freeQuery, category, masechet, rabbiName } = filter;

  //selectButtonsfFiltering

  if (category && category !== "כל השיעורים") {
    const categoryId = getCategoryIdByName(category);
    console.log(categoryId);
    filteredLessons = data.filter((video) =>
      video.categories.includes(categoryId)
    );
  }
  // Free searching
  else if (category === "כל השיעורים" || freeQuery === "" || !freeQuery) {
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
    console.log(getCategoryIdByName(freeQuery?.trim()));

    filteredLessons = data.filter(
      (video) =>
        video.rabbiName.includes(freeQuery?.trim()) ||
        video.title.includes(freeQuery?.trim()) ||
        video.categories.includes(getCategoryIdByName(freeQuery?.trim()))
    );
  }
  return filteredLessons;
}

export default filterLessons;
