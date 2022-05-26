import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/rootReducer';

export type FeatureName =
  keyof RootState['languageReducer']['CONTENT']['features'];

type State = {
  OPENED_FEATURE: FeatureName | null;
  PREVIOUS: FeatureName | null;
  NEXT: FeatureName | null;
};

const initialState: State = {
  OPENED_FEATURE: null,
  PREVIOUS: null,
  NEXT: null,
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
