import SocialIconData from "./SocialIconData";

export default function LogoAndSocialIcon() {
  const styles = {
    logoWhite: {
      maxHeight: 90,
      marginBottom: "30px",
    },
    socialLogoWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    socialLogoImage: {
      maxHeight: "35px",
      maxWidth: "35px",
      cursor: 'pointer',
      
    },
  };
  return (
    <>
      <div style={styles.footerColumn}>
        <img style={styles.logoWhite} src="/footerImages/logo-white.png" alt="Logo"></img>
        <div style={styles.socialLogoWrapper}>
          {SocialIconData.map((item, index) => (
            <img key={index} style={styles.socialLogoImage} src={item.image} alt={item.alt}></img>
          ))}
        </div>
      </div>
    </>
  );
}
