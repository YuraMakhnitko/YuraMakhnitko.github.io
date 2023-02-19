import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

export default function TopSlider({ slideItems, settings }) {
  const lang = useSelector((state) => state.filter.lang);

  return (
    <Slider {...settings}>
      {slideItems.map((slideItem, ind) => (
        <div className="action" key={ind}>
          <div className="main-banner__image-ibg">
            <img src={slideItem.path} alt="pic" />
          </div>
          <div className="action__content">
            <p className="action__title">{lang ? 'СКОРО' : 'SOON'}</p>
            <p className="action__title">{lang ? 'ЗНИЖКА' : 'DISCOUNT'}</p>
            <p className="action__info">
              {' '}
              <span className="action__good-title">
                {lang ? slideItem.titleUa : slideItem.title}
              </span>{' '}
              <span className="action__discount">{slideItem.discount}</span>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
