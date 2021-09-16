import { createSlice } from '@reduxjs/toolkit';

const initialLoadingSlice = createSlice({
  name: 'initialLoading',
  initialState: {
    INITIAL_LOADING: true,
  },
  reducers: {
    setInitialLoading: (state) => {
      state.INITIAL_LOADING = false;
    },
  },
});

export const { setInitialLoading } = initialLoadingSlice.actions;
export default initialLoadingSlice.reducer;
