import ArrowButton from 'components/Button/ArrowButton';
import { useOrientation } from 'utils/hooks';
import './index.sass';

type Props = {
  images: HTMLImageElement[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  const isLandscape = useOrientation() === 'landscape';
  const arrowsMargin = '8rem';

  return (
    <>
      {isLandscape && (
        <ArrowButton
          direction="previous"
          style={{ marginLeft: arrowsMargin }}
        />
      )}
      <div className="gallery__content_wrapper">
        <div className="gallery__content">
          {images.map((img, index) => (
            <div className="gallery__image_wrapper" key={`wrapper${index}`}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
      {isLandscape && (
        <ArrowButton direction="next" style={{ marginRight: arrowsMargin }} />
      )}
    </>
  );
};

export default GalleryContent;
