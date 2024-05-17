import React from "react";
import TextEditor from "../admin/TextEditor";

export default function About() {
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
        <h1>About us</h1>
      </div>
    </div>
  );
}
