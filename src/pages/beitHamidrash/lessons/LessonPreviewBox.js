import React, { useContext } from "react";
import { AppContext } from "../../../App";

export default function LessonPreviewBox() {
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
      fontSize: isMobile ? "2.5vmax" : "1.3vw",
    },
    subTitle: {
      fontSize: isMobile ? "2.5vmax" : "1vw",
      padding: 5,
    },
    date: {
      fontSize: isMobile ? "2vmax" : "0.9vw",
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

  return (
    <div style={styles.container}>
      <img style={styles.thumbnail} src="videoblock.jpg" alt="thumbnail"></img>
      <div style={styles.description}>
        <h2 style={styles.title}>שם השיעור?</h2>
        <h3 style={styles.date}>תאריך</h3>
      </div>

      <div style={styles.bottomSection}>
        <h4 style={styles.subTitle}>תת כותרת </h4>
        <div style={styles.btnContainer}>
          <button style={styles.btn}>
            <img style={styles.icon} src="watch.png" alt="watch"></img>לצפיה
          </button>
          <button style={styles.btn}>
            <img style={styles.icon} src="listen.png" alt="listen"></img>לשמיעה
          </button>
          <button style={styles.btn}>
            <img style={styles.icon} src="read.png" alt="read"></img>לקריאה
          </button>
        </div>
      </div>
    </div>
  );
}
