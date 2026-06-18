import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import { Link } from "react-router-dom";
import VideoCoverImage from "../../../components/elements/VideoCoverImage";

export default function LessonPreviewBox({ video }) {
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      boxSizing: "border-box",
      margin: "10px",
      border: `1px solid ${colors.azure}`,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: 15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: colors.white,
      width: responsive(260, 350, 300),
      height: responsive(350, 420, 380),
      transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      transition: "transform 0.3s ease-out",
      cursor: "pointer",
    },
    thumbnail: {
      height: "50%",
      width: "100%",
      border: `3px solid ${colors.darkBlue}`,
      boxSizing: "border-box",
      borderRadius: 10,
      margin: "auto",
      flexShrink: 0,
    },
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: colors.darkBlue,
      flex: 1,
      minHeight: 0,
    },
    title: {
      fontSize: responsive("1rem", "1.6rem", "1.3rem"),
      paddingTop: 5,
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      minHeight: "2.6em",
    },
    subTitle: {
      fontSize: responsive("1vw", "1.5rem", "1.3rem"),
      paddingBottom: 10,
      fontWeight: 400,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    date: {
      fontSize: responsive("0.8rem", "1.2rem", "1rem"),
      fontWeight: 400,
    },
    bottomSection: {
      textAlign: "right",
      color: colors.darkBlue,
      flexShrink: 0,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      gap: 10,
    },
    btn: {
      border: "none",
      textDecoration: "none",
    },
    icon: {
      height: responsive("1.5vw", "3vmax", "3vmax"),
      width: responsive("1.5vw", "3vmax", "3vmax"),
    },
    dateContainer: {
      display: "flex",
      paddingTop: 5,
      color: colors.grey,
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <Link style={styles.btn} to={`/BeitHamidrash/${video.id}`}>
      <div
        style={styles.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <VideoCoverImage
          url={video.url}
          index={video.key}
          videoId={video.id}
          title={video.title}
          rabbiName={video.rabbiName}
        />
        <div style={styles.description}>
          <div style={{ width: "60%" }}>
            <h2 style={styles.title}> {video.title}</h2>
            <h2 style={styles.subTitle}> {video.rabbiName}</h2>
          </div>
          <div>
            <h3 style={styles.date}>{video.date}</h3>
            <h3 style={styles.date}>{video.heDate}</h3>
          </div>
        </div>
        <div style={styles.bottomSection}>
          <div style={styles.btnContainer}>
            {video.contentType.includes("video") && (
              <img style={styles.icon} src="watch.png" alt="watch"></img>
            )}
            {video.contentType.includes("audio") && (
              <img style={styles.icon} src="listen.png" alt="listen"></img>
            )}
            {video.contentType.includes("text") && (
              <img style={styles.icon} src="read.png" alt="read"></img>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
