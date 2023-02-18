import { createSlice } from '@reduxjs/toolkit';

const cardItem = {
  title: 'Соломон сет',
  weight: 1500,
  pieces: 30,
  category: 2,
  price: 1500,
  id: 101,
  imgUrl: 'img/goods/01.png',
  composition: 'Lorem ipsum dolor sit amet amet',
};

const initialState = {
  cardItem,
};

export const goodCardSlice = createSlice({
  name: 'goodCard',
  initialState,
  reducers: {
    setGoodCard(state, action) {
      state.cardItem = action.payload;
    },
  },
});

export const { setGoodCard } = goodCardSlice.actions;

export default goodCardSlice.reducer;
