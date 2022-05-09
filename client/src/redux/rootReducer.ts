import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import languageReducer from '../features/language/languageSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import themeReducer from '../features/theme/themeSlice';
import initialLoadingReducer from '../features/initialLoading/initialLoadingSlice';
import menuReducer from '../features/menu/menuSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = persistCombineReducers(persistConfig, {
  languageReducer,
  navigationReducer,
  themeReducer,
  initialLoadingReducer,
  menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
