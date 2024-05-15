import React from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";

const LessonsCollection = ({ lessonsType, setlessonsType }) => {
  // data
  const leesonsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // styles
  const styles = {
    mainContainer: {},
    lessonsContainer: {
      width: "80%",
      maxWidth: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    box: {
      margin: "5px", // Adjust the space between boxes here
    },
    titleSection: {
      display: "flex",
      width: "80%",
      padding: "0 1%",
      justifyContent: "space-between",
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 700,
      fontSize: 22,
    },
    sortContainer: {
      width: "40%",
      display: "flex",
    },
    label: {
      width: "20%",
      lineHeight: 3,
      color: colors.azure,
      fontWeight: 500,
    },
  };

  // functions
  const lessonsBoxesElements = leesonsData.map((lesson) => (
    <div key={lesson} style={styles.box}>
      <LessonPreviewBox />
      <br />
    </div>
  ));

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}> {lessonsType}</div>
        <div style={styles.sortContainer}>
          <div style={styles.label}>מיין לפי</div>
          <SelectInput />
        </div>
      </div>
      <div style={styles.lessonsContainer}>{lessonsBoxesElements}</div>
    </div>
  );
};

export default LessonsCollection;
