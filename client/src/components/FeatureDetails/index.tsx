import CloseButton from 'components/Button/CloseButton';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import FeatureDetailsButton from 'components/Button/FeatureDetailsButton';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useGlobalState, useOrientation } from 'utils/hooks';
import './index.sass';
import {
  resetFeatureDetails,
  toggleDetailTransition,
} from 'features/featureDetails/featureDetailsSlice';

const FeatureDetails = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const state = useGlobalState();
  const { OPENED_FEATURE } = state.featureDetailsReducer;
  const { DURATION } = state.transitionReducer;
  const { background, font } = state.themeReducer.THEME;
  const { features } = state.languageReducer.CONTENT;
  const orientation = useOrientation();
  const firstOpen = useRef(true);
  const featuresRef = useRef(OPENED_FEATURE ? features[OPENED_FEATURE] : null);
  const [mountContent, setMountContent] = useState(true);
  const [mount, setMount] = useState(true);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimation = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimationDuration = 1.5 * DURATION;
  const transitionClassName = 'featuresDetailsTransition';
  const [resetContent, setResetContent] = useState(false);
  const transitionDelayCoefficient = 1.25;

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
      }, transitionDelayCoefficient * DURATION);
      transitionTimeout.current = setTimeout(() => {
        dispatch(toggleDetailTransition());
      }, 2 * transitionDelayCoefficient * DURATION);
    }
  }, [OPENED_FEATURE, DURATION, features, dispatch]);

  const handleCloseButton = () => {
    setMountContent(false);
    detailsAnimation.current = setTimeout(() => setMount(false), DURATION);
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
          style={{
            backgroundColor: background.default,
            color: font.default,
          }}
        >
          <CloseButton onClick={handleCloseButton} />
          {orientation === 'landscape' && (
            <FeatureDetailsButton direction="previous" />
          )}
          {resetContent
            ? null
            : featuresRef.current && (
                <div
                  className={
                    orientation === 'portrait'
                      ? 'features__details_sectionContainer features__details_sectionContainer--portrait'
                      : 'features__details_sectionContainer'
                  }
                >
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
                </div>
              )}
          {orientation === 'landscape' ? (
            <FeatureDetailsButton direction="next" />
          ) : (
            <div className="features__details_arrowsContainer">
              <FeatureDetailsButton direction="previous" />
              <FeatureDetailsButton direction="next" />
            </div>
          )}
        </div>
      </CSSTransition>
    )
  );
};

export default FeatureDetails;
