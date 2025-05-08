"use client";

import React, { useState, useEffect, useRef, FC } from "react";

interface carouselProps {
  autoSlideInterval?: number;
  children: any;
}

const Carousel: FC<carouselProps> = ({
  children,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timerRef = useRef(null);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  /*   useEffect(() => {
    if (autoSlideInterval) {
      timerRef.current = setInterval(nextSlide, autoSlideInterval);
    }

    return () => clearInterval(timerRef.current);
  }, [autoSlideInterval, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, autoSlideInterval);
  }; */

  return (
    <div className="carousel">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="carousel-item" key={index}>
            {child}
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        &#60;
      </button>

      <button className="carousel-button next" onClick={nextSlide}>
        &#62;
      </button>

      {/*       <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
