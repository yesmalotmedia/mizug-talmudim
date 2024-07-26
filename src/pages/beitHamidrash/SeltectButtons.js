import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import CyrcleButton from "../../components/elements/CyrcleButton";
import { useNavigate } from "react-router-dom";

const SeltectButtons = ({ lessonsType, setlessonsType, setLessonsFilter }) => {
  // Context
  const {
    colors,
    bgColors,
    isMobile,
    responsive,
    dailyTextsData,
    categories,
    loadingCategories,
    setlessonsFilter,
    lessonsFilter,
  } = useContext(AppContext);

  const navigate = useNavigate();
  // Styles
  const styles = {
    container: {
      transform: "translateY(-70%)",
      display: "flex",
      gap: 20,
      width: responsive("100%","90%", "105%"),
      justifyContent: "center",
    },
   
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
    setlessonsFilter({ category: btnTitle });
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
