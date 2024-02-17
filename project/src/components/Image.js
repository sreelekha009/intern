import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images, currentIndex]);

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="" />
      <div className="navigation">
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
