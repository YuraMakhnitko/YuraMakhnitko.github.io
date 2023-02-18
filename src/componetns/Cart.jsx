import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { BsFillXCircleFill, BsFillTrashFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import { useScreenWidth } from '../hooks/useScreenWidth';

import Counter from './Counter';

import { setClear, setClearCart } from '../redux/cart/slice';
import FooterMobile from './FooterMobile';

const Cart = () => {
  const smallCart = true;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalSumm = useSelector((state) => state.cart.totalSumm);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const lang = useSelector((state) => state.lang.type);

  const widowSize = useScreenWidth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orderLocation = useLocation();
  console.log(orderLocation.pathname);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      {totalSumm ? (
        <>
          <div className="cart__title">
            <p className="cart__title-text">{lang ? 'Кошик' : 'Cart'}</p>
          </div>
          <div className="cart__items">
            {cartItems.map((item) => (
              <div className="cart__item" key={item.id}>
                <img className="cart__item-image" src={item.imgUrl} alt="pic" />
                <div className="cart__content">
                  <p className="cart__item-info">
                    {lang ? item.titleUa : item.title}
                  </p>
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
            <p className="cart__bottom-title">{lang ? 'Вього' : 'Total'}</p>
            <div className="cart__total-count">
              <p className="cart__total-count-title">
                {lang ? 'Кількість' : 'Amount'}
              </p>
              <p className="cart__total-count-value">
                {totalCount} {lang ? 'од.' : 'goods'}
              </p>
            </div>
            <div className="cart__total-sum">
              <p className=" cart__total-sum_cart-in-order">
                {lang ? 'Сума' : 'Sum'}
              </p>
              <p className="cart__total-sum_cart-in-order">{totalSumm} ₴</p>
            </div>
            {orderLocation.pathname !== '/order' && (
              <Link to="/order" className="order-button">
                <p>{lang ? 'До Замовлення' : 'Place Order'}</p>
              </Link>
            )}

            <div className="cart__clear-cart">
              <p>{lang ? 'Очистити Кошик' : 'Clear Cart'}</p>

              <button
                onClick={() => dispatch(setClearCart())}
                title="Do you want to calet the Cart?"
                className="cart__clear-cart-button"
              >
                <BsFillTrashFill className="cart__clear-cart-icon" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="cart-empty">
          <p className="cart-empty__title">
            {lang ? 'Кошик порожній' : 'Your cart is empty'}
          </p>
          <p className="cart-empty__sub-title">
            {lang ? "Замовляйте на здров'я 😉!" : 'Add something rigthnow 😉!'}
          </p>
          <div className="cart-empty__info">
            <p className="cart-empty__info-text">
              {lang
                ? 'Безкоштовна доставка від 800₴'
                : 'Free shipping from 800₴'}
            </p>
          </div>
        </div>
      )}
      {widowSize.width < 991.98 && <FooterMobile />}
    </div>
  );
};

export default Cart;
