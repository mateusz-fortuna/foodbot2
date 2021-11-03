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
  //textColor,
  backgroundColor,
}: Props): JSX.Element | null => {
  if (!initialRender) return null;

  const transitionDuration = 1000;
  const transitionDelay = 100;

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.\nObcaecati repellat, illo tempore iure perspiciatis in fugit eveniet\nnatque cum laborum sint quasi quibusdam eius consectetur,\nnmaxime, nam quisquam dicta sequi!';

  return (
    <div className="intro">
      <TransitionOut
        mount={true}
        duration={transitionDuration}
        delay={transitionDelay}
        backgroundColor={backgroundColor}
      />
      <AnimatedText mount>{text}</AnimatedText>
    </div>
  );
};

export default Intro;
