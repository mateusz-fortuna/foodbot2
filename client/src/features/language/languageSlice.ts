import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import EN_GB from '../../assets/json/en_gb.json';
import PL_PL from '../../assets/json/pl_pl.json';

export type Language = 'english' | 'polish';

const getContent = (payload?: Language) => {
  switch (payload) {
    case 'polish':
      return PL_PL;
    default:
      return EN_GB;
  }
};

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    LANGUAGE: 'english',
    CONTENT: getContent(),
  },
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.LANGUAGE = payload;
      state.CONTENT = getContent(payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
