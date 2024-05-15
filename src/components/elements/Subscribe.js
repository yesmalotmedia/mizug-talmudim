import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

export default function Subscribe() {
  const { colors } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    form: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "30vmax",
      padding: "15px 15px 15px 120px",
      fontSize: 20,
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
      height: "20px",
      width: "20px",
      filter: "brightness(0) invert(1)",
      marginRight: "10px",
      position: "relative",
      top: 5,
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
        <button
          style={styles.btn}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          שלח
          <img
            style={styles.arrow}
            src="footerImages/arrow.png"
            alt="arrow"
          ></img>
        </button>
      </form>
    </div>
  );
}
