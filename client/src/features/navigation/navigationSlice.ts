import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: ['', 'features', 'gallery', 'contact'],
    EXCEPTIONS: ['gallery'],
    IS_NAVIGATION_ACTIVE: false,
    IS_NAVIGATION_PREVENTED: false,
  },
  reducers: {
    toggleNavigationActive: (state) => {
      state.IS_NAVIGATION_ACTIVE = !state.IS_NAVIGATION_ACTIVE;
    },
    setNavigationPrevented: (state, { payload }) => {
      state.IS_NAVIGATION_PREVENTED = payload;
    },
  },
});

export default navigationSlice.reducer;
export const { toggleNavigationActive, setNavigationPrevented } =
  navigationSlice.actions;
