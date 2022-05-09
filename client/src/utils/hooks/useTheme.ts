import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

type Theme = RootState['themeReducer']['THEME'];

export const useTheme: () => Theme = () =>
  useSelector(({ themeReducer }: RootState) => themeReducer.THEME);
