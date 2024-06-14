import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import CyrcleButton from "../../components/elements/CyrcleButton";
import { useNavigate } from "react-router-dom";

const SeltectButtons = ({ lessonsType, setlessonsType }) => {
  // Context
  const {
    colors,
    bgColors,
    isMobile,
    dailyTextsData,
    categories,
    loadingCategories,
  } = useContext(AppContext);
  const navigate = useNavigate();
  // Styles
  const styles = {
    container: {
      transform: "translateY(-70%)",
      display: "flex",
      width: "45vw",
      justifyContent: isMobile ? "center" : "space-around",
      marginInline: "auto",
    },
    btn: isMobile
      ? {
          padding: "0 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }
      : {},
  };

  // Functions
  useEffect(() => {}, [loadingCategories]);
  const getDisplyedCategories = (categories) => {
    return categories
      .filter((cat) => cat.parent == 3)
      .sort((a, b) => a.id - b.id);
  };

  const handleClick = (btnTitle) => {
    navigate("/BeitHamidrash");
    setlessonsType(btnTitle);
  };

  const selectedButtonsElements = getDisplyedCategories(categories)?.map(
    (cat, index) => (
      <div
        style={styles.btn}
        onClick={() => handleClick(cat.name)}
        key={cat.id}
      >
        <CyrcleButton
          imgSrc={`/selectedBtns${index + 1}.png`}
          title={cat.name}
        />
      </div>
    )
  );

  return <div style={styles.container}>{selectedButtonsElements}</div>;
};

export default SeltectButtons;
