import React, { useContext } from "react";
import { AppContext } from "../../App";
import MenuBtn from "../elements/MenuBtn";
import Logo from "../elements/Logo";

import FooterMenu from "./FooterMenu";
import LogoAndSocialIcon from "./LogoAndSocialIcon";
import FooterSearch from "./FooterSearch";

const Footer = () => {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      minHeight: "600px",
      minWidth: "100%",
      backgroundImage: 'url("footerImages/Union.png")',
      backgroundSize: "cover",
      color: colors.white,
    },

    footerItemWrapper: {
      paddingTop: "300px",
      maxWidth: "90%",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      gap: "5%",
      marginInline: "auto",
    },
    footerMenuWrapper:{
      display: 'flex',
    gap: 30,
      
    },
    copyRight: {
      textAlign: "center",
      marginTop: "30px",
      padding: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.footerItemWrapper}>
        <LogoAndSocialIcon />

        <div style={styles.footerMenuWrapper}>
          <FooterMenu />
          <FooterMenu />
        </div>

        <FooterSearch />
      </div>

      <div style={styles.copyRight}>
        © כל הזכויות שמורות לצדקו יחדיו - בית מדרש לאיחוד התלמודים | האתר נבנה
        ועוצב ב-❤ ע"י bms סטודיו לפיתוח תוכנה ובניית אתרים
      </div>
    </div>
  );
};

export default Footer;
