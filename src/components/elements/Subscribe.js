import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

export default function Subscribe() {
  const { colors, responsive } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    form: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      outline: "none",
      border: "none",
      height: responsive ("3vmax",'4.7vmax','4vmax'),
      width: responsive("30vmax",'80vmin','80vmin'),
      padding: responsive("15px 15px 15px 120px","15px 15px 15px 120px","20px 15px 20px 105px"),
      fontSize: responsive( 20,'3.6vmin','3.6vmin'),
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
      height: responsive("1vw","13px","13px"),
      marginRight: "10px",
      position: "relative",
      top: responsive(4,2,-1),
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
