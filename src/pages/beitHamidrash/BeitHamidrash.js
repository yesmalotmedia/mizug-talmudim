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
  const { colors, bgColors, isMobile, videos } = useContext(AppContext);
  const screenWidth = window.innerWidth;
  // states
  const [lessonsType, setlessonsType] = useState("הדף היומי");
  const { videoId } = useParams();
  // styles
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      margin: isMobile ? 0 : 100,
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
        backgroundImage={"hero2.png"}
        subTitle={"בחרו את הנושא שמעניין אתכם"}
        titleColor={colors.white}
        height={isMobile ? "75vmin" : "60vmin"}
        marginTop={isMobile ? 95 : 90}
      />

      <div style={styles.selectionButtonContainer}>
        <SeltectButtons
          lessonsType={lessonsType}
          setlessonsType={setlessonsType}
        />
      </div>

      <section style={styles.mainSection}>
        {!isMobile && <SideBarSearch />}
        {!videoId ? (
          <LessonsCollection
            lessonsType={lessonsType}
            setlessonsType={setlessonsType}
          />
        ) : (
          <LessonsSection videoId={videoId} />
        )}
      </section>
    </>
  );
};

export default BeitHamidrash;
