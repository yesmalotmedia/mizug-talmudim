import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";

const DedicationSection = () => {
  // context
  const { colors, bgColors, isMobile, dailyTextsData, dedicationsData } =
    useContext(AppContext);

  // states
  const text =
    dedicationsData !== null
      ? dedicationsData[0].title.rendered
      : "הלימוד מוקדש לרפואת ";
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
      transform: isMobile ? "translateY(-40vw)" : "translateY(-15.3vw)",
      marginBottom: -600,
    },
    text: {
      color: colors.darkBlue,
      fontSize: "2vw",
      fontWeight: 600,
      marginTop: screenWidth < 1400 ? "-20px" : "6%",
    },
    textSource: {
      textAlign: "center",
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: 20,
    },
    bgImg: {
      width: screenWidth < 1400 ? "150%" : "105%",
      position: "absolute",
      bottom: 0,
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

      <div style={styles.text}>{`הלימוד מוקדש ${text}`}</div>
    </div>
  );
};

export default DedicationSection;
