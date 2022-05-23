import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { english, polish } from './languages';
import EN_GB from '../../assets/json/en_gb.json';

const content = (payload: string) => {
  switch (payload) {
    case polish:
      return EN_GB;
    default:
      return EN_GB;
  }
};

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    LANGUAGE: english,
    CONTENT: content(english),
  },
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.LANGUAGE = payload;
      state.CONTENT = content(payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
