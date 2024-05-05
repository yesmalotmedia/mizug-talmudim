import React, { useContext } from "react";
import { AppContext } from "../../App";
import Nav from "./Nav";
import MenuBtn from "../elements/MenuBtn";
import Logo from "../elements/Logo";
import Button from "../elements/Button";

function Header() {
  //context
  const { colors, bgColors, isMobile } = useContext(AppContext);
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
      height: 140,
      zIndex: 100,
      marginRight: 50,
    },
    vector: {
      position: "absolute",
      right: -20,
      top: -20,
      width: 350,
      height: 250,
    },
  };

  return (
    <div style={styles.container}>
      <Button
        color={colors.white}
        bgColor={bgColors.orangeGradient}
        title={"לתרומות"}
      />
      {!isMobile && <Nav />}
      <Logo style={styles.logo} />
      <img style={styles.vector} src="logo-vector.png" alt="logo-vector" />
    </div>
  );
}

export default Header;
