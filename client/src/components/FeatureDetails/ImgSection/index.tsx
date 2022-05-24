type Props = {
  imgUrl: string;
};

const ImgSection = ({ imgUrl }: Props): JSX.Element => (
  <div className="features__details_imgSection">
    <img src={imgUrl} />
  </div>
);

export default ImgSection;
