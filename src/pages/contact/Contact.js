import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import Socials from "./Socials";
import Form from "./Form";

export default function Contact() {
  const { colors ,isMobile} = useContext(AppContext);

  const styles = {
    container: {
      marginBottom: "10%",
    },

    socialContainer: {
      width: "25vw",
      margin: "50px 90px 0 0",
    },
    formContainer:{
     position: 'absolute',
     top:'-7vmin',
    }
  };
  return (
    <>
      <div style={styles.container}>
        <HeroSection
          backgroundImage={"contactHero.png"}
          title={"נשמח לדבר איתכם"}
          subTitle={" השאירו פרטים ונחזור אליכם בהקדם "}
          titleColor={colors.white}
          height={"60vmin"}
          marginTop={90}
        />
        <div style={styles.formContainer}>
          <Form />
        </div>
        
        <div style={styles.socialContainer}>
          <Socials />
        </div>
      </div>
    </>
  );
}
