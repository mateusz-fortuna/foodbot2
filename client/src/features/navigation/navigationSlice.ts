import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pages, navigationExceptions } from './navigation';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: pages,
    NAVIGATION_EXCEPTIONS: navigationExceptions,
    CURRENT_PAGE: '',
  },
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<string>) => {
      state.CURRENT_PAGE = payload;
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
