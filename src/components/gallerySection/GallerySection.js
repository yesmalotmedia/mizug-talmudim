import React from "react";

const GallerySection = () => {
  const containerStyle = {
    width: "100%",
    position: "relative",
    backgroundColor: "transparent",
  };

  const subContainerStyle = {
    width: "60%",
    height: 500,
    position: "relative",
    margin: "auto",
    backgroundColor: "transparent",
    transform: "translateY(10vw)",
  };

  const bgImgStyle = {
    position: "absolute",
    width: "100%",
    transform: "translateY(-100px)",
    zIndex: -2,
  };

  const imageCommonStyle = {
    position: "absolute",
    borderRadius: 50,
    backgroundSize: "cover",
    border: "2px solid white",
  };

  const images = [
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
