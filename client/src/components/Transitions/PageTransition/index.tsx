import { toggleTransitionActive } from 'features/transition/transitionSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGlobalState } from 'utils/hooks';
import { TransitionIn, TransitionOut } from '..';

const PageTransition = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalState();
  const { background } = state.themeReducer.THEME;
  const { DURATION, ELEMENTS_DELAY } = state.transitionReducer;

  const [mountTransitionIn, setMountTransitionIn] = useState(true);
  const transitionInTimeout = useRef<NodeJS.Timeout | null>(null);
  const pageTransitionTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    transitionInTimeout.current = setTimeout(() => {
      setMountTransitionIn(false);
    }, DURATION);

    pageTransitionTimeout.current = setTimeout(
      () => dispatch(toggleTransitionActive()),
      2 * DURATION,
    );

    return () => {
      if (transitionInTimeout.current)
        clearTimeout(transitionInTimeout.current);
      if (pageTransitionTimeout.current)
        clearTimeout(pageTransitionTimeout.current);
    };
  }, [DURATION, dispatch]);

  return (
    <div className="pageTransition">
      {mountTransitionIn && (
        <TransitionIn
          mount={mountTransitionIn}
          duration={DURATION}
          delay={ELEMENTS_DELAY}
          backgroundColor={background.inverted}
        />
      )}
      {!mountTransitionIn && (
        <TransitionOut
          mount={!mountTransitionIn}
          duration={DURATION}
          delay={ELEMENTS_DELAY}
          backgroundColor={background.inverted}
        />
      )}
    </div>
  );
};

export default PageTransition;
