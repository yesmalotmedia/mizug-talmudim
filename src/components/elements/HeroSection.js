import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";
import Subscribe from "./Subscribe";

const HeroSection = ({backgroundImage, title, subTitle, titleColor, btnTitle, isButton, isSubscribe , height, marginTop}) => {
  // Context
  const { colors, bgColors, responsive } = useContext(AppContext);

  // Styles
  const styles = {
    heroSection: {
      backgroundImage: `url("${backgroundImage}")`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
    },
    headerText:{
      marginTop,
    },
    title: {
      fontWeight: 600,
      fontSize: responsive("2.6rem","2.4rem","2.2rem"),
      textAlign: "center",
      color: titleColor,
    },
    subTitle: {
      fontWeight: 600,
      fontSize: responsive("2rem","1.8rem","1.6rem"),
      textAlign: "center",
      color: colors.orange,
    },
    button: {
      paddingTop:30,
    },
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.headerText}>
        <h2 style={styles.title}>{title}</h2>
        <h4 style={styles.subTitle}>{subTitle}</h4>
      </div>
      <div style={styles.button}>
        {isButton && (
          <Button
            color={colors.white}
            title={btnTitle}
            bgColor={bgColors.orangeGradient}
            hoveredBgColor={bgColors.azureGradient}
            width={responsive("290px","280px","250px")}
            height={responsive("50px","50px","40px")}
            borderRadius={30}
            arrow={true}
            fontSize={responsive("2rem","1.8rem","1.6rem")}
            fontWeight={600}
          />
        )}
        {isSubscribe && (
          <Subscribe />
        )}
      </div>
    </div>
  );
};

export default HeroSection;