import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import { BsFillXCircleFill, BsFillTrashFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import Counter from "./Counter";

import { setClear, setClearCart } from "../redux/cart/slice";

const Cart = () => {
  const smallCart = true;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalSumm = useSelector((state) => state.cart.totalSumm);
  const totalCount = useSelector((state) => state.cart.totalCount);

  const orderLocation = useLocation();
  console.log(orderLocation.pathname);

  const dispatch = useDispatch();

  return totalSumm ? (
    <div className="cart">
      <div className="cart__title">
        <p className="cart__title-text">Cart</p>
      </div>
      <div className="cart__items">
        {cartItems.map((item) => (
          <div className="cart__item" key={item.id}>
            <img className="cart__item-image" src={item.imgUrl} alt="pic" />
            <div className="cart__content">
              <p className="cart__item-info">{item.title}</p>
              <div className="cart__counter">
                <div className="card-counter counter counter_small">
                  <Counter
                    smallCart={smallCart}
                    count={item.count}
                    good={item}
                  />
                </div>

                <p className="cart__item-total" title="summ">
                  {item.price * item.count} ₴
                </p>
              </div>
            </div>
            <button
              className="del-item"
              title="Remove good from cart"
              onClick={() => dispatch(setClear({ ...item }))}
            >
              <BsFillXCircleFill className="del-item" />
            </button>
          </div>
        ))}
      </div>
      <div className="cart__bottom">
        <p className="cart__bottom-title">Total</p>
        <div className="cart__total-count">
          <p className="cart__total-count-title">Amount</p>
          <p className="cart__total-count-value">{totalCount} goods</p>
        </div>
        <div className="cart__total-sum">
          <p className=" cart__total-sum_cart-in-order">Sum</p>
          <p className="cart__total-sum_cart-in-order">{totalSumm} ₴</p>
        </div>
        {orderLocation.pathname !== "/order" && (
          <Link to="/order" className="order-button">
            <p>Place Order</p>
          </Link>
        )}

        <div className="cart__clear-cart">
          <p>Clear Cart</p>

          <button
            onClick={() => dispatch(setClearCart())}
            title="Do you want to calet the Cart?"
            className="cart__clear-cart-button"
          >
            <BsFillTrashFill className="cart__clear-cart-icon" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="cart-empty">
      <p className="cart-empty__title">Your cart is empty</p>
      <p className="cart-empty__sub-title">Add something rigthnow!</p>
      <div className="cart-empty__info">
        <p className="cart-empty__info-text">Free shipping from 800₴</p>
      </div>
    </div>
  );
};

export default Cart;
