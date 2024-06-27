import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function BookPreviewBox({ img, title, author, price, discountPrice }) {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: isMobile ? "auto" : "25vw",
      width: isMobile ? "90%" : "16vw",
      border: `1px solid ${colors.azure}`,
      borderRadius: 20,
      textAlign: "center",
      padding: "10px",
      cursor: 'pointer',
      boxShadow: isHovered ? 'rgba(50, 50, 105, 0.3) 0px 4px 10px 0px, rgba(0, 0, 0, 0.1) 0px 2px 2px 0px' : 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      transition: 'box-shadow 0.3s ease',
    },
    bookImgContainer: {
      overflow: "hidden",
      borderRadius: 20,
      position: "relative",
    },
    bookImg: {
      height: isMobile ? "55vw" : "10vw",
      objectFit: "cover",
      transition: 'transform 0.3s ease',
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    },
    title: {
      fontSize: isMobile ? '5vw' : "",
      color: colors.darkBlue,
      fontWeight: 600,
    },
    author: {
      fontSize: isMobile ? '5vw' : "",
      color: colors.darkBlue,
      padding: "10px 0",
      fontWeight: 500,
    },
    priceContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    price: {
      color: colors.darkBlue,
      fontWeight: 600,
      marginBottom: "5px",
      fontSize: isMobile ? '5vw' : "",
    },
    originalPrice: {
      color: "red",
      textDecoration: "line-through",
      fontSize: isMobile ? '5vw' : "",
    },
    discountPrice: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: isMobile ? '5vw' : "",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
      gap: 10,
    },
  };

  return (
    <div
      style={styles.mainContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div style={styles.bookImgContainer}>
        <img style={styles.bookImg} src={img} alt="Book Cover" />
      </div>
      <p style={styles.title}>{title}</p>
      <p style={styles.author}>{author}</p>
      <div style={styles.priceContainer}>
        {discountPrice ? (
          <>
            <p style={styles.originalPrice}>{price} שח </p>
            <p style={styles.discountPrice}>{discountPrice} שח </p>
          </>
        ) : (
          <p style={styles.price}>{price} שח </p>
        )}
      </div>
      <div style={styles.btnContainer}>
        <Button
          background={bgColors.azureGradient}
          btnImg={"/addToCart.png"}
          btnText={"הוספה לסל"}
        />
        <Button
          background={bgColors.orangeGradient}
          btnImg={"/download.png"}
          btnText={"להורדה"}
        />
      </div>
    </div>
  );
}
