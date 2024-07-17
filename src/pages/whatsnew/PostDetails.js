import React, { useContext } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import Spacer from "../../components/elements/Spacer";
import PostSuggestion from "./PostSuggestion";
import NextAndPreviousBtn from "./NextAndPreviousBtn";
import SharePost from "./SharePost";
import Gallery from "../../components/elements/Gallery";
import whatsNewData from "../../data/whatsNewData";
const PostDetails = () => {
  const { colors, responsive} = useContext(AppContext);
  const { postId } = useParams();
  const post = whatsNewData.find((p) => p.id.toString() === postId);

  const styles = {
    mainSection: {
      maxWidth: responsive ("70vw","80%","90%"),
      marginInline: "auto",
      marginTop: responsive(0,10,-40),
    },

    textTitle: {
      color: colors.darkBlue,
      fontSize: responsive ("1.8rem","1.5rem","1.5rem"),
      lineHeight: responsive ("2rem","2rem","2rem"),
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
      padding: "30px 0",
      color: colors.grey,
    },
    tarikImg: {
      height: "2.5vh",
      marginLeft: 10,
    },
    article: {
      fontSize: responsive ("1.3rem","1.2rem","1rem"),
      textAlign: "justify",
      lineHeight: responsive ("2rem","1.9rem","1.7rem"),
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

          <Gallery data={post} />

          <NextAndPreviousBtn
            data={whatsNewData}
            currentId={post.id}
            UrlPageName={"WhatsNew"}
          />
          <div>
            <SharePost />
          </div>
        </div> 
        
        <div >
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
