import React, { useContext } from "react";
import { AppContext } from "../../App";
import Nav from "./Nav";
import MenuBtn from "../elements/MenuBtn";
import Logo from "../elements/Logo";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header() {
  //context
  const { colors, bgColors, isMobile, isMobileNavOpen, setIsMobileNavOpen } =
    useContext(AppContext);
  //styles
  const styles = {
    container: {
      height: 100,
      width: "100%",
      background: bgColors.white,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
      position: "fixed",
      padding: 10,
    },
    logo: {
      height: isMobile ? "25vmin" : "10vw",
      zIndex: 100,
      marginRight: isMobile ? "1vw" : 50,
      marginTop: isMobile ? "1vw" : 20,
    },
    vector: {
      position: "absolute",
      right: -20,
      top: -20,
      width: isMobile ? "50vmin" : "25vw",
      height: isMobile ? "50vmin" : 250,
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
          <Link to={"/terumot"} style={styles.terumot}>
            <Button
              color={colors.white}
              bgColor={bgColors.orangeGradient}
              hoveredBgColor={bgColors.darkBlueGradient}
              title={"לתרומות"}
              borderRadius={5}
              fontSize={isMobile ? 15 : 30}
              fontWeight={600}
              width={isMobile ? "130px" : "280px"}
              height={isMobile ? 30 : ""}
            />
          </Link>
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
