import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalSumm: 0,
  totalCount: 0,
  inc: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, action) {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      findItem
        ? (findItem.count += state.inc)
        : state.cartItems.push({
            ...action.payload,
            count: 1,
          });

      state.totalSumm = state.cartItems.reduce(
        (sum, el) => {
          return (sum = el.price * el.count + parseInt(sum));
        },
        [0]
      );

      state.totalCount = state.cartItems.reduce(
        (tCount, item) => (tCount = item.count + parseInt(tCount)),
        [0]
      );

      state.cartItems = state.cartItems.filter((item) => item.count > 0);
    },
    setInc(state, action) {
      state.inc = action.payload;
    },
    setClear(state, action) {
      const findItemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.totalSumm =
        state.totalSumm - findItemToRemove.count * findItemToRemove.price;

      state.totalCount = state.totalCount - findItemToRemove.count;

      findItemToRemove.count = 0;

      state.cartItems = state.cartItems.filter((item) => item.count > 0);
    },
    setClearCart(state) {
      state.cartItems = [];
      state.totalSumm = 0;
      state.totalCount = 0;
    },
  },
});

export const { setCartItem, setInc, setClear, setClearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
