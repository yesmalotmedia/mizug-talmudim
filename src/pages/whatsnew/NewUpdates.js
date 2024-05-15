import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "../../components/elements/Button";

export default function NewUpdates() {
  const { colors } = useContext(AppContext);

  const styles = {
    mainSection: {
      gap: 15,
      width: "60%",
      marginInline: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    textSection: {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      height: "20vmax",
      width: "40%",
      background: colors.white,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: "10px 20px",
      fontSize: "1vmax",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      height: "20vmax",
      width: "60%",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    textTitle: {
      color: colors.darkBlue,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "1.5vmax 0 1vmax 0",
      color: "gray",
    },
    tarikImg: {
      height: "2.5vh",
      marginLeft: 10,
    },
    content: {
      marginBottom: "0.7vw",
      fontSize: "1vmax",

      maxHeight: "9vw",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 7,
    },
    btn: {
      color: colors.orange,
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      fontSize: "1.3vmax",
      cursor: "pointer",
      width: "10.5vw",
    },
    btnImg: {
      height: "1vw",
      paddingRight: "15px",
    },
  };
  return (
    <>
      <div style={styles.mainSection}>
        <div style={styles.textSection}>
          <h2 style={styles.textTitle}> כאן כותרת החדשות כאן כותרת החדשות </h2>
          <div style={styles.tarikContainer}>
            <img style={styles.tarikImg} src="tarik.png"></img>
            <p style={styles.tarik}>תאריך עברי ולועזי</p>
          </div>
          <div style={styles.content}>
            <p>
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום
              ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס
              אגת לקטוס וואל אאוגו וסטיבולום ריק לרטי.לורם איפסום דולור סיט אמט,
              קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס
              וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
              וסטיבולום ריק לרטי. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון
              ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
              לקטוס וואל אאוגו וסטיבולום ריק לרטי. וולופטה דיאם. וסטיבולום אט
              דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום ריק לרטי. קונסקטורר
            </p>
          </div>

          <div style={styles.btn}>
            <div>
              <span>להמשך קריאה</span>
              <img style={styles.btnImg} src="arrowLeft-orange.png"></img>
            </div>
          </div>
        </div>

        <img style={styles.image} src="mizug-img1.jpeg"></img>
      </div>
    </>
  );
}
