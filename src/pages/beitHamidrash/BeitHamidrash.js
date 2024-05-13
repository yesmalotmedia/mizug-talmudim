import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import Spacer from "../../components/elements/Spacer";
import HeroBeitHamidrash from "../../components/elements/HeroSection";
import SeltectButtons from "./SeltectButtons";
import SideBarSearch from "./SideBarSearch";
import LessonsSection from "./LessonsSection";
import HeroSection from "../../components/elements/HeroSection";

const BeitHamidrash = () => {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  // context

  // states

  // styles

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
      <SideBarSearch />
      <LessonsSection />
    </div>
  );
};

export default BeitHamidrash;
