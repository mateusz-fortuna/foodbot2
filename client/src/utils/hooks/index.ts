import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

// ----------THEME---------- //

type Theme = RootState['themeReducer']['THEME'];
export const useTheme: () => Theme = () =>
  useSelector((state: RootState) => state.themeReducer.THEME);

// ----------INITIAL-LOADING---------- //

type InitialLoading = RootState['initialLoadingReducer']['INITIAL_LOADING'];
export const useInitialLoading: () => InitialLoading = () =>
  useSelector(
    (state: RootState) => state.initialLoadingReducer.INITIAL_LOADING,
  );
