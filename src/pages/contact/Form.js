import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Form() {
  const { colors, responsive } = useContext(AppContext);

  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    form: {
      width: responsive("100vmin","90vmin","90vmin") ,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 20,
      height: "auto",
      marginInline: "auto",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      paddingTop: 30,
      justifyContent: "center",
      gap: 20,
    },
    label: {
      fontWeight: 600,
      fontSize: responsive("1.3rem","1.3rem","1.1rem"),
      color: colors.darkBlue,
      width: responsive("60px","50px","40px"),
    },
    input: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: responsive("80%","80%","75%"),
      height: responsive("50px","45px","35px"),
      borderRadius: 30,
      fontWeight: 500,
      fontSize: responsive("1.2rem","1rem","0.9rem"),
      paddingRight: 20,
      resize: "none",
    },
    message: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: responsive("80%","80%","75%"),
      height: 90,
      borderRadius: 30,
      fontWeight: 300,
      fontSize: 18,
      padding: "10px 20px 0 10px",
      resize: "none",
      overflow: "hidden",
      backgroundColor: isFocused ? "#f0f8ff" : "white",
      transition: "background-color 0.3s ease",
    },
    btn: {
      outline: "none",
      background: colors.darkBlue,
      width: "170%",
      padding: "15px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      cursor: "pointer",
      color: colors.white,
      transition: "box-shadow 0.3s ease",
      position: 'relative',
      left: 30, 
      border: "none",
    },
    btnHover: {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
     
    },
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div style={styles.form}>
        <div style={styles.inputWrapper}>
          <label style={styles.label}> שם </label>
          <input style={styles.input} type="text" />
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}> טלפון </label>
          <input style={styles.input} type="text" />
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}> מייל </label>
          <input style={styles.input} type="email" />
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}> הודעה </label>
          <textarea
            style={styles.message}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}></label>
          <button
            style={{ ...styles.btn, ...(isHovered && styles.btnHover) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            שלח
          </button>
        </div>
      </div>
     
    </>
  );
}
