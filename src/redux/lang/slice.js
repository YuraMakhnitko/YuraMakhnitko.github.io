import { createSlice } from '@reduxjs/toolkit';

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
