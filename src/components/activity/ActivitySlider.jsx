import React, { useEffect, useState } from "react";

const ActivitySlider = ({
  images = [],
  title = "Activity",
  interval = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === images.length - 1
          ? 0
          : previousIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? images.length - 1
        : previousIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1
        ? 0
        : previousIndex + 1
    );
  };

  if (!images.length) {
    return (
      <div className="activity-slider-empty">
        <span>Photos coming soon</span>
      </div>
    );
  }

  return (
    <div className="activity-slider">

      <div className="activity-slider-image-container">
        <img
          src={images[currentIndex]}
          alt={`${title} - Photo ${currentIndex + 1}`}
          className="activity-slider-image"
        />

        <div className="activity-slider-overlay" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="activity-slider-button activity-slider-button-prev"
              onClick={goToPrevious}
              aria-label="Previous photo"
            >
              ←
            </button>

            <button
              type="button"
              className="activity-slider-button activity-slider-button-next"
              onClick={goToNext}
              aria-label="Next photo"
            >
              →
            </button>
          </>
        )}

        <div className="activity-slider-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="activity-slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`activity-slider-dot ${
                index === currentIndex
                  ? "activity-slider-dot-active"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ActivitySlider;