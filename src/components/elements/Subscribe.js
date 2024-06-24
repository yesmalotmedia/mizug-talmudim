import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

export default function Subscribe() {
  const { colors, isMobile } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    form: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      outline: "none",
      border: "none",
      height: isMobile? '4vmax':"3vmax",
      width: isMobile? '80vmin':"30vmax",
      padding: isMobile ? "20px 15px 20px 105px": "15px 15px 15px 120px",
      fontSize: isMobile? '3.6vmin': 20,
      fontWeight: 500,
      borderRadius: 30,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    btn: {
      position: "absolute",
      left: 0,
      top: 0,
      outline: "none",
      border: "none",
      height: "100%",
      padding: "0 20px",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      background: isHovered ? colors.azure : colors.orange,
      color: colors.white,
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    arrow: {
      height: isMobile? "13px":"1vw",
      marginRight: "10px",
      position: "relative",
      top: isMobile ? -1: 4,
    },
  };

  return (
    <div style={styles.subscribe}>
      <form style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="נא למלא את כתובת המייל"
        ></input>
        <button style={styles.btn}>
          שלח
          <img style={styles.arrow} src="/arrow-to-left.png"></img>
        </button>
      </form>
    </div>
  );
}
