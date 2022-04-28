import { CSSTransition } from 'react-transition-group';
import { Props } from '../../HOC/Transition/';

interface TransitionColProps extends Props {
  index: number;
}

const TransitionCol = ({
  mount,
  duration,
  delay,
  backgroundColor,
  transitionClassName,
  index,
}: TransitionColProps): JSX.Element => {
  const transitionDelay = delay * index;

  return (
    <CSSTransition
      in={mount}
      appear
      timeout={duration + transitionDelay}
      classNames={transitionClassName}
      key={transitionClassName + index}
      unmountOnExit
    >
      <div
        className={`transition__col ${transitionClassName}`}
        style={{
          transitionDelay: `${transitionDelay}ms`,
          transitionDuration: `${duration - transitionDelay}ms`,
          backgroundColor: backgroundColor,
        }}
      />
    </CSSTransition>
  );
};

export default TransitionCol;
