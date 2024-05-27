import React, { useState } from "react";
import FullscreenImageViewer from "./fullscreenImageViewer";

export default function Gallery({ data }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = data.images.map((image) => `${image}`);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getImgStyle = (index) => ({
    width: "100%",
    borderRadius: 20,
    cursor: "pointer",
    boxShadow:
      index === hoveredIndex
        ? "rgba(0, 0, 139, 0.5) 0px 8px 24px"
        : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    transition: "box-shadow 0.3s ease-in-out",
  });

  const styles = {
    imageRowContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 30,
    },
    imageRow: {
      flex: "0 0 48%",
      height: "21.5vw",
      borderRadius: 20,
      marginBottom: 20,
    },
    fullWidthImage: {
      flex: "0 0 100%",
      height: "40vw",
      borderRadius: 20,
      marginBottom: 20,
    },
  };

  return (
    <div style={styles.imageRowContainer}>
      {images.map((img, index) => {
        const isLastImageAlone =
          images.length % 2 !== 0 && index === images.length - 1;
        return (
          <div
            key={index}
            style={isLastImageAlone ? styles.fullWidthImage : styles.imageRow}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={img}
              alt={`Image ${index}`}
              style={getImgStyle(index)}
              onClick={() => openViewer(index)}
            />
          </div>
        );
      })}
      {isViewerOpen && (
        <FullscreenImageViewer
          images={images}
          currentIndex={currentIndex}
          onClose={closeViewer}
        />
      )}
    </div>
  );
}
