import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.sass';

type Props = {
  mount: boolean;
  children: string;
};

const AnimatedText = ({ mount, children }: Props): JSX.Element => {
  const textLine = children.split('\n');
  const animationClass = 'text--animation';
  const animationDuration = 1000;
  const animationDelay = 100;

  return (
    <TransitionGroup data-testid="animatedText" className="animatedText">
      {textLine.map((line, index) => (
        <div className="text__wrapper" key={`line${index}`}>
          <CSSTransition
            in={mount}
            classNames={animationClass}
            timeout={animationDuration + index * animationDelay}
            appear
            unmountOnExit
          >
            <span
              className={`text ${animationClass}`}
              style={{
                transitionDelay: `${index * animationDelay}ms`,
              }}
            >
              {line}
            </span>
          </CSSTransition>
        </div>
      ))}
    </TransitionGroup>
  );
};

export default AnimatedText;
