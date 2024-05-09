import React from "react";
import LessonsSection from "../beitHamidrash/lessons/LessonSection";

export default function TalmudHaMemuzag() {
  const styles = {
    container: {
      position: "relative",
      top: 100,
      height: 'auto',
      marginBottom: 300,
    padding: 30,

  
    },
    text: {
      textAlign: "left",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h1>Talmud HaMemuzag</h1>
      </div>
    </div>
  );
}