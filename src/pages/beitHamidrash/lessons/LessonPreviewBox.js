import React, { useContext } from "react";
import { AppContext } from "../../../App";

export default function LessonPreviewBox() {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const styles = {
    container: {
      height: "auto",
      width: "16vw",
      border: `1px solid ${colors.azure}`,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: 15,
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
      alignItems: "center",
      justifyContent: "space-between",
      color: colors.darkBlue,
      padding: 5,
    },
    title: {
      fontSize: "1.5VW",
    },
    subTitle: {
      fontSize: "1.2VW",
      padding: 5,
    },
    date: {
      fontSize: "1VW",
    },
    bottomSection: {
      textAlign: "right",
      color: colors.darkBlue,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 20,
    },
    btn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0.4vw 0.7vw",
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: "0.8vw",
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: "pointer",
    },
    icon: {
      height: "0.8vw",
      width: "0.8vw",
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.thumbnail} src="videoblock.jpg"></img>
      <div style={styles.description}>
        <h2 style={styles.title}>שם השיעור?</h2>
        <h3 style={styles.date}>תאריך</h3>
      </div>

      <div style={styles.bottomSection}>
        <h4 style={styles.subTitle}>תת כותרת </h4>
        <div style={styles.btnContainer}>
          <button style={styles.btn}>
            <img style={styles.icon} src="watch.png"></img>לצפיה
          </button>
          <button style={styles.btn}>
            <img style={styles.icon} src="listen.png"></img>לשמיעה
          </button>
          <button style={styles.btn}>
            <img style={styles.icon} src="read.png"></img>לקריאה
          </button>
        </div>
      </div>
    </div>
  );
}
