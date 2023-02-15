import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setInc, setClear } from "../redux/cart/slice";

const smallCounterButton = "counter__button counter__button_small";
const counterButton = "counter__button ";
const smallCounterIcon = "counter__icon counter__icon_small";
const counterIcon = "counter__icon ";
const smallCounterValue = "counter__value counter__value_small";
const counterValue = "counter__value";

const Counter = ({ smallCart, count, good }) => {
  const dispatch = useDispatch();

  const setCounterHandleDec = () => {
    if (count > 0) {
      dispatch(setInc(-1));
      dispatch(setCartItem({ ...good }));
    }
  };
  const setCounterHandleInc = () => {
    dispatch(setInc(1));
    dispatch(setCartItem({ ...good }));
  };

  return (
    <>
      <button
        disabled={count === 0}
        onClick={setCounterHandleDec}
        className={smallCart ? smallCounterButton : counterButton}
      >
        <svg
          className={smallCart ? smallCounterIcon : counterIcon}
          width="23"
          height="2"
          viewBox="0 0 23 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L22 0.999999"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <p className={smallCart ? smallCounterValue : counterValue}>{count}</p>
      <button
        onClick={setCounterHandleInc}
        className={smallCart ? smallCounterButton : counterButton}
      >
        <img
          className={smallCart ? smallCounterIcon : counterIcon}
          src="img/home/cart/inc.svg"
          alt="icon"
        />
      </button>
    </>
  );
};

export default Counter;
