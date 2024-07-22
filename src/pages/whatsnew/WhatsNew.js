import React, { useContext } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import PostsCollection from "./PostsCollection";

export default function WhatsNew() {
  const { colors, responsive } = useContext(AppContext);

  return (
    <>
      <HeroSection
        title={"מה חדש בבית המדרש"}
        subTitle={"הרשמו לרשימת התפוצה ותשארו מעודכנים"}
        isSubscribe={true}
        titleColor={colors.darkBlue}
        height={responsive("60vmin", "60vmin", "70vmin")}
        marginTop={responsive(90, 50, 170)}
      />
      <PostsCollection />
    </>
  );
}
