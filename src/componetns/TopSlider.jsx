import React from "react";

import Slider from "react-slick";

export default function TopSlider({ slideItems, settings }) {
  return (
    <Slider {...settings}>
      {slideItems.map((slideItem, ind) => (
        <div className="action" key={ind}>
          <div className="main-banner__image-ibg">
            <img src={slideItem.path} alt="pic" />
          </div>
          <div className="action__content">
            <p className="action__title">SOON</p>
            <p className="action__title">DISCOUNT</p>
            <p className="action__info">
              {" "}
              <span className="action__good-title">{slideItem.title}</span>{" "}
              <span className="action__discount">{slideItem.discount}</span>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
