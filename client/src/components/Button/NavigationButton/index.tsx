import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useGlobalState } from 'utils/hooks';
import Button, { ButtonTheme } from '..';

type Props = ButtonTheme & {
  page: string;
  children?: React.ReactNode;
};

const NavigationButton = (props: Props): JSX.Element => {
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { DURATION } = useGlobalState().transitionReducer;
  const { children, page } = props;

  const handleNavigation = () => {
    dispatch(toggleTransitionActive());
    transitionTimer.current = setTimeout(() => {
      navigate('/' + page);
    }, DURATION);
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  const buttonText = () => {
    if (children) return children;
    if (page === '') return 'Home';
    return page;
  };

  return (
    <Button
      fontColor={props.fontColor}
      backgroundColor={props.backgroundColor}
      onClick={handleNavigation}
    >
      {buttonText()}
    </Button>
  );
};

export default NavigationButton;
