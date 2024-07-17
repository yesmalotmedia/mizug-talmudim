import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import Spacer from "../../components/elements/Spacer";
import HeroBeitHamidrash from "../../components/elements/HeroSection";
import SeltectButtons from "./SeltectButtons";
import SideBarSearch from "./sideBarSearch/SideBarSearch";
import LessonsSection from "./lessons/LessonSection";
import HeroSection from "../../components/elements/HeroSection";
import LessonsCollection from "./lessons/LessonsCollection";
import { useParams } from "react-router-dom";
const BeitHamidrash = () => {
  // data
  const {
    colors,
    bgColors,
    isMobile,
    videos,
    categories,
    loadingCategories,
    lessonsType,
    setlessonsType,
    responsive,
  } = useContext(AppContext);
  const screenWidth = window.innerWidth;

  // states
  const [lessonsFilter, setlessonsFilter] = useState({});
  const { videoId } = useParams();
  // styles
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      margin: responsive(100,0,0),
      justifyContent: "center",
    },
    titleSection: {
      display: "flex",
      width: "60%",
      justifyContent: "space-between",
      // margin: "auto",
    },

    selectionButtonContainer: isMobile
      ? {
          overflowY: "auto",
          margin: "-50px 0 20px 0",
          paddingTop: 100,
          scrollbarWidth: "none",
          paddingRight: 70,
        }
      : {},
  };
  // functions

  return (
    <>
      <HeroSection
        title={"בית המדרש"}
        backgroundImage={"/hero2.png"}
        subTitle={"בחרו את הנושא שמעניין אתכם"}
        titleColor={colors.white}
        height={responsive ("60vmin","50vmin", "75vmin") }
        marginTop={95}
      />

      <div style={styles.selectionButtonContainer}>
        <SeltectButtons
          lessonsType={lessonsType}
          setlessonsType={setlessonsType}
        />
      </div>

      <section style={styles.mainSection}>
        {!isMobile && (
          <SideBarSearch
            lessonsType={lessonsType}
            setlessonsType={setlessonsType}
            setlessonsFilter={setlessonsFilter}
          />
        )}
        {!videoId ? (
          <LessonsCollection
            lessonsType={lessonsType}
            setlessonsType={setlessonsType}
            lessonsFilter={lessonsFilter}
          />
        ) : (
          <LessonsSection videoId={videoId} />
        )}
      </section>
    </>
  );
};

export default BeitHamidrash;
