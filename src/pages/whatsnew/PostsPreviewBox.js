import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function PostsPreviewBox({
  title,
  dateEn,
  dateHe,
  thumbnail,
  article,
  postId,
}) {
  const { colors } = useContext(AppContext);

  const styles = {
    mainSection: {
      gap: 15,
      width: "60%",
      marginInline: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    textSection: {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      height: "20vmax",
      width: "40%",
      background: colors.white,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: "10px 20px",
      fontSize: "1vmax",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      height: "20vmax",
      width: "60%",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    textTitle: {
      color: colors.darkBlue,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "1.5vmax 0 1vmax 0",
      color: "gray",
    },
    tarikImg: {
      height: "2.5vh",
      marginLeft: 10,
    },
    article: {
      marginBottom: "0.6vw",
      fontSize: "1vmax",
      lineHeight: "1.5vw",
      maxHeight: "9vw",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 5,
    },
    btn: {
      color: colors.orange,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: "1.3vmax",
      cursor: "pointer",
      width: "10.5vw",
      textDecoration: "none",
    },
    btnImg: {
      height: "1vw",
      paddingRight: "15px",
    },
  };
  return (
    <>
      <div style={styles.mainSection}>
        <div style={styles.textSection}>
          <h2 style={styles.textTitle}> {title} </h2>
          <div style={styles.tarikContainer}>
            <img style={styles.tarikImg} src="tarik.png"></img>
            <p style={styles.tarik}>
              <span>{dateHe}</span> | <span>{dateEn}</span>
            </p>
          </div>
          <div style={styles.article}>
            <p>{article}</p>
          </div>

          <Link style={styles.btn} to={`/WhatsNew/${postId}`}>
            <span>להמשך קריאה</span>
            <img style={styles.btnImg} src="arrowLeft-orange.png"></img>
          </Link>
        </div>

        <img style={styles.image} src={thumbnail}></img>
      </div>
    </>
  );
}
