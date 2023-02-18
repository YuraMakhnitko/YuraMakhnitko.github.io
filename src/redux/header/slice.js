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
  headerHeight: 0,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeight(state, action) {
      state.headerHeight = action.payload;
    },
  },
});

export const { setHeight } = headerSlice.actions;

export default headerSlice.reducer;
