import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";
import aboutUsSectionData from "../../data/aboutUsSectionData";
const AboutSection = () => {
  const { colors, bgColors, pagesList, responsive, description, isMobile } =
    useContext(AppContext);

  const bgImg = isMobile
    ? "mobile-bg-img-homepage-1.png"
    : "bg-img-homepage-1.png";
  const styles = {
    container: {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: responsive("row", "column", "column"),
      justifyContent: "space-around",
      alignItems: "center",
      paddingTop: "10vw",
      zIndex: -1,
    },
    titleSection: {
      zIndex: 2,
      width: responsive("30%", "70%", "70%"),
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
      fontSize: responsive("3rem", "2.3rem", "1.7rem"),
      fontWeight: 500,
      textAlign: "center",
      maxWidth: 400,
    },
    description: {
      width: responsive("50%", "80%", "80%"),
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: 50,
      padding: "5vw",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1.4rem", "1.3rem", "1rem"),
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
