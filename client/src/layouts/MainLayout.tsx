import { ReactNode, useState } from 'react';
import { useGlobalState, useOrientation } from 'utils/hooks';
import Navbar from 'components/Navbar';
import PageTransition from 'components/Transitions/PageTransition';
import Intro from '../components/Intro';
import MenuButton from 'components/Button/MenuButton';
import Menu from 'components/Menu';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const state = useGlobalState();
  const { background, font } = state.themeReducer.THEME;
  const { IS_INITIAL_LOADING } = state.initialLoadingReducer;
  const { IS_TRANSITION_ACTIVE } = state.transitionReducer;
  const { IS_MENU_OPENED } = state.menuReducer;
  const [mountIntro, setMountIntro] = useState(true);
  const orientation = useOrientation();

  return (
    <div className="mainLayout">
      {children}
      {IS_MENU_OPENED && <Menu />}
      {orientation === 'landscape' ? <Navbar /> : <MenuButton />}
      {IS_TRANSITION_ACTIVE && <PageTransition />}
      {IS_INITIAL_LOADING && mountIntro && (
        <Intro
          setMountIntro={setMountIntro}
          textColor={font.inverted}
          backgroundColor={background.inverted}
        />
      )}
    </div>
  );
};

export default MainLayout;
