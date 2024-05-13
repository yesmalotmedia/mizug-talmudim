import React from "react";
import LessonPreviewBox from "./LessonPreviewBox";

const LessonsCollection = () => {
  // data
  const leesonsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // styles
  const styles = {
    container: {
      width: "55%",
      maxWidth: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    box: {
      margin: "5px", // Adjust the space between boxes here
    },
  };

  // functions
  const lessonsBoxesElements = leesonsData.map((lesson) => (
    <div key={lesson} style={styles.box}>
      <LessonPreviewBox />
      <br />
    </div>
  ));

  return <div style={styles.container}>{lessonsBoxesElements}</div>;
};

export default LessonsCollection;
