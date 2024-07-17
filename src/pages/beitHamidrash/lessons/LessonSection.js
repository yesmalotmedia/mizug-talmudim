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
  const { colors, bgColors, isMobile, videos, responsive } =
    useContext(AppContext);
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
      color: colors.grey,
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

      <div style={styles.footerSection}>
        <h3 style={styles.commentsTitle}> תגובות </h3>
        <input
          style={styles.input}
          type="text"
          placeholder=" הוסיפו תגובה "
        ></input>
      </div>
    </div>
  );
}
