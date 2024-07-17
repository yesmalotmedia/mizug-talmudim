import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function PostsPreviewBox({
  title,
  date,
  thumbnail,
  article,
  postId,
}) {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    mainSection: {
      gap: isMobile ? 0 : 15,
      width: isMobile ? "95%" : "60%",
      marginInline: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    textSection: {
      borderTopRightRadius: isMobile ? 5 : 20,
      borderBottomRightRadius: isMobile ? 5 : 20,
      height: isMobile ? "23vmax" : "20vmax",
      width: isMobile ? "70%" : "40%",
      background: colors.white,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      padding: isMobile ? "5px 10px" : "10px 20px",
      fontSize: "1vmax",
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      height: isMobile ? "23vmax" : "20vmax",
      width: isMobile ? "40%" : "60%",
      borderTopLeftRadius: isMobile ? 8 : 20,
      borderBottomLeftRadius: isMobile ? 8 : 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
    textTitle: {
      color: colors.darkBlue,
      fontSize: isMobile ? "4vw" : 20,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "1.5vmax 0 1vmax 0",
      color: "gray",
    },
    tarikImg: {
      height: isMobile ? "1.7vh" : "2.5vh",
      marginLeft: 10,
    },
    tarik: {
      fontSize: isMobile ? 12 : 17,
    },
    article: {
      marginBottom: "0.6vw",
      fontSize: isMobile ? "4vw" : "1vmax",
      lineHeight: isMobile ? "" : "1.5vw",
      maxHeight: isMobile ? "20vw" : "9vw",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: isMobile ? 3 : 5,
    },
    btn: {
      marginTop: isMobile ? 9 : 0,
      color: colors.orange,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: isMobile ? "4vw" : "1.3vmax",
      cursor: "pointer",
      width: isMobile ? "45vw" : "10.5vw",
      textDecoration: "none",
    },
    btnImg: {
      height: isMobile ? "3vw" : "1vw",
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
              <span>{date}</span>
            </p>
          </div>

          <div
            style={styles.article}
            dangerouslySetInnerHTML={{ __html: article }}
          />

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
