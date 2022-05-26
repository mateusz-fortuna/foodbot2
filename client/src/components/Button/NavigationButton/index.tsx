import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTransition } from 'utils/hooks';
import Button, { ButtonTheme } from '..';

type Props = ButtonTheme & {
  page: string;
  children?: React.ReactNode;
};

const NavigationButton = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { DURATION } = useTransition();
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = () => {
    dispatch(toggleTransitionActive());
    transitionTimer.current = setTimeout(() => {
      navigate('/' + props.page);
    }, DURATION);
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <Button
      fontColor={props.fontColor}
      backgroundColor={props.backgroundColor}
      onClick={handleNavigation}
    >
      {props.children ? props.children : props.page}
    </Button>
  );
};

export default NavigationButton;
