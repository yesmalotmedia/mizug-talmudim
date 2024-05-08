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
      border: "solid white 1px",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 10px 20px 0px",
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

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && window.scrollY > 150) {
        setIsVisible(true);
      } else if (!isShrink && isVisible && window.scrollY > 500) {
        setIsShrink(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isShrink]);

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
