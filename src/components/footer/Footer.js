import React, { useContext } from "react";
import { AppContext } from "../../App";
import MenuBtn from "../elements/MenuBtn";
import Logo from "../elements/Logo";

import FooterMenu from "./FooterMenu";
import LogoAndSocialIcon from "./LogoAndSocialIcon";
import FooterSearch from "./FooterSearch";
import Modal from "../elements/Modal";
import FooterMenuData from "./FooterMenuData";

const Footer = () => {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  //styles
  const styles = {
    container: {
      minWidth: "100%",
      backgroundImage: 'url("footerImages/Union.png")',
      backgroundSize: "cover",
      color: colors.white,
      zIndex: 200,
      position: "relative", // Adding position property
    },
    footerItemWrapper: {
      paddingTop: "350px",
      maxWidth: "90%",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      gap: "5%",
      marginInline: "auto",
      position: "relative", // Adding position property
    },
    footerMenuWrapper: {
      display: "flex",
      gap: 30,
    },
    copyRight: {
      textAlign: "center",
      marginTop: "30px",
      padding: "30px",
      position: "relative", // Adding position property
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.footerItemWrapper}>
        <LogoAndSocialIcon />

        <div style={styles.footerMenuWrapper}>
          <FooterMenu data={FooterMenuData} />
          <FooterMenu data={FooterMenuData} />
        </div>

        <FooterSearch />
      </div>

      <div style={styles.copyRight}>
        © כל הזכויות שמורות לצדקו יחדיו - בית מדרש לאיחוד התלמודים | האתר נבנה
        ב-❤ ע"י bms סטודיו לפיתוח תוכנה ובניית אתרים | עיצוב - closeApp
      </div>
    </div>
  );
};

export default Footer;
