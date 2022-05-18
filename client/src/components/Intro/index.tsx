import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialLoading } from 'features/initialLoading/initialLoadingSlice';
import { TransitionOut } from '../Transitions';
import { useTransition } from 'utils/hooks';
import AnimatedText from '../AnimatedText';
import './styles.sass';

type Props = {
  setMountIntro: React.Dispatch<React.SetStateAction<boolean>>;
  textColor: string;
  backgroundColor: string;
};

/**
 * Intro - Display the starter text and end up with the animation.
 * @param setMountIntro Pass the boolean set state action to destroy the component after animations
 * @param textColor Color of the text
 * @param backgroundColor Color of the background
 */

const Intro = ({
  setMountIntro,
  textColor,
  backgroundColor,
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [mountText, setMountText] = useState(true);
  const [mountStripes, setMountStripes] = useState(false);
  const { DURATION, ELEMENTS_DELAY } = useTransition();
  const introDuration = 3000;

  useEffect(() => {
    const unmountText = setTimeout(
      () => setMountText(false),
      introDuration - DURATION * 0.5,
    );
    const unmountStripes = setTimeout(
      () => setMountStripes(true),
      introDuration,
    );
    const unmountIntro = setTimeout(
      () => setMountIntro(false),
      introDuration + DURATION + ELEMENTS_DELAY,
    );

    return () => {
      clearTimeout(unmountText);
      clearTimeout(unmountStripes);
      clearTimeout(unmountIntro);
      dispatch(setInitialLoading());
    };
  }, [setMountIntro, dispatch, DURATION, ELEMENTS_DELAY]);

  return (
    <div
      className="intro"
      style={{
        color: textColor,
        backgroundColor: !mountStripes ? backgroundColor : 'transparent',
      }}
    >
      {mountStripes && (
        <TransitionOut
          mount={mountStripes}
          duration={DURATION}
          delay={ELEMENTS_DELAY}
          backgroundColor={backgroundColor}
        />
      )}
      <div className="intro__text">
        <h1>
          <AnimatedText mount={mountText}>Title</AnimatedText>
        </h1>
        <p>
          <AnimatedText mount={mountText} nth={1}>
            Lorem ipsum dolor sit amet.
          </AnimatedText>
        </p>
      </div>
    </div>
  );
};

export default Intro;
