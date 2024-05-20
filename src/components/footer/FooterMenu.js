export default function FooterMenu({ data }) {
  const styles = {
    menuColumn: {
      minWidth: "16%",
    },
    arrow: {
height: '1vw',
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
    menu: {
      cursor: "pointer",
    },
    MenuTitle: {
      fontSize: "1.8vw",
    },
  };
  return (
    <>
      <div style={styles.menuColumn}>
        <h2 style={styles.MenuTitle}> קישורים מהירים </h2>
        {data.map((item, index) => (
          <div key={index}>
            <div style={styles.footerMenu}>
              <img
                style={styles.arrow}
                src="/arrow-to-left.png"
                alt="Arrow"
              ></img>
              <p style={styles.menu}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
