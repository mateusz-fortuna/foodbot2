import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import defaultLanguage from './languages';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    LANGUAGE: defaultLanguage,
  },
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.LANGUAGE = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
