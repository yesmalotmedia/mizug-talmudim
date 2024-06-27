import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";

const DedicationSection = () => {
  // context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  // states
  const text = "הלימוד היום מוקדש הלימוד היום מוקדש הלימוד היום מוקדש";
  const textSource = "עין איה שם, שם";
  const screenWidth = window.innerWidth;

  // styles

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: 300,
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: isMobile ? "translateY(-40vw)" : "translateY(-15.3vw)",
      marginBottom: isMobile ? -260: 0,
      padding: 8,
      textAlign: 'center',
    },
    text: {
      position: isMobile? '': 'absolute',
      color: colors.darkBlue,
      fontSize: isMobile? "6vw":"2vw",
      fontWeight: 600,
      marginTop: screenWidth < 1400 ? "10px" : "50%",
    },
    textSource: {
      textAlign: "center",
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: 20,
    },
    bgImg: {
      width: screenWidth < 1400 ? "270%" : "100%",
      position: "absolute",
      bottom: isMobile?  0: -500,
      left: 0,
      zIndex: -2,
    },
  };
  // functions

  return (
    <div style={styles.container}>
      <img
        style={styles.bgImg}
        src="bgDedicationSection.png"
        alt="bgDedicationSection"
      />

      <div style={styles.text}>{text}</div>
    </div>
  );
};

export default DedicationSection;
