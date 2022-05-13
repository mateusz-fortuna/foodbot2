import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pages, navigationExceptions } from './navigation';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: pages,
    NAVIGATION_EXCEPTIONS: navigationExceptions,
    CURRENT_PAGE: '',
    IS_TRANSITION_ACTIVE: false,
  },
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<string>) => {
      state.CURRENT_PAGE = payload;
    },
    toggleTransitionActive: (state) => {
      state.IS_TRANSITION_ACTIVE = !state.IS_TRANSITION_ACTIVE;
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
