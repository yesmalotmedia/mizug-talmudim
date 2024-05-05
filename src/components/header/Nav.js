import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const Nav = () => {
  const { colors, bgColors, pagesList } = useContext(AppContext);

  const styles = {
    container: {
      color: colors.white,
      width: "50%",
      maxWidth: 1000,
      display: "flex",
      justifyContent: "space-between",
      fontSize: 20,
    },
    // Individual styles for each navigation item
    navItem: {
      cursor: "pointer",
      color: colors.azure,
      padding: 10,
      borderRadius: 5,
      fontWeight: 500,
    },
    // Style for hovered navigation item
    navItemHovered: {
      backgroundColor: bgColors.darkBlue,
      color: colors.white,
    },
  };

  // State to track the index of the hovered item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const navItems = pagesList.map((page, index) => (
    <div
      key={index}
      style={{
        ...styles.navItem,
        ...(index === hoveredIndex && styles.navItemHovered),
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      {page}
    </div>
  ));

  return <div style={styles.container}>{navItems}</div>;
};

export default Nav;
