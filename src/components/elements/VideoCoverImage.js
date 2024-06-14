import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";
import { Link } from "react-router-dom";

function VideoCoverImage({ url, videoId }) {
  //state
  const [isHovered, setIsHovered] = useState(false);
  // Context
  const { colors, isMobile } = useContext(AppContext);

  // Function to extract YouTube video ID from the URL
  const getYouTubeVideoId = (url) => {
    try {
      const urlParts = url.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      const idWithParams = lastPart.split("?")[0];
      return idWithParams;
    } catch (error) {
      console.error("Error extracting YouTube video ID:", error);
      return null;
    }
  };

  const youTubeVideoId = getYouTubeVideoId(url);

  const thumbnailUrl = youTubeVideoId
    ? `https://img.youtube.com/vi/${youTubeVideoId}/maxresdefault.jpg`
    : "";

  const styles = {
    container: {
      maxWidth: "100%",
      height: "auto",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroundColor: bgColors.white,
      margin: isMobile ? "10px 0" : 0,
      borderRadius: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      position: "relative",
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
      fontSize: 22,
      color: colors.darkBlue,
      fontWeight: 600,
      textAlign: "center",
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
