import React from "react";

export default function TalmudHaMemuzag() {
  const styles = {
    container: {
      position: "relative",
      top: 100,
      height: 300,
    },
    text: {
      textAlign: "left",
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