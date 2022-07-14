import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { RootState } from '../../redux/rootReducer';

// ----------GLOBAL-STATE---------- //

export const useGlobalState = (): RootState =>
  useSelector((state: RootState) => state);

// ----------CURRENT-PAGE---------- //

export const useCurrentPage = (): string => {
  const { pathname } = useLocation();
  return pathname.slice(1);
};

// ----------NAVIGATION---------- //

export type PageOrBoundary = string | null;
type Navigation = {
  CURRENT_PAGE: string;
  PREV_PAGE: PageOrBoundary;
  NEXT_PAGE: PageOrBoundary;
};

export const useNavigation = (): Navigation => {
  const navigationState = useSelector(
    (state: RootState) => state.navigationReducer,
  );

  const { PAGES } = navigationState;
  const CURRENT_PAGE = useCurrentPage();
  const PAGE_INDEX = PAGES.indexOf(CURRENT_PAGE);

  const PREV_PAGE = PAGE_INDEX - 1 < 0 ? null : PAGES[PAGE_INDEX - 1];
  const NEXT_PAGE =
    PAGE_INDEX + 2 > PAGES.length ? null : PAGES[PAGE_INDEX + 1];

  return {
    PREV_PAGE,
    CURRENT_PAGE,
    NEXT_PAGE,
  };
};

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

// ----------PAGE-NAME---------- //

export const usePageNames = (): string[] => {
  const state = useGlobalState();
  const { contact, features, gallery, home } = state.languageReducer.CONTENT;
  return [home.name, features.name, gallery.name, contact.name];
};
