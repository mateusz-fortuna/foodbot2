import { ReactChild, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { handleNavigation } from 'utils/helpers/handleNavigation';
import { useNavigation } from 'utils/hooks';

type Props = {
  children: ReactChild;
};
type ScrollDirection = 'up' | 'down' | 'none';

const Navigation = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate();
  const { PREV_PAGE, NEXT_PAGE } = useNavigation();
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>('none');

  const handleWheel = ({ deltaY }: WheelEvent) => {
    if (deltaY > 0) return setScrollDirection('down');
    return setScrollDirection('up');
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    if (scrollDirection === 'down') {
      handleNavigation('next', PREV_PAGE, NEXT_PAGE, navigate);
    }
  }, [scrollDirection]);

  return <>{children}</>;
};

export default Navigation;
