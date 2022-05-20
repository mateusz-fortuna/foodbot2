import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { ReactChild, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useNavigation, useTransition } from 'utils/hooks';
import { throttle } from 'lodash';

type Props = {
  children: ReactChild;
};

const Navigation = ({ children }: Props): JSX.Element => {
  const { DURATION } = useTransition();
  const { NEXT_PAGE, PREV_PAGE } = useNavigation();
  const navigationTimer = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const [tickCount, setTickCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWheel = ({ deltaY }: WheelEvent) => {
    if (deltaY > 0) setDirection('down');
    if (deltaY < 0) setDirection('up');
    setTickCount((state) => state + 1);
  };
  const handleNavigation = throttle(handleWheel, 2 * DURATION, {
    trailing: false,
  });

  useEffect(() => {
    window.addEventListener('wheel', handleNavigation, { passive: true });
    return () => window.removeEventListener('wheel', handleNavigation);
    // eslint-disable-next-line
  }, []);

  const isNavigationInBoundary =
    (direction === 'up' && PREV_PAGE !== null) ||
    (direction === 'down' && NEXT_PAGE !== null);

  useEffect(() => {
    if (isNavigationInBoundary) {
      if (tickCount !== 0) dispatch(toggleTransitionActive());
      navigationTimer.current = setTimeout(() => {
        if (direction === 'up') navigate('/' + PREV_PAGE);
        if (direction === 'down') navigate('/' + NEXT_PAGE);
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
