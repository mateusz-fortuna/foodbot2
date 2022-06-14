import GalleryContent from 'components/GalleryContent';
import { useEffect, useState } from 'react';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Gallery = (): JSX.Element => {
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const { languageReducer, themeReducer } = useGlobalState();
  const { background } = themeReducer.THEME;
  const imageUrls = languageReducer.CONTENT.gallery;

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
    Promise.all(imagePromises)
      .then(() => setIsGalleryLoaded(true))
      .catch(() => setIsError(true));
  }, []);

  return (
    <div
      className="gallery page__container"
      style={{ backgroundColor: background.default }}
    >
      {isGalleryLoaded && <GalleryContent images={images} />}
      {isError && 'Failed to load images.'}
    </div>
  );
};

export default Gallery;
