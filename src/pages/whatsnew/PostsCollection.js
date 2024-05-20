import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import PostsPreviewBox from "./PostsPreviewBox";
import LoadMore from "./LoadMore";

const PostsCollection = () => {
  const { postsData } = useContext(AppContext);
  const [visiblePostCount, setVisiblePostCount] = useState(10);

  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };

  return (
    <>
      {postsData.slice(0, visiblePostCount).map((post) => (
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
      {visiblePostCount < postsData.length && (
        <LoadMore onClick={() => loadMorePosts(10)} />
      )}
    </>
  );
};

export default PostsCollection;
