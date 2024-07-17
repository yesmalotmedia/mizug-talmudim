import React, { useContext, useState } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";
import { AppContext } from "../../../App";
import MobileFilter from "../MobileFilter";
import getCategoryIdByName from "../../../assets/geCategoryIdByName";
import LoadMore from "../../../components/elements/LoadMore";

const LessonsCollection = ({ lessonsType, setlessonsType, lessonsFilter }) => {
  const { isMobile, parsedData, videos ,responsive } = useContext(AppContext);
  const [visiblePostCount, setVisiblePostCount] = useState(20); // State to manage visible posts

  // Filter lessons based on type
  const filterLessonsByType = (lessonsType) => {
    const filteredLessons = videos.filter((video) =>
      video.categories.includes(getCategoryIdByName(lessonsType))
    );
    return lessonsType === "כל השיעורים" ? videos : filteredLessons;
  };

  // Render lessons based on filtered type
  const lessonsBoxesElements = filterLessonsByType(lessonsType)
    .slice(0, visiblePostCount) // Slice to show only the visible posts
    .map((video) => (
      <LessonPreviewBox key={video.id} video={video} />
    ));

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePostCount((prevCount) => prevCount + 20); // Increment by 20
  };

  // Styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: responsive("90%","100%","100%"),
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
    loadMoreContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}>{lessonsType}</div>
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
      <div style={styles.lessonsContainer}>
        {lessonsBoxesElements}
        {visiblePostCount < filterLessonsByType(lessonsType).length && (
          <div style={styles.loadMoreContainer}>
            <LoadMore onClick={loadMorePosts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsCollection;
