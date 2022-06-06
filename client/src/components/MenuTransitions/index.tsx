import { TransitionIn, TransitionOut } from 'components/Transitions';
import { useGlobalState } from 'utils/hooks';

const MenuTransitions = (): JSX.Element => {
  const state = useGlobalState();
  const { IS_MENU_TRANSITION } = state.menuReducer;
  const { DURATION, ELEMENTS_DELAY } = state.transitionReducer;
  const { background } = state.themeReducer.THEME;

  return (
    <>
      {IS_MENU_TRANSITION && (
        <TransitionIn
          mount
          duration={DURATION}
          delay={ELEMENTS_DELAY}
          backgroundColor={background.inverted}
        />
      )}
      {!IS_MENU_TRANSITION && (
        <TransitionOut
          mount
          duration={DURATION}
          delay={ELEMENTS_DELAY}
          backgroundColor={background.inverted}
        />
      )}
    </>
  );
};

export default MenuTransitions;
