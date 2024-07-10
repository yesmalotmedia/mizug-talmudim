import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";
import LoaderAnimation from "./LoaderAnimation";

const Subscribe = () => {
  const form = useRef();
  const { colors, isMobile } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const styles = {
    form: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      outline: "none",
      border: "none",
      height: isMobile ? "4vmax" : "3vmax",
      width: isMobile ? "80vmin" : "30vmax",
      padding: isMobile ? "20px 15px 20px 105px" : "15px 15px 15px 120px",
      fontSize: isMobile ? "3.6vmin" : 20,
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
      height: isMobile ? "13px" : "1vw",
      marginRight: "10px",
      position: "relative",
      top: isMobile ? -1 : 4,
    },
    successMassage: {
      paddingBottom: 10,
      fontSize: isMobile ? "6vmin" : "",
      color: colors.white,
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_oktpopo",
        "template_6tsbbvb",
        form.current,
        "6nT-r6G4qY9-xawTb"
      )
      .then(
        (result) => {
          setIsSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div style={styles.subscribe}>
      {isSuccess ? (
        <div style={styles.successMassage}>תודה על הרשמתך!</div>
      ) : isLoading ? (
        <LoaderAnimation isLoading={isLoading} color={colors.white} />
      ) : (
        <form style={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            style={styles.input}
            type="email"
            name="user_email"
            placeholder="נא למלא את כתובת המייל"
            required
          ></input>
          <button style={styles.btn} type="submit">
            <img
              style={styles.arrow}
              src="/arrow-to-left.png"
              alt="arrow"
            ></img>
          </button>
        </form>
      )}
    </div>
  );
};

export default Subscribe;
