import AnimatedImage from 'components/AnimatedImage';
import ArrowButton from 'components/Button/ArrowButton';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState, useOrientation } from 'utils/hooks';
import './index.sass';

type Props = {
  images: HTMLImageElement[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isImageMounted, setIsImageMounted] = useState(true);
  const isLandscape = useOrientation() === 'landscape';
  const arrowsMargin = '8rem';

  const transitionTimer = useRef<NodeJS.Timeout | null>(null);
  const { DURATION } = useGlobalState().transitionReducer;
  const transitionSpeed = DURATION * 0.5;

  const incrementIndex = () =>
    setImgIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  const decrementIndex = () =>
    setImgIndex((index) => (index === 0 ? images.length - 1 : index - 1));

  const showNextImage = () => {
    setIsImageMounted(false);
    transitionTimer.current = setTimeout(() => {
      incrementIndex();
      setIsImageMounted(true);
    }, transitionSpeed);
  };

  const showPreviousImage = () => {
    setIsImageMounted(false);
    transitionTimer.current = setTimeout(() => {
      decrementIndex();
      setIsImageMounted(true);
    }, transitionSpeed);
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  return (
    <>
      {isLandscape && (
        <ArrowButton
          direction="previous"
          style={{ marginLeft: arrowsMargin }}
          onClick={showPreviousImage}
        />
      )}
      <div className="gallery__content_wrapper">
        <div className="gallery__content">
          <AnimatedImage
            mount={isImageMounted}
            src={images[imgIndex].src}
            alt={images[imgIndex].alt}
          />
        </div>
      </div>
      {isLandscape && (
        <ArrowButton
          direction="next"
          style={{ marginRight: arrowsMargin }}
          onClick={showNextImage}
        />
      )}
    </>
  );
};

export default GalleryContent;
