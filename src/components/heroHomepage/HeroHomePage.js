import React, { useContext } from "react";
import { AppContext } from "../../App";
import colors from "../../styles/colors";

const HeroHomePage = () => {
  // context

  const { colors, isMobile, responsive } = useContext(AppContext);

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
      height: "80%", // Ensure the image fills the container height
      objectFit: "cover", // Maintain aspect ratio and cover the entire container
      objectPosition: "30%", // Center the image within the container
      zIndex: -100,
      borderBottomLeftRadius: "50px", // Adjust the value as needed
      borderBottomRightRadius: "50px", // Adjust the value as needed
    },
    text: {
      position: "absolute",
      bottom: responsive("30%","40%","60%"),
      right: responsive(100,70,40),
      color: colors.white,
      fontSize: responsive("4rem","4rem","3rem"),
      fontWeight: 700,
    },
    orangeText: {
      color: colors.orange,
    },
  };

  // functions
  const deskTopTitle = (
    <div style={styles.text}>
      <span style={styles.orangeText}>צדקו יחדיו</span> <br /> בית מדרש לאיחוד
      <br /> התלמודים
    </div>
  );
  const mobileTitle = (
    <div style={styles.text}>
      <span style={styles.orangeText}>צדקו יחדיו</span> <br /> בית מדרש <br />{" "}
      לאיחוד התלמודים
    </div>
  );

  return (
    <div style={styles.container}>
      <img style={styles.img} src="hero1.png" alt="Hero Image" />

      {isMobile ? mobileTitle : deskTopTitle}
    </div>
  );
};

export default HeroHomePage;
