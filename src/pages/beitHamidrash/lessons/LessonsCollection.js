import React, { useContext } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";
import { AppContext } from "../../../App";

const LessonsCollection = ({ lessonsType, setlessonsType }) => {
  const {isMobile} = useContext(AppContext)
  // data
  const leesonsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: isMobile? "99%":"80%",
      maxWidth: 1200,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "30px", // Adjust the space between boxes here
      margin: "0 auto",
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
    <LessonPreviewBox key={lesson} />
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
