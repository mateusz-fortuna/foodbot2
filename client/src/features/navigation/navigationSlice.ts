import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: ['', 'features', 'gallery', 'contact', 'blog'],
    IS_TRANSITION_ACTIVE: false,
    NAVIGATION_DURATION: 1000,
  },
  reducers: {
    toggleTransitionActive: (state) => {
      state.IS_TRANSITION_ACTIVE = !state.IS_TRANSITION_ACTIVE;
    },
  },
});

export const { toggleTransitionActive } = navigationSlice.actions;
export default navigationSlice.reducer;
