import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/filter/slice';

import TopSlider from '../componetns/TopSlider';
import PreFooter from '../componetns/PreFooter';
import catgoriesList from '../redux/settings/categories.json';

import FooterMobile from '../componetns/FooterMobile';

import { useScreenWidth } from '../hooks/useScreenWidth';
import { slideItems } from '../redux/settings/actionsItems';

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

const categories = JSON.parse(JSON.stringify(catgoriesList));

const Home = () => {
  const lang = useSelector((state) => state.filter.lang);

  const dispatch = useDispatch();
  const disabledStyle = 'goods__link_disabled';
  const disabledStyleItem = 'goods__item_disabled';

  const windowSize = useScreenWidth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="shop-main">
      <section className="main-banner">
        <TopSlider slideItems={slideItems} settings={settings} />
      </section>
      <section className="shop-center__goods goods">
        {categories.map((category) => (
          <div
            className={`goods__item ${
              category.isSoon ? disabledStyleItem : ''
            }`}
            key={category.categoryId}
          >
            <div className="goods__image-ibg">
              <Link
                to={`${category.isSoon ? '' : '/goods'}`}
                className={`goods__link ${
                  category.isSoon ? disabledStyle : ''
                }`}
                onClick={() => dispatch(setCategory({ ...category }))}
              >
                <img src={category.imgBigUrl} alt="chicken" />
                <p className="goods__text-item">
                  {lang ? category.titleUa : category.title}
                </p>

                {category.isSoon && (
                  <div className="info info_goods">
                    <p className="info__text">{lang ? 'Скоро' : 'Soon'}</p>
                  </div>
                )}
              </Link>
            </div>
          </div>
        ))}
      </section>
      {windowSize.width < 991.98 && <FooterMobile />}
      <PreFooter />
    </main>
  );
};

export default Home;
