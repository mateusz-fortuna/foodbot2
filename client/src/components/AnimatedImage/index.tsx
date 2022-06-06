import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useGlobalState } from 'utils/hooks';

type Props = {
  mount: boolean;
  src: string;
  alt: string;
  nth?: number;
  className?: string;
};

const AnimatedImage = ({
  mount,
  src,
  alt,
  nth = 0,
  className,
}: Props): JSX.Element => {
  const { DURATION, ELEMENTS_DELAY } = useGlobalState().transitionReducer;
  const animationClass = 'content--animation';
  const componentDelay = nth * ELEMENTS_DELAY * 2;
  const animationDuration = DURATION + componentDelay;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const mountAnimation = () => setImageLoaded(true);
    const displayError = () => setIsError(true);

    const img = new Image();
    img.addEventListener('load', mountAnimation);
    img.addEventListener('error', displayError);
    img.src = src;

    return () => {
      img.removeEventListener('load', mountAnimation);
      img.removeEventListener('error', displayError);
    };
  }, [src]);

  return (
    <div className="content__wrapper">
      <CSSTransition
        in={mount && imageLoaded}
        classNames={animationClass}
        timeout={animationDuration}
        appear
        unmountOnExit
      >
        <span
          className={`content ${animationClass}`}
          style={{
            transitionDelay: `${ELEMENTS_DELAY + componentDelay}ms`,
          }}
        >
          <img src={src} alt={alt} className={className} />
          {isError && 'Cannot display an image.'}
        </span>
      </CSSTransition>
    </div>
  );
};

export default AnimatedImage;
