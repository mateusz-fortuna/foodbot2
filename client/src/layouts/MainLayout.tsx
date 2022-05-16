import Navbar from 'components/Navbar';
import { useState } from 'react';
import { useInitialLoading, useTheme } from 'utils/hooks';
import Intro from '../components/Intro';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const isInitialLoading = useInitialLoading();
  const { background, font } = useTheme();
  const [mountIntro, setMountIntro] = useState(true);

  return (
    <div className="mainLayout">
      {children}
      <Navbar />

      {isInitialLoading && mountIntro && (
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
