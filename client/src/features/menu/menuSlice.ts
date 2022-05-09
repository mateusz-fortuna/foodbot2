import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isMenuOpened: false,
  },
  reducers: {
    toggleMenuOpened: (state) => {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
});

export const { toggleMenuOpened } = menuSlice.actions;
export default menuSlice.reducer;
