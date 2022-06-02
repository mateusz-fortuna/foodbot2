import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: ['', 'features', 'gallery', 'contact', 'blog'],
    EXCEPTIONS: ['gallery'],
    IS_NAVIGATION_ACTIVE: false,
  },
  reducers: {
    toggleNavigationActive: (state) => {
      state.IS_NAVIGATION_ACTIVE = !state.IS_NAVIGATION_ACTIVE;
    },
  },
});

export default navigationSlice.reducer;
export const { toggleNavigationActive } = navigationSlice.actions;
