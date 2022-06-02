/* eslint-disable react-hooks/exhaustive-deps */

import {
  useFeatureDetails,
  useMenuState,
  useNavigation,
  useTransition,
} from 'utils/hooks';
import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { ReactChild, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { throttle } from 'lodash';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';

type Props = {
  children: ReactChild;
};

const Navigation = ({ children }: Props): JSX.Element => {
  const navigationTimer = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const [tickCount, setTickCount] = useState(0);
  const { NEXT_PAGE, PREV_PAGE } = useNavigation();
  const { IS_MENU_OPENED } = useMenuState();
  const { OPENED_FEATURE } = useFeatureDetails();
  const { DURATION } = useTransition();
  const touchStartY = useRef(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isNavigationInBoundary =
    (direction === 'up' && PREV_PAGE !== null) ||
    (direction === 'down' && NEXT_PAGE !== null);

  const throttleOptions = {
    trailing: false,
  };

  // ----------HANDLE NAVIGATION DEPENDING ON THE DIRECTION---------- //

  useEffect(() => {
    if (isNavigationInBoundary && !IS_MENU_OPENED) {
      dispatch(toggleTransitionActive());
      navigationTimer.current = setTimeout(() => {
        if (direction === 'up') navigate('/' + PREV_PAGE);
        if (direction === 'down') navigate('/' + NEXT_PAGE);
        if (OPENED_FEATURE) dispatch(resetFeatureDetails());
      }, DURATION);
    }
    return () => {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    };
  }, [tickCount]);

  // ----------DETECT SCROLLING DIRECTION---------- //

  useEffect(() => {
    const handleTouchStart = ({ touches }: TouchEvent) => {
      touchStartY.current = touches[0].pageY;
    };

    const handleTouchEnd = ({ changedTouches }: TouchEvent) => {
      const touchEndY = changedTouches[0].pageY;
      const safeDistance = Math.abs(touchEndY - touchStartY.current) > 20;
      if (safeDistance && touchEndY < touchStartY.current) setDirection('down');
      if (safeDistance && touchEndY > touchStartY.current) setDirection('up');
      setTickCount((state) => state + 1);
      setDirection('none');
    };

    const handleWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) setDirection('down');
      if (deltaY < 0) setDirection('up');
      setTickCount((state) => state + 1);
    };
    const throttledWheel = throttle(handleWheel, 2 * DURATION, throttleOptions);

    window.addEventListener('wheel', throttledWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', throttledWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return <>{children}</>;
};

export default Navigation;
