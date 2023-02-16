import { BsFillXCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const OrderPopup = ({ userName, telephone, setOrderPopup }) => {
  const { totalSumm, totalCount } = useSelector((state) => state.cart);

  return (
    <div className="popup-order">
      <div className="popup-order__popup-container">
        <p className="popup-order__popup-title">
          Hello, dear mister {userName}
        </p>
        <p className="popup-order__popup-subtitle">
          Your order successfully placed!
        </p>
        <div className="popup-order__line"></div>
        <p className="popup-order__popup-text">
          Total amount of goods: <span>{totalCount}</span>
        </p>
        <p className="popup-order__popup-text">
          Total sum: <span>{totalSumm}</span> ₴
        </p>
        <p className="popup-order__popup-text">
          Your phone number: <span>{telephone}</span>
        </p>
        <p className="popup-order__popup-text">
          We will contact you soon for clarification.
        </p>
        <div className="popup-order__line"></div>
        <p className="popup-order__popup-text">
          <span>Thank you for your order!</span>
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
