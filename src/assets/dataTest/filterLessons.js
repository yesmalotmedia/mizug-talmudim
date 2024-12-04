import getCategoryIdByName from "../geCategoryIdByName";

function filterLessons(data, filter) {
  let filteredLessons = data;
  const { freeQuery, category, masechet, rabbiName } = filter;
  console.log(filter);

  // Select Buttons Filtering
  if (category && category !== "כל השיעורים") {
    const categoryId = getCategoryIdByName(category);
    filteredLessons = data.filter((video) =>
      video.categories.includes(categoryId)
    );
  }

  // Rabbi Name Filtering
  if (rabbiName && rabbiName !== "כל הרבנים" && rabbiName.trim() !== "") {
    filteredLessons = filteredLessons.filter((video) =>
      video.rabbiName.includes(rabbiName.trim())
    );
  } else if (freeQuery?.trim() !== "" && freeQuery !== undefined) {
    // Parameters searching
    console.log(1);
    filteredLessons = data.filter(
      (video) =>
        video.rabbiName.includes(freeQuery.trim()) ||
        video.title.includes(freeQuery.trim()) ||
        video.categories.includes(getCategoryIdByName(freeQuery.trim()))
    );
  }

  // CheckBox Filtering

  // Collect all checked types
  const selectedTypes = [];
  if (filter?.type?.audio) selectedTypes.push("audio");
  if (filter?.type?.video) selectedTypes.push("video");
  if (filter?.type?.text) selectedTypes.push("text");

  // If any type is checked, filter by those types
  if (selectedTypes.length > 0) {
    filteredLessons = filteredLessons.filter((lesson) =>
      selectedTypes.some((type) => lesson.contentType.includes(type))
    );
  }

  // Sort filtered lessons by title alphabetically
  filteredLessons.sort((a, b) => a.title.localeCompare(b.title));

  return filteredLessons;
}

export default filterLessons;
