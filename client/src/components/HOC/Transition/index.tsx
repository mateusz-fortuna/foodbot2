import { TransitionGroup } from 'react-transition-group';
import TransitionCol from './TransitionCol';
import './styles.sass';

export interface TransitionProps {
  mount: boolean;
  duration: number;
  delay: number;
  backgroundColor: string;
}

export interface Props extends TransitionProps {
  transitionClassName: string;
}

const Transition = (props: Props): JSX.Element => {
  const colsNumber = 4;

  const renderCols = () => {
    const cols: JSX.Element[] = [];
    for (let i = 0; i < colsNumber; i++) {
      cols.push(
        <TransitionCol {...props} index={i} key={`transitionCol${i}`} />,
      );
    }
    return cols;
  };

  return (
    <TransitionGroup className="transition">{renderCols()}</TransitionGroup>
  );
};

export default Transition;
