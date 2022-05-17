import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    PAGES: ['', 'features', 'gallery', 'contact', 'blog'],
  },
  reducers: {},
});

export default navigationSlice.reducer;
