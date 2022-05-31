import { setFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useDispatch } from 'react-redux';
import { useFeatureDetails, useNavigation } from 'utils/hooks';
import ArrowButton, { Props } from '../ArrowButton';

const FeatureDetailsButton = ({ direction }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { IS_NAVIGATION_ACTIVE } = useNavigation();
  const { NEXT, PREVIOUS } = useFeatureDetails();
  const name = direction === 'next' ? NEXT : PREVIOUS;

  /**
   *
   *
   * THE HANDLER NEEDS TO BE THROTTLED
   *
   */

  const handleClick = () => {
    if (!IS_NAVIGATION_ACTIVE)
      dispatch(setFeatureDetails({ OPENED_FEATURE: name }));
  };

  return <ArrowButton direction={direction} onClick={handleClick} />;
};

export default FeatureDetailsButton;
