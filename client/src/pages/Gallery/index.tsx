import GalleryContent from 'components/GalleryContent';
import Progress from 'components/Progress';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Gallery = (): JSX.Element => {
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const { languageReducer, themeReducer } = useGlobalState();
  const { background } = themeReducer.THEME;
  const imageUrls = languageReducer.CONTENT.gallery;
  const loadingDelayRef = useRef<NodeJS.Timeout | null>(null);
  const transitionDelay = 50;

  const imagePromise = (url: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onabort = () => reject();
    }).then((img) => {
      img.onload = null;
      img.onabort = null;
      setImages((state) => [...state, img]);
    });

  useEffect(() => {
    const imagePromises = imageUrls.map((url) => imagePromise(url));
    const handleImagesLoaded = () => {
      loadingDelayRef.current = setTimeout(
        () => setIsGalleryLoaded(true),
        transitionDelay * (100 / imageUrls.length),
      );
    };
    Promise.all(imagePromises)
      .then(() => handleImagesLoaded())
      .catch(() => setIsError(true));
    return () => {
      if (loadingDelayRef.current) clearTimeout(loadingDelayRef.current);
    };
  }, [imageUrls]);

  return (
    <div
      className="gallery page__container"
      style={{ backgroundColor: background.default }}
    >
      {!isGalleryLoaded && (
        <Progress
          numerator={images.length}
          denominator={imageUrls.length}
          transitionDelay={transitionDelay}
        />
      )}
      {isGalleryLoaded && <GalleryContent images={images} />}
      {isError && 'Failed to load images.'}
    </div>
  );
};

export default Gallery;
