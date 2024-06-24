import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import PostsPreviewBox from "./PostsPreviewBox";
import LoadMore from "../../components/elements/LoadMore";
import whatsNewData from "../../data/whatsNewData";
const PostsCollection = () => {
  
  const [visiblePostCount, setVisiblePostCount] = useState(10);

  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };

  return (
    <>
      {whatsNewData.slice(0, visiblePostCount).map((post) => (
        <PostsPreviewBox
          key={post.id}
          article={post.article}
          title={post.title}
          dateEn={post.dateEn}
          dateHe={post.dateHe}
          thumbnail={post.thumbnail}
          postId={post.id}
        />
      ))}
      {visiblePostCount < whatsNewData.length && (
        <LoadMore onClick={() => loadMorePosts(10)} />
      )}
    </>
  );
};

export default PostsCollection;
