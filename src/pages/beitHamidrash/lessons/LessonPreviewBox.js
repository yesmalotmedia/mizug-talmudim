import React, { useContext } from "react";
import { AppContext } from "../../../App";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import { Link } from "react-router-dom";
import VideoCoverImage from "../../../components/elements/VideoCoverImage";

export default function LessonPreviewBox({ video }) {
  const { colors, responsive} = useContext(AppContext);
  const styles = {
    container: {
      flex: responsive("1 1 calc(30% - 40px)","1 1 calc(48% - 20px)","1 1 calc(48% - 20px)"),
      boxSizing: "border-box",
      margin: "10px",
      border: `1px solid ${colors.azure}`,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: 15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: colors.white,
      maxWidth: "30%",
      minHeight: 400,
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
      fontSize: responsive("1.2vw","2.4vmax","2.4vmax"),
    },
    subTitle: {
      fontSize: responsive("1vw","2.5vmax","2.5vmax"),
      padding: 5,
      fontWeight: 400,
    },
    date: {
      fontSize: responsive("0.8vw","1.9vmax","1.9vmax"),
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
      padding: responsive( "0.5vw 0.9vw","1vmax 2vmax","1vmax 2vmax" ),
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: responsive("0.9vw","2vmax" ,"2vmax" ),
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: "pointer",
    },
    icon: {
      height: responsive( "1.5vw", "3vmax", "3vmax" ),
      width: responsive( "1.5vw", "3vmax" , "3vmax" ),
    },
  };

  //functions

  return (
    <div style={styles.container}>
      {/* <YouTubeVideo2 url={video.url} index={video.key} /> */}
      {
        <VideoCoverImage
          url={video.url}
          index={video.key}
          videoId={video.id}
          title={video.title}
        />
      }
      <div style={styles.description}>
        <div style={{ width: "60%" }}>
          <h2 style={styles.title}> {video.title}</h2>
          <h2 style={styles.subTitle}> {video.rabbiName}</h2>
        </div>

        <h3 style={styles.date}>{video.date}</h3>
        <h3 style={styles.date}>{video.heDate}</h3>
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
  );
}