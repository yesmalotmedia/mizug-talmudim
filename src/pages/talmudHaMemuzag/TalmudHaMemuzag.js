import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import LessonsSection from "../beitHamidrash/lessons/LessonSection";
import TalmudMemuzagCollection from "./TalmudMemuzagCollection";
import { useParams } from "react-router-dom";
import TalmudMemuzagSection from "./TalmudMemuzagSection";

export default function TalmudHaMemuzag() {
  const { colors,responsive } = useContext(AppContext);
  const { articleId } = useParams();

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
      {articleId ? <TalmudMemuzagSection /> : <TalmudMemuzagCollection />}
    </div>
  );
}
