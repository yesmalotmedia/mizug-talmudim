import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import Spacer from "../../components/elements/Spacer";
import HeroBeitHamidrash from "./HeroBeitHamidrash";
import SeltectButtons from "./SeltectButtons";
import SideBarSearch from "./sideBarSearch/SideBarSearch";
import LessonPreviewBox from "./lessons/LessonPreviewBox";
import LessonsCollection from "./lessons/LessonsCollection";

const BeitHamidrash = () => {
  // data
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const screenWidth = window.innerWidth;
  // states

  // styles
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      marginTop: 100,
      justifyContent: "center",
    },
    titleSection: {
      display: "flex",
    },
  };
  // functions

  return (
    <div>
      <Spacer height={60} />
      <HeroBeitHamidrash />
      <div style={styles.titleSection}>
        <div>שיעורי עיון</div>
        <div>sort</div>
      </div>
      <section style={styles.mainSection}>
        <SideBarSearch />
        <LessonsCollection />
      </section>
    </div>
  );
};

export default BeitHamidrash;
