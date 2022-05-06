import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import Intro from '../components/Intro';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const { background, font } = useSelector(
    (state: RootState) => state.themeReducer.THEME,
  );
  const isInitialLoading = useSelector(
    (state: RootState) => state.initialLoadingReducer.INITIAL_LOADING,
  );

  const [mountIntro, setMountIntro] = useState(true);

  return (
    <div className="mainLayout">
      {children}

      {isInitialLoading && mountIntro && (
        <Intro
          setMountIntro={setMountIntro}
          textColor={font.transition}
          backgroundColor={background.transition}
        />
      )}
    </div>
  );
};

export default MainLayout;
