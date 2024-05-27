import { useContext } from "react";
import SocialIconData from "./SocialIconData";
import { AppContext } from "../../App";

export default function LogoAndSocialIcon() {
  const { colors, isMobile } = useContext(AppContext);

  const styles = {
    logoWhite: {
      maxHeight: 90,
      marginBottom: "30px",
    },
    socialLogoWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 9,
    },
    socialLogoImage: {
      height: isMobile ? "5vmax" : "35px",
      width: isMobile ? "5vmax" : "35px",
      cursor: "pointer",
      margin: isMobile ? "30px 10px" : "",
    },
  };
  return (
    <>
      <div style={styles.footerColumn}>
        {!isMobile && (
          <img
            style={styles.logoWhite}
            src="/footerImages/logo-white.png"
            alt="Logo"
          ></img>
        )}

        <div style={styles.socialLogoWrapper}>
          {SocialIconData.map((item, index) => (
            <img
              key={index}
              style={styles.socialLogoImage}
              src={item.image}
              alt={item.alt}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}
