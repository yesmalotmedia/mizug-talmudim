import React, { useContext } from "react";
import { AppContext } from "../../../App";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import { Link } from "react-router-dom";
import VideoCoverImage from "../../../components/elements/VideoCoverImage";

export default function LessonPreviewBox({ video }) {
  const { colors, isMobile } = useContext(AppContext);
  const styles = {
    container: {
      flex: isMobile ? "1 1 calc(48% - 20px)" : "1 1 calc(30% - 40px)",
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
      maxWidth: 300,
      height: 400,
    },
    thumbnail: {
      height: "50%",
      width: "100%",
      border: `3px solid ${colors.darkBlue}`,
      boxSizing: "border-box",
      borderRadius: 10,
      margin: "auto",
    },
    description: {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      color: colors.darkBlue,
      padding: 5,
    },
    title: {
      fontSize: isMobile ? "2.4vmax" : "1.2vw",
    },
    subTitle: {
      fontSize: isMobile ? "2.5vmax" : "1vw",
      padding: 5,
      fontWeight: 400,
    },
    date: {
      fontSize: isMobile ? "1.9vmax" : "0.8vw",
      fontWeight: 400,
      marginTop: 4,
    },
    bottomSection: {
      textAlign: "right",
      color: colors.darkBlue,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 40,
      height: "35%",
      gap: 10,
    },
    btn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: isMobile ? "1vmax 2vmax" : "0.5vw 0.9vw",
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: isMobile ? "2vmax" : "0.9vw",
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: "pointer",
    },
    icon: {
      height: isMobile ? "3vmax" : "1vw",
      width: isMobile ? "3vmax" : "1vw",
    },
  };

  //functions

  return (
    <div style={styles.container}>
      {/* <YouTubeVideo2 url={video.url} index={video.key} /> */}
      <VideoCoverImage url={video.url} index={video.key} videoId={video.id} />
      <div style={styles.description}>
        <div style={{ width: "60%" }}>
          <h2 style={styles.title}> {video.title}</h2>
          <h2 style={styles.subTitle}> {video.rabbiName}</h2>
        </div>

        <h3 style={styles.date}>{video.date}</h3>
      </div>
      <div style={styles.bottomSection}>
        <div style={styles.btnContainer}>
          <img style={styles.icon} src="watch.png" alt="watch"></img>
          <img style={styles.icon} src="listen.png" alt="listen"></img>
          <img style={styles.icon} src="read.png" alt="read"></img>
        </div>
      </div>
    </div>
  );
}
