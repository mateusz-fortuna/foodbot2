import { setFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useDispatch } from 'react-redux';
import { useFeatureDetails } from 'utils/hooks';
import ArrowButton, { Props } from '../ArrowButton';

const FeatureDetailsButton = ({ direction }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { NEXT, PREVIOUS } = useFeatureDetails();
  const name = direction === 'next' ? NEXT : PREVIOUS;

  return (
    <ArrowButton
      direction={direction}
      onClick={() => dispatch(setFeatureDetails({ OPENED_FEATURE: name }))}
    />
  );
};

export default FeatureDetailsButton;
