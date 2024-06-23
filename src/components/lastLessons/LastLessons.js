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
import VideoCoverImage from "../elements/VideoCoverImage";
import Button from "../elements/Button";
import getCategoryNameById from "../../assets/getCategoryNameById";
import { useNavigate } from "react-router-dom";

const LastLessons = () => {
  const navigate = useNavigate();
  //context
  const { colors, isMobile, videos, lessonsType, setlessonsType, categories } =
    useContext(AppContext);
  const lastVideos = getLastVideos(videos);
  console.log(videos);
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
    const lastEiun = videos.find((video) => video.categories.includes(19));
    const clalim = videos.find((video) => video.categories.includes(18));
    const lastDafYomi = videos.find((video) => video.categories.includes(5));

    return [lastEiun, clalim, lastDafYomi];
  }

  const handleClick = (categoryId) => {
    setlessonsType(getCategoryNameById(categoryId));
    navigate(`/BeitHamidrash`);
  };
  console.log(lastVideos);

  const lastVideosElements = lastVideos?.map((video, index) => (
    <div key={index} style={{ margin: isMobile ? "10px" : "20px" }}>
      <VideoCoverImage
        url={video?.url}
        videoId={video?.id}
        title={video?.title}
      />
      <br></br>

      <Button
        color={colors.white}
        bgColor={index === 2 ? bgColors.azureGradient : bgColors.orangeGradient}
        hoveredBgColor={bgColors.darkBlueGradient}
        title={`לכל שיעורי ${getCategoryNameById(video?.categories[video?.categories?.length - 1])}`}
        fontSize={20}
        fontWeight={500}
        borderRadius={50}
        width={"100%"}
        arrow={true}
        onClick={() =>
          handleClick(video?.categories[video?.categories?.length - 1])
        }
      />
    </div>
  ));

  return <div style={styles.container}>{lastVideosElements}</div>;
};

export default LastLessons;
