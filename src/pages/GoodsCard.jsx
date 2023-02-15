import { useDispatch, useSelector } from "react-redux";

import { setCartItem, setInc } from "../redux/cart/slice";
import { setCategory } from "../redux/filter/slice";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useScreenWidth } from "../hooks/useScreenWidth";
import PreFooter from "../componetns/PreFooter";
import Counter from "../componetns/Counter";
import FooterMobile from "../componetns/FooterMobile";

const GoodsCard = () => {
  const screenSize = useScreenWidth();

  const cardItems = useSelector((state) => state.filter.goodsSetted);
  const cardItem = useSelector((state) => state.card.cardItem);

  const category = useSelector((state) => state.filter.category);
  // console.log(cardItem);
  // console.log(cardItem.id);

  const cartItems = useSelector((state) => state.cart.cartItems);

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
    // className: "card-box",
    // adaptiveHeight: true,
  };

  // useEffect(()=>{},[])

  settings.initialSlide = firstSlideIndex;

  // console.log(settings.initialSlide);
  // console.log(firstSlideIndex);
  // console.log(cardItems);

  const dispatch = useDispatch();
  // const findCount = cartItems.find((cartItem) => cartItem.id === cardItem.id);

  let goodMeasuring = "gramm";

  if (cardItem.category === 9) {
    goodMeasuring = "ml volume";
  }

  const handleSetCount = () => {
    console.log("hello");
    if (cartItems) {
    }
  };

  const addItemHandle = (item) => {
    dispatch(setInc(1));
    dispatch(
      setCartItem({
        ...item,
      })
    );
  };

  // const findItemCart = cartItems.find(
  //   (cartItem) => cartItem.id === cartItem.id
  // );

  console.log(cardItems);
  return (
    <main className="shop-main">
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
              <p className="page-card__button-text">Back</p>
            </Link>
          </div>
          {/* <div className="page-card__block-button">
            <p className="page-card__button-text">Forward</p>
            <button className="page-card__button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#FF9846" />
                <path
                  d="M8 6L12.5 10.5L8 15"
                  stroke="#F2F2F2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div> */}
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
                  <p className="card__title">{item.title}</p>
                  <p className="card__wight">
                    {item.weight} {goodMeasuring}
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
                        // count={item.count ? item.count : 0}
                        good={item}
                      />
                    </div>
                  </div>
                  <p className="card__stuff">Сomposition</p>
                  <p className="card__info-staff">{item.composition}</p>

                  <button
                    onClick={() => addItemHandle(item)}
                    className="good-card__button card__button"
                  >
                    Want!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="card">
          <div className="card__img-box">
            <div className="card__image-ibg">
              <img src={cardItem.imgUrl} alt="pic" />
            </div>
          </div>
          <div className="card__info">
            <p className="card__title">{cardItem.title}</p>
            <p className="card__wight">
              {cardItem.weight} {goodMeasuring}
            </p>
            <div className="card__item-bottom">
              <p className="card__price">{cardItem.price} ₴</p>
              <div className="card-counter counter">
                <Counter
                  count={findCount ? findCount.count : 0}
                  good={cardItem}
                />
              </div>
            </div>
            <p className="card__stuff">Сomposition</p>
            <p className="card__info-staff">{cardItem.composition}</p>

            <button
              onClick={addItemHandle}
              className="good-card__button card__button"
            >
              Want!
            </button>
          </div>
        </div> */}
        {screenSize.width < 991.98 && <FooterMobile />}
      </section>
      <PreFooter />
    </main>
  );
};

export default GoodsCard;
