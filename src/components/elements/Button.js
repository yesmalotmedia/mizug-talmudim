import React, { useState } from "react";
import { AppContext } from "../../App";
import bgColors from "../../styles/bg-colors";

const Button = ({
  color,
  bgColor,
  hoveredBgColor,
  title,
  fontWeight,
  fontSize,
  borderRadius,
  width,
  arrow,
  height,
  onClick,
  padding,
  margin,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    button: {
      color,
      width: 280,
      height: 50,
      padding: 10,
      margin,
      backgroundImage: isHovered ? hoveredBgColor : bgColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      cursor: "pointer",
      borderRadius,
      width,
      height,
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

  return (
    <div
      style={styles.button}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={styles.text}>{title}</div>
      {arrow && <img style={styles.img} src="/arrow-to-left.png" alt="arrow" />}
    </div>
  );
};

export default Button;
