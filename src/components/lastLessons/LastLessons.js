import React from "react";
import lastLessons from "../../data/lastLessons";
import videoUrls from "../../data/videoUrls";
import LessonLinkImg from "../elements/LessonLinkImg";
import YouTubeVideo from "../elements/Video";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";
import bgColors from "../../styles/bg-colors";
const LastLessons = () => {
  const styles = {
    container: {
      width: "80%",
      maxWidth: 1400,
      margin: "auto",
      backgroundColor: bgColors.lightAzure,
      borderRadius: 50,
      transform: "translateY(-70px)",
      display: "flex",
      padding: 20,
      justifyContent: "space-between",
      zIndex: 100,
    },
  };
  const lastLessonsElements = videoUrls.map((url, index) => (
    <YouTubeVideo url={url} index={index} />
  ));

  return <div style={styles.container}>{lastLessonsElements}</div>;
};

export default LastLessons;
