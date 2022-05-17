import Navbar from 'components/Navbar';
import PageTransition from 'components/Transitions/PageTransition';
import { useState } from 'react';
import { useInitialLoading, useTheme, useTransition } from 'utils/hooks';
import Intro from '../components/Intro';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const { background, font } = useTheme();

  const { IS_INITIAL_LOADING } = useInitialLoading();
  const { IS_TRANSITION_ACTIVE } = useTransition();

  const [mountIntro, setMountIntro] = useState(true);

  return (
    <div className="mainLayout">
      {children}
      <Navbar />

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
