import { useSelector } from 'react-redux';
//import { useLocation } from 'react-router';
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

// ----------USE-CURRENT-PAGE---------- //

/* const useCurrentPage: () => string = () => {
  const { pathname } = useLocation();
  return pathname.slice(1);
};
 */
