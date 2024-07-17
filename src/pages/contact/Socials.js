import React, { useContext } from "react";
import { AppContext } from "../../App";
export default function Socials() {
    const { colors, responsive } = useContext(AppContext);
  const styles = {

    
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    img: {
        height:responsive("50px","50px","40px"),
      },
      label:{
        paddingRight: 30,
        color: colors.darkBlue,
        fontSize: 20,
      },
  };
  return (
    <>
      <div style={styles.wrapper}>
        <img style={styles.img} src="/footerImages/call.png"></img>
        <p style={styles.label}> 000-00000000</p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="/footerImages/whatsapp.png"></img>
        <p style={styles.label}> 000-00000000</p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="/footerImages/facebook.png"></img>
        <p style={styles.label}> </p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="/footerImages/instagram.png"></img>
        <p style={styles.label}> </p>
      </div>
      <div style={styles.wrapper}>
        <img style={styles.img} src="/footerImages/youtube.png"></img>
        <p style={styles.label}></p>
      </div>
    </>
  );
}
