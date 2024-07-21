import React, { useContext } from "react";
import { AppContext } from "../../App";

import FooterMenu from "./FooterMenu";
import LogoAndSocialIcon from "./LogoAndSocialIcon";
import FooterMenuData from "./FooterMenuData";
import Subscribe from "../elements/Subscribe";

const Footer = () => {
  const { colors, isMobile } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      minWidth: "100%",
      backgroundImage: isMobile
        ? 'url("/mobileFooterImg.png")'
        : 'url("/footerImages/Union.png")',
      backgroundSize: "100% 100%",
      color: colors.white,
      zIndex: 200,
      position: "relative",
    },
    footerItemWrapper: {
      paddingTop: isMobile ? "20vh" : "50vh",
      maxWidth: "80%",
      display: "flex",
      justifyContent: "center",
      gap: "6%",
      marginInline: "auto",
      position: "relative",
      flexDirection: isMobile ? "column-reverse" : "",
    },
    footerMenuWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "38vmax",
    },
    footerMenu: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      maxWidth: isMobile ? "100%" : "38vmax",
    },
    footerMenuItem: {
      flex: "1 1 calc(25% - 10px)",
      boxSizing: "border-box",
    },
    copyRight: {
      textAlign: "center",
      marginTop: "30px",
      padding: "30px",
      position: "relative",
    },
    subscribe: {
      color: colors.orange,
      fontSize: "1.5vw",
      textAlign: "center",
      position: "relative",
      top: -4,
      width: isMobile ? "100%" : "",
    },
    icon: {
      position: "relative",
      display: "flex",
      alignItems: isMobile ? "center" : "",
      justifyContent: isMobile ? "center" : "",
      top: 8,
    },
    text: {
      paddingBottom: 10,
      fontSize: isMobile ? "6vmin" : "",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.footerItemWrapper}>
        {!isMobile && (
          <div style={styles.icon}>
            <LogoAndSocialIcon />
          </div>
        )}

        <div style={styles.footerMenu}>
          <FooterMenu data={FooterMenuData} />
        </div>
        {isMobile && (
          <div style={styles.icon}>
            <LogoAndSocialIcon />
          </div>
        )}
        <div style={styles.subscribe}>
          <h2 style={styles.text}>רוצים לקבל התראה במייל על תוכן חדש? </h2>
          <Subscribe />
        </div>
      </div>

      <div style={styles.copyRight}>
        © כל הזכויות שמורות לצדקו יחדיו - בית מדרש לאיחוד התלמודים | האתר נבנה
        ב-❤ ע"י bms סטודיו לפיתוח תוכנה ובניית אתרים | עיצוב - closeApp
      </div>
    </div>
  );
};

export default Footer;
