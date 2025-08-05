import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slidercaro() {
  return (
    <Carousel interval={3000} fade pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '670px', objectFit: 'cover' }}
          src="https://images.squarespace-cdn.com/content/v1/613ef8a0a3de987d28d14431/12dd2342-bc33-44d1-8e30-1a764d8974a1/20230610102019_1.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '670px', objectFit: 'cover' }}
          src="https://images.alphacoders.com/133/1330611.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '670px', objectFit: 'cover' }}
          src="https://pbs.twimg.com/media/FxY2C9UaQAEa8Y1.jpg:large"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
