import { createSlice } from '@reduxjs/toolkit';

const transitionSlice = createSlice({
  name: 'transition',
  initialState: {
    IS_TRANSITION_ACTIVE: false,
    DURATION: 1000,
    ELEMENTS_DELAY: 100,
  },
  reducers: {
    toggleTransitionActive: (state) => {
      state.IS_TRANSITION_ACTIVE = !state.IS_TRANSITION_ACTIVE;
    },
  },
});

export const { toggleTransitionActive } = transitionSlice.actions;
export default transitionSlice.reducer;
