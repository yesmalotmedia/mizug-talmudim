import React, { useContext } from "react";
import HeroSection from "../../components/elements/HeroSection";
import BooksCollection from "./BooksCollection";

import { AppContext } from "../../App";
import Filters from "./Filters";

export default function Publishing() {
  const { colors } = useContext(AppContext);

  const styles = {
    mainContainer: {
      width: "70%",
      marginTop: 30,
      marginInline: "auto",
    },
    preview: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
    filterBtn: {
      margin: "60px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <>
      <HeroSection
        title={"הוצאה לאור "}
        backgroundImage={"/PublishingHeroImg.png"}
        subTitle={"כאן תמצאו את התכנים והספרים לקריאה "}
        titleColor={colors.white}
        height={"60vmin"}
        marginTop={75}
      />
      <div style={styles.mainContainer}>
        <div style={styles.filterBtn}>
          <Filters />
        </div>
        <div style={styles.preview}>
          <BooksCollection />
        </div>
      </div>
    </>
  );
}
