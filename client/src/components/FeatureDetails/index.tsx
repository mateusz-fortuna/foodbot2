import { useDispatch } from 'react-redux';
import { useFeatureDetails, useTheme } from 'utils/hooks';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import CloseButton from 'components/CloseButton';
import AnimatedText from 'components/AnimatedText';
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
      <div className="features__details_imgSection">
        <img src={IMG_URL} />
      </div>
      <div className="features__details_contentSection">
        <h1>
          <AnimatedText mount nth={0}>
            {TITLE}
          </AnimatedText>
        </h1>
        <AnimatedText mount nth={1}>
          {DESCRIPTION}
        </AnimatedText>
      </div>
    </div>
  );
};

export default FeatureDetails;
