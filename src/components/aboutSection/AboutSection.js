import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";
import aboutUsSectionData from "../../data/aboutUsSectionData";

const AboutSection = () => {
  const { colors, bgColors, pagesList, responsive, description } =
    useContext(AppContext);

  const bgImg = responsive(
    "bg-img-homepage-1.png",
    "mobile-bg-img-homepage-1.png",
    "mobile-bg-img-homepage-1.png"
  );

  const styles = {
    container: {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: responsive("row", "column", "column"),
      justifyContent: "center",
      zIndex: -1,
      alignItems: "center",
      gap: "10vw",
    },
    titleSection: {
      position: "relative",
      zIndex: 2,
      width: responsive("30%", "40%", "70%"),
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      whiteSpace: responsive("nowrap", "", ""),
      backgroundColor: "yellow",
      height: "600px",
      top: responsive("calc( 12vw - 300px)", "3vw", "8vw"),
    },
    bookIcon: {
      width: "40%",
      marginRight: 30,
      marginTop: -100,
      position: "absolute",
      top: responsive("370px", "-10px", "20%"),
    },
    title: {
      color: colors.white,
      fontSize: responsive("3rem", "2.3rem", "1.7rem"),
      position: "absolute",
      fontWeight: 500,
      textAlign: "center",
      maxWidth: 400,
      top: responsive("380px", "-15px", "100px"),
    },
    description: {
      width: responsive("50%", "80%", "90%"),
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: responsive(50, 30, 20),
      padding: "5vw",
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: responsive("1.2rem", "1.3rem", "1rem"),
      lineHeight: 1.5,
      maxWidth: 1000,
      zIndex: 3,
      textAlign: "justify",
    },
    bgImg: {
      position: "absolute",
      top: responsive(0, 130, 90),
      left: 0,
      zIndex: 0,
      transform: responsive(
        "translateY(-30vw)",
        "translateY(-60vw)",
        "translateY(-100vw)"
      ),
      width: "100%",
      height: responsive("auto", "auto", "150vh"),
    },
  };

  const title = (
    <div style={styles.title}>
      אין תורה <br /> כתורת ארץ ישראל
    </div>
  );

  const bookImg = (
    <img src={"book-img.png"} style={styles.bookIcon} alt="book-img" />
  );

  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        {bookImg}
        <br />
        {title}
      </div>

      <div style={styles.description}>{aboutUsSectionData}</div>

      <img style={styles.bgImg} src={bgImg} alt="bg-img" />
    </div>
  );
};

export default AboutSection;
