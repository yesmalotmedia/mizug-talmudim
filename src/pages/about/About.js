import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import CyrcleButton from "./../../components/elements/CyrcleButton";

export default function About() {
  const { colors, bgColors } = useContext(AppContext);
  const styles = {
    container: {
      display: "flex",
      alignItems: "flex-start",
      gap: 80,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width: "15vw",
      height: "100vh",
      marginTop: "-40px",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 30,
      gap: 70,
    },

    text: {
      width: "60vw",
    },
    title: {
      color: colors.darkBlue,
      fontSize: "2vw",
      marginBottom: 25,
    },
    paragraph: {
      textAlign: "justify",
      fontSize: "1.2vw",
      lineHeight: "1.6vw",
    },
    img: {
      width: "60vw",
      borderRadius: 20,
      margin: "30px 0",
    },
    imageRowContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 30,
    },
    imageRow: {
      height: "21.5vw",
      borderRadius: 20,
    },
  };
  return (
    <>
      <HeroSection
        title={" אודותינו "}
        subTitle={" הכירו את בית המדרש לאיחוד התלמודים "}
        isSubscribe={false}
        titleColor={colors.darkBlue}
        height={"60vmin"}
        marginTop={50}
      />
      <div style={styles.container}>
        <div style={styles.sideBtnContainer}>
          <CyrcleButton
            title={" מי אנחנו "}
            imgSrc={"/SideBtn-1.png"}
            smallImgButton={true}
          />
          <CyrcleButton
            title={" צוות בית המדרש"}
            smallImgButton={true}
            imgSrc={"/SideBtn-2.png"}
          />
        </div>
        <div style={styles.text}>
          <h2 style={styles.title}> צוות בית המדרש </h2>
          <p style={styles.paragraph}>
            ילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
            אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
            למסון בלרק - וענוף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה
            סטום, לפריקך תצטריק לרטי.  לורם איפסום דולור סיט אמט, קונסקטורר
            אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. <br /> <br />
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום ריק לרטי.
            <br /> <br />  הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך
            וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי
            שהכים תוק, הדש שנרא התידם הכייר וק. ילקוף, מרגשי ומרגשח. עמחליף
            נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו
            בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף קונדימנטום קורוס
            בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.נרא התידם הכייר
            וק.
          </p>
          <img style={styles.img} src="/mizug-img1.jpeg" />
          <h2 style={styles.title}> ראש בית המדרש</h2>
          <p style={styles.paragraph}>
            ילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
            אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
            למסון בלרק - וענוף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה
            סטום, לפריקך תצטריק לרטי. שהכים תוק, הדש שנרא התידם הכייר וק. <br />{" "}
            <br />
            ילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
            אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
            למסון בלרק - וענוף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה
            סטום, לפריקך תצטריק לרטי.נרא התידם הכייר וק.
          </p>
          <div style={styles.imageRowContainer}>
            <img style={styles.imageRow} src="/mizug-img1.jpeg" />
            <img style={styles.imageRow} src="/mizug-img1.jpeg" />
          </div>

          <img style={styles.img} src="/mizug-img1.jpeg" />
        </div>
      </div>
    </>
  );
}
