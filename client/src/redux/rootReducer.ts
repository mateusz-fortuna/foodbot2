import { combineReducers } from 'redux';

import languageReducer from '../features/language/languageSlice';
import navigationReducer from '../features/navigation/navigationSlice';
import themeReducer from '../features/theme/themeSlice';
import initialLoadingReducer from '../features/initialLoading/initialLoadingSlice';

export const rootReducer = combineReducers({
  languageReducer,
  navigationReducer,
  themeReducer,
  initialLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
