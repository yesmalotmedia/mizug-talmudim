import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import whatsNewData from "../../data/whatsNewData";
export default function PostSuggestion({
  currentPostId,
  UrlPageName,
  tarikImg,
  numPosts = 4,
}) {
  const { colors, isMobile } = useContext(AppContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentIndex = whatsNewData.findIndex((post) => post.id === currentPostId);

  const circularIndex = (index, length) => {
    return (index + length) % length;
  };

  const displayPosts = [];
  for (let i = 1; i <= numPosts; i++) {
    const index = circularIndex(currentIndex + i, whatsNewData.length);
    displayPosts.push(whatsNewData[index]);
  }

  const styles = {
    suggestionBox: (isHovered) => ({
      width: isMobile ? "95%" : "23vw",
      height: isMobile ? "85vw" : "19vw",
      margin: isMobile ? 9 : 6,
      borderRadius: 20,
      boxShadow: isHovered
        ? "rgba(0, 0, 139, 0.6) 0px 8px 24px"
        : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      cursor: "pointer",
      transition: "box-shadow 0.3s ease-in-out",
      background: "#fff",
    }),
    link: {
      textDecoration: "none",
    },
    thumbnail: {
      width: "100%",
      height: "200px",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    title: {
      color: colors.darkBlue,
      fontWeight: 600,
      fontSize: isMobile ? "5vw" : "1vw",
      lineHeight: isMobile ? "6vw" : "1.3vw",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      padding: 8,
    },
    tarikImg: {
      height: isMobile ? "5vw" : "1vw",
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
      marginRight: 10,
    },
  };

  return (
    <>
      {displayPosts.map((post, index) => (
        <Link style={styles.link} key={index} to={`/${UrlPageName}/${post.id}`}>
          <div
            style={styles.suggestionBox(index === hoveredIndex)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              style={styles.thumbnail}
              src={post.thumbnail}
              alt="Thumbnail"
            />
            <p style={styles.title}>{post.title}</p>
            <div style={styles.tarikContainer}>
              <img style={styles.tarikImg} src={tarikImg} alt="Tarik" />
              <span style={styles.dateEn}>{post.dateEn}</span> |
              <span style={styles.dateHe}>{post.dateHe}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
