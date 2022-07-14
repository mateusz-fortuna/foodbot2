import GalleryContent from 'components/GalleryContent';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Gallery = (): JSX.Element => {
  const { languageReducer, themeReducer } = useGlobalState();
  const { background } = themeReducer.THEME;
  const images = languageReducer.CONTENT.gallery.images;

  return (
    <div
      className="gallery page__container"
      style={{ backgroundColor: background.default }}
    >
      <GalleryContent images={images} />
    </div>
  );
};

export default Gallery;
