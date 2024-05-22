import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import CyrcleButton from "../../components/elements/CyrcleButton";
import aboutData from "../../data/aboutData";
import RenderContents from "./RenderContents";

export default function About() {
  const { colors, bgColors } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("aboutUs");

  const styles = {
    container: {
      display: "flex",
      alignItems: "flex-start",
      gap: 80,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width: "15vw",
      height: "100vh",
      marginTop: "-40px",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: 30,
      gap: 45,
    },
    link: (isActive) => ({
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "8.2vw",
      width: "8.2vw",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      border: isActive ? `6px solid ${colors.darkBlue}` : '',

    }),
    description: {
      width: "60vw",
    },
  };

  const getActiveSectionData = () => {
    return aboutData.find((section) => section.dataId === activeSection);
  };
console.log(getActiveSectionData());

  return (
    <>
      <HeroSection
        title={"אודותינו"}
        subTitle={"הכירו את בית המדרש לאיחוד התלמודים"}
        isSubscribe={false}
        titleColor={colors.darkBlue}
        height={"60vmin"}
        marginTop={50}
      />
      <div style={styles.container}>
        <div style={styles.sideBtnContainer}>
          <div
            style={styles.link(activeSection === "aboutUs")}
            onClick={() => setActiveSection("aboutUs")}
          >
            <CyrcleButton
              title={"מי אנחנו"}
              imgSrc={"/SideBtn-1.png"}
              smallImgButton={true}
            />
          </div>
          <div
            style={styles.link(activeSection === "team")}
            onClick={() => setActiveSection("team")}
          >
            <CyrcleButton
              title={"צוות בית המדרש"}
              smallImgButton={true}
              imgSrc={"/SideBtn-2.png"}
            />
          </div>
        </div>
        <div style={styles.description}>
          <RenderContents sectionData={getActiveSectionData()} />
        </div>
      </div>
    </>
  );
}
