import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { AppContext } from "../../App";
import TanksMessage from "../../components/elements/TanksMessage";

export default function Form() {
  const formRef = useRef();
  const { colors, isMobile } = useContext(AppContext);
  const [formState, setFormState] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    message: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_oktpopo", // Your EmailJS service ID
        "template_xaadncq", // Your EmailJS template ID
        formRef.current,
        "6nT-r6G4qY9-xawTb" // Your public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSuccess(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const styles = {
    form: {
      width: isMobile ? "90vmin" : "45vw",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      background: colors.white,
      borderRadius: 30,
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
    },
    btn: {
      outline: "none",
      background: colors.darkBlue,
      width: isMobile ? "70vmin" : "35vw",
      padding: "15px 0",
      borderRadius: 30,
      fontWeight: 600,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      cursor: "pointer",
      color: colors.white,
    },
    successMassage: {
      padding: 100,
      fontSize: isMobile ? "4vmin" : "30px",
      color: colors.darkBlue,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.form}>
      {isSuccess ? (
        <TanksMessage
          msg={"תודה על פנייתך! נחזור אליך בהקדם"}
          color={colors.darkBlue}
        />
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> שם </label>
            <input
              style={styles.input}
              type="text"
              name="user_name" // Name attribute should match the template field
              value={formState.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> טלפון </label>
            <input
              style={styles.input}
              type="text"
              name="user_phone" // Name attribute should match the template field
              value={formState.user_phone}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> מייל </label>
            <input
              style={styles.input}
              type="email"
              name="user_email" // Name attribute should match the template field
              value={formState.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}> הודעה </label>
            <textarea
              style={styles.message}
              name="message" // Name attribute should match the template field
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div style={styles.inputWrapper}>
            <label style={styles.label}></label>
            <button type="submit" style={styles.btn}>
              {" "}
              שלח{" "}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
