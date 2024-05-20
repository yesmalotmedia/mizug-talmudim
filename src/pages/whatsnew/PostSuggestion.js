import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function PostSuggestion({
  currentPostId,
  UrlPageName,
  tarikImg,
  numPosts = 4,
}) {
  const { colors, postsData } = useContext(AppContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentIndex = postsData.findIndex((post) => post.id === currentPostId);

  const circularIndex = (index, length) => {
    return (index + length) % length;
  };

  const displayPosts = [];
  for (let i = 1; i <= numPosts; i++) {
    const index = circularIndex(currentIndex + i, postsData.length);
    displayPosts.push(postsData[index]);
  }

  const styles = {
    container: {
      height: "530px",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      padding: 10,
      borderRadius: 20,
      background: "#E7F9FF",
    },
    suggestionBox: (isHovered) => ({
      width: "23vw",
      height: "15vw",
      margin: 6,
      borderRadius: 30,
      position: "relative",
      boxShadow: isHovered
        ? "rgba(0, 0, 139, 0.6) 0px 8px 24px"
        : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      cursor: "pointer",
      transition: "box-shadow 0.3s ease-in-out",
    }),
    thumbnail: {
      width: "23vw",
      height: "200px",
      borderRadius: 20,
    },
    titleAndTarik: {
      background: "#fff",
      position: "absolute",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      top: 148,
      width: "23vw",
      height: "6vw",
      right: 0,
      paddingRight: 20,
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: "1vw",
      padding: '5px 0 6xp 0',
      lineHeight: '1.3vw'
    },
    tarikImg: {
      height: "1vw",
      paddingLeft: 10,
    },
    dateHe: {
      color: "gray",
      paddingRight: 10,
    },
    dateEn: {
      color: "gray",
      paddingLeft: 10,
    },
    tarikContainer: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      {displayPosts.map((post, index) => (
        <Link key={index} to={`/${UrlPageName}/${post.id}`}>
          <div
            style={styles.suggestionBox(index === hoveredIndex)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.titleAndTarik}>
              <p style={styles.title}>{post.title}</p>
              <div style={styles.tarikContainer}>
                <img style={styles.tarikImg} src={tarikImg} alt="Tarik" />
                <span style={styles.dateEn}>{post.dateEn}</span> |
                <span style={styles.dateHe}>{post.dateHe}</span>
              </div>
            </div>
            <img
              style={styles.thumbnail}
              src={post.thumbnail}
              alt="Thumbnail"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
