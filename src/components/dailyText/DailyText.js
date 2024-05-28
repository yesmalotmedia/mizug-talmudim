import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";

const DailyText = () => {
  // context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  // states
  const text = "כאן יופיע טקסט מתחלף מהמקורות";
  const textSource = "עין איה שם, שם";
  const screenWidth = window.innerWidth;
  // styles

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: 600,
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: screenWidth < 1400 ? "translateY(-150px)" : "translateY(50px)",
    },
    text: {
      color: colors.darkBlue,
      fontSize: isMobile ? "3vmax" : "3vw",
      fontWeight: 600,
    },
    textSource: {
      textAlign: "center",
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: isMobile ? "3vmax" : "2vw",
    },
    bgImg: {
      width: isMobile ? "100%" : "70%",
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: -10,
    },
  };
  // functions

  return (
    <div style={styles.container}>
      <img style={styles.bgImg} src="bg-book.png" alt="bg-book" />
      <div>
        <div style={styles.text}>{text}</div>
        <div style={styles.textSource}>{textSource}</div>
      </div>
    </div>
  );
};

export default DailyText;
