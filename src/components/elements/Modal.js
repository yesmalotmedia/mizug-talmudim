import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function Modal() {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility
  const [isShrink, setIsShrink] = useState(false); // State to manage shrink

  const styles = {
    form: {
      background: colors.darkBlue,
      width: isShrink ? 150 : 500,
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: 30,
      position: "fixed",
      left: 20,
      bottom: isShrink ? 20 : 300,

      borderRadius: isShrink ? "50%" : 30,
      zIndex: 999,
      opacity: isVisible ? 1 : 0, // Set opacity based on visibility state
      transition: "all 0.3s ease", // Add transition effect
    },
    label: {
      fontSize: isShrink ? 20 : 30,
      fontWeight: 600,
      color: colors.white,
      cursor: isShrink ? "pointer" : "auto",
      textAlign: "center",
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
    closeButton: {
      position: "absolute",
      top: -30,
      right: 0,
      color: colors.darkBlue,
      border: "none",
      cursor: "pointer",
      padding: 5,
      borderRadius: "50%",
      fontSize: 20,
      fontWeight: 700,
    },
  };

  //functions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after 10 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []); // Run effect only once on component mount

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsShrink(true); // Set visibility to true after 10 seconds
  //   }, 8000);

  //   return () => clearTimeout(timer); // Cleanup function to clear the timer
  // }, []); // Run effect only once on component mount

  // const handleClose = () => {
  //   setIsVisible(false); // Close the modal
  // };

  return (
    <>
      <form style={styles.form}>
        {!isShrink && (
          <div style={styles.closeButton} onClick={() => setIsShrink(true)}>
            X
          </div>
        )}
        <label onClick={() => setIsShrink(false)} style={styles.label}>
          {" "}
          רוצים להקדיש שיעור? להנציח?{" "}
        </label>
        {!isShrink && (
          <div style={styles.inputContainer}>
            <input style={styles.input} type="text" placeholder=" שם " />
            <input style={styles.input} type="text" placeholder=" טלפון " />
          </div>
        )}
        {!isShrink && (
          <Button
            bgColor={bgColors.orangeGradient}
            color={colors.white}
            borderRadius={30}
            fontWeight={600}
            fontSize={20}
            title=" חזרו אלי "
          />
        )}
      </form>
    </>
  );
}
