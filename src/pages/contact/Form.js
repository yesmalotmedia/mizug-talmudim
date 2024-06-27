import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Form() {
  const { colors, isMobile } = useContext(AppContext);

  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    form: {
      width: isMobile ? "90vmin" : "45vw",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 20,
      height: isMobile ? 420 : "auto",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      paddingTop: 30,
      justifyContent: "center",
      gap: isMobile ? "30px" : "",
    },
    label: {
      fontWeight: 600,
      width: "5vw",
      fontSize: isMobile ? 16 : 20,
      color: colors.darkBlue,
    },
    input: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: isMobile ? "70vmin" : "35vw",
      height: isMobile ? "40px" : "9vh",
      borderRadius: 30,
      fontWeight: 500,
      fontSize: isMobile ? 17 : 20,
      paddingRight: 20,
      resize: "none",
    },
    message: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: isMobile ? "70vmin" : "35vw",
      height: "90px",
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
      position: isMobile ? "absolute" : "",
      bottom: 50,
      outline: "none",
      background: colors.darkBlue,
      width: isMobile ? "85%" : "35vw",
      padding: "15px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      cursor: "pointer",
      color: colors.white,
      transition: "box-shadow 0.3s ease",
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
        {!isMobile && (
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
        )}
      </div>
      {isMobile && (
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
      )}
    </>
  );
}
