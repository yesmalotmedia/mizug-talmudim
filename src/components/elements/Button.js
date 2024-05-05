import React, { useContext } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";

const Button = ({
  color,
  bgColor,
  title,
  fontWeight,
  fontSize,
  borderRadius,
  width,
  arrow,
}) => {
  // context
  // states

  // styles
  const styles = {
    button: {
      color,
      width: 280,
      height: 50,
      padding: 10,
      backgroundImage: bgColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      cursor: "pointer",
      borderRadius,
      width,
    },

    text: {
      color,
      width: "90%",
      textAlign: "center",
      fontSize: 35,
      fontWeight,
      fontSize,
    },
    img: {
      width: "8%",
    },
  };

  // functions

  return (
    <div style={styles.button}>
      <div style={styles.text}>{title}</div>
      {arrow && <img style={styles.img} src="arrow-to-left.png" />}
    </div>
  );
};

export default Button;
