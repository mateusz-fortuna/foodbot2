import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  IMG_URL: '',
  TITLE: '',
  DESCRIPTION: '',
};

const featureDetailsSlice = createSlice({
  name: 'featureDetails',
  initialState: initialState,
  reducers: {
    setFeatureDetails: (_state, { payload }) => payload,
    resetFeatureDetails: () => initialState,
  },
});

export default featureDetailsSlice.reducer;
export const { setFeatureDetails, resetFeatureDetails } =
  featureDetailsSlice.actions;
