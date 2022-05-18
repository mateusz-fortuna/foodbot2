import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    IS_MENU_OPENED: false,
  },
  reducers: {
    toggleMenuOpened: (state) => {
      state.IS_MENU_OPENED = !state.IS_MENU_OPENED;
    },
  },
});

export const { toggleMenuOpened } = menuSlice.actions;
export default menuSlice.reducer;
