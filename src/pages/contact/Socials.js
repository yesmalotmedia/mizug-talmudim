import React, { useContext } from "react";
import { AppContext } from "../../App";
export default function Socials() {
  const { colors, isMobile } = useContext(AppContext);
  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      marginBottom: 20,
      cursor: "pointer",
    },
    img: {
      height: isMobile ? "40px" : "35px",
    },
    label: {
      paddingRight: 30,
      color: colors.darkBlue,
      fontSize: 20,
    },
  };

  //functions
  const handleCallClick = () => {
    window.location.href = "tel:+972526146659"; // Correct phone number format
  };
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/972526146659"; // WhatsApp link format
  };
  return (
    <>
      <div style={styles.wrapper} onClick={handleCallClick}>
        <img style={styles.img} src="footerImages/call.png" alt="Call" />
        <p style={styles.label}>05-26146659</p>
      </div>
      <div style={styles.wrapper} onClick={handleWhatsAppClick}>
        <img
          style={styles.img}
          src="footerImages/whatsapp.png"
          alt="WhatsApp"
        />
        <p style={styles.label}>000-00000000</p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="footerImages/facebook.png"></img>
        <p style={styles.label}> </p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="footerImages/instagram.png"></img>
        <p style={styles.label}> </p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="footerImages/youtube.png"></img>
        <p style={styles.label}></p>
      </div>
    </>
  );
}
