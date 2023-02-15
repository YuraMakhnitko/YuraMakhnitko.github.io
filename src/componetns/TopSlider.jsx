import React from "react";

import Slider from "react-slick";

export default function TopSlider({ slideItems, settings }) {
  // console.log(slideItems);

  return (
    <Slider {...settings}>
      {slideItems.map((slideItem, ind) => (
        <SomeSlide somePath={slideItem.path} key={ind} />
      ))}
    </Slider>
  );
}

const SomeSlide = ({ somePath }) => {
  return (
    <div className="main-banner__image-ibg">
      <img src={somePath} alt="pic" />
    </div>
  );
};
