import React, { useContext } from "react";
import { AppContext } from "../../../App";
import AudioPlayer from "../../../components/elements/AudioPlayer";
import { useParams } from "react-router-dom";
import YouTubeVideo2 from "../../../components/elements/youTubeVideo2";
import getCategoryNameById from "../../../assets/getCategoryNameById";
import extractYoutubeCoverByVideoId from "../../../assets/extractYoutubeCoverByVideoId";
import VideoCover from "../../../components/elements/VideoCover";
import SpotifyPodcast from "../SpotifyPodcast";

export default function LessonSection({ videoId }) {
  const { colors, bgColors, isMobile, videos } = useContext(AppContext);
  const video = videos?.find((video) => video?.id == videoId);
  const coverImage = extractYoutubeCoverByVideoId(video?.url);
  console.log(coverImage);

  const mainCategory = getCategoryNameById(video?.categories[0]);
  const subCategory = getCategoryNameById(video?.categories[1]);
  console.log(video);
  const styles = {
    container: {
      textAlign: "right",
      width: "100%",
    },
    headerSection: {
      width: "100%",
    },
    breadscrumb: {
      color: "gray",
      fontWeight: 500,
      paddingBottom: 20,
    },
    nameOfRav: {
      color: colors.azure,
    },
    nameOfSiur: {
      color: colors.darkBlue,
      padding: "7px 0",
    },
    nameOfTitle: {
      color: colors.darkBlue,
    },
    timeAndTimeContainer: {
      width: isMobile ? "100%" : "",
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    icon: {
      height: 20,
      width: 20,
    },
    dateAndTimeText: {
      width: isMobile ? "100%" : "",
      padding: "0 10px",
      fontWeight: 400,
      color: "gray",
    },
    dedicate: {
      color: colors.azure,
      marginBottom: 10,
    },
    videoSection: {
      width: isMobile ? "100%" : "70%",
    },
    video: {
      height: isMobile ? "30%" : " 40%",
      width: isMobile ? "100%" : "70%",
      borderRadius: 10,
      border: `2px solid ${colors.darkBlue}`,
    },
    audioContainer: {
      width: isMobile ? "100%" : "70%",
      marginTop: 10,
      height: 60,
    },
    descriptionContainer: {
      marginTop: 20,
      width: isMobile ? "100%" : "70%",
    },
    description: {
      textAlign: "justify",
      padding: isMobile ? "20px 10px" : "15px 70px 10px 70px",
      lineHeight: "1.9rem",
    },
    footerSection: {
      width: isMobile ? "90%" : "70%",
    },
    commentsTitle: {
      color: colors.azure,
      padding: isMobile ? "10px 10px" : "30px 60px 10px 0",
    },
    input: {
      width: isMobile ? "100%" : "85%",
      outline: "none",
      padding: 10,
      marginRight: isMobile ? 10 : 60,
      borderRadius: 40,
      border: "1px solid black",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <p style={styles.breadscrumb}>
          <span> {mainCategory}</span> / <span>{subCategory}</span>
        </p>
        <h2 style={styles.nameOfRav}> {video?.rabbiName} </h2>
        <h1 style={styles.nameOfSiur}> {video?.title} </h1>
      </div>

      <div style={styles.videoSection}>
        <div style={styles.timeAndTimeContainer}>
          <span style={styles.dateAndTimeText}>{video?.date}</span>
          <img style={styles.icon} src="/time.png"></img>
          <span style={styles.dateAndTimeText}> זמן קריאה: 8 דק’ </span>
        </div>
        <div
          style={styles.dedicate}
        >{`השיעור מוקדש לעילוי נשמת פלוני בן אלמוני`}</div>
        <YouTubeVideo2 url={video?.url} index={video?.key} />{" "}
      </div>
      <div style={styles.audioContainer}>
        {/* <AudioPlayer audioSrc="audioPlayer/testAudio.mp3" /> */}
        {/* <SpotifyPodcast
          url={
            "https://open.spotify.com/episode/46sE5WPVezUOmlHHxXoJ6H?si=3ed678aa92614671"
          }
        /> */}
      </div>
      <div style={styles.descriptionContainer}>
        <p style={styles.description}>
          ילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
          אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון
          בלרק - וענוף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך
          תצטריק לרטי.  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
          אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,
          קראס אגת לקטוס וואל אאוגו וסטיבולום ריק לרטי.
          <br />  הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
          תוק, הדש שנרא התידם הכייר וק. ילקוף, מרגשי ומרגשח.
          <br /> עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר
          מודוף.
          <br />
          <br /> אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף
          קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
           לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי
          נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
          לקטוס וואל אאוגו וסטיבולום ריק לרטי.  הועניב היושבב שערש שמחויט -
          שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
          יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.ילקוף, מרגשי
          ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר
          מודוף.
          <br /> אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף
          קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
           לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי
          נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
          לקטוס וואל אאוגו וסטיבולום ריק לרטי.  הועניב היושבב שערש שמחויט -
          שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת
          יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.ילקוף, מרגשי
          ומרגשח. <br />
          <br />
          עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
          אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף קונדימנטום
          קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.  לורם
          איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון
          ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס
          וואל אאוגו וסטיבולום ריק לרטי.
          <br />  הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
          תוק, הדש שנרא התידם הכייר וק.
        </p>
      </div>

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
