import { useDispatch } from 'react-redux';
import { useFeatureDetails, useTheme } from 'utils/hooks';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import CloseButton from 'components/CloseButton';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import './index.sass';

const FeatureDetails = (): JSX.Element => {
  const { background, font } = useTheme();
  const { DESCRIPTION, IMG_URL, TITLE } = useFeatureDetails();
  const dispatch = useDispatch();

  return (
    <div
      className="features__details"
      style={{ backgroundColor: background.default, color: font.default }}
    >
      <CloseButton onClick={() => dispatch(resetFeatureDetails())} />
      <ImgSection imgUrl={IMG_URL} />
      <ContentSection title={TITLE} description={DESCRIPTION} />
    </div>
  );
};

export default FeatureDetails;
