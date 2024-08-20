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
import LoaderAnimation from "../elements/LoaderAnimation";

const LastLessons = () => {
  const navigate = useNavigate();
  //context
  const {
    colors,
    responsive,
    videos,
    lessonsType,
    setlessonsType,
    setlessonsFilter,
    categories,
    lessonsFilter,
    loadingPosts,
  } = useContext(AppContext);
  const lastVideos = getLastVideos(videos);
  const styles = {
    container: {
      width: responsive("80%", "80%", "90%"),
      maxWidth: responsive(1400, 900, 600),
      margin: "auto",
      backgroundColor: bgColors.lightAzure,
      borderRadius: 50,
      transform: responsive(
        "translateY(-200px)",
        "translateY(-400px)",
        "translateY(-200px)"
      ),
      display: "flex",
      flexDirection: responsive("row", "column", "column"),
      padding: 20,
      justifyContent: "space-between",
      zIndex: 100,
    },
    img: {
      margin: responsive(20, 10, 10),
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
    const categoryName = getCategoryNameById(categoryId);
    setlessonsFilter({ category: categoryName });
    navigate(`/BeitHamidrash`);
  };

  const lastVideosElements = lastVideos?.map((video, index) => (
    <div key={index} style={styles.img}>
      {loadingPosts ? (
        <LoaderAnimation isLoading={loadingPosts} color={colors.orange} />
      ) : (
        <VideoCoverImage
          url={video?.url}
          videoId={video?.id}
          title={video?.title}
        />
      )}
      <Button
        color={colors.white}
        bgColor={index === 2 ? bgColors.azureGradient : bgColors.orangeGradient}
        hoveredBgColor={bgColors.darkBlueGradient}
        title={`לכל שיעורי ${getCategoryNameById(index === 0 ? 19 : index === 1 ? 18 : 5)}`}
        fontSize={responsive("1.2rem", "1.4rem", "1rem")}
        fontWeight={500}
        borderRadius={50}
        width={"100%"}
        arrow={true}
        margin={"10px 0 0 0"}
        onClick={() => handleClick(index === 0 ? 19 : index === 1 ? 18 : 5)}
      />
    </div>
  ));

  return <div style={styles.container}>{lastVideosElements}</div>;
};

export default LastLessons;
