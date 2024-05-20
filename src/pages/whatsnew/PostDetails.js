import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import Spacer from "../../components/elements/Spacer";
import Images from "./Images";

import PostSuggestion from "./PostSuggestion";
import NextAndPreviousBtn from "./NextAndPreviousBtn";
import SharePost from "./SharePost";

const PostDetails = () => {
  const { colors, postsData } = useContext(AppContext);
  const { postId } = useParams();
  const post = postsData.find((p) => p.id.toString() === postId);

  const styles = {
    mainSection: {
      width: "50%",
      marginInline: "auto",
    },
    textSection: {
      lineHeight: "1.8vw",
    },

    textTitle: {
      color: colors.darkBlue,
      fontSize: "2.3vmax",
      lineHeight: '3vw'
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
      fontSize: "1.2vmax",
      textAlign: "justify",
    },
  };

  return (
    <>
      <Spacer height={170} />
      <div style={styles.mainSection}>
        <div style={styles.textSection}>
          <h2 style={styles.textTitle}>{post.title}</h2>
          <div style={styles.tarikContainer}>
            <img style={styles.tarikImg} src="/tarik.png" alt="Tarik Logo" />
            <p style={styles.tarik}>
              <span>{post.dateHe}</span> | <span>{post.dateEn}</span>
            </p>
          </div>
          <article style={styles.article}>{post.article}</article>

          <Images imgData={post} />

          <NextAndPreviousBtn
            data={postsData}
            currentId={post.id}
            UrlPageName={"WhatsNew"}
          />
          <div>
            <SharePost/>
          </div>
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
