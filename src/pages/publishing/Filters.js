import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Filters() {
  const { colors } = useContext(AppContext);
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const styles = {
    btn: {
      border: "none",
      padding: 10,
      margin: "0 20px",
      background: colors.white,
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      cursor: "pointer",
      borderRadius: 5,
    },
    text: {
      fontSize: "1vw",
      padding: "0 10px",
      fontWeight: 500,
    },
    active: {
      background: colors.darkBlue, 
      color: colors.white, 
    },
  };

  return (
    <>
      <button
        style={{
          ...styles.btn,
          ...(activeButton === "button1" && styles.active),
        }}
        onClick={() => handleButtonClick("button1")}
      >
        <span
          style={{
            ...styles.text,
            ...(activeButton === "button1" && styles.active),
          }}
        >
          הרב ????? ?????{" "}
        </span>
      </button>
      <button
        style={{
          ...styles.btn,
          ...(activeButton === "button2" && styles.active),
        }}
        onClick={() => handleButtonClick("button2")}
      >
        <span
          style={{
            ...styles.text,
            ...(activeButton === "button2" && styles.active),
          }}
        >
          הרב ????? ?????{" "}
        </span>
      </button>
      <button
        style={{
          ...styles.btn,
          ...(activeButton === "button3" && styles.active),
        }}
        onClick={() => handleButtonClick("button3")}
      >
        <span
          style={{
            ...styles.text,
            ...(activeButton === "button3" && styles.active),
          }}
        >
          ספרים לרכישה{" "}
        </span>
      </button>
      <button
        style={{
          ...styles.btn,
          ...(activeButton === "button4" && styles.active),
        }}
        onClick={() => handleButtonClick("button4")}
      >
        <span
          style={{
            ...styles.text,
            ...(activeButton === "button4" && styles.active),
          }}
        >
          ספרים בחינם{" "}
        </span>
      </button>
      <button
        style={{
          ...styles.btn,
          ...(activeButton === "all" && styles.active),
        }}
        onClick={() => handleButtonClick("all")}
      >
        <span
          style={{
            ...styles.text,
            ...(activeButton === "all" && styles.active),
          }}
        >
          הכל{" "}
        </span>
      </button>
    </>
  );
}
