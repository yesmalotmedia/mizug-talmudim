import React, { useContext } from "react";
import { AppContext } from "../../App";
const GallerySection = () => {
  // context
  const { colors, isMobile } = useContext(AppContext);

  const containerStyle = {
    width: "100%",
    position: "relative",
    backgroundColor: "transparent",
  };

  const subContainerStyle = {
    width: isMobile ? "80%" : "60%",
    maxWidth: 600,
    height: 500,
    position: "relative",
    margin: "auto",
    backgroundColor: "transparent",
    transform: "translateY(10vw)",
    zIndex: 2,
  };

  const bgImgStyle = {
    position: "absolute",
    width: "100%",
    transform: "translateY(-110px) rotate(180deg)",
    zIndex: -2,
  };
  const bgGradient = {
    position: "absolute",
    width: "100%",
    zIndex: -2,
    bottom: 0,
    transform: "translateY(24vw)",
  };
  const imageCommonStyle = {
    position: "absolute",
    borderRadius: 50,
    backgroundSize: "cover",
    border: "2px solid white",
  };

  const images = isMobile
    ? [
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "100%",
            height: "30%",
            top: 0,
            right: 0,
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "40%",
            height: "71%",
            top: "32%",
            right: "0",
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "60%",
            height: "35%",
            top: "32%",
            left: 0,
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "60%",
            height: "35%",
            top: "68%",
            left: 0,
          },
        },
      ]
    : [
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "20%",
            height: "100%",
            top: 0,
            right: 0,
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "22%",
            height: "40%",
            top: 0,
            right: "25%",
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "50%",
            height: "50%",
            top: 0,
            left: 0,
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "22%",
            height: "50%",
            top: "50%",
            right: "25%",
          },
        },
        {
          src: "gallerSecImg1.png",
          style: {
            ...imageCommonStyle,
            width: "50%",
            height: "40%",
            bottom: 0,
            left: 0,
          },
        },
      ];

  return (
    <div style={containerStyle}>
      <img src="orange-bg.jpg" style={bgImgStyle} alt="Background" />

      <div style={subContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            style={image.style}
            alt={`img ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
