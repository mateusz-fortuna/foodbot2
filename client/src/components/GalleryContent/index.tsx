type Props = {
  images: HTMLImageElement[];
};

const GalleryContent = ({ images }: Props): JSX.Element => {
  return (
    <div className="gallery__content">
      {images.map((img, index) => (
        <img src={img.src} alt={img.alt} key={`image${index}`} />
      ))}
    </div>
  );
};

export default GalleryContent;
