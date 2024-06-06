import extractYoutubeUrl from "./extractYoutubeUrl";
import getRabbieNameById from "./getRabbieNameById";
function extractPostsData(data) {
  return data.map((item) => ({
    id: item.id,
    date: item.date.split("T")[0], // Extract only the date part
    title: item.title.rendered,
    // rabbiName: getRabbieNameById(item.rabbies[0]),
    rabbiName: getRabbieNameById(item.rabbies[0]),
    contentType: item.acf.contentType,
    url: extractYoutubeUrl(item.acf.url),
  }));
}

export default extractPostsData;
