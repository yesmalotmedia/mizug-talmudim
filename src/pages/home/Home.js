import React from "react";
import LastLessons from "../../components/lastLessons/LastLessons";
import Gallery from "../../components/gallery/Gallery";
import About from "../../components/about/About";
import DailyText from "../../components/dailyText/DailyText";
import Spacer from "../../components/elements/Spacer";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";

const Home = () => {
  return (
    <div>
      <Spacer height={60} />
      <HeroHomePage />
    </div>
  );
};

export default Home;
