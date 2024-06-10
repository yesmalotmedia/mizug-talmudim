const extractYoutubeCoverByVideoId = (url) => {
  // Extract the YouTube video ID from the embed code
  const videoId = url.match(/embed\/([a-zA-Z0-9_-]{11})/)[1];

  // Construct the thumbnail URL using the video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return thumbnailUrl;
};
export default extractYoutubeCoverByVideoId;
