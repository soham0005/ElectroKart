import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/slider.css';

function Slider({ start }) {
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      document.querySelector('.carousel-control-next').click();
    }

    if (diff < -5) {
      document.querySelector('.carousel-control-prev').click();
    }

    setTouchPosition(null);
  };

  return (
    <div className="slider-container">
      <Carousel
        fade
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        interval={3000}
        pause="hover"
        keyboard={true}
      >
        {start.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item}
              alt={`Slide ${index}`}
              loading="lazy"
            />
            {/* Show caption only for the second item (index 1) */}
            {index === 1 && (
              <Carousel.Caption>
                <h3>In the Press</h3>
                <p>Some description of the press article or feature goes here.</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Explicit Previous and Next buttons */}
      <button className="carousel-control-prev" aria-label="Previous">
        <span className="carousel-control-prev-icon" aria-hidden="true">Previous</span>
      </button>
      <button className="carousel-control-next" aria-label="Next">
        <span className="carousel-control-next-icon" aria-hidden="true">Next</span>
      </button>
    </div>
  );
}

export default Slider;
