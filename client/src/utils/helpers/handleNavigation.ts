import { NavigateFunction } from 'react-router';
import { PageOrBoundary } from '../hooks/index';

type HandleNavigation = (
  type: 'next' | 'previous',
  prevPage: PageOrBoundary,
  nextPage: PageOrBoundary,
  navigate: NavigateFunction,
) => void;

export const handleNavigation: HandleNavigation = (
  type,
  prevPage,
  nextPage,
  navigate,
) => {
  if (type === 'next' && nextPage !== null) navigate('/' + nextPage);
  if (type === 'previous' && prevPage !== null) navigate('/' + prevPage);
};
