import { setFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useDispatch } from 'react-redux';
import { useGlobalState } from 'utils/hooks';
import ArrowButton, { Props } from '../ArrowButton';

const FeatureDetailsButton = ({ direction }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const state = useGlobalState();
  const { IS_NAVIGATION_ACTIVE } = state.navigationReducer;
  const { NEXT, PREVIOUS, IS_DETAIL_TRANSITION } = state.featureDetailsReducer;
  const name = direction === 'next' ? NEXT : PREVIOUS;

  const handleClick = () => {
    if (!IS_NAVIGATION_ACTIVE && !IS_DETAIL_TRANSITION)
      dispatch(setFeatureDetails({ OPENED_FEATURE: name }));
  };

  return <ArrowButton direction={direction} onClick={handleClick} />;
};

export default FeatureDetailsButton;
