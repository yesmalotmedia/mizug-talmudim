function YouTubeVideo({ url }) {
  const styles = {
    container: {
      width: 330,
      height: 200,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroungColor: "black",
      margin: 10,
    },
  };
  const videoId = url.split("v=")[1];

  return (
    <div style={styles.container}>
      <iframe
        width={"100%"}
        height={"100%"}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
