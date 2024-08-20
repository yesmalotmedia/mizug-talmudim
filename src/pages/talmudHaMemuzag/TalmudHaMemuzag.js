import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import LessonsSection from "../beitHamidrash/lessons/LessonSection";
import TalmudMemuzagCollection from "./TalmudMemuzagCollection";
import { useParams } from "react-router-dom";
import TalmudMemuzagSection from "./TalmudMemuzagSection";
import MemuzagSideBarSearch from "./MemuzagSideBarSearch";

export default function TalmudHaMemuzag() {
  const { colors, responsive, isMobile } = useContext(AppContext);
  const { articleId } = useParams();

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
  return (
    <div>
      <HeroSection
        backgroundImage={"heroTalmudMemuzag.png"}
        title={" התלמוד הממוזג "}
        subTitle={"עד שילך עמנו אור הבבלי ויתאחד עם התלמוד הירושלמי"}
        titleColor={colors.white}
        height={responsive("78vmin", "60vmin", "85vmin")}
        marginTop={responsive("40px", "90px", "90px")}
      />
      <section style={styles.mainSection}>
        {!isMobile && <MemuzagSideBarSearch />}
        {articleId ? <TalmudMemuzagSection /> : <TalmudMemuzagCollection />}
      </section>
    </div>
  );
}
