import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';
import glassImage from '../assets/images/product/glass.jpeg';
import ceramicVaseImage from '../assets/images/product/lamp.jpeg'; // Add more as needed
import handmadeMugImage from '../assets/images/product/plate.jpeg';

export default function ProductCarousel() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set all your images in the array
    setImages([glassImage, ceramicVaseImage, handmadeMugImage]); // Add more as needed
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
      }, 3000); 
      return () => clearInterval(intervalId);
    }
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="image-slider">
      {images.length > 0 && (
        <>
          <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>

          <div className="slide-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}