import FooterMenuData from "./FooterMenuData";

export default function FooterMenu() {
  const styles = {
    menuColumn: {
     minWidth: '16%',
    },
    arrow: {
      height: "20px",
      width: "20px",
      filter: "brightness(0) invert(1)",
      marginLeft: "10px",
    },
    footerMenu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      paddingTop: "5px",
      fontSize: 20,
      fontWwight: " medium",
    },
    MenuTitle: {
      fontSize: "1.8vw",
    },
  };
  return (
    <>
      <div style={styles.menuColumn}>
        <h2 style={styles.MenuTitle}> קישורים מהירים </h2>
        {FooterMenuData.map((item, index) => (
          <div key={index}>
            <div style={styles.footerMenu}>
              <img
                style={styles.arrow}
                src="footerImages/arrow.png"
                alt="Arrow"
              ></img>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
