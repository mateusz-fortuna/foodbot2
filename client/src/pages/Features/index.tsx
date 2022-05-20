import AnimatedText from 'components/AnimatedText';
import './index.sass';

const Features = (): JSX.Element => {
  return (
    <div className="features page__container">
      <h1>
        <AnimatedText mount>Features</AnimatedText>
      </h1>
    </div>
  );
};

export default Features;
