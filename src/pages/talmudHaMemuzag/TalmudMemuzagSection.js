import React, { useContext } from "react";
import { AppContext } from "../../App";

function TalmudMemuzagSection({ id }) {
  const { isMobile, parsedMemuzagData, colors, responsive } =
    useContext(AppContext);

  const article = parsedMemuzagData.find((article) => article?.id == id);

  const talmud = article?.talmud || "N/A";
  const masecet = article?.masecet || "N/A";
  const perek = article?.perek || "N/A";
  const daf = article?.daf || "N/A";
  const page = article?.page || "N/A";
  const body = article?.body || "N/A";

  const styles = {
    container: {
      textAlign: "right",
      width: "100%",
      padding: 20,
    },
    headerSection: {
      width: "100%",
    },
    breadcrumb: {
      color: colors.grey,
      fontWeight: 500,
      paddingBottom: 20,
    },
    masecet: {
      color: colors.azure,
      fontWeight: 700,
      fontSize: 25,
    },
    perek: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: 35,
    },
    dafAndAmud: {
      color: colors.darkBlue,
      fontWeight: 700,
      fontSize: 25,
    },
    timeAndTimeContainer: {
      width: responsive("100%", "100%", "100%"),
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    icon: {
      height: 20,
      width: 20,
    },
    dateAndTimeText: {
      width: "100%",
      padding: "0 10px",
      fontWeight: 400,
      color: colors.grey,
    },
    descriptionContainer: {
      marginTop: 20,
      width: responsive("100%", "70%", "90%"),
      marginInline: "auto",
    },
    description: {
      textAlign: "justify",
      lineHeight: "1.9rem",
      width: "100%",
    },
    footerSection: {
      width: responsive("100%", "70%", "90%"),
    },
    commentsTitle: {
      color: colors.azure,
      padding: responsive("30px 60px 10px 0", "10px 110px 10px 0", "10px 10px"),
    },
    input: {
      width: responsive("85%", "100%", "100%"),
      outline: "none",
      padding: 10,
      marginRight: responsive(60, 110, 10),
      borderRadius: 40,
      border: "1px solid black",
    },
    article: {
      fontSize: responsive("1.3rem", "1.2rem", "1rem"),
      textAlign: "justify",
      lineHeight: responsive("2rem", "1.9rem", "1.7rem"),
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <p style={styles.breadcrumb}>
          <span>{talmud}</span> / <span>{masecet}</span> /{" "}
          <span>{`דף ${daf}`}</span> / <span>{`עמוד ${page}`}</span>
        </p>
        <div style={styles.masecet}>{masecet}</div>
        <div style={styles.perek}>פרק {perek}</div>
        <div style={styles.dafAndAmud}>
          <span>{`דף ${daf}`}</span> <span>{`עמוד ${page}`}</span>
        </div>
      </div>
      {/* <div>articles nav</div> */}
      <div style={styles.article} dangerouslySetInnerHTML={{ __html: body }} />
      {/* <div>comments</div> */}
    </div>
  );
}

export default TalmudMemuzagSection;
