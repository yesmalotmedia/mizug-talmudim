import React from "react";
import LastLessons from "../../components/lastLessons/LastLessons";
import AboutSection from "../../components/aboutSection/AboutSection";
import DailyText from "../../components/dailyText/DailyText";
import Spacer from "../../components/elements/Spacer";
import HeroHomePage from "../../components/heroHomepage/HeroHomePage";
import GallerySection from "../../components/gallerySection/GallerySection";

const Home = () => {
  return (
    <div>
      <Spacer height={60} />
      <HeroHomePage />
      <LastLessons />
      <AboutSection />
      <GallerySection />
    </div>
  );
};

export default Home;
