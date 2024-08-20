import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

function TalmudMemuzagSection() {
  const {
    colors,
    bgColors,
    isMobile,
    videos,
    categories,
    loadingCategories,
    lessonsType,
    setlessonsType,
    setlessonsFilter,
    lessonsFilter,
  } = useContext(AppContext);
  const styles = {
    container: {
      padding: 15,
      display: "flex",
      flexDirection: "column",
      margin: isMobile ? 0 : 100,
      justifyContent: "start",
    },
    date: {
      fontSize: isMobile ? "1.9vmax" : "0.8vw",
      fontWeight: 400,
      marginTop: 4,
    },
  };
  return (
    <div style={styles.container}>
      {" "}
      <div style={styles.headerSection}>
        <p style={styles.breadscrumb}>
          <span> {"בבלי"}</span> / <span>{"שבת"}</span>/<span>{"דף א"}</span>/
          <span>{"עמוד א"}</span>
        </p>
        <div>שבת</div>
        <div>דף א עמוד א</div>
        <h3 style={styles.date}>{"date"}</h3>

        {/* <h2 style={styles.nameOfRav}> {video?.rabbiName} </h2>
        <h1 style={styles.nameOfSiur}> {video?.title} </h1> */}
      </div>
      <div>articles nav</div>
      <div>main</div>
      <div>comments</div>
    </div>
  );
}

export default TalmudMemuzagSection;
