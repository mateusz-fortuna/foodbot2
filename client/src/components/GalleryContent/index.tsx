/* eslint-disable react-hooks/exhaustive-deps */
import AnimatedImage from 'components/AnimatedImage';
import ArrowButton, { Direction } from 'components/Button/ArrowButton';
import ContentProgressIndicator from 'components/ContentProgressIndicator';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState, useOrientation } from 'utils/hooks';
import './index.sass';

type ImageData = {
  url: string;
  alt: string;
};
type Props = {
  images: ImageData[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  const [imgIndex, setImgIndex] = useState(0);
  const [numerator, setNumerator] = useState(imgIndex + 1);
  const [isIndicator, setIsIndicator] = useState(false);
  const { DURATION } = useGlobalState().transitionReducer;
  const isLandscape = useOrientation() === 'landscape';
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);
  const arrowsMargin = isLandscape ? '8rem' : 0;
  const lastIndex = images.length - 1;

  const incrementIndex = () =>
    setImgIndex((index) => (index === lastIndex ? 0 : index + 1));
  const decrementIndex = () =>
    setImgIndex((index) => (index === 0 ? lastIndex : index - 1));

  const changeImage = (direction: Direction) => {
    if (direction === 'next') incrementIndex();
    if (direction === 'previous') decrementIndex();
  };
  const handleKeyboardNavigation = ({ code }: KeyboardEvent) => {
    if (code === 'ArrowLeft') return changeImage('previous');
    if (code === 'ArrowRight') return changeImage('next');
  };

  const leftArrow = (
    <ArrowButton
      direction="previous"
      style={{ marginLeft: arrowsMargin }}
      onClick={() => changeImage('previous')}
    />
  );
  const rightArrow = (
    <ArrowButton
      direction="next"
      style={{ marginRight: arrowsMargin }}
      onClick={() => changeImage('next')}
    />
  );

  useEffect(() => {
    setIsIndicator(false);
    transitionTimer.current = setTimeout(() => {
      setNumerator(imgIndex + 1);
      setIsIndicator(true);
    }, DURATION);
  }, [imgIndex]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyboardNavigation);
    return () => {
      window.removeEventListener('keyup', handleKeyboardNavigation);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <>
      {isLandscape && leftArrow}
      <div
        className="gallery__content_wrapper"
        style={{ marginBottom: isLandscape ? 0 : '4rem' }}
      >
        <div className="gallery__content">
          <AnimatedImage
            src={images[imgIndex].url}
            alt={images[imgIndex].alt}
          />
        </div>
        {isLandscape && (
          <h1>
            <ContentProgressIndicator
              numerator={numerator}
              denominator={images.length}
              mount={isIndicator}
            />
          </h1>
        )}
      </div>
      {isLandscape && rightArrow}
      {!isLandscape && (
        <div
          className="features__details_arrowsContainer"
          style={{ bottom: '1rem' }}
        >
          {leftArrow}
          {rightArrow}
        </div>
      )}
    </>
  );
};

export default GalleryContent;
