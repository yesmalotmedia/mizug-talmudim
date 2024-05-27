import React, { useContext } from "react";
import { AppContext } from "../../App";
import lastLessons from "../../data/lastLessons";
import videoUrls from "../../data/videoUrls";
import LessonLinkImg from "../elements/LessonLinkImg";
import YouTubeVideo from "../elements/Video";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";
import bgColors from "../../styles/bg-colors";
const LastLessons = () => {
  //context
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    container: {
      width: "80%",
      maxWidth: isMobile ? 700 : 1400,
      margin: "auto",
      backgroundColor: bgColors.lightAzure,
      borderRadius: 50,
      transform: "translateY(-200px)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
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
