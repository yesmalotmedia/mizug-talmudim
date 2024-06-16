import React, { useContext } from "react";
import { AppContext } from "../../App";
import Gallery from "../../components/elements/Gallery";

const RenderContents = ({ sectionData }) => {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    container:{
marginBottom: 80,
    },
    title: {
      color: colors.darkBlue,
      fontSize:isMobile? "8vw": "2vw",
      marginBottom: 25,
    },
    paragraph: {
      textAlign: "justify",
      fontSize: isMobile? "5vw":"1.2vw",
      lineHeight:isMobile? "8vw": "1.6vw",
      marginBottom: 15,
    },
    img: {
      width: isMobile? "100%":"60vw",
      borderRadius: 20,
      margin: "30px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{sectionData.firstTitle}</h2>

      <p style={styles.paragraph}>{sectionData.firstParagraph}</p>

      <img style={styles.img} src={sectionData.thumbnail} alt="Thumbnail" />
      <h2 style={styles.title}>{sectionData.secondTitle}</h2>

      <p style={styles.paragraph}>{sectionData.secondParagraph}</p>

      <Gallery data={sectionData} />
    </div>
  );
};

export default RenderContents;
