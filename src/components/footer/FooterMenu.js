import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function chunkArray(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

export default function FooterMenu({ data }) {
  const { isMobile, colors } = useContext(AppContext);
  const styles = {
    menuContainer: {
      width: "100%",
    },
    titleContainer: {
      width: "100%",
      textAlign: "center",
      marginBottom: "20px",
    },
    menuColumnContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      width: "100%",
    },
    menuColumn: {
      flex: "1 1 25%", // Each column takes up 25% of the width
      minWidth: "16%",
    },
    arrow: {
      height: isMobile ? "13px" : "1vw",
      marginLeft: "10px",
    },
    footerMenu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      paddingTop: "5px",
      fontSize: 20,
      fontWwight: "medium",
    },
    menu: {
      cursor: "pointer",
    },
    MenuTitle: {
      fontSize: isMobile ? "7vmin" : "1.8vw",
    },
    links: {
      fontSize: isMobile ? "4vmin" : "1.2vw",
      textDecoration: "none",
      color: colors.white,
    },
  };

  const chunkedData = chunkArray(data, 4);

  return (
    <div style={styles.menuContainer}>
      <div style={styles.titleContainer}>
        <h2 style={styles.MenuTitle}>קישורים מהירים</h2>
      </div>
      <div style={styles.menuColumnContainer}>
        {chunkedData.map((chunk, chunkIndex) => (
          <div key={chunkIndex} style={styles.menuColumn}>
            {chunk.map((item, index) => (
              <div key={index} style={styles.footerMenu}>
                <img
                  style={styles.arrow}
                  src="/arrow-to-left.png"
                  alt="Arrow"
                ></img>
                <Link to={item.url} style={styles.links}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
