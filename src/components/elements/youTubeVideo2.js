import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from "./Button";
import colors from "../../styles/colors";
import bgColors from "../../styles/bg-colors";

function YouTubeVideo2({ url, index }) {
  //context
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    container: {
      maxWidth: "100%",
      height: isMobile ? "30%" : 600,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      backgroundColor: bgColors.white,
      padding: 20,
      margin: isMobile ? "10px 0" : 0,
      borderRadius: isMobile ? "5px" : "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },

    img: {},
    title: {
      fontSize: 22,
      color: colors.darkBlue,
      fontWeight: 600,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <iframe
        width={"100%"}
        height={isMobile ? "30%" : "85%"}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeVideo2;
