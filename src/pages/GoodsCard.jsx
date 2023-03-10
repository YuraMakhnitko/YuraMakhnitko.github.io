import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import Slider from 'react-slick';

import { setCartItem, setInc } from '../redux/cart/slice';
import { setCategory } from '../redux/filter/slice';

import { useScreenWidth } from '../hooks/useScreenWidth';
import PreFooter from '../componetns/PreFooter';
import Counter from '../componetns/Counter';
import FooterMobile from '../componetns/FooterMobile';

const GoodsCard = () => {
  const screenSize = useScreenWidth();

  const cardItems = useSelector((state) => state.filter.goodsSetted);
  const cardItem = useSelector((state) => state.card.cardItem);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const lang = useSelector((state) => state.filter.lang);
  const category = useSelector((state) => state.filter.category);

  const mainRef = useRef();

  console.log(mainRef);

  const firstSlideIndex = cardItems.findIndex(
    (item) => item.id === cardItem.id
  );

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: firstSlideIndex,
  };

  settings.initialSlide = firstSlideIndex;

  const dispatch = useDispatch();

  let goodMeasuring = 'gramm';
  let goodMeasuringUa = 'грам';

  if (cardItem.category === 9) {
    goodMeasuring = 'ml volume';
    goodMeasuringUa = "мл об'єм";
  }

  const addItemHandle = (item) => {
    dispatch(setInc(1));
    dispatch(
      setCartItem({
        ...item,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, mainRef.current.offsetTop);
  }, []);

  return (
    <main className="shop-main" ref={mainRef}>
      <section className="page-card">
        <div className="page-card__top">
          <div className="page-card__block-button">
            <Link
              to="/goods"
              className="page-card__button"
              onClick={() => dispatch(setCategory({ ...category }))}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#FF9846" />
                <path
                  d="M11.75 5.75L7.25 10.25L11.75 14.75"
                  stroke="#F2F2F2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="page-card__button-text">
                {lang ? 'Повернутися' : 'Back'}
              </p>
            </Link>
          </div>
        </div>
        <Slider {...settings} className="card-box">
          {cardItems.map((item) => (
            <div key={item.id} className="card-box">
              <div className="card" key={item.id}>
                <div className="card__img-box">
                  <div className="card__image-ibg">
                    <img src={item.imgUrl} alt="pic" />
                  </div>
                </div>
                <div className="card__info">
                  <p className="card__title">
                    {lang ? item.titleUa : item.title}
                  </p>
                  <p className="card__wight">
                    {item.weight} {lang ? goodMeasuringUa : goodMeasuring}
                  </p>
                  <div className="card__item-bottom">
                    <p className="card__price">{cardItem.price} ₴</p>
                    <div className="card-counter counter">
                      <Counter
                        count={
                          cartItems.find((cartItem) => cartItem.id === item.id)
                            ? cartItems.find(
                                (cartItem) => cartItem.id === item.id
                              ).count
                            : 0
                        }
                        good={item}
                      />
                    </div>
                  </div>
                  <p className="card__stuff">
                    {lang ? 'Склад' : 'Сomposition'}
                  </p>
                  <p className="card__info-staff">
                    {lang ? item.compositionUa : item.composition}
                  </p>

                  <button
                    onClick={() => addItemHandle(item)}
                    className="good-card__button card__button"
                  >
                    {lang ? 'Хочу!' : 'Want!'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {screenSize.width < 991.98 && <FooterMobile />}
      </section>
      <PreFooter />
    </main>
  );
};

export default GoodsCard;
