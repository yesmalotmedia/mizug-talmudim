import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";

const HeroHomePage = () => {
  // context
  // states

  // styles
  const styles = {
    container: {
      position: "relative",
      width: "100%", // Ensure container fills the viewport width
      height: "100vh", // Ensure container fills the viewport height
      overflow: "hidden", // Hide any overflow from the image
    },
    img: {
      width: "100%", // Ensure the image fills the container width
      height: "100%", // Ensure the image fills the container height
      objectFit: "cover", // Maintain aspect ratio and cover the entire container
      objectPosition: "center", // Center the image within the container
      zIndex: -100,
    },
    text: {
      position: "absolute",
      bottom: "30%",
      right: 100,
      color: colors.white,
      fontSize: "5vw",
      fontWeight: 700,
    },
    orangeText: {
      color: colors.orange,
    },
  };

  // functions

  return (
    <div style={styles.container}>
      <img style={styles.img} src="hero1.png" alt="Hero Image" />
      <div style={styles.text}>
        <span style={styles.orangeText}>צדקו יחדיו</span> <br /> בית מדרש
        <br /> לאיחוד
        <br /> התלמודים
      </div>
    </div>
  );
};

export default HeroHomePage;
