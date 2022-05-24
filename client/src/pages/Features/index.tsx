import CircleButton from 'components/CircleButton';
import FeatureDetails from 'components/FeatureDetails';
import { setFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useDispatch } from 'react-redux';
import { useContent, useFeatureDetails, useTheme } from 'utils/hooks';
import './index.sass';

const Features = (): JSX.Element => {
  const { background } = useTheme();
  const features = useContent().features;
  const areDetailsOpened = useFeatureDetails().TITLE.length > 0;
  const dispatch = useDispatch();
  const imageURL =
    'https://images.unsplash.com/photo-1652074847108-0b4294408ca1';

  const setDetails = (imgUrl: string, description: string, title: string) =>
    dispatch(
      setFeatureDetails({
        IMG_URL: imgUrl,
        DESCRIPTION: description,
        TITLE: title,
      }),
    );

  return (
    <div
      className="features page__container"
      style={{ backgroundColor: background.inverted }}
    >
      <div className="features__imageContainer">
        <img src={imageURL} alt="lorem ipsum" />

        {Object.entries(features).map(
          ([name, { buttonPos, description, imgUrl, title }]) => (
            <CircleButton
              key={name}
              onClick={() => setDetails(imgUrl, description, title)}
              style={{
                left: buttonPos[0] + '%',
                top: buttonPos[1] + '%',
              }}
            />
          ),
        )}
      </div>

      {areDetailsOpened && <FeatureDetails />}
    </div>
  );
};

export default Features;
