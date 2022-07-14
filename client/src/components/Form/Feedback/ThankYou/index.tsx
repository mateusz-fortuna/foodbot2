import AnimatedText from 'components/AnimatedText';
import { useGlobalState } from 'utils/hooks';

const ThankYou = (): JSX.Element => {
  const { header, message } =
    useGlobalState().languageReducer.CONTENT.contact.form.status.success;

  return (
    <>
      <h1>
        <AnimatedText nth={0}>{header}</AnimatedText>
      </h1>
      <p>
        <AnimatedText nth={1}>{message}</AnimatedText>
      </p>
    </>
  );
};
export default ThankYou;
