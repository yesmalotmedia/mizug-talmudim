import React, { useContext } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";

const Button = ({ color, bgColor, title }) => {
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
    },

    text: {
      color,
      width: "50%",
      textAlign: "center",
      fontSize: 35,
      fontWeight: 700,
    },
  };

  // functions

  return (
    <div style={styles.button}>
      <div style={styles.text}>{title}</div>
    </div>
  );
};

export default Button;
