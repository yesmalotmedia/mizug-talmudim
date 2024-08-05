import React, { useContext, useEffect, useState } from "react";
import LessonPreviewBox from "./LessonPreviewBox";
import colors from "../../../styles/colors";
import SelectInput from "../sideBarSearch/SelectInput";
import { AppContext } from "../../../App";
import MobileFilter from "../MobileFilter";
import LoadMore from "../../../components/elements/LoadMore";

const LessonsCollection = ({ lessonsType, setlessonsType }) => {
  const { isMobile, videos, lessonsFilter } = useContext(AppContext);

  const [displayedLessons, setDisplayedLessons] = useState([]);
  const [visiblePostCount, setVisiblePostCount] = useState(20);
  const [orderParam, setOrderParam] = useState("date");
  console.log(displayedLessons);
  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };

  useEffect(() => {
    if (videos) {
      const sortedVideos = [...videos].sort((a, b) => {
        if (orderParam === "date") {
          // מיין לפי תאריך - מהחדש לישן
          return new Date(b.date) - new Date(a.date);
        } else if (orderParam === "rabbi") {
          // מיין לפי שם הרב
          const rabbiComparison = a.rabbiName.localeCompare(b.rabbiName);
          if (rabbiComparison !== 0) return rabbiComparison; // אם השמות שונים, החזר את התוצאה
          // אם השמות זהים, מיין לפי תאריך - מהחדש לישן
          return new Date(b.date) - new Date(a.date);
        }
        return 0; // ברירת מחדל
      });

      const filteredLessons = sortedVideos.filter((video) => {
        // לוגיקת הסינון על פי lessonsFilter
        return true; // החלף לוגיקה זו בלוגיקה האמיתית שלך
      });

      setDisplayedLessons(filteredLessons.slice(0, visiblePostCount));
    }
  }, [lessonsFilter, videos, visiblePostCount, orderParam]);

  const handleOrderChange = (event) => {
    const selectValue = event.target.value; // קבלת הערך הנבחר מהסלקט
    setOrderParam(selectValue);
  };

  const lessonsBoxesElements = displayedLessons.map((video) => (
    <LessonPreviewBox key={video.id} video={video} />
  ));

  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lessonsContainer: {
      width: "100%",
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
      minWidth: 200,
      display: "flex",
    },
    label: {
      width: "30%",
      lineHeight: 3,
      color: colors.azure,
      fontWeight: 500,
    },
    loadMoreContainer: {
      margin: "20px 0",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.titleSection}>
        <div style={styles.title}>
          {lessonsFilter.category || "All Lessons"}
        </div>
        {!isMobile && (
          <div style={styles.sortContainer}>
            <div style={styles.label}>מיין לפי</div>
            <SelectInput
              value={orderParam}
              onChange={handleOrderChange}
              options={[
                { name: "תאריך", value: "date" },
                { name: "רב", value: "rabbi" },
              ]}
            />
          </div>
        )}
      </div>
      {isMobile && <MobileFilter />}
      <div style={styles.lessonsContainer}>{lessonsBoxesElements}</div>
      <div style={styles.loadMoreContainer}>
        <LoadMore onClick={() => loadMorePosts(20)} />
      </div>
    </div>
  );
};

export default LessonsCollection;
