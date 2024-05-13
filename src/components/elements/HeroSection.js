import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";
import Subscribe from "./Subscribe";

const HeroSection = ({backgroundImage, title, subTitle, titleColor, isButton, isSubscribe , height, marginTop}) => {
  // Context
  const { colors, bgColors } = useContext(AppContext);

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
      fontSize: "4vw",
      textAlign: "center",
      color: titleColor,
    },
    subTitle: {
      fontWeight: 600,
      fontSize: "2vw",
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
            title={"this is a button"}
            bgColor={bgColors.orangeGradient}
            width={"27vw"}
            height={"7vh"}
            borderRadius={30}
            arrow={true}
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
