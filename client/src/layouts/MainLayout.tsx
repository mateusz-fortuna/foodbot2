import { TransitionOut } from '../components/Transitions';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  const { background } = useSelector(
    (state: RootState) => state.themeReducer.THEME,
  );

  return (
    <div className="mainLayout">
      {children}
      <TransitionOut
        backgroundColor={background.transition}
        duration={1000}
        delay={100}
        mount={true}
      />
    </div>
  );
};

export default MainLayout;
