import React, { useContext } from "react";
import { AppContext } from "../../App";

const CyrcleButton = ({ imgSrc, title, smallImgButton }) => {
  // Context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  // Styles
  const styles = smallImgButton
    ? {
        container: {
          position: "absolute",
          height: isMobile? "26vw":"8vw",
          width: isMobile? "26vw":"8vw",
          borderRadius: "50%",
          cursor: "pointer",
          border: `4px solid ${colors.darkBlue}`,
          background: "#FFF2E7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
        img: {
          width: isMobile? "15vw":"5vw",
        },
        title: {
          position: "relative",
          fontWeight: 600,
          textAlign: "center",
          color: colors.darkBlue,
          top: isMobile? "18vw":"5vw",
          fontSize:isMobile?"4vw": "1.1vw",
          whiteSpace: "nowrap",
        },
      }
    : {
        container: {
          width: isMobile ? "91px" : "6vw",
          height: isMobile ? "91px" : "6vw",
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
          fontSize: isMobile ? "2vmax" : "1.1vw",
        },
      };

  return (
    <>
      {smallImgButton ? (
        <>
          <div style={styles.title}>{title}</div>
          <div style={styles.container}>
            <img style={styles.img} src={imgSrc} alt="selectIcon" />
          </div>
        </>
      ) : (
        <div style={styles.container}>
          <img style={styles.img} src={imgSrc} alt="selectIcon" />
          <div style={styles.title}>{title}</div>
        </div>
      )}
    </>
  );
};

export default CyrcleButton;
