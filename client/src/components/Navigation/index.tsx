/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalState, useNavigation } from 'utils/hooks';
import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { setNavigationPrevented } from '../../features/navigation/navigationSlice';
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
  const { EXCEPTIONS, IS_NAVIGATION_PREVENTED } = state.navigationReducer;
  const { DIRECTION, TICK_COUNT } = state.scrollDetectionReducer;
  const { NEXT_PAGE, PREV_PAGE, CURRENT_PAGE } = useNavigation();

  const isNavigationException = EXCEPTIONS.indexOf(CURRENT_PAGE) !== -1;
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
      if (!IS_NAVIGATION_PREVENTED) navigate('/' + NEXT_PAGE);
    }
  };
  const closeFeatureDetailsWindow = () => {
    if (OPENED_FEATURE) dispatch(resetFeatureDetails());
  };
  const runAnimation = () => {
    if (!(IS_NAVIGATION_PREVENTED && DIRECTION === 'down'))
      dispatch(toggleTransitionActive());
  };

  // ----------HANDLE NAVIGATION---------- //

  useEffect(() => {
    dispatch(setNavigationPrevented(isNavigationException));
  }, [isNavigationException]);

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
