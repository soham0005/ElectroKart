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
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
