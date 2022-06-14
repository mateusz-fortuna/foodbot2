import './index.sass';

type Props = {
  images: HTMLImageElement[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  return (
    <div className="gallery__content">
      {images.map((img, index) => (
        <div className="gallery__content_wrapper" key={`wrapper${index}`}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default GalleryContent;
