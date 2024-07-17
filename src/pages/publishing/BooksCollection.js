import React, { useContext, useState } from "react";
import LoadMore from "../../components/elements/LoadMore";
import BookPreviewBox from "./BookPreviewBox";
import publishingData from "../../data/publishingData";

const BooksCollection = () => {
  const [visiblePostCount, setVisiblePostCount] = useState(20);

  const loadMorePosts = (increment) => {
    setVisiblePostCount((prevCount) => prevCount + increment);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: "column",
    },
    gridContainer: {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
    },
    loadMoreContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        {publishingData.slice(0, visiblePostCount).map((book) => (
          <BookPreviewBox
            key={book.title}
            img={book.img}
            title={book.title}
            author={book.author}
            price={book.price}
            discountPrice={book.discountPrice}
          />
        ))}
      </div>
      {visiblePostCount < publishingData.length && (
        <div style={styles.loadMoreContainer}>
          <LoadMore onClick={() => loadMorePosts(20)} />
        </div>
      )}
    </div>
  );
};

export default BooksCollection;
