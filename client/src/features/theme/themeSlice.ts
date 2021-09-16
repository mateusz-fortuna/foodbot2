import { createSlice } from '@reduxjs/toolkit';
import { lightTheme } from './theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    THEME: lightTheme,
  },
  reducers: {},
});

export default themeSlice.reducer;
