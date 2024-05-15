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

const BeitHamidrash = () => {
  // data
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const screenWidth = window.innerWidth;
  // states
  const [lessonsType, setlessonsType] = useState();
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
      width: "60%",
      justifyContent: "space-between",
      margin: "auto",
    },
  };
  // functions

  return (
    <div>
      <HeroSection
        title={"בית המדרש"}
        backgroundImage={"hero2.png"}
        subTitle={"בחרו את הנושא שמעניין אתכם"}
        titleColor={colors.white}
        height={"60vmin"}
        marginTop={90}
      />

      <HeroBeitHamidrash />
      <SeltectButtons
        lessonsType={lessonsType}
        setlessonsType={setlessonsType}
      />

      <section style={styles.mainSection}>
        <SideBarSearch />
        <LessonsCollection
          lessonsType={lessonsType}
          setlessonsType={setlessonsType}
        />
      </section>
    </div>
  );
};

export default BeitHamidrash;
