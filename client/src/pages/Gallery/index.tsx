import AnimatedText from 'components/AnimatedText';
import './index.sass';

const Gallery = (): JSX.Element => {
  return (
    <div className="gallery">
      <h1>
        <AnimatedText mount>Gallery</AnimatedText>
      </h1>
    </div>
  );
};

export default Gallery;
