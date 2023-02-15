import { useEffect } from "react";
import GoodsItem from "../componetns/goodsItem";
import { useScreenWidth } from "../hooks/useScreenWidth";

import { useSelector, useDispatch } from "react-redux";

import { setGoods } from "../redux/filter/slice";

import Sort from "../componetns/Sort";
import FooterMobile from "../componetns/FooterMobile";

import PreFooter from "../componetns/PreFooter";

const Goods = () => {
  const dispatch = useDispatch();
  // const searchValue = useSelector((state) => state.filter.searchValue);
  const { field, desk } = useSelector((state) => state.filter.sort);
  const category = useSelector((state) => state.filter.category);
  const { goodsToSet, goodsSetted } = useSelector((state) => state.filter);

  const windowSize = useScreenWidth();

  // useEffect(() => {
  // field !== null
  //   ? dispatch(
  //       setGoods(
  //         filteredGoods.sort((a, b) =>
  //           a[field] > b[field] ? 1 * [desk] : -1 * [desk]
  //         )
  //       )
  //     )
  //   : dispatch(setGoods(goodsDefault));
  // }, [field, desk]);

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
