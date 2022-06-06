import { createSlice } from '@reduxjs/toolkit';

export type Direction = 'up' | 'down' | 'none';
type State = {
  DIRECTION: Direction;
  TICK_COUNT: number;
};

const initialState: State = {
  DIRECTION: 'none',
  TICK_COUNT: 0,
};

const scrollDetectionSlice = createSlice({
  name: 'scroll',
  initialState: initialState,
  reducers: {
    setDirection: (state, { payload }) => {
      state.DIRECTION = payload;
    },
    incrementTicks: (state) => {
      state.TICK_COUNT = state.TICK_COUNT + 1;
    },
  },
});

export default scrollDetectionSlice.reducer;
export const { setDirection, incrementTicks } = scrollDetectionSlice.actions;
