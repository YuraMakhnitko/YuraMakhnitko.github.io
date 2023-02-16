import { useSelector } from "react-redux";

import GoodsItem from "../componetns/goodsItem";
import { useScreenWidth } from "../hooks/useScreenWidth";

import Sort from "../componetns/Sort";
import FooterMobile from "../componetns/FooterMobile";

import PreFooter from "../componetns/PreFooter";

const Goods = () => {
  const category = useSelector((state) => state.filter.category);
  const { goodsSetted } = useSelector((state) => state.filter);

  const windowSize = useScreenWidth();

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
            <p className="goods-page__text">{category.title}</p>
          </div>
          <Sort />
        </div>
        <div className="goods-page__items">
          {goodsSetted.map((good) => (
            <GoodsItem key={good.id} good={good} />
          ))}
        </div>
      </section>
      {windowSize.width < 991.98 && <FooterMobile />}
      <PreFooter />
    </main>
  );
};

export default Goods;
