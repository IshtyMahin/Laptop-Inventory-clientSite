import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          height={"500px"}
          className="d-block w-100"
          src="https://i.ibb.co/SRqTdKf/banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={"500px"}
          className="d-block w-100"
          src="https://i.ibb.co/7JPD17k/banner2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={"500px"}
          className="d-block w-100"
          src="https://i.ibb.co/VB2XwgV/banner3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
