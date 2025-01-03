import React, { useContext } from "react";
import { AppContext } from "../../App";
import Nav from "./Nav";
import Logo from "../elements/Logo";
import Button from "../elements/Button";
import { Link, useLocation } from "react-router-dom"; // ייבוא useLocation
import MobileNav from "./MobileNav";

function Header() {
  const {
    colors,
    bgColors,
    isMobile,
    isMobileNavOpen,
    setIsMobileNavOpen,
    responsive,
  } = useContext(AppContext);

  // קבלת הנתיב הנוכחי
  const location = useLocation();
  const isTerumotPage = location.pathname === "/terumot"; // בדיקה אם בעמוד תרומות

  const styles = {
    container: {
      height: responsive(100, 90, 80),
      width: "100%",
      background: bgColors.white,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
      position: "fixed",
      padding: responsive(10, 10, 7),
    },
    logo: {
      height: responsive("130px", "120px", "90px"),
      width: responsive("130px", "120px", "90px"),
      zIndex: 100,
      cursor: "pointer",
    },
    vector: {
      position: "absolute",
      right: -20,
      top: -20,
      width: responsive("350px", "300px", "200px"),
      height: responsive("250px", "200px", "150px"),
    },
    terumot: {
      textDecoration: "none",
    },
    humburgerAndLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    humburgerIcon: {
      height: 35,
      margin: "0 20px 0 10px",
      cursor: "pointer",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.humburgerAndLink}>
          {!isTerumotPage && ( // הצגת הכפתור רק אם לא בעמוד תרומות
            <Link to={"/terumot"} style={styles.terumot}>
              <Button
                color={colors.white}
                bgColor={bgColors.orangeGradient}
                hoveredBgColor={bgColors.darkBlueGradient}
                title={"לתרומות"}
                borderRadius={5}
                fontSize={responsive("1.5rem", "1.3rem", "1.3rem")}
                fontWeight={600}
                width={responsive(180, 150, 120)}
                height={responsive(50, 40, 35)}
                padding={responsive(10, 0, 0)}
              />
            </Link>
          )}
          {isMobile && (
            <img
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              style={styles.humburgerIcon}
              src="/humburgerMenuIcon.svg"
              alt="habmurgerBtn"
            />
          )}
        </div>

        {isMobile ? <MobileNav /> : <Nav />}
        <Logo style={styles.logo} />
        <img style={styles.vector} src="/logo-vector.png" alt="logo-vector" />
      </div>
    </>
  );
}

export default Header;
