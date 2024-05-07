import React, { useContext } from "react";
import { AppContext } from "../../App";
import SeltectButtons from "./SeltectButtons";

const HeroBeitHamidrash = () => {
  // Context
  const { colors } = useContext(AppContext);

  // Constants
  const title = "בית המדרש";

  // Styles
  const styles = {
    container: {
      position: "relative",
      height: "50vh",
    },
    img: {
      width: "100%",
      height: "25vw",
      zIndex: -1, // Consider adjusting this value
    },
    title: {
      fontWeight: 600,
      fontSize: "3vw",
      textAlign: "center",
      color: colors ? colors.white : "white", // Ensure colors is defined
      position: "absolute",
      top: "13vw",
      left: 0,
      right: 0,
      zIndex: 10,
    },
    subTitle: {
      fontWeight: 600,
      fontSize: "2vw",
      textAlign: "center",
      color: colors.orange, // Ensure colors is defined
      position: "absolute",
      top: "17vw",
      left: 0,
      right: 0,
      zIndex: 10,
    },
  };

  return (
    <div style={styles.container}>
      <img style={styles.img} src="hero2.png" alt="Hero" />
      <h2 style={styles.title}>{title}</h2>
      <h4 style={styles.subTitle}>בחרו את הנושא שמעניין אתכם</h4>
      <SeltectButtons />
    </div>
  );
};

export default HeroBeitHamidrash;
