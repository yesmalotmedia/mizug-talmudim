import React, { useContext } from "react";
import { AppContext } from "../../App";
import CyrcleButton from "../../components/elements/CyrcleButton";

const SeltectButtons = () => {
  // Context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  // states
  const selectButtons = [
    {
      img: "selectedBtns1.png",
      title: "כללים",
    },
    {
      img: "selectedBtns2.png",
      title: "כללים",
    },
    {
      img: "selectedBtns3.png",
      title: "עיון",
    },
    {
      img: "selectedBtns4.png",
      title: "מועדים",
    },
    {
      img: "selectedBtns5.png",
      title: "פרשת השבוע",
    },
    {
      img: "selectedBtns6.png",
      title: "לכל השיעורים",
    },
  ];

  // Styles

  const styles = {
    container: {
      position: "absolute",
      top: "22vw",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      width: "43vw",
      justifyContent: "space-around",
      margin: "auto",
    },
    title: {
      fontWeight: 600,
      textAlign: "center",
      color: colors.darkBlue,
      marginTop: 10,
      fontSize: "1.1vw",
    },
  };

  //functions

  const selectedButtonsElements = selectButtons.map((btn, index) => (
    <div key={index}>
      <CyrcleButton imgSrc={btn.img} />
      <div style={styles.title}>{btn.title}</div>
    </div>
  ));

  return <div style={styles.container}>{selectedButtonsElements}</div>;
};

export default SeltectButtons;
