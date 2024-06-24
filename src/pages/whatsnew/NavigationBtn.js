import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const NavigationBtn = ({
  direction,
  postId,
  navigation,
  nextTitle,
  prevTitle,
  arrow,
}) => {
  const navigate = useNavigate();
  const isNext = direction === "next";
  const {colors, isMobile} = useContext(AppContext)
  const handleClick = () => {
    navigate(`/${navigation}/${postId}`);
  };

  const styles = {
    btn: {
      border: "none",
      display: "flex",
      alignItems: "center",
      background: "none",
      cursor: "pointer",
      color: colors.orange,
      fontSize: isMobile? "4vw": "1.2vw",
      fontWeight: 600,

    },
    btnImg: {
      height: isMobile? "2vh": "0.8vw",
      margin: 15,
      transform: isNext ? "rotate(180deg)" : "none",
    },
  };

  return (
    <button style={styles.btn} onClick={handleClick}>
      {!isNext && <img style={styles.btnImg} src={arrow} alt="Previous" />}
      {isNext ? nextTitle : prevTitle}
      {isNext && <img style={styles.btnImg} src={arrow} alt="Next" />}
    </button>
  );
};

export default NavigationBtn;
