import { configureStore } from '@reduxjs/toolkit';

import filter from './filter/slice';
import goods from './settings/goodsSlice';
import card from './goodCard/slice';
import cart from './cart/slice';
import header from './header/slice';

export const store = configureStore({
  reducer: { filter, goods, card, cart, header },
});
