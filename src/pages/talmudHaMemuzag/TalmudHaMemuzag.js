import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import LessonsSection from "../beitHamidrash/lessons/LessonSection";
import TalmudMemuzagCollection from "./TalmudMemuzagCollection";
import { useParams } from "react-router-dom";
import TalmudMemuzagSection from "./TalmudMemuzagSection";

export default function TalmudHaMemuzag() {
  const { colors } = useContext(AppContext);
  const { articleId } = useParams();

  return (
    <div>
      <HeroSection
        backgroundImage={"heroTalmudMemuzag.png"}
        titleColor={colors.white}
        height={"70vmin"}
        marginTop={90}
      />
      {articleId ? <TalmudMemuzagSection /> : <TalmudMemuzagCollection />}
    </div>
  );
}
