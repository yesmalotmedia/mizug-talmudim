import React, { useContext } from "react";
import { AppContext } from "../../App";
import CyrcleButton from "../../components/elements/CyrcleButton";

const SeltectButtons = ({ lessonsType, setlessonsType }) => {
  // Context
  const { colors, bgColors, isMobile, dailyTextsData } = useContext(AppContext);

  // states
  const selectButtons = [
    {
      img: "selectedBtns1.png",
      title: "הדף היומי",
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
      transform: "translateY(-90%)",
      display: "flex",
      width: "45vw",
      justifyContent: isMobile? 'center': "space-around",
      marginInline: 'auto'
    },
    btn: isMobile ? {
      padding: "0 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }: {}
  };

  //functions
  const handleClick = (btnTitle) => {
    setlessonsType(btnTitle);
  };
  const selectedButtonsElements = selectButtons.map((btn, index) => (
    <div style={styles.btn} onClick={() => handleClick(btn.title)} key={index}>
      <CyrcleButton imgSrc={btn.img} title={btn.title} />
    </div>
  ));

  return <div style={styles.container}>{selectedButtonsElements}</div>;
};

export default SeltectButtons;
