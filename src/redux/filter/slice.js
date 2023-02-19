import { createSlice } from '@reduxjs/toolkit';

import goodsItems from '../settings/goodsData.json';
import goodsItemsToSet from '../settings/goodsData.json';

const goodsToSet = JSON.parse(JSON.stringify(goodsItemsToSet));

const category = {
  title: 'Pizza',
  titleUa: 'Піца',
  categoryId: 1,
  imgUrl: 'img/icons/pizza.svg',
  imgBigUrl: 'img/categories/pizza.jpg',
  isSoon: false,
};

const goodsSetted = goodsItems.filter(
  (good) => good.category === category.categoryId
);
const goodsBoofer = goodsItems.filter(
  (good) => good.category === category.categoryId
);

const sort = {
  titleFilter: 'By default',
  titleFilterUa: 'Початкове',
  field: null,
  desk: 0,
};

const initialState = {
  category,
  searchValue: '',
  sort,
  openPopUp: false,
  goodsToSet,
  goodsBoofer,
  goodsSetted,
  lang: false,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.goodsSetted = state.goodsToSet.filter(
        (good) => good.category === action.payload.categoryId
      );

      state.goodsBoofer = state.goodsToSet.filter(
        (good) => good.category === state.category.categoryId
      );
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload;

      state.searchValue
        ? state.lang
          ? (state.goodsSetted = state.goodsBoofer.filter((item) =>
              item.titleUa
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
            ))
          : (state.goodsSetted = state.goodsBoofer.filter((item) =>
              item.title.toLowerCase().includes(state.searchValue.toLowerCase())
            ))
        : (state.goodsSetted = state.goodsBoofer);
    },
    setSort(state, action) {
      state.sort = action.payload;
      state.sort.titleFilter !== 'By default' &&
      state.sort.titleFilter !== 'Початкове'
        ? (state.goodsSetted = state.goodsSetted.sort((a, b) =>
            a[state.sort.field] > b[state.sort.field]
              ? 1 * state.sort.desk
              : -1 * state.sort.desk
          ))
        : (state.goodsSetted = state.goodsBoofer);

      state.openPopUp = false;
    },
    setOpenPopUp(state, action) {
      state.openPopUp = action.payload;
    },
    setLang(state, action) {
      state.lang = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setSort,
  setOpenPopUp,
  setCategory,
  setGoods,
  setLang,
} = filterSlice.actions;

export default filterSlice.reducer;
