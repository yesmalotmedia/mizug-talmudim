import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";

const DedicationSection = () => {
  // context
  const { colors, bgColors, responsive, dailyTextsData, dedicationsData } =
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
      minHeight: 300,
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: responsive(
        "translateY(-15.3vw)",
        "translateY(-40vw)",
        "translateY(-40vw)"
      ),
      marginBottom: responsive(0, -280, -280),
      padding: 8,
      textAlign: "center",
    },
    text: {
      position: "absolute",
      color: colors.darkBlue,
      fontSize: responsive("2rem", "2rem", "1.3rem"),
      fontWeight: 600,
      marginBottom: responsive("-50vw", "-50vw", "-5vw"),
    },
    textSource: {
      textAlign: "center",
      color: colors.darkBlue,
      fontWeight: 500,
      fontSize: 20,
    },
    bgImg: {
      width:responsive("150%","150%","200%"),
      height: responsive("160vh","80vh","70vh"),
      position: "absolute",
      bottom: responsive("-50vw", "-60vw", "-30vw"),
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
