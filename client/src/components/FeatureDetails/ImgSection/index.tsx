import AnimatedImage from 'components/AnimatedImage';

type Props = {
  mount: boolean;
  nth: number;
  imgUrl: string;
  alt: string;
};

const ImgSection = ({ mount, nth, imgUrl, alt }: Props): JSX.Element => (
  <div className="features__details_imgSection">
    <AnimatedImage
      mount={mount}
      nth={nth}
      src={imgUrl}
      alt={alt}
      className={'features__details_imgSection_img'}
    />
  </div>
);

export default ImgSection;
