import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { NavLink, useLocation, matchPath } from "react-router-dom";

const Nav = () => {
  const { colors, pagesList } = useContext(AppContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  const styles = {
    container: {
      color: colors.white,
      width: 'auto',
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "1.2vw",
      zIndex: 100,
    },
    menu: {
      color: colors.azure,
      textDecoration: "none",
      fontWeight: 500,
      padding: "10px 10px",
      display: "inline-block",
      width: 'auto',
      borderRadius: 10,
      marginRight: 10,
    },
    li: {
      listStyle: "none",
    },
    hoverMenu: {
      background: colors.darkBlue,
      color: colors.white,
      borderRadius: 10,
      marginRight: 10,
    },
    activeMenu: {
      background: colors.darkBlue,
      color: colors.white,
      borderRadius: 10,
    },
  };

  const isActive = (path) => {
    return location.pathname === path || matchPath({ path: `${path}/*`, end: false }, location.pathname);
  };

  return (
    <div style={styles.container}>
      {pagesList.map((item, index) => (
        <ul style={styles.ul} key={index}>
          <li
            style={styles.li}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <NavLink 
              style={{
                ...styles.menu,
                ...(index === hoveredIndex && styles.hoverMenu),
                ...(isActive(item.path) && styles.activeMenu)
              }}
              to={item.path}
              activeClassName="active"
            >
              {item.name}
            </NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Nav;
