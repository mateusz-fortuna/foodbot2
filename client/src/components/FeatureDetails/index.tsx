import CloseButton from 'components/Button/CloseButton';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import FeatureDetailsButton from 'components/Button/FeatureDetailsButton';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import {
  resetFeatureDetails,
  toggleDetailTransition,
} from 'features/featureDetails/featureDetailsSlice';
import { useEffect, useRef, useState } from 'react';
import './index.sass';
import {
  useContent,
  useFeatureDetails,
  useTheme,
  useTransition,
} from 'utils/hooks';

const FeatureDetails = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const { OPENED_FEATURE } = useFeatureDetails();
  const firstOpen = useRef(true);
  const { DURATION } = useTransition();
  const { background, font } = useTheme();
  const { features } = useContent();
  const featuresRef = useRef(OPENED_FEATURE ? features[OPENED_FEATURE] : null);
  const [mountContent, setMountContent] = useState(true);
  const [mount, setMount] = useState(true);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimation = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimationDuration = 1.5 * DURATION;
  const transitionClassName = 'featuresDetailsTransition';
  const [resetContent, setResetContent] = useState(false);

  // Handle content transition

  useEffect(() => {
    if (!firstOpen.current && OPENED_FEATURE) {
      setMountContent(false);
      dispatch(toggleDetailTransition());
      detailsAnimation.current = setTimeout(() => {
        featuresRef.current = features[OPENED_FEATURE];
        setResetContent(true);
        setResetContent(false);
        setMountContent(true);
      }, 1.25 * DURATION);
      transitionTimeout.current = setTimeout(() => {
        dispatch(toggleDetailTransition());
      }, 2 * 1.25 * DURATION);
    }
  }, [OPENED_FEATURE, DURATION, features, dispatch]);

  const handleCloseButton = () => {
    setMountContent(false);
    detailsAnimation.current = setTimeout(
      () => setMount(false),
      0.75 * DURATION,
    );
    closeTimeout.current = setTimeout(
      () => dispatch(resetFeatureDetails()),
      DURATION + detailsAnimationDuration,
    );
  };

  useEffect(() => {
    firstOpen.current = false;
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (detailsAnimation.current) clearTimeout(detailsAnimation.current);
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, []);

  /* eslint-disable @typescript-eslint/indent */
  return (
    OPENED_FEATURE && (
      <CSSTransition
        classNames={transitionClassName}
        in={mount}
        timeout={detailsAnimationDuration}
        appear
      >
        <div
          className={'features__details ' + transitionClassName}
          style={{ backgroundColor: background.default, color: font.default }}
        >
          <CloseButton onClick={handleCloseButton} />
          <FeatureDetailsButton direction="previous" />
          {resetContent
            ? null
            : featuresRef.current && (
                <>
                  <ImgSection
                    mount={mountContent}
                    nth={1}
                    imgUrl={featuresRef.current.imgUrl}
                    alt=""
                  />
                  <ContentSection
                    mount={mountContent}
                    nth={2}
                    title={featuresRef.current.title}
                    description={featuresRef.current.description}
                  />
                </>
              )}
          <FeatureDetailsButton direction="next" />
        </div>
      </CSSTransition>
    )
  );
};

export default FeatureDetails;
