const extractYoutubeCoverByVideoId = (url) => {
  // Extract the YouTube video ID from the embed code
  const videoId = url?.match(/embed\/([a-zA-Z0-9_-]{11})/)[1];

  // Construct the thumbnail URL using the video ID
  // const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  //"https://www.youtube.com/embed/0gB9BrN3ipA?feature=oembed"
  const thumbnailUrl = "/harav-ishay-lesson.jpeg";
  return thumbnailUrl;
};
export default extractYoutubeCoverByVideoId;
