import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Button({btnText, btnImg, background}) {
  const { colors, bgColors } = useContext(AppContext);
  const styles = {
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: 'center',
      padding: 5,
      outline: "none",
      border: "none",
      borderRadius: 20,
      background,
      cursor: "pointer",
      width: "100%",
    },
    text: {
      color: colors.white,
      fontWeight: 500,
      fontSize: '0.9vw',
      padding:2,
    },
    img: {
      paddingRight: 4,
      height: '0.8vw'
    },
  };
  return (
    <>
      <button style={styles.btn}>
        <span style={styles.text}>{btnText}</span>
        <img style={styles.img} src={btnImg} />
      </button>
    </>
  );
}
