import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    IS_MENU_OPENED: false,
    IS_MENU_TRANSITION: false,
    IS_MENU_TRANSITION_IN_PROGRESS: false,
    IS_MENU_ITEM_TRANSITION: false,
  },
  reducers: {
    toggleMenuOpened: (state) => {
      state.IS_MENU_OPENED = !state.IS_MENU_OPENED;
    },
    toggleMenuTransition: (state) => {
      state.IS_MENU_TRANSITION = !state.IS_MENU_TRANSITION;
    },
    toggleMenuTransitionProgress: (state) => {
      state.IS_MENU_TRANSITION_IN_PROGRESS =
        !state.IS_MENU_TRANSITION_IN_PROGRESS;
    },
    toggleMenuItemTransition: (state) => {
      state.IS_MENU_ITEM_TRANSITION = !state.IS_MENU_ITEM_TRANSITION;
    },
  },
});

export const {
  toggleMenuOpened,
  toggleMenuTransition,
  toggleMenuTransitionProgress,
  toggleMenuItemTransition,
} = menuSlice.actions;
export default menuSlice.reducer;
