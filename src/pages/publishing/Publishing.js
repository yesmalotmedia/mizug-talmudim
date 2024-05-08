import React from "react";

export default function Publishing() {
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
        <h1>Publishing</h1>
      </div>
    </div>
  );
}
