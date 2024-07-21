import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";
import { Link } from "react-router-dom";

function VideoCoverImage({ url, videoId, title }) {
  //state
  const [isHovered, setIsHovered] = useState(false);
  // Context
  const { colors, responsive } = useContext(AppContext);

  // Function to extract YouTube video ID from the URL
  const getYouTubeVideoId = (url) => {
    try {
      const urlParts = url?.split("/");
      const lastPart = urlParts[urlParts?.length - 1];
      const idWithParams = lastPart.split("?")[0];
      return idWithParams;
    } catch (error) {
      console.error("Error extracting YouTube video ID:", error);
      return null;
    }
  };

  const youTubeVideoId = getYouTubeVideoId(url);

  // const thumbnailUrl = youTubeVideoId
  //   ? `https://img.youtube.com/vi/${youTubeVideoId}/maxresdefault.jpg`
  //   : "/harav-ishay-lesson.jpg";
  const thumbnailUrl = "/harav-ishay-lesson.png";

  const styles = {
    container: {
      width: "100%",
      height: "auto",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroundColor: bgColors.white,
    
      borderRadius: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      position: "relative",
      flexWrap: "wrap",
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
    },
    playBtn: {
      position: "absolute",
      width: "20%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: isHovered ? 100 : 0,
      transition: "0.3s all",
      cursor: "pointer",
    },
    title: {
      fontSize: responsive("1.2rem","0.9rem","0.9rem"),
      lineHeight: 1,
      color: colors.white,
      fontWeight: 600,
      textAlign: "center",
      position: "absolute",
      top: "0",
      right: "0",
      width: "55%",
      height: "40%",
      maxHeight: "60%",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
      padding: 20,
    },
  };

  return (
    <div style={styles.container}>
      {youTubeVideoId ? (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={thumbnailUrl}
            alt="YouTube Video Thumbnail"
            style={styles.img}
          />
          <div style={styles.title}>{title}</div>
          <Link style={styles.btn} to={`/BeitHamidrash/${videoId}`}>
            <img style={styles.playBtn} src="/play-button.png" />{" "}
          </Link>
        </div>
      ) : (
        <p style={{ color: colors.red }}>הקישור לא תקין...</p>
      )}
    </div>
  );
}

export default VideoCoverImage;
