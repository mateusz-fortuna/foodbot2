import { TransitionIn, TransitionOut } from 'components/Transitions';
import { useMenuState, useTheme, useTransition } from 'utils/hooks';

const MenuTransitions = (): JSX.Element => {
  const { IS_MENU_TRANSITION } = useMenuState();
  const { DURATION, ELEMENTS_DELAY } = useTransition();
  const { background } = useTheme();

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
