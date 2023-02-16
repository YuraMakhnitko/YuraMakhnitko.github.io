import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/filter/slice";

import TopSlider from "../componetns/TopSlider";
import PreFooter from "../componetns/PreFooter";
import catgoriesList from "../redux/settings/categories.json";

import "react-awesome-slider/dist/styles.css";
import FooterMobile from "../componetns/FooterMobile";

import { useScreenWidth } from "../hooks/useScreenWidth";

const slideItems = [
  { path: "img/categories/rolls.jpg", discount: "25%", title: "rolls" },
  { path: "img/categories/pizza.jpg", discount: "30%", title: "pizzas" },
  { path: "img/categories/sushi.jpg", discount: "20%", title: "sushi" },
  { path: "img/categories/sets.jpg", discount: "35%", title: "sets" },
];
// const slideItemsTwo = [
//   { path: "img/home/slidergoods/01.jpg" },
//   { path: "img/home/slidergoods/02.jpg" },
//   { path: "img/home/slidergoods/03.jpg" },
//   { path: "img/home/slidergoods/01.jpg" },
//   { path: "img/home/slidergoods/02.jpg" },
//   { path: "img/home/slidergoods/03.jpg" },
// ];

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

// let settingsTwo = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

const Home = () => {
  const categories = JSON.parse(JSON.stringify(catgoriesList));
  const dispatch = useDispatch();
  const disabledStyle = "goods__link_disabled";
  const disabledStyleItem = "goods__item_disabled";

  const windowSize = useScreenWidth();
  return (
    <main className="shop-main">
      <section className="main-banner">
        <TopSlider slideItems={slideItems} settings={settings} />
      </section>
      <section className="shop-center__goods goods">
        {categories.map((category) => (
          <div
            className={`goods__item ${
              category.isSoon ? disabledStyleItem : ""
            }`}
            key={category.categoryId}
          >
            <div className="goods__image-ibg">
              <Link
                to={`${category.isSoon ? "" : "/goods"}`}
                className={`goods__link ${
                  category.isSoon ? disabledStyle : ""
                }`}
                onClick={() => dispatch(setCategory({ ...category }))}
              >
                <img src={category.imgBigUrl} alt="chicken" />
                <p className="goods__text-item">{category.title}</p>

                {category.isSoon && (
                  <div className="info info_goods">
                    <p className="info__text">Soon</p>
                  </div>
                )}
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section className="shop-center__goods-slider slider-goods">
        <div className="slider-goods__top">
          <button className="slider-goods__link-top">New</button>
          <button className="slider-goods__link-top">Popular</button>
        </div>
        <div className="slider-goods__items">
          <div className="good-card">
            <div className="good-card__image-ibg">
              <a href="card.html" className="good-card__link">
                <img src="img/home/slidergoods/01.jpg" alt="pic" />
              </a>
            </div>
            <div className="good-card__top">
              <div className="good-card__text-box">
                <p className="good-card__title">Соломон сет</p>
                <p className="good-card__info">1050 грамм, 30 кусочков</p>
              </div>
              <div className="good-card__item-bottom">
                <p className="good-card__price">1500 грн</p>
                <button className="good-card__button button-goods">
                  Хочу!
                </button>
              </div>
            </div>
          </div>
          <div className="good-card">
            <div className="good-card__image-ibg">
              <a href="card.html" className="good-card__link">
                <img src="img/home/slidergoods/02.jpg" alt="pic" />
              </a>
            </div>
            <div className="good-card__top">
              <div className="good-card__text-box">
                <p className="good-card__title">Филадельфия и лосось сет</p>
                <p className="good-card__info">1260 грамм, 36 кусочков</p>
              </div>
              <div className="good-card__item-bottom">
                <p className="good-card__price">1150 грн</p>
                <button className="good-card__button button-goods">
                  Хочу!
                </button>
              </div>
            </div>
          </div>
          <div className="good-card good-card_none">
            <div className="good-card__image-ibg">
              <a href="card.html" className="good-card__link">
                <img src="img/home/slidergoods/03.jpg" alt="pic" />
              </a>
            </div>
            <div className="good-card__top">
              <div className="good-card__text-box">
                <p className="good-card__title">Самая большая Филадельфия</p>
                <p className="good-card__info">2050 грамм, 45 кусочков</p>
              </div>
              <div className="good-card__item-bottom">
                <p className="good-card__price">2100 грн</p>
                <button className="good-card__button button-goods">
                  Хочу!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-goods__buttons">
          <button className="slider-goods__prev-button">
            <img src="img/home/slidergoods/arrow.svg" alt="arrow" />
          </button>
          <button className="slider-goods__next-button">
            <img src="img/home/slidergoods/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>
      {windowSize.width < 991.98 && <FooterMobile />}
      <PreFooter />
    </main>
  );
};

export default Home;
