import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import Spacer from "../../components/elements/Spacer";
import PostSuggestion from "./PostSuggestion";
import NextAndPreviousBtn from "./NextAndPreviousBtn";
import SharePost from "./SharePost";
import Gallery from "../../components/elements/Gallery";
const PostDetails = () => {
  const { colors, bgColors, isMobile, parsedNewsData } = useContext(AppContext);
  const { postId } = useParams();
  const post = parsedNewsData.find((p) => p.id.toString() === postId);
  console.log(post);
  const styles = {
    mainSection: {
      width: isMobile ? "95%" : "50%",
      marginInline: "auto",
    },
    textSection: {
      lineHeight: "1.8vw",
    },

    textTitle: {
      color: colors.darkBlue,
      fontSize: isMobile ? "8vw" : "2.3vmax",
      lineHeight: isMobile ? "9vw" : "3vw",
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "30px 0",
      color: "gray",
    },
    tarikImg: {
      height: "2.5vh",
      marginLeft: 10,
    },
    article: {
      fontSize: isMobile ? "5vw" : "1.2vmax",
      textAlign: "justify",
      lineHeight: isMobile ? "8vw" : "",
    },
    suggestionContainer: {
      marginInline: "auto",
      padding: isMobile ? "5px" : "15px 0",

      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      background: bgColors.lightAzure,
      borderRadius: 20,
      gap: isMobile ? 5 : 10,
    },
  };
  console.log(post);

  return (
    <>
      <Spacer height={170} />
      <div style={styles.mainSection}>
        <div style={styles.textSection}>
          <h2 style={styles.textTitle}>{post.title}</h2>
          <div style={styles.tarikContainer}>
            <img style={styles.tarikImg} src="/tarik.png" alt="Tarik Logo" />
            <p style={styles.tarik}>
              <span>{post.date}</span>
            </p>
          </div>
          <div
            style={styles.article}
            dangerouslySetInnerHTML={{ __html: post.article }}
          />

          <Gallery data={post} />

          <NextAndPreviousBtn
            data={parsedNewsData}
            currentId={post.id}
            UrlPageName={"WhatsNew"}
          />
          <div>
            <SharePost />
          </div>
        </div>{" "}
        <div style={styles.suggestionContainer}>
          <PostSuggestion
            currentPostId={post.id}
            tarikImg={"/tarik.png"}
            UrlPageName={"WhatsNew"}
            numPosts={4}
            showPostsAfter={true}
          />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
