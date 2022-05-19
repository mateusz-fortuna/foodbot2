import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMenuState, useTransition } from 'utils/hooks';
import Button from 'components/Button';
import {
  toggleMenuOpened,
  toggleMenuTransition,
  toggleMenuTransitionProgress,
} from 'features/menu/menuSlice';
import './index.sass';

const MenuButton = (): JSX.Element => {
  const { IS_MENU_OPENED, IS_MENU_TRANSITION_IN_PROGRESS } = useMenuState();
  const { DURATION } = useTransition();
  const closeMenuRef = useRef<NodeJS.Timeout | null>(null);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    if (IS_MENU_TRANSITION_IN_PROGRESS) return;

    if (IS_MENU_OPENED) {
      dispatch(toggleMenuTransition());
      dispatch(toggleMenuTransitionProgress());
      closeMenuRef.current = setTimeout(() => {
        dispatch(toggleMenuOpened());
        dispatch(toggleMenuTransitionProgress());
      }, DURATION);
      return;
    }

    dispatch(toggleMenuOpened());
    dispatch(toggleMenuTransition());
    dispatch(toggleMenuTransitionProgress());
    transitionRef.current = setTimeout(() => {
      dispatch(toggleMenuTransitionProgress());
    }, DURATION);
  };

  useEffect(() => {
    return () => {
      if (closeMenuRef.current) clearTimeout(closeMenuRef.current);
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  return (
    <div className="menu__button">
      <Button
        fontColor="#fff"
        backgroundColor="transparent"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </Button>
    </div>
  );
};

export default MenuButton;
