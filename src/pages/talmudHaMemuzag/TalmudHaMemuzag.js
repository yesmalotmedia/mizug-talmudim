import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import LessonsSection from "../beitHamidrash/lessons/LessonSection";

export default function TalmudHaMemuzag() {
  const { colors } = useContext(AppContext);
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
    </div>
  );
}
