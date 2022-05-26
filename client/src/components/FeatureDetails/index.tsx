import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import {
  useContent,
  useFeatureDetails,
  useTheme,
  useTransition,
} from 'utils/hooks';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useEffect, useRef, useState } from 'react';
import CloseButton from 'components/Button/CloseButton';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import FeatureDetailsButton from 'components/Button/FeatureDetailsButton';
import './index.sass';

const FeatureDetails = (): JSX.Element | null => {
  const dispatch = useDispatch();
  const { OPENED_FEATURE } = useFeatureDetails();
  const { features } = useContent();
  const { background, font } = useTheme();
  const { DURATION } = useTransition();

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimation = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimationDuration = 1.5 * DURATION;
  const transitionClassName = 'featuresDetailsTransition';

  const [mountContent, setMountContent] = useState(true);
  const [mount, setMount] = useState(true);

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
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
      if (detailsAnimation.current) clearTimeout(detailsAnimation.current);
    };
  }, []);

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
          <ImgSection
            mount={mountContent}
            nth={1}
            imgUrl={features[OPENED_FEATURE].imgUrl}
            alt=""
          />
          <ContentSection
            mount={mountContent}
            nth={2}
            title={features[OPENED_FEATURE].title}
            description={features[OPENED_FEATURE].description}
          />
          <FeatureDetailsButton direction="next" />
        </div>
      </CSSTransition>
    )
  );
};

export default FeatureDetails;
