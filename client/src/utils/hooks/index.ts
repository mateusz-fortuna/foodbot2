import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { RootState } from '../../redux/rootReducer';

// ----------THEME---------- //

type Theme = RootState['themeReducer']['THEME'];
export const useTheme = (): Theme =>
  useSelector((state: RootState) => state.themeReducer.THEME);

// ----------INITIAL-LOADING---------- //

type InitialLoading = RootState['initialLoadingReducer'];
export const useInitialLoading = (): InitialLoading =>
  useSelector((state: RootState) => state.initialLoadingReducer);

// ----------TRANSITION---------- //

export const useTransition = (): RootState['transitionReducer'] =>
  useSelector((state: RootState) => state.transitionReducer);

// ----------CURRENT-PAGE---------- //

export const useCurrentPage = (): string => {
  const { pathname } = useLocation();
  return pathname.slice(1);
};

// ----------NAVIGATION---------- //

export type PageOrBoundary = string | null;
type Navigation = RootState['navigationReducer'] & {
  CURRENT_PAGE: string;
  PREV_PAGE: PageOrBoundary;
  NEXT_PAGE: PageOrBoundary;
};

export const useNavigation = (): Navigation => {
  const { PAGES } = useSelector((state: RootState) => state.navigationReducer);

  const CURRENT_PAGE = useCurrentPage();
  const currentPageIndex = PAGES.indexOf(CURRENT_PAGE);

  const PREV_PAGE =
    currentPageIndex - 1 < 0 ? null : PAGES[currentPageIndex - 1];
  const NEXT_PAGE =
    currentPageIndex + 2 > PAGES.length ? null : PAGES[currentPageIndex + 1];

  return {
    PREV_PAGE,
    CURRENT_PAGE,
    NEXT_PAGE,
    PAGES,
  };
};

// ----------MENU-OPENED---------- //

type MenuOpened = RootState['menuReducer'];
export const useMenuState = (): MenuOpened =>
  useSelector((state: RootState) => state.menuReducer);

// ----------ORIENTATION---------- //

type Orientation = 'landscape' | 'portrait';

export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>('landscape');

  const detectOrientation = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    if (width / height > 1) return setOrientation('landscape');
    return setOrientation('portrait');
  };

  useEffect(() => {
    detectOrientation();
    window.addEventListener('resize', detectOrientation);
    return () => window.removeEventListener('resize', detectOrientation);
  }, []);

  return orientation;
};

// ----------CONTENT---------- //

type Content = RootState['languageReducer']['CONTENT'];
export const useContent = (): Content =>
  useSelector((state: RootState) => state.languageReducer.CONTENT);
