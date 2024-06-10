import React, { useContext } from "react";
import { AppContext } from "../../App";
import lastLessons from "../../data/lastLessons";
import videoUrls from "../../data/videoUrls";
import LessonLinkImg from "../elements/LessonLinkImg";
import YouTubeVideo from "../elements/YouTubeVideo";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import colors from "../../styles/colors";
import Spacer from "../elements/Spacer";
import bgColors from "../../styles/bg-colors";
import YouTubeVideo2 from "../elements/youTubeVideo2";
const LastLessons = () => {
  //context
  const { colors, isMobile, videos } = useContext(AppContext);

  const lastVideos = getLastVideos(videos);
  const styles = {
    container: {
      width: "80%",
      maxWidth: isMobile ? 700 : 1400,
      margin: "auto",
      backgroundColor: bgColors.lightAzure,
      borderRadius: 50,
      transform: "translateY(-200px)",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      padding: 20,
      justifyContent: "space-between",
      zIndex: 100,
    },
  };

  //functions
  function getLastVideos(videos) {
    const lastDafYomi = [...videos]
      .reverse()
      .find((video) => video.categories.includes(5));
    const lastEiun = [...videos]
      .reverse()
      .find((video) => video.categories.includes(6));
    const clalim = [...videos]
      .reverse()
      .find((video) => video.categories.includes(9));

    console.log(lastDafYomi, lastEiun, clalim);
    return [lastEiun, clalim, lastDafYomi];
  }

  const lastVideosElements = lastVideos?.map((video, index) => (
    <YouTubeVideo
      title={video?.title}
      url={video?.url}
      index={index}
      category={video?.categories[1]}
    />
  ));

  return <div style={styles.container}>{lastVideosElements}</div>;
};

export default LastLessons;
