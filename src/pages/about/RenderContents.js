import React, { useContext } from "react";
import { AppContext } from "../../App";
import Gallery from "../../components/elements/Gallery";

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
  };

  return (
    <>
      <h2 style={styles.title}>{sectionData.firstTitle}</h2>

      <p style={styles.paragraph}>{sectionData.firstParagraph}</p>

      <img style={styles.img} src={sectionData.thumbnail} alt="Thumbnail" />
      <h2 style={styles.title}>{sectionData.secondTitle}</h2>

      <p style={styles.paragraph}>{sectionData.secondParagraph}</p>

      <Gallery data={sectionData} />
    </>
  );
};

export default RenderContents;
