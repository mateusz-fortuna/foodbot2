import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { ReactChild, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  useFeatureDetails,
  useMenuState,
  useNavigation,
  useTransition,
} from 'utils/hooks';
import { throttle } from 'lodash';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';

type Props = {
  children: ReactChild;
};

const Navigation = ({ children }: Props): JSX.Element => {
  const { DURATION } = useTransition();
  const { NEXT_PAGE, PREV_PAGE } = useNavigation();
  const { IS_MENU_OPENED } = useMenuState();
  const navigationTimer = useRef<NodeJS.Timeout | null>(null);
  const touchStartY = useRef(0);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const [tickCount, setTickCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const throttleOptions = {
    trailing: false,
  };

  useEffect(() => {
    const handleTouchStart = ({ touches }: TouchEvent) => {
      touchStartY.current = touches[0].pageY;
    };

    const handleTouchEnd = ({ changedTouches }: TouchEvent) => {
      const touchEndY = changedTouches[0].pageY;
      if (touchEndY < touchStartY.current) setDirection('down');
      if (touchEndY > touchStartY.current) setDirection('up');
      setTickCount((state) => state + 1);
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
    // eslint-disable-next-line
  }, []);

  const areFeatureDetailsOpened = useFeatureDetails().TITLE.length > 0;
  const isNavigationInBoundary =
    (direction === 'up' && PREV_PAGE !== null) ||
    (direction === 'down' && NEXT_PAGE !== null);

  useEffect(() => {
    if (isNavigationInBoundary && !IS_MENU_OPENED) {
      if (tickCount !== 0) dispatch(toggleTransitionActive());
      navigationTimer.current = setTimeout(() => {
        if (direction === 'up') navigate('/' + PREV_PAGE);
        if (direction === 'down') navigate('/' + NEXT_PAGE);
        if (areFeatureDetailsOpened) dispatch(resetFeatureDetails());
      }, DURATION);
    }
    return () => {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    };
    // eslint-disable-next-line
  }, [tickCount]);

  return <>{children}</>;
};

export default Navigation;
