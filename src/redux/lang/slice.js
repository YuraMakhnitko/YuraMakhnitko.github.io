import { createSlice } from '@reduxjs/toolkit';

import goodsItems from '../settings/goodsData.json';
import goodsItemsToSet from '../settings/goodsData.json';

// const goodsFromFetch = fetch("http://localhost:3000/goodsData.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     return res;
//   });

// console.log(goodsFromFetch);

const goodsToSet = JSON.parse(JSON.stringify(goodsItemsToSet));

const initialState = {
  type: false,
};

export const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLang(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
