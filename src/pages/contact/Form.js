import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Form() {
  const { colors } = useContext(AppContext);

  const styles = {
    form: {
      width: "45vw",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      position: "absolute",
      right: "26vw",
      top: 400,
      background: colors.white,
      borderRadius: 30,
      paddingTop: 30,
    },
    inputWrapper: {
      padding: "20px 30px 20px 0",
      display: "flex",
      alignItems: "center",
    },
    label: {
      fontWeight: 600,
      width: "5vw",
      fontSize: 20,
      color: colors.darkBlue,
    },
    input: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: "35vw",
      height: "9vh",
      borderRadius: 30,
      fontWeight: 500,
      fontSize: 20,
      paddingRight: 20,
      resize: "none",
    },
    message: {
      outline: "none",
      border: `2px solid ${colors.darkBlue}`,
      width: "35vw",
      height: "20vh",
      borderRadius: 30,
      fontWeight: 300,
      fontSize: 18,
      padding: "10px 10px 0 10px",
      resize: "none",
      overflow: "hidden",
    },
    btn: {
      outline: "none",
      background: colors.darkBlue,
      width: "35vw",
      padding: "15px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      cursor: "pointer",

      color: colors.white,
    },
  };
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
          <textarea style={styles.message}></textarea>
        </div>
        <div style={styles.inputWrapper}>
          <label style={styles.label}></label>
          <botton style={styles.btn}> שלח </botton>
        </div>
      </div>
    </>
  );
}
