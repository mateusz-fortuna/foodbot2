import {
  Direction,
  incrementTicks,
  setDirection,
} from 'features/scrollDetection/scrollDetectionSlice';
import { throttle } from 'lodash';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalState } from 'utils/hooks';

type Props = {
  children: React.ReactNode;
};

const ScrollDetector = ({ children }: Props): JSX.Element => {
  const { DURATION } = useGlobalState().transitionReducer;
  const touchStartY = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const incrementTickCount = () => dispatch(incrementTicks());

    const setScrollDirection = (direction: Direction) =>
      dispatch(setDirection(direction));

    const handleTouchStart = ({ touches }: TouchEvent) => {
      touchStartY.current = touches[0].pageY;
    };

    const handleTouchEnd = ({ changedTouches }: TouchEvent) => {
      const touchEndY = changedTouches[0].pageY;
      const safeDistance = Math.abs(touchEndY - touchStartY.current) > 20;
      if (safeDistance && touchEndY < touchStartY.current)
        setScrollDirection('down');
      if (safeDistance && touchEndY > touchStartY.current)
        setScrollDirection('up');
      incrementTickCount();
    };

    const handleWheel = ({ deltaY }: WheelEvent) => {
      if (deltaY > 0) setScrollDirection('down');
      if (deltaY < 0) setScrollDirection('up');
      incrementTickCount();
    };

    const throttledWheel = throttle(handleWheel, 2 * DURATION, {
      trailing: false,
    });

    window.addEventListener('wheel', throttledWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', throttledWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [DURATION, dispatch]);

  return <>{children}</>;
};

export default ScrollDetector;
