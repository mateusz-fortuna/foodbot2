import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { useFeatureDetails, useTheme, useTransition } from 'utils/hooks';
import { resetFeatureDetails } from 'features/featureDetails/featureDetailsSlice';
import { useEffect, useRef, useState } from 'react';
import CloseButton from 'components/Button/CloseButton';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import './index.sass';
import ArrowButton from 'components/Button/ArrowButton';

const FeatureDetails = (): JSX.Element => {
  const { background, font } = useTheme();
  const { DESCRIPTION, IMG_URL, TITLE } = useFeatureDetails();
  const { DURATION } = useTransition();
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimation = useRef<NodeJS.Timeout | null>(null);
  const detailsAnimationDuration = 1.5 * DURATION;
  const [mountContent, setMountContent] = useState(true);
  const [mount, setMount] = useState(true);
  const dispatch = useDispatch();
  const transitionClassName = 'featuresDetailsTransition';

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
        <ArrowButton direction="previous" />
        <ImgSection mount={mountContent} nth={1} imgUrl={IMG_URL} alt="" />
        <ContentSection
          mount={mountContent}
          nth={2}
          title={TITLE}
          description={DESCRIPTION}
        />
        <ArrowButton direction="next" />
      </div>
    </CSSTransition>
  );
};

export default FeatureDetails;
