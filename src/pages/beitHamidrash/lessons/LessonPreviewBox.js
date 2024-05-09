import React, { useContext } from "react";
import { AppContext } from "../../../App";

export default function LessonPreviewBox() {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const styles = {
    container: {
      height: 350,
      width: 300,
      border: `1px solid ${colors.azure}`,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    thumbnail: {
      height: 170,
      width: 270,
      border: `3px solid ${colors.darkBlue}`,
      borderRadius: 10,
      margin: "20px 13px 0 50px",
    },
    description: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: colors.darkBlue,
      padding: "0 20px",
    },
    bottomSection: {
      textAlign: "right",
      color: colors.darkBlue,
      padding: "10px 20px",
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
      padding: "8px 15px",
      borderRadius: 20,
      outline: "none",
      border: `1px solid ${colors.azure}`,
      color: colors.azure,
      fontWeight: 500,
      fontSize: 15,
      background: colors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: 'pointer',
    },
    icon: {
      height: 20,
      width: 20,
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.thumbnail} src="videoblock.jpg"></img>
      <div style={styles.description}>
        <h2>שם השיעור?</h2>
        <p>תאריך</p>
      </div>

      <div style={styles.bottomSection}>
        <h4>תת כותרת </h4>
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
