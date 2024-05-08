import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import Spacer from "../../components/elements/Spacer";
import HeroBeitHamidrash from "./HeroBeitHamidrash";
import SeltectButtons from "./SeltectButtons";
import SideBarSearch from "./sideBarSearch/SideBarSearch";
import LessonsSection from "./LessonsSection";

const BeitHamidrash = () => {
  const { colors, bgColors, isMobile } = useContext(AppContext);

  // context

  // states

  // styles

  // functions

  return (
    <div>
      <Spacer height={60} />
      <HeroBeitHamidrash />
      <SideBarSearch />
      <LessonsSection />
    </div>
  );
};

export default BeitHamidrash;
