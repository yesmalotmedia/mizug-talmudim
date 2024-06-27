import React, { useState, useContext } from "react";
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
  const { colors, isMobile } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  const styles = {
    mainSection: {
      gap: isMobile ? 0 : 15,
      width: isMobile ? "95%" : "60%",
      marginInline: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
      cursor: 'pointer',
    },
    textSection: {
      borderTopRightRadius: isMobile ? 5 : 20,
      borderBottomRightRadius: isMobile ? 5 : 20,
      height: isMobile ? "23vmax" : "20vmax",
      width: isMobile ? "70%" : "40%",
      background: colors.white,
      boxShadow: hover ? "rgba(0, 0, 0, 0.3) 0px 6px 15px" : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
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
      boxShadow: hover ? "rgba(0, 0, 0, 0.3) 0px 6px 15px" : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
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
      color: colors.grey,
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
      lineHeight: isMobile ? '' : "1.5vw",
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
      fontSize: isMobile ? "4.5vw" : "1.5vmax",
      cursor: "pointer",
      width: isMobile ? '45vw' : "12vw",
      textDecoration: "none",
    },
    btnImg: {
      height:  isMobile ? "3.5vw" : "1.2vw",
      paddingRight: "15px",
    },
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleTouchStart = () => setHover(true);

  return (
    <div
      style={styles.mainSection}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseLeave}
    >
      <div style={styles.textSection}>
        <h2 style={styles.textTitle}> {title} </h2>
        <div style={styles.tarikContainer}>
          <img style={styles.tarikImg} src="tarik.png" alt="date icon" />
          <p style={styles.tarik}>
            <span>{dateHe}</span> | <span>{dateEn}</span>
          </p>
        </div>
        <div style={styles.article}>
          <p>{article}</p>
        </div>
        <Link style={styles.btn} to={`/WhatsNew/${postId}`}>
          <span>להמשך קריאה</span>
          <img style={styles.btnImg} src="arrowLeft-orange.png" alt="arrow icon" />
        </Link>
      </div>
      <img style={styles.image} src={thumbnail} alt="thumbnail" />
    </div>
  );
}
