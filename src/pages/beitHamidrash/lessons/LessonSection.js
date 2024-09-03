import React, { useContext } from "react";
import { AppContext } from "../../../App";
import AudioPlayer from "../../../components/AudioPlayer/AudioPlayer";
import playerVars from "../../../components/AudioPlayer/PlayerVars"
import { useParams } from "react-router-dom";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import getCategoryNameById from "../../../assets/getCategoryNameById";
import extractYoutubeCoverByVideoId from "../../../assets/extractYoutubeCoverByVideoId";
import VideoCover from "../../../components/elements/VideoCover";
import SpotifyPodcast from "../SpotifyPodcast";
import LoaderAnimation from "../../../components/elements/LoaderAnimation";

export default function LessonSection({ videoId }) {
  const { colors, responsive, videos } = useContext(AppContext);
const audioUrl = "KWX8lzzzrzA"
  if (!videos) {
    console.error("Videos not available in context");
    return <LoaderAnimation isLoading={!videos} color={colors.orange} />;
  }

  const video = videos.find((video) => video.id == videoId);
  const isVideo = video?.contentType.includes("video");
  const isAudio = video?.contentType.includes("audio");
  const isText = video?.contentType.includes("text");
  if (!video) {
    console.error(`No video found with id: ${videoId}`);
    return <LoaderAnimation isLoading={!video} color={colors.orange} />;
  }

  const coverImage = extractYoutubeCoverByVideoId(video.url);

  const mainCategory = getCategoryNameById(video.categories[0]);
  const subCategory = getCategoryNameById(video.categories[1]);

  const styles = {
    container: {
      textAlign: "right",
      width: "100%",
    },
    headerSection: {
      width: "100%",
    },
    breadcrumb: {
      color: colors.grey,
      fontWeight: 500,
      paddingBottom: 20,
    },
    nameOfRav: {
      color: colors.azure,
    },
    nameOfShiur: {
      color: colors.darkBlue,
      padding: "7px 0",
    },
    timeAndTimeContainer: {
      width: responsive("100%", "100%", "100%"),
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    icon: {
      height: 20,
      width: 20,
    },
    dateAndTimeText: {
      width: "100%",
      padding: "0 10px",
      fontWeight: 400,
      color: colors.grey,
    },
    descriptionContainer: {
      marginTop: 20,
      width: responsive("100%", "70%", "90%"),
      marginInline: "auto",
    },
    description: {
      textAlign: "justify",
      lineHeight: "1.9rem",
      width: "100%",
    },
    footerSection: {
      width: responsive("100%", "70%", "90%"),
    },
    commentsTitle: {
      color: colors.azure,
      padding: responsive("30px 60px 10px 0", "10px 110px 10px 0", "10px 10px"),
    },
    input: {
      width: responsive("85%", "100%", "100%"),
      outline: "none",
      padding: 10,
      marginRight: responsive(60, 110, 10),
      borderRadius: 40,
      border: "1px solid black",
    },
    audioContainer:{
      border: "1px solid #ccc",
      borderRadius: 20,
      marginTop: 20,
      display: "flex",
      flexDirection:responsive("row","column-reverse","column-reverse"),
      alignItems: "center",
      justifyContent: responsive( "flex-end", "center", "center"),
width: "100%",
    },
    playerContainer:{
      display: "flex",
      flexDirection:"column",
      padding: "10px 20px",
    },
    audioThumbnail:{
      height: 120,
      width: 120,
      borderRadius: 20,
      marginLeft: 7,
    },
    topText:{
      marginRight: 0,
   
    },
    title:{
 width:"100%"
    },
    date:{
      fontWeight: 500,
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <p style={styles.breadcrumb}>
          <span>{mainCategory}</span> / <span>{subCategory}</span>
        </p>
        <h2 style={styles.nameOfRav}>{video.rabbiName}</h2>
        <h1 style={styles.nameOfShiur}>{video.title}</h1>
      </div>

      <div style={styles.videoSection}>
        <div style={styles.timeAndTimeContainer}>
          <span style={styles.dateAndTimeText}>{video.date}</span>
          <img style={styles.icon} src="/time.png" alt="time icon" />
          <span style={styles.dateAndTimeText}> זמן קריאה: 8 דק’ </span>
        </div>
        <div style={styles.dedicate}>{video.dedicatedTo}</div>
        {isVideo && <YouTubeVideo2 url={video.url} index={video.key} />}
      
      </div>
      {isAudio && ( 
        <>    
       
        <div style={styles.audioContainer}>
          <div style={styles.playerContainer}>
            <div style={styles.topText}>
                <p style={styles.title}> לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם דמי טקסט או </p>
            <p style={styles.date}> 21 july</p> 
            </div>
          
          
               <AudioPlayer 
              key={audioUrl} 
              audioUrl={audioUrl} 
              shouldPlay={false} 
              playerVars={playerVars} 
             />
         
           
          </div>
  
        <img style={styles.audioThumbnail} src="../sky.png"/>
        </div></>    
      )}
      {isText && (
        <div style={styles.descriptionContainer}>
          <div
            style={styles.description}
            dangerouslySetInnerHTML={{ __html: video.article }}
          />
        </div>
      )}

      {/* Uncomment this section if you need the comments feature */}
      {/* <div style={styles.footerSection}>
        <h3 style={styles.commentsTitle}> תגובות </h3>
        <input
          style={styles.input}
          type="text"
          placeholder=" הוסיפו תגובה "
        ></input>
      </div> */}
    </div>
  );
}
