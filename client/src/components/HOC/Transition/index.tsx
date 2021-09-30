//import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { renderCols } from '../../../utils/helpers/renderCols';
import TransitionCol from '../../Transitions/TransitionCol';
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

const Transition = (props: Props): JSX.Element | null => {
  /* const [isAnimationDone, setIsAnimationDone] = useState(false);
  if (isAnimationDone) return null; */

  const colsQuantity = 4;
  const col = (i: number) => (
    <TransitionCol {...props} index={i} key={`transitionCol${i}`} />
  );

  return (
    <TransitionGroup className="transition">
      {renderCols(col, colsQuantity)}
    </TransitionGroup>
  );
};

export default Transition;
