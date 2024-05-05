import React, { useContext } from "react";
import { AppContext } from "../../App";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";

const DailyText = () => {
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  const styles = {
    container: { ...sectionAzure, position: "relative", overflow: "hidden" },
    text: {
      color: colors.white,
      fontSize: 40,
      fontWeight: 600,
      width: "30%",
      zIndex: 10,
      textShadow: "2px 2px 4px rgba(0, 0, 0)", // Add shadow to the text
    },
    img: {
      position: "absolute",
      width: "100%", // Adjust this value to zoom out
      height: "220%", // Adjust this value to zoom out
      left: "50%", // Center the image horizontally
      top: "30%", // Center the image vertically
      transform: "translate(-50%, -50%)", // Center the image
      opacity: 0.5,
    },
  };

  return (
    <div style={styles.container}>
      <img
        style={styles.img}
        src="mizug-img1.jpeg"
        alt="Daily Text Background"
      />
      <div style={styles.text}>{dailyTextsData[0]}</div>
    </div>
  );
};

export default DailyText;
