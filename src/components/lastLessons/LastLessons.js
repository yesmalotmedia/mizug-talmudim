import React from "react";
import lastLessons from "../../data/lastLessons";
import videoUrls from "../../data/videoUrls";
import LessonLinkImg from "../elements/LessonLinkImg";
import YouTubeVideo from "../elements/Video";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";
const LastLessons = () => {
  const styles = {
    container: sectionCream,
    lastLessons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    h2: {
      color: colors.darkBlue,
    },
  };
  const lastLessonsElements = videoUrls.map((url) => (
    <YouTubeVideo url={url} />
  ));

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>שיעורים אחרונים</h2>
      <Spacer height={20} />
      <div style={styles.lastLessons}>{lastLessonsElements}</div>
    </div>
  );
};

export default LastLessons;
