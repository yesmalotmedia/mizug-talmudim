import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Socials from "./Socials";
import Form from "./Form";

export default function Contact() {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "",
      alignItems: "center",
    },

    socialContainer: {
      width: isMobile ? "90vmin" : "22vw",
      margin: isMobile ? "50px 0 0 0" : "50px 60px 0 0",
    },
    formContainer: {
      marginTop: "-10vmin",
    },
  };
  return (
    <>
      <HeroSection
        backgroundImage={"contactHero.png"}
        title={"נשמח לדבר איתכם"}
        subTitle={" השאירו פרטים ונחזור אליכם בהקדם "}
        titleColor={colors.white}
        height={isMobile ? "75vmin" : "60vmin"}
        marginTop={isMobile ? 95 : 90}
      />
      <div style={styles.container}>
        <div style={styles.socialContainer}>
          <Socials />
        </div>
        <div style={styles.formContainer}>
          <Form />
        </div>
      </div>
    </>
  );
}
