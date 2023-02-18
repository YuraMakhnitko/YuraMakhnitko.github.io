import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import GoodsItem from '../componetns/goodsItem';
import { useScreenWidth } from '../hooks/useScreenWidth';

import Sort from '../componetns/Sort';
import FooterMobile from '../componetns/FooterMobile';

import PreFooter from '../componetns/PreFooter';

const Goods = () => {
  const category = useSelector((state) => state.filter.category);
  const { goodsSetted } = useSelector((state) => state.filter);
  const lang = useSelector((state) => state.lang.type);

  const windowSize = useScreenWidth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, goodsSetted]);

  return (
    <main className="shop-main">
      <section className="goods-page">
        <div className="goods-page__top">
          <div className="goods-page__top-title">
            <img
              className="goods-page__title-svg"
              src={category.imgUrl}
              alt="sets"
            />
            <p className="goods-page__text">
              {lang ? category.titleUa : category.title}
            </p>
          </div>
          <Sort />
        </div>
        <div className="goods-page__items">
          {goodsSetted.map((good) => (
            <GoodsItem key={good.id} good={good} />
          ))}
        </div>
        {windowSize.width < 991.98 && <FooterMobile />}
      </section>
      <PreFooter />
    </main>
  );
};

export default Goods;
