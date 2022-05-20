import AnimatedText from 'components/AnimatedText';
import './index.sass';

const Contact = (): JSX.Element => {
  return (
    <div className="contact page__container">
      <h1>
        <AnimatedText mount>Contact</AnimatedText>
      </h1>
    </div>
  );
};

export default Contact;
