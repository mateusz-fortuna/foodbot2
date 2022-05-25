import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.sass';

type Props = {
  mount: boolean;
  children: string;
  nth?: number;
};

const splitText = (txt: string) => {
  const linesSplittingRegex = /.{1,65}(\s|$)/g;
  return txt.match(linesSplittingRegex)?.map((line) => line.trimEnd()) || [txt];
};

const AnimatedText = ({ mount, children, nth = 0 }: Props): JSX.Element => {
  const textLines = splitText(children);
  const animationClass = 'content--animation';
  const animationDelay = 100;
  const componentDelay = nth * animationDelay * 2;
  const animationDuration = 1000 + componentDelay;

  return (
    <TransitionGroup data-testid="text__container">
      <p>
        {textLines.map((line, index) => (
          <div className="content__wrapper" key={`line${index}`}>
            <CSSTransition
              in={mount}
              classNames={animationClass}
              timeout={animationDuration + index * animationDelay}
              appear
              unmountOnExit
            >
              <span
                className={`content ${animationClass}`}
                style={{
                  transitionDelay: `${
                    index * animationDelay + componentDelay
                  }ms`,
                }}
              >
                {line}
              </span>
            </CSSTransition>
          </div>
        ))}
      </p>
    </TransitionGroup>
  );
};

export default AnimatedText;
