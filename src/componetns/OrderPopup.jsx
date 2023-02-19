import { BsFillXCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const OrderPopup = ({ userName, telephone, setOrderPopup }) => {
  const { totalSumm, totalCount } = useSelector((state) => state.cart);
  const lang = useSelector((state) => state.filter.lang);

  return (
    <div className="popup-order">
      <div className="popup-order__popup-container">
        <p className="popup-order__popup-title">
          {lang ? 'Вітаємо' : 'Hello, dear'} {userName}
        </p>
        <p className="popup-order__popup-subtitle">
          {lang
            ? 'Ваше замовлення успішно зареєстровано!'
            : 'Your order successfully placed!'}
        </p>
        <div className="popup-order__line"></div>
        <p className="popup-order__popup-text">
          {lang ? 'Загальна кількість товарів' : 'Total amount of goods:'}{' '}
          <span>{totalCount}</span>
        </p>
        <p className="popup-order__popup-text">
          {lang ? 'Загальна сума:' : 'Total sum:'} <span>{totalSumm}</span> ₴
        </p>
        <p className="popup-order__popup-text">
          {lang ? 'Ваш телефон:' : 'Your phone number:'}{' '}
          <span>{telephone}</span>
        </p>
        <p className="popup-order__popup-text">
          {lang
            ? 'Скоро ми з Вами звʼяжемося для уточнень'
            : 'We will contact you soon for clarification.'}
        </p>
        <div className="popup-order__line"></div>
        <p className="popup-order__popup-text">
          <span>
            {lang
              ? 'Дякуємо за замовлення 😊!'
              : 'Thank you for your order 😊!'}
          </span>
        </p>
        <button
          className="popup-order__close-button"
          onClick={() => setOrderPopup(false)}
        >
          <BsFillXCircleFill className="popup-order__close-button-icon" />
        </button>
      </div>
    </div>
  );
};

export default OrderPopup;
