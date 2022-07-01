import CircleButton from 'components/Button/CircleButton';
import FeatureDetails from 'components/FeatureDetails';
import {
  FeatureName,
  setFeatureDetails,
} from 'features/featureDetails/featureDetailsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNamesToInfiniteNavigation } from 'utils/helpers/getNamesToInfiniteNavigation';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Features = (): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalState();
  const { background } = state.themeReducer.THEME;
  const { features } = state.languageReducer.CONTENT;
  const { OPENED_FEATURE } = state.featureDetailsReducer;
  const imageURL =
    'https://images.unsplash.com/photo-1652074847108-0b4294408ca1';

  useEffect(() => {
    if (OPENED_FEATURE) {
      const names = Object.keys(features) as FeatureName[];
      const { NEXT, PREVIOUS } = getNamesToInfiniteNavigation(
        OPENED_FEATURE,
        names,
      );
      dispatch(setFeatureDetails({ OPENED_FEATURE, NEXT, PREVIOUS }));
    }
  }, [OPENED_FEATURE, dispatch, features]);

  return (
    <div
      className="features page__container"
      style={{ backgroundColor: background.inverted }}
    >
      <div className="features__imageContainer">
        <img src={imageURL} alt="lorem ipsum" />

        {Object.entries(features).map(([name, { buttonPos }], INDEX) => (
          <CircleButton
            key={name}
            onClick={() =>
              dispatch(setFeatureDetails({ INDEX, OPENED_FEATURE: name }))
            }
            style={{
              left: buttonPos[0] + '%',
              top: buttonPos[1] + '%',
            }}
          />
        ))}
      </div>

      {OPENED_FEATURE && <FeatureDetails />}
    </div>
  );
};

export default Features;
