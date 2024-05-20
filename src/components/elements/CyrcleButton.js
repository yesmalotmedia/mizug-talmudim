import React, { useContext } from "react";
import { AppContext } from "../../App";

const CyrcleButton = ({ imgSrc, title }) => {
  // Context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);
  //states
  // Constants

  // Styles
  const styles = {
    container: {
      width: "6vw",
      height: "6vw",
      borderRadius: "50%",
      overFlow: "hidden",
      border: "solid 4px " + colors.orange,
      cursor: "pointer",
    },
    img: { width: "100%" },
    title: {
      fontWeight: 600,
      textAlign: "center",
      color: colors.darkBlue,
      marginTop: 10,
      fontSize: "1.1vw",
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.img} src={imgSrc} alt="selectIcon" />
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default CyrcleButton;
