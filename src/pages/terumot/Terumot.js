import React, { useContext } from "react";
import HeroSection from "../../components/elements/HeroSection";
import { AppContext } from "./../../App";
import terumotData from '../../data/terumotData';

export default function Terumot() {
  const { colors } = useContext(AppContext);

  const styles = {
    mainContainer: {
      marginInline: "auto",
      width: "50%",
    },
    title: {
      color: colors.darkBlue,
      fontSize: "3vw",
      marginTop: 40,
    },
    description: {
      fontSize: "1.3vw",
      lineHeight: "1.7vw",
      textAlign: "justify",
      marginTop: 30,
    },
    imgContainer: {
      marginTop: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
    },
    btn: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: 'pointer',
    },
    img: {
      height: "15vw",
      width: "15vw",
      transition: "transform 0.3s ease-in-out",
    },
    imgHover: {
      transform: "scale(1.1)",
    },
    text: {
      position: "absolute",
      fontSize: "2.9vw",
      fontWeight: 700,
      color: colors.white,
      zIndex: 30,
      textShadow: "0px 0px 6px #000",
      textAlign: "center",
    },
  };

  const data = terumotData[0];

  return (
    <>
      <HeroSection
        title={"מוזמנים להיות חלק"}
        backgroundImage={"/heroTrumot.png"}
        subTitle={" ולהקדיש שיעור לזכות וברכה "}
        isSubscribe={false}
        titleColor={colors.white}
        height={"60vmin"}
        marginTop={75}
        isButton={true}
        btnTitle={"לתרומה מהירה"}
      />
      <div style={styles.mainContainer}>
        <h2 style={styles.title}>{data.title}</h2>
        <p style={styles.description}>
          {data.description}
        </p>
        <h2 style={styles.title}>{data.btnTitle}</h2>
        <div style={styles.imgContainer}>
          {data.images.map((image, index) => (
            <div
              style={styles.btn}
              key={index}
              onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
            >
              <img style={styles.img} src={image} alt={`image-${index}`} />
              <span style={styles.text}>{data.btnText[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
