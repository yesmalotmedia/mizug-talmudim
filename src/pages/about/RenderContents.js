import React, { useContext } from "react";
import { AppContext } from "../../App";

const RenderContents = ({ sectionData }) => {
  const { colors } = useContext(AppContext);

  const styles = {
    title: {
      color: colors.darkBlue,
      fontSize: "2vw",
      marginBottom: 25,
    },
    paragraph: {
      textAlign: "justify",
      fontSize: "1.2vw",
      lineHeight: "1.6vw",
      marginBottom: 15,
    },
    img: {
      width: "60vw",
      borderRadius: 20,
      margin: "30px 0",
    },
    imageRowContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 30,
    },
    imageRow: {
      flex: "0 0 48%",
      height: "21.5vw",
      borderRadius: 20,
      marginBottom: 20,
    },
    fullWidthImage: {
      flex: "0 0 100%",
      height: "40vw",
      borderRadius: 20,
      marginBottom: 20,
    },
  };

  return (
    <>
      <h2 style={styles.title}>{sectionData.firstTitle}</h2>

      <p style={styles.paragraph}>{sectionData.firstParagraph}</p>

      <img style={styles.img} src={sectionData.thumbnail} alt="Thumbnail" />
      <h2 style={styles.title}>{sectionData.secondTitle}</h2>

      <p style={styles.paragraph}>{sectionData.secondParagraph}</p>

      <div style={styles.imageRowContainer}>
        {sectionData.images.map((imgSrc, index) => {
          // If the last image is alone, apply fullWidthImage style
          const isLastImageAlone =
            sectionData.images.length % 2 !== 0 &&
            index === sectionData.images.length - 1;
          return (
            <img
              key={index}
              style={isLastImageAlone ? styles.fullWidthImage : styles.imageRow}
              src={imgSrc}
              alt={`Image ${index + 1}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default RenderContents;
