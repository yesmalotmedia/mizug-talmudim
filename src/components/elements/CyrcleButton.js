import React, { useContext } from "react";
import { AppContext } from "../../App";

const CyrcleButton = ({ imgSrc, title, }) => {
  // Context
  const { colors, bgColors, responsive, dailyTextsData } = useContext(AppContext);

  // Styles
  const styles = {
        container: {
          width: responsive ("6vw", "91px","91px"),
          height:  responsive ("6vw", "91px","91px"),
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
          fontSize: responsive("1.1vw","2vmax","2vmax"),
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