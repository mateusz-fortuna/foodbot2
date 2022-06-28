import AnimatedImage from 'components/AnimatedImage';
import ArrowButton, { Direction } from 'components/Button/ArrowButton';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState, useOrientation } from 'utils/hooks';
import './index.sass';

type Props = {
  images: HTMLImageElement[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  const { DURATION } = useGlobalState().transitionReducer;
  const [imgIndex, setImgIndex] = useState(0);
  const [isImageMounted, setIsImageMounted] = useState(true);
  const isLandscape = useOrientation() === 'landscape';
  const transitionTimer = useRef<NodeJS.Timeout | null>(null);
  const transitionSpeed = DURATION * 0.5;
  const arrowsMargin = isLandscape ? '8rem' : 0;
  const lastIndex = images.length - 1;

  const incrementIndex = () =>
    setImgIndex((index) => (index === lastIndex ? 0 : index + 1));
  const decrementIndex = () =>
    setImgIndex((index) => (index === 0 ? lastIndex : index - 1));

  const changeImage = (direction: Direction) => {
    setIsImageMounted(false);
    transitionTimer.current = setTimeout(() => {
      if (direction === 'next') incrementIndex();
      if (direction === 'previous') decrementIndex();
      setIsImageMounted(true);
    }, transitionSpeed);
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
    return () => {
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
            mount={isImageMounted}
            src={images[imgIndex].src}
            alt={images[imgIndex].alt}
          />
        </div>
      </div>
      {isLandscape && rightArrow}
      {!isLandscape && (
        <div className="features__details_arrowsContainer">
          {leftArrow}
          {rightArrow}
        </div>
      )}
    </>
  );
};

export default GalleryContent;
