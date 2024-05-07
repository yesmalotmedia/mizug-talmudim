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
  };

  //functions

  const selectedButtonsElementns = selectButtons.map((btn) => (
    <CyrcleButton imgSrc={btn.img} />
  ));

  return <div style={styles.container}>{selectedButtonsElementns}</div>;
};

export default SeltectButtons;
