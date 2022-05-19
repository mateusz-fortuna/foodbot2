import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    IS_MENU_OPENED: false,
    IS_MENU_TRANSITION: false,
    IS_MENU_TRANSITION_IN_PROGRESS: false,
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
  },
});

export const {
  toggleMenuOpened,
  toggleMenuTransition,
  toggleMenuTransitionProgress,
} = menuSlice.actions;
export default menuSlice.reducer;
