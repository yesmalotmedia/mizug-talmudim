import React, { useContext } from "react";
import HeroSection from "../../components/elements/HeroSection";
import BooksCollection from "./BooksCollection";

import { AppContext } from "../../App";
import Filters from "./Filters";

export default function Publishing() {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    mainContainer: {
      width: isMobile? "100%":"70%",
      marginTop: 30,
      marginInline: "auto",
    },
    preview: {
      display: "flex",
      
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
        height={isMobile ? "75vmin": "60vmin"}
        marginTop={isMobile ? 95:90}
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
