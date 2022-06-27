/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalState, useNavigation } from 'utils/hooks';
import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { ReactChild, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';

type Props = {
  children: ReactChild;
};

const Navigation = ({ children }: Props): JSX.Element => {
  const state = useGlobalState();
  const { IS_MENU_OPENED } = state.menuReducer;
  const { OPENED_FEATURE } = state.featureDetailsReducer;
  const { DURATION } = state.transitionReducer;
  const { DIRECTION, TICK_COUNT } = state.scrollDetectionReducer;
  const { NEXT_PAGE, PREV_PAGE } = useNavigation();

  const isNavigationInBoundary =
    (DIRECTION === 'up' && PREV_PAGE !== null) ||
    (DIRECTION === 'down' && NEXT_PAGE !== null);

  const animationTimer = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ----------NAVIGATION METHODS---------- //

  const changeUrlAddress = () => {
    if (DIRECTION === 'up') navigate('/' + PREV_PAGE);
    if (DIRECTION === 'down') {
      navigate('/' + NEXT_PAGE);
    }
  };
  const closeFeatureDetailsWindow = () => {
    if (OPENED_FEATURE) dispatch(resetFeatureDetails());
  };
  const runAnimation = () => {
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
  }, [TICK_COUNT]);

  return <>{children}</>;
};

export default Navigation;
