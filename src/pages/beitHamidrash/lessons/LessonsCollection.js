import React, { useContext, useEffect, useState } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";
import { AppContext } from "../../../App";
import MobileFilter from "../MobileFilter";
import getCategoryIdByName from "../../../assets/geCategoryIdByName";
import filterLessons from "../../../assets/dataTest/filterLessons";

const LessonsCollection = ({
  lessonsType,
  setlessonsType,
  lessonsFilter,
  setlessonsFilter,
}) => {
  const { isMobile, parsedData, videos } = useContext(AppContext);
  const [displayedLessons, setDisplayedLessons] = useState(videos);

  // styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: isMobile ? "100%" : "90%",
      maxWidth: 1200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
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
      width: "30%",
      lineHeight: 3,
      color: colors.azure,
      fontWeight: 500,
    },
  };

  useEffect(() => {
    console.log("useeffect runs");
    if (videos) {
      setDisplayedLessons(filterLessons(videos, lessonsFilter));
    }
  }, [lessonsFilter, videos]);

  const lessonsBoxesElements = displayedLessons?.map((video) => (
    <LessonPreviewBox key={video.id} video={video} />
  ));

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}>{lessonsFilter.category}</div>

        {!isMobile && (
          <div style={styles.sortContainer}>
            <div style={styles.label}>מיין לפי</div>
            <SelectInput
              options={[
                { name: "תאריך", value: "date" },
                { name: "רב", value: "rabbi" },
                { name: "נושא", value: "category" },
              ]}
            />
          </div>
        )}
      </div>
      {isMobile && <MobileFilter />}
      <div style={styles.lessonsContainer}>{lessonsBoxesElements}</div>
    </div>
  );
};

export default LessonsCollection;
