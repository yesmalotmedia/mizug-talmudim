import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function FooterSearch() {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  const styles = {
    orangeText: {
      color: colors.orange,
      marginBottom: "10px",
      fontSize: '1.7rem',
      textAlign: 'center'
    },
    SearchForm: {
      display: "flex",
    },
    searchInput: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "300px",
      flex: 1,
      padding: "15px",
      fontSize: 20,
      fontWeight: 500,
            borderTopRightRadius: "30px",
      borderBottomRightRadius: "30px",
    },

    searchBtn: {
      outline: "none",
      border: "none",
      height: "40px",
      padding: "0 20px",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      background: colors.orange,
      color: colors.white,
      fontSize: "20px",
      fontWeight: "bold",
      top: 3,
    },
    arrow: {
      height: "20px",
      width: "20px",
      filter: "brightness(0) invert(1)",
      marginRight: "10px",
      position: "relative",
      top: 5,
    },
  };
  return (
    <>
      <div style={styles.footerColumn}>
        <h2 style={styles.orangeText}>רוצים לקבל התראה במייל על תוכן חדש?</h2>
        <form style={styles.SearchForm}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder=" נא למלא את כתובת המייל "
          ></input>
          <button style={styles.searchBtn}>
          שלח  <img style={styles.arrow} src="footerImages/arrow.png"></img>
          </button>
        </form>
      </div>
    </>
  );
}
