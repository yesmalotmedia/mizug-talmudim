import React from "react";

export default function Images({ imgData }) {
  const styles = {
    imagesContainer: {
      display: "flex",
      flexDirection: "column",
      marginTop: "40px",
    },
    image: {
      height: "50vh",
      margin: "20px 0",
      borderRadius: "30px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      objectFit: "cover",
    },
  };
  return (
    <div style={styles.imagesContainer}>
      {imgData.images.map((image, index) => (
        <img
          key={index}
          src={`/${image}`}
          alt={`Image ${index}`}
          style={styles.image}
        />
      ))}
    </div>
  );
}
