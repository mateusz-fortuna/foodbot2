import { useState, useEffect } from 'react';
import { TransitionOut } from '../Transitions';
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
  const introDuration = 3000;
  const transitionDuration = 1000;
  const transitionDelay = 100;

  const [mountText, setMountText] = useState(true);
  const [mountStripes, setMountStripes] = useState(true);

  useEffect(() => {
    const unmountText = setTimeout(
      () => setMountText(false),
      introDuration - transitionDuration * 0.5,
    );
    const unmountStripes = setTimeout(
      () => setMountStripes(false),
      introDuration,
    );
    const unmountIntro = setTimeout(
      () => setMountIntro(false),
      introDuration + transitionDuration + transitionDelay,
    );

    return () => {
      clearTimeout(unmountText);
      clearTimeout(unmountStripes);
      clearTimeout(unmountIntro);
    };
  }, [setMountIntro]);

  return (
    <div className="intro" style={{ color: textColor }}>
      <TransitionOut
        mount={mountStripes}
        duration={transitionDuration}
        delay={transitionDelay}
        backgroundColor={backgroundColor}
      />
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
