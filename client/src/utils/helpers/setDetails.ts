import { setFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { Dispatch } from 'redux';

export const setDetails = (
  imgUrl: string,
  description: string,
  title: string,
  dispatch: Dispatch<any>,
) =>
  dispatch(
    setFeatureDetails({
      IMG_URL: imgUrl,
      DESCRIPTION: description,
      TITLE: title,
    }),
  );
