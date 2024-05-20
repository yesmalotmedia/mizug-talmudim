import React from "react";

export default function SharePost() {
  const styles = {
    container: {
      textAlign: "left",
    },
    img: {
      height: "2vw",
      margin: "20px 10px 60px 0",
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <img style={styles.img} src="/envelope.png" alt="Share via Email" />
      <img
        style={styles.img}
        src="/footerImages/whatsapp.png"
        alt="Share via WhatsApp"
      />
    </div>
  );
}
