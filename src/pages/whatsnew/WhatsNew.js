import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import PostsCollection from "./PostsCollection";

export default function WhatsNew() {
  const { colors, isMobile } = useContext(AppContext);

  return (
    <>
      <HeroSection
        title={"מה חדש בבית המדרש"}
        subTitle={"הרשמו לרשימת התפוצה ותשארו מעודכנים"}
        isSubscribe={true}
        titleColor={colors.darkBlue}
        height={isMobile ? "75vmin" : "60vmin"}
        marginTop={isMobile ? 95 : 90}
      />
      <PostsCollection />
    </>
  );
}
