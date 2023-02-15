import { createSlice } from "@reduxjs/toolkit";

import goodsItems from "./goodsData.json";

const goodsSetted = JSON.parse(JSON.stringify(goodsItems));
const goodsDefault = JSON.parse(JSON.stringify(goodsItems));

const initialState = {
  goodsSetted,
  goodsDefault,
};

// good.category === action.payload.category

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    setGoods(state, action) {
      state.goodsSetted = state.goodsSetted.filter((good) =>
        console.log(action.payload.category)
      );
      state.goodsDefault = goodsDefault;
    },
  },
});

export const { setGoods } = goodsSlice.actions;

export default goodsSlice.reducer;
