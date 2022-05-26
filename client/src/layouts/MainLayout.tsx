import { ReactNode, useState } from 'react';
import {
  useInitialLoading,
  useMenuState,
  useOrientation,
  useTheme,
  useTransition,
} from 'utils/hooks';
import Navbar from 'components/Navbar';
import PageTransition from 'components/Transitions/PageTransition';
import Intro from '../components/Intro';
import './styles.sass';
import MenuButton from 'components/Button/MenuButton';
import Menu from 'components/Menu';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const { background, font } = useTheme();
  const { IS_INITIAL_LOADING } = useInitialLoading();
  const { IS_TRANSITION_ACTIVE } = useTransition();
  const { IS_MENU_OPENED } = useMenuState();
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
