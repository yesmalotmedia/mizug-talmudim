import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import HeroSection from "../../components/elements/HeroSection";
import CyrcleButton from "../../components/elements/CyrcleButton";
import aboutData from "../../data/aboutData";
import RenderContents from "./RenderContents";

export default function About() {
  const { colors, bgColors, isMobile } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState("aboutUs");

  const styles = {
    container: {
      display: "flex",
      width: isMobile? '100%': '',
      flexDirection: isMobile? 'column': '',
      alignItems: isMobile? 'center':"flex-start",
      justifyContent: isMobile? 'center':'',
      gap: 80,
    },
    sideBtnContainer: {
      background: bgColors.lightAzure,
      width:isMobile? "90%": "15vw",
      height: isMobile? '40vw': "100vh",
      marginTop: "-40px",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      borderRadius: isMobile? 20: '',
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      display:"flex",
      alignItems: "center",
      flexDirection: isMobile? "row":"column",
      padding: isMobile? "5px 35px 25px 0":"30px 0 0 0",
      gap: 45,
     
    },
    link: (isActive) => ({
      textDecoration: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: isMobile? "28vw":"8.2vw",
      width:  isMobile? "28vw":"8.2vw",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
      border: isActive ? `6px solid ${colors.darkBlue}` : '',

    }),
    description: {
      width: isMobile? '90%':"60vw",
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
        height={isMobile ? "80vmin": "60vmin"}
        marginTop={isMobile ? 95:50}
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
