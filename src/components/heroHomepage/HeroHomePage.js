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
    },
    img: {
      width: "100%",
    },
    text: {
      position: "absolute",
      bottom: 200,
      right: 100,
      color: colors.white,
      fontSize: 80,
      fontWeight: 700,
    },
    orangeText: {
      color: colors.orange,
    },
  };

  // functions

  return (
    <div style={styles.container}>
      <img style={styles.img} src="hero1.png" />
      <div style={styles.text}>
        <span style={styles.orangeText}>צדקו יחדיו</span> <br /> בית מדרש
        <br /> לאיחוד
        <br /> התלמודים
      </div>
    </div>
  );
};

export default HeroHomePage;
