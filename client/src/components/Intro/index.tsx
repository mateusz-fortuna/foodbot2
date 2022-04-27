import AnimatedText from '../AnimatedText';
import { TransitionOut } from '../Transitions';
import './styles.sass';

type Props = {
  initialRender: boolean;
  textColor: string;
  backgroundColor: string;
};

/**
 * Intro - Display the starter text and end up with the animation.
 * @param initialRender Show the component only once per session
 * @param textColor Color of the text
 * @param backgroundColor Color of the background
 */

const Intro = ({
  initialRender,
  textColor,
  backgroundColor,
}: Props): JSX.Element | null => {
  if (!initialRender) return null;

  const transitionDuration = 1100;
  const transitionDelay = 100;

  return (
    <div className="intro">
      <TransitionOut
        mount={true}
        duration={transitionDuration}
        delay={transitionDelay}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
      <h1 className="intro__header">
        <AnimatedText mount>FoodBot</AnimatedText>
      </h1>
    </div>
  );
};

export default Intro;
