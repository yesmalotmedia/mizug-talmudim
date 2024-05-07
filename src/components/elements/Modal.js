import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function Modal() {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const styles = {
    form: {
      background: "blue",
      width: 500,
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: 30,
      position: "fixed",
      left: 20,
      borderRadius: 30,
      top: 200,
      background: colors.darkBlue,
      zIndex: 999,
    },
    label: {
      fontSize: 30,
      fontWeight: 600,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    input: {
      outline: "none",
      border: "none",
      padding: 10,
      borderRadius: 30,
      width: 210,
      marginTop: 20,
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 600,
    },
  };
  return (
    <>
      <form style={styles.form}>
        <label style={styles.label}> רוצים להקדיש שיעור? להנציח? </label>
        <div style={styles.inputContainer}>
          <input style={styles.input} type="text" placeholder=" שם " />
          <input style={styles.input} type="text" placeholder=" טלפון " />
        </div>
        <Button
          bgColor={bgColors.orangeGradient}
          borderRadius={30}
          fontWeight={600}
          fontSize={20}
          title=" חזרו אלי "
        />
      </form>
    </>
  );
}
