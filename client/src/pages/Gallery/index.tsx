/* eslint-disable */
import AnimatedText from 'components/AnimatedText';
import { useEffect, useState } from 'react';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

type HandleImageLoad = (
  img: HTMLImageElement,
  resolve: (value: unknown) => void,
) => void;

const Gallery = (): JSX.Element => {
  const state = useGlobalState();
  const imageUrls = state.languageReducer.CONTENT.gallery;
  const { background } = state.themeReducer.THEME;
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {}, []);

  return (
    <div
      className="gallery page__container"
      style={{ backgroundColor: background.default }}
    >
      {/*  <h1>
        <AnimatedText mount>
          <GalleryContent images={} />
        </AnimatedText>
      </h1> */}
    </div>
  );
};

export default Gallery;
