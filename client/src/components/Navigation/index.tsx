/* eslint-disable react-hooks/exhaustive-deps */

import {
  useFeatureDetails,
  useMenuState,
  useNavigation,
  useTransition,
} from 'utils/hooks';
import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { setNavigationPrevented } from '../../features/navigation/navigationSlice';
import { ReactChild, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { throttle } from 'lodash';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';

type Props = {
  children: ReactChild;
};

const Navigation = ({ children }: Props): JSX.Element => {
  const animationTimer = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const [tickCount, setTickCount] = useState(0);
  const { IS_MENU_OPENED } = useMenuState();
  const { OPENED_FEATURE } = useFeatureDetails();
  const { DURATION } = useTransition();
  const {
    NEXT_PAGE,
    PREV_PAGE,
    EXCEPTIONS,
    CURRENT_PAGE,
    IS_NAVIGATION_PREVENTED,
  } = useNavigation();
  const touchStartY = useRef(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isNavigationException = EXCEPTIONS.indexOf(CURRENT_PAGE) !== -1;
  const isNavigationInBoundary =
    (direction === 'up' && PREV_PAGE !== null) ||
    (direction === 'down' && NEXT_PAGE !== null);

  const throttleOptions = {
    trailing: false,
  };

  // ----------NAVIGATION METHODS---------- //

  const changeUrlAddress = () => {
    if (direction === 'up') navigate('/' + PREV_PAGE);
    if (direction === 'down') {
      if (!IS_NAVIGATION_PREVENTED) navigate('/' + NEXT_PAGE);
    }
  };

  const closeFeatureDetailsWindow = () => {
    if (OPENED_FEATURE) dispatch(resetFeatureDetails());
  };

  const runAnimation = () => {
    if (!(IS_NAVIGATION_PREVENTED && direction === 'down'))
      dispatch(toggleTransitionActive());
  };

  // ----------HANDLE NAVIGATION---------- //

  useEffect(() => {
    if (isNavigationInBoundary && !IS_MENU_OPENED) {
      runAnimation();
      animationTimer.current = setTimeout(() => {
        changeUrlAddress();
        closeFeatureDetailsWindow();
      }, DURATION);
    }
    return () => {
      if (animationTimer.current) clearTimeout(animationTimer.current);
    };
  }, [tickCount]);

  useEffect(() => {
    dispatch(setNavigationPrevented(isNavigationException));
  }, [isNavigationException]);

  // ----------DETECT SCROLLING DIRECTION---------- //

  useEffect(() => {
    const incrementTickCounter = () => setTickCount((state) => state + 1);

    const handleTouchStart = ({ touches }: TouchEvent) => {
      touchStartY.current = touches[0].pageY;
    };

    const handleTouchEnd = ({ changedTouches }: TouchEvent) => {
      const touchEndY = changedTouches[0].pageY;
      const safeDistance = Math.abs(touchEndY - touchStartY.current) > 20;
      if (safeDistance && touchEndY < touchStartY.current) setDirection('down');
      if (safeDistance && touchEndY > touchStartY.current) setDirection('up');
      setDirection('none');
      incrementTickCounter();
    };

    const handleWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) setDirection('down');
      if (deltaY < 0) setDirection('up');
      incrementTickCounter();
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
