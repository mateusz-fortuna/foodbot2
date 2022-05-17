import { useEffect, useRef } from 'react';
import { toggleTransitionActive } from 'features/navigation/navigationSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useNavigation } from 'utils/hooks';
import Button from '../Button/';

type Props = {
  page: string;
  fontColor: string;
  backgroundColor: string;
};

const NavigationButton = (props: Props): JSX.Element => {
  const { NAVIGATION_DURATION } = useNavigation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = () => {
    dispatch(toggleTransitionActive());

    transitionTimer.current = setTimeout(() => {
      navigate('/' + props.page);
    }, NAVIGATION_DURATION);
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
      {props.page}
    </Button>
  );
};

export default NavigationButton;
