import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";

export default function BookPreviewBox({ img, title, author, price, discountPrice }) {
  const { colors, bgColors,isMobile } = useContext(AppContext);

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: isMobile? "auto":"25vw",
      width: isMobile? "90%" :"16vw",
      border: `1px solid ${colors.azure}`,
      borderRadius: 20,
      textAlign: "center",
      padding: "10px",
    },
    bookImg: {
      height: isMobile? "55vw": "10vw",
      objectFit: "cover",
    },
    title: {
      fontSize: isMobile? '5vw': "",
      color: colors.darkBlue,
      fontWeight: 600,
    },
    author: {
      fontSize: isMobile? '5vw': "",
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
      fontSize: isMobile? '5vw': "",
    },
    originalPrice: {
      color: "red",
      textDecoration: "line-through",
      fontSize: isMobile? '5vw': "",
    },
    discountPrice: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: isMobile? '5vw': "",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
      gap: 10,
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div>
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
