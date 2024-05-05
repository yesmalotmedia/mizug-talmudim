import React, { useContext } from "react";
import { AppContext } from "../../App";
import MenuBtn from "../elements/MenuBtn";
import Logo from "../elements/Logo";

const Footer = () => {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  //styles
  const styles = {
    container: {
      height: 150,
      width: "100%",
      background: bgColors.darkBlue,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: colors.white,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: 120,
    },
  };

  return (
    <div style={styles.container}>
      <div>
        © כל הזכויות שמורות לצדקו יחדיו - בית מדרש לאיחוד התלמודים | האתר נבנה
        ועוצב ב-❤ ע"י bms סטודיו לפיתוח תוכנה ובניית אתרים
      </div>
    </div>
  );
};

export default Footer;
