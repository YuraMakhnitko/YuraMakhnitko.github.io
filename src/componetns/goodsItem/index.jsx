import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setGoodCard } from "../../redux/goodCard/slice";
import { setCartItem, setInc } from "../../redux/cart/slice";

const GoodsItem = ({ good }) => {
  const { title, weight, pieces, category, price, id, imgUrl } = good;

  const dispatch = useDispatch();

  let goodInfoForSmallCard = "pieses";
  let goodMeasuring = "gramm";

  if (category === 1) {
    goodInfoForSmallCard = "sm size";
  }
  if (category === 9) {
    goodInfoForSmallCard = "glass";
    goodMeasuring = "ml volume";
  }
  if (category === 8 || category === 3) {
    goodInfoForSmallCard = "portion";
  }

  const onHandleAdd = () => {
    dispatch(setInc(1));
    dispatch(setCartItem({ ...good }));
  };

  return (
    <div className="good-card">
      <div className="good-card__image-ibg">
        <Link
          to={"/card"}
          className="good-card__link"
          onClick={() => dispatch(setGoodCard({ ...good }))}
        >
          <img src={imgUrl} alt="pic" />
        </Link>
      </div>
      <div className="good-card__top">
        <div className="good-card__text-box">
          <p className="good-card__title">{title}</p>
          <p className="good-card__info">
            {weight} {goodMeasuring}, {pieces} {goodInfoForSmallCard}
          </p>
        </div>
        <div className="good-card__item-bottom">
          <p className="good-card__price">{price} ₴</p>
          <button
            onClick={onHandleAdd}
            className="good-card__button button-goods"
          >
            <span>Want!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
