import AnimatedImage from 'components/AnimatedImage';
import Spinner from 'components/Spinner';

type Props = {
  isImageMounted: boolean;
  mount: boolean;
  nth: number;
  imgUrl: string;
  alt: string;
};

const ImgSection = ({
  isImageMounted,
  mount,
  nth,
  imgUrl,
  alt,
}: Props): JSX.Element => (
  <div className="features__details_imgSection">
    {isImageMounted ? (
      <AnimatedImage
        mount={mount}
        nth={nth}
        src={imgUrl}
        alt={alt}
        className={'features__details_imgSection_img'}
      />
    ) : (
      <Spinner />
    )}
  </div>
);

export default ImgSection;
