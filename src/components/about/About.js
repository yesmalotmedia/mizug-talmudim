import React, { useContext } from "react";
import { AppContext } from "../../App";
import { sectionAzure, sectionCream } from "../../styles/sectionsStyle";
import Spacer from "../elements/Spacer";

const About = () => {
  const { colors, bgColors, pagesList, description } = useContext(AppContext);

  const styles = {
    container: { ...sectionCream },
    description: {
      color: colors.darkBlue,
      maxWidth: 1000,
      lineHeight: 1.5,
      textAlign: "justify",
      padding: 60,
      border: "1px solid " + colors.orange,
    },
    h2: {
      color: colors.darkBlue,
    },
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>מי אנחנו?</h2>
      <Spacer height={20} />
      <div style={styles.description}>{description}</div>
    </div>
  );
};

export default About;
