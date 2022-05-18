import { useEffect, useState } from 'react';
import {
  useInitialLoading,
  useMenuOpened,
  useTheme,
  useTransition,
} from 'utils/hooks';
import Navbar from 'components/Navbar';
import PageTransition from 'components/Transitions/PageTransition';
import Intro from '../components/Intro';
import './styles.sass';
import MenuButton from 'components/MenuButton';
import Menu from 'components/Menu';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};
type Orientation = 'landscape' | 'portrait';

const MainLayout = ({ children }: Props): JSX.Element => {
  const { background, font } = useTheme();
  const { IS_INITIAL_LOADING } = useInitialLoading();
  const { IS_TRANSITION_ACTIVE } = useTransition();
  const { IS_MENU_OPENED } = useMenuOpened();
  const [mountIntro, setMountIntro] = useState(true);
  const [orientation, setOrientation] = useState<Orientation>('landscape');

  const detectOrientation = () => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    if (width / height > 1) return setOrientation('landscape');
    return setOrientation('portrait');
  };

  useEffect(() => {
    detectOrientation();
    window.addEventListener('resize', detectOrientation);
    return () => window.removeEventListener('resize', detectOrientation);
  }, []);

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
