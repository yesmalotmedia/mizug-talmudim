import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";
import aboutUsSectionData from "../../data/aboutUsSectionData";
const AboutSection = () => {
  const { colors, bgColors, pagesList, description, isMobile } =
    useContext(AppContext);

  const bgImg = isMobile
    ? "mobile-bg-img-homepage-1.png"
    : "bg-img-homepage-1.png";
  const styles = {
    container: {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: "10vw",
      zIndex: -1,
    },
    titleSection: {
      zIndex: 2,
      width: isMobile ? "70%" : "30%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      transform: isMobile
        ? "translateY(-20vw) translateX(0vw)"
        : "translateY(-1vw) translateX(-10vw)",
    },
    bookIcon: {
      width: "30%",
      marginRight: 30,
    },
    title: {
      color: colors.white,
      fontSize: isMobile ? "4.5vmax" : "3vw",
      fontWeight: 500,
      textAlign: "center",
      maxWidth: 400,
    },
    description: {
      width: isMobile ? "80%" : "50%",
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: 50,
      padding: "5vw",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: isMobile ? "1.8vmax" : "1.2vw",
      lineHeight: 1.5,
      maxWidth: 1000,
      zIndex: 3,
      transform: "translateY(-8vw)",
    },
    bgImg: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0, // Place the background image behind all other elements
      transform: isMobile ? "translateY(-110vw)" : "translateY(-30vw)",
      width: "100%",
      height: "auto",
    },
  };

  const title = isMobile ? (
    <div style={styles.title}>פה יהיה משפט מרגש שמבטא את התפיסה שלנו</div>
  ) : (
    <div style={styles.title}>
      אין תורה <br /> כתורת ארץ ישראל
    </div>
  );
  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        {!isMobile && (
          <img src={"book-img.png"} style={styles.bookIcon} alt="book-img" />
        )}
        <br />
        {title}
      </div>
      <div style={styles.description}>{aboutUsSectionData}</div>
      <img style={styles.bgImg} src={bgImg} alt="bg-img" />
    </div>
  );
};

export default AboutSection;
