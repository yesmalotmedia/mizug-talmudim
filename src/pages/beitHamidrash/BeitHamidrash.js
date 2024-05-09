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
  const styles = {
    mainSection: {
      padding: 15,
      display: "flex",
      marginTop: 100,
      justifyContent: "center",
    },
  };
  // functions

  return (
    <div>
      <Spacer height={60} />
      <HeroBeitHamidrash />
      <section style={styles.mainSection}>
        <SideBarSearch />
        <LessonsSection />
      </section>
    </div>
  );
};

export default BeitHamidrash;
