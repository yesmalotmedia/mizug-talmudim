import React, { useContext } from "react";
import { AppContext } from "../../App";
import Spacer from "../elements/Spacer";

const AboutSection = () => {
  const { colors, bgColors, pagesList, description } = useContext(AppContext);

  const styles = {
    container: {
      width: "100%",
      position: "relative",
      minHeight: 900,
      zIndex: -1, // Set z-index for the container
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "10vw",
    },
    titleSection: {
      zIndex: 10,
      width: "30%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "start",
      transform: "translateY(-6vw) translateX(-10vw)",
    },
    bookIcon: {
      width: "30%",
      marginRight: 30,
    },
    title: {
      color: colors.white,
      fontSize: 45,
      fontWeight: 500,
      textAlign: "right",
      maxWidth: 400,
    },
    description: {
      width: "50%",
      maxHeight: 600,
      backgroundColor: bgColors.white,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      borderRadius: 50,
      padding: 60,
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.5,
      maxWidth: 1000,
    },
    bgImg: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      transform: "translateY(-30vw)",
      width: "100vw",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        <img src={"book-img.png"} style={styles.bookIcon} />
        <br />
        <div style={styles.title}>
          פה יהיה משפט <br /> מרגש שמבטא את
          <br /> התפיסה שלנו
        </div>
      </div>
      <div style={styles.description}>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד
        אדנדוםסילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
        אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון
        בלרק - וענוף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך
        תצטריק לרטי. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
        אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,
        קראס אגת לקטוס וואל אאוגו וסטיבולום ריק לרטי. הועניב היושבב שערש שמחויט
        - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
        יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
      </div>
      <img style={styles.bgImg} src="bg-img-homepage-1.png" alt="bg-img" />
    </div>
  );
};

export default AboutSection;
