import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useScreenWidth } from "../hooks/useScreenWidth";
import PreFooter from "../componetns/PreFooter";
import OrderPopup from "../componetns/OrderPopup";
import FooterMobile from "../componetns/FooterMobile";

const Order = () => {
  const orderItemOn = "order__radio-item_on";
  const orderFinal = useSelector((state) => state.cart);
  const { cartItems, totalCount, totalSumm } = orderFinal;
  const [dataOrder, setDataOrder] = useState();
  const [orderPopup, setOrderPopup] = useState(false);
  const orderPopUpActive = "popup-box_active";
  const orderPopUpBackActive = "popup-order__dark-backgound_on";

  const widowSize = useScreenWidth();

  const popupRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const orderItems = cartItems.map((item) => ({
    ...item,
    itemSumm: item.count * item.price,
  }));

  const onSomeSubmit = (data) => {
    setDataOrder({ ...data, orderItems, totalCount, totalSumm });
    console.log({ ...data, orderItems, totalCount, totalSumm });
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm();

  const payment = watch();
  const delivery = watch();
  const shippingTime = watch();

  const popupHandler = () => {
    if (totalCount > 0 && isValid) {
      setOrderPopup(true);
    }
  };

  useEffect(() => {
    if (payment.cash) {
      setValue("card", false);
    }
  }, [payment.cash, setValue]);

  useEffect(() => {
    if (payment.card) {
      setValue("cash", false);
    }
  }, [payment.card, setValue]);

  useEffect(() => {
    if (delivery.courier) {
      setValue("pickup", false);
    }
  }, [delivery.courier, setValue]);

  useEffect(() => {
    if (delivery.pickup) {
      setValue("courier", false);
    }
  }, [delivery.pickup, setValue]);

  useEffect(() => {
    if (shippingTime.toNow) {
      setValue("forAWhile", false);
    }
  }, [shippingTime.toNow, setValue]);

  useEffect(() => {
    if (shippingTime.forAWhile) {
      setValue("toNow", false);
    }
  }, [shippingTime.forAWhile, setValue]);

  const orderPopoupClickOutside = () => {
    if (orderPopup) {
      setOrderPopup(false);
    }
  };

  return (
    <main className="shop-main">
      <section className="order">
        <form
          className="order__form"
          onSubmit={handleSubmit(onSomeSubmit)}
          style={{ position: `relative` }}
        >
          <p className="order__title-label">Your data</p>
          <div className="order__content-box">
            <div className="order__item">
              <div className="order__input-block">
                <div className="order__input-box">
                  <input
                    placeholder="
                   Telephone"
                    className="order__input"
                    type="telephone"
                    {...register("telephone", {
                      required: "+00(000)000-00-00",
                      pattern: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
                    })}
                  />
                  {errors.telephone && (
                    <p className="order__errors">{`+00(000)000-00-00`}</p>
                  )}
                </div>
                <div className="order__input-box">
                  <input
                    placeholder="Your name"
                    className="order__input"
                    type="userName"
                    {...register("userName", {
                      required: "User name is required!",
                      maxLength: 10,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.userName && (
                    <p className="order__errors">Name up to 10 letters</p>
                  )}
                </div>
              </div>
              <div className="order__input-block">
                <div className="order__radio-items">
                  <div className="order__input-box">
                    <button
                      className={` ${
                        payment.cash
                          ? `order__radio-item ${orderItemOn}`
                          : "order__radio-item"
                      }`}
                    >
                      <input
                        id="cashOnly"
                        name="payment"
                        type="radio"
                        value="cash"
                        {...register("cash", {
                          required: !payment.card && !payment.cash,
                        })}
                        placeholder="cash"
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_24_1848)">
                          <path
                            d="M19.1821 11.0755V8.54563C19.1821 7.68778 18.5167 6.99013 17.676 6.92248L15.3265 2.81885C15.1088 2.43932 14.7572 2.16806 14.3366 2.05542C13.9179 1.94355 13.4801 2.00231 13.1053 2.22041L5.05136 6.90928H3.63684C2.73439 6.90928 2.00049 7.64314 2.00049 8.54563V18.3637C2.00049 19.2661 2.73435 20 3.63684 20H17.5457C18.4482 20 19.1821 19.2661 19.1821 18.3637V15.8338C19.6572 15.6644 20.0002 15.2145 20.0002 14.6819V12.2274C20.0002 11.6948 19.6572 11.2449 19.1821 11.0755ZM16.7253 6.90928H13.1597L15.8339 5.35236L16.7253 6.90928ZM15.4274 4.64236L11.5336 6.90928H9.91849L15.0236 3.93703L15.4274 4.64236ZM13.5172 2.9275C13.7022 2.81923 13.9183 2.79047 14.1248 2.84562C14.3338 2.90154 14.508 3.03657 14.6162 3.22553L14.6171 3.22703L8.2925 6.90928H6.67747L13.5172 2.9275ZM18.3639 18.3637C18.3639 18.8147 17.9967 19.1818 17.5457 19.1818H3.63684C3.18582 19.1818 2.81868 18.8147 2.81868 18.3637V8.54563C2.81868 8.09462 3.18582 7.72748 3.63684 7.72748H17.5457C17.9967 7.72748 18.3639 8.09462 18.3639 8.54563V11.0001H15.9094C14.5559 11.0001 13.4549 12.1011 13.4549 13.4546C13.4549 14.8081 14.5559 15.9091 15.9094 15.9091H18.3639V18.3637ZM19.1821 14.6819C19.1821 14.9076 18.9987 15.091 18.773 15.091H15.9094C15.0069 15.091 14.273 14.3571 14.273 13.4546C14.273 12.5522 15.0069 11.8183 15.9094 11.8183H18.773C18.9987 11.8183 19.1821 12.0017 19.1821 12.2274V14.6819Z"
                            fill="black"
                          />
                          <path
                            d="M15.909 12.6365C15.458 12.6365 15.0908 13.0036 15.0908 13.4546C15.0908 13.9057 15.458 14.2728 15.909 14.2728C16.36 14.2728 16.7271 13.9057 16.7271 13.4546C16.7272 13.0036 16.36 12.6365 15.909 12.6365Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_1848">
                            <rect
                              width="18"
                              height="18"
                              fill="white"
                              transform="translate(2 2)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="order__radio-item-text">Cash</p>
                    </button>
                    {errors.cash && errors.card && (
                      <p className="order__errors">Field is required</p>
                    )}
                  </div>
                  <div className="order__input-box">
                    <button
                      className={` ${
                        payment.card
                          ? `order__radio-item ${orderItemOn}`
                          : "order__radio-item"
                      }`}
                    >
                      <input
                        id="cardOnly"
                        name="payment"
                        type="radio"
                        value="card"
                        {...register("card", {
                          required: !payment.cash && !payment.card,
                        })}
                        className="order__payment"
                        placeholder="card"
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_24_1854)">
                          <path
                            d="M19.7083 3.66665H2.29165C1.0285 3.66665 0 4.69515 0 5.95834V16.0417C0 17.3048 1.0285 18.3333 2.29165 18.3333H19.7083C20.9715 18.3333 22 17.3048 22 16.0417V5.95834C22 4.69515 20.9715 3.66665 19.7083 3.66665ZM21.0833 16.0416C21.0833 16.7997 20.4664 17.4166 19.7083 17.4166H2.29165C1.53355 17.4166 0.916652 16.7997 0.916652 16.0416V5.95834C0.916652 5.20025 1.53355 4.58334 2.29165 4.58334H19.7083C20.4664 4.58334 21.0833 5.20025 21.0833 5.95834V16.0416H21.0833Z"
                            fill="#111111"
                          />
                          <path
                            d="M21.5417 6.41665H0.458348C0.205348 6.41665 0 6.622 0 6.875V9.625C0 9.878 0.205348 10.0833 0.458348 10.0833H21.5417C21.7947 10.0833 22 9.878 22 9.625V6.875C22 6.622 21.7947 6.41665 21.5417 6.41665ZM21.0833 9.16665H0.916652V7.3333H21.0833V9.16665H21.0833Z"
                            fill="#111111"
                          />
                          <path
                            d="M8.70835 12.8333H3.20835C2.95535 12.8333 2.75 13.0387 2.75 13.2917C2.75 13.5447 2.95535 13.75 3.20835 13.75H8.70835C8.96135 13.75 9.1667 13.5446 9.1667 13.2916C9.1667 13.0386 8.96135 12.8333 8.70835 12.8333Z"
                            fill="#111111"
                          />
                          <path
                            d="M8.70835 14.6667H3.20835C2.95535 14.6667 2.75 14.872 2.75 15.125C2.75 15.378 2.95535 15.5834 3.20835 15.5834H8.70835C8.96135 15.5834 9.1667 15.378 9.1667 15.125C9.16665 14.872 8.96135 14.6667 8.70835 14.6667Z"
                            fill="#111111"
                          />
                          <path
                            d="M17.8751 11.9167H16.9585C16.2004 11.9167 15.5835 12.5336 15.5835 13.2917V14.2083C15.5835 14.9664 16.2004 15.5833 16.9585 15.5833H17.8751C18.6332 15.5833 19.2501 14.9664 19.2501 14.2083V13.2917C19.2501 12.5336 18.6332 11.9167 17.8751 11.9167ZM18.3335 14.2084C18.3335 14.4614 18.1281 14.6667 17.8751 14.6667H16.9585C16.7055 14.6667 16.5001 14.4614 16.5001 14.2084V13.2917C16.5001 13.0387 16.7055 12.8334 16.9585 12.8334H17.8751C18.1281 12.8334 18.3335 13.0387 18.3335 13.2917V14.2084Z"
                            fill="#111111"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_24_1854">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="order__radio-item-text">Card</p>
                    </button>
                    {errors.card && errors.cash && (
                      <p className="order__errors">Field is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="order__input-box">
                <input
                  type="comment"
                  {...register("comment", {
                    maxLength: 100,
                  })}
                  className="order__comment"
                  placeholder="Comment to the order..."
                />
                {errors.comment && (
                  <p className="order__errors">Max symbols 100</p>
                )}
              </div>
              <div className="order__input-box">
                <input
                  {...register("promocode", {
                    maxLength: 8,
                  })}
                  type="promocode"
                  placeholder="Enter promo code"
                  className="order__input"
                />
                {errors.promocode && (
                  <p className="order__errors">Max symbols 8</p>
                )}
              </div>
            </div>
            <div className="order__item">
              <div className="order__input-block">
                <div className="order__radio-items">
                  <div className="order__input-box">
                    <button
                      className={` ${
                        delivery.courier
                          ? `order__radio-item ${orderItemOn}`
                          : "order__radio-item"
                      }`}
                    >
                      <input
                        type="radio"
                        value="courier"
                        {...register("courier", {
                          required: !delivery.pickup && !delivery.courier,
                        })}
                      />
                      <p className="order__radio-item-text">By courier</p>
                    </button>
                    {errors.courier && errors.pickup && (
                      <p className="order__errors">Field is required</p>
                    )}
                  </div>
                  <div className="order__input-box">
                    <button
                      className={` ${
                        delivery.pickup
                          ? `order__radio-item ${orderItemOn}`
                          : "order__radio-item"
                      }`}
                    >
                      <input
                        type="radio"
                        value="pickup"
                        {...register("pickup", {
                          required: !delivery.courier && !delivery.pickup,
                        })}
                      />
                      <p className="order__radio-item-text">Pickup</p>
                    </button>
                    {errors.courier && errors.pickup && (
                      <p className="order__errors">Field is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="order__input-block">
                <div className="order__input-box">
                  <input
                    disabled={delivery.pickup}
                    {...register("street", {
                      required: delivery.pickup ? false : true,
                      maxLength: 20,
                    })}
                    type="street"
                    placeholder="Street"
                    className="order__input"
                  />
                  {errors.street && delivery.courier && (
                    <p className="order__errors">Street is required!</p>
                  )}
                </div>
                <div className="order__input-box">
                  <input
                    disabled={delivery.pickup}
                    {...register("house", {
                      required: delivery.pickup ? false : true,
                      maxLength: 4,
                    })}
                    type="house"
                    placeholder="House"
                    className="order__input"
                  />
                  {errors.house && delivery.courier && (
                    <p className="order__errors">House is required!</p>
                  )}
                </div>
              </div>
              <div className="order__radio-items">
                <div className="order__input-box">
                  <button
                    className={` ${
                      shippingTime.toNow
                        ? `order__radio-item ${orderItemOn}`
                        : "order__radio-item"
                    }`}
                  >
                    <input
                      type="radio"
                      value="toNow"
                      {...register("toNow", {
                        required:
                          !shippingTime.forAWhile && !shippingTime.toNow,
                      })}
                    />
                    <p className="order__radio-item-text">To now</p>
                  </button>
                  {errors.toNow && errors.forAWhile && (
                    <p className="order__errors">Field is required</p>
                  )}
                </div>
                <div className="order__input-box">
                  <button
                    className={` ${
                      shippingTime.forAWhile
                        ? `order__radio-item ${orderItemOn}`
                        : "order__radio-item"
                    }`}
                  >
                    <input
                      type="radio"
                      value="forAWhile"
                      {...register("forAWhile", {
                        required:
                          !shippingTime.toNow && !shippingTime.forAWhile,
                      })}
                    />
                    <p className="order__radio-item-text">For a while</p>
                  </button>
                  {errors.toNow && errors.forAWhile && (
                    <p className="order__errors">Field is required</p>
                  )}
                </div>
              </div>
              <input
                type="email"
                {...register("email", {
                  pattern:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                })}
                placeholder="E-mail(
                  Not necessary)"
                className="order__email"
              />
            </div>
          </div>
          {widowSize.width < 991.98 && (
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
            </div>
          )}

          <div
            ref={popupRef}
            className={`${
              orderPopup ? `popup-box ${orderPopUpActive}` : "popup-box"
            }`}
          >
            <div
              onClick={orderPopoupClickOutside}
              className={`${
                orderPopup
                  ? `popup-order__dark-backgound ${orderPopUpBackActive}`
                  : `popup-order__dark-backgound`
              }`}
            ></div>

            <OrderPopup
              {...dataOrder}
              setOrderPopup={setOrderPopup}
              orderPopup={orderPopup}
            />
          </div>

          <button
            className="order-button order-button_in-order-bottom"
            type="submit"
            onClick={popupHandler}
            ref={buttonRef}
          >
            Checkout
          </button>
          {widowSize.width < 991.98 && <FooterMobile />}
        </form>
      </section>

      <PreFooter />
    </main>
  );
};

export default Order;
