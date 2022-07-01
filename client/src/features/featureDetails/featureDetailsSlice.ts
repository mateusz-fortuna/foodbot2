import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/rootReducer';

export type FeatureName =
  keyof RootState['languageReducer']['CONTENT']['features'];

type State = {
  INDEX: number;
  OPENED_FEATURE: FeatureName | null;
  PREVIOUS: FeatureName | null;
  NEXT: FeatureName | null;
  IS_DETAIL_TRANSITION: boolean;
};

const initialState: State = {
  INDEX: 0,
  OPENED_FEATURE: null,
  PREVIOUS: null,
  NEXT: null,
  IS_DETAIL_TRANSITION: false,
};

const featureDetailsSlice = createSlice({
  name: 'featureDetails',
  initialState: initialState,
  reducers: {
    setFeatureDetails: (state, { payload }) => ({ ...state, ...payload }),
    resetFeatureDetails: () => initialState,
    toggleDetailTransition: (state) => {
      state.IS_DETAIL_TRANSITION = !state.IS_DETAIL_TRANSITION;
    },
  },
});

export default featureDetailsSlice.reducer;
export const {
  setFeatureDetails,
  resetFeatureDetails,
  toggleDetailTransition,
} = featureDetailsSlice.actions;
