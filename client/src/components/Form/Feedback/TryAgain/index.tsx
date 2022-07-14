import { useGlobalState } from 'utils/hooks';
import MailTo from 'components/MailTo';
import AnimatedText from 'components/AnimatedText';

const TryAgain = (): JSX.Element => {
  const state = useGlobalState();
  const contactContent = state.languageReducer.CONTENT.contact;
  const { header, message } = contactContent.form.status.error;
  const { email } = contactContent;
  const { font } = state.themeReducer.THEME;

  return (
    <>
      <h1>
        <AnimatedText nth={0}>{header}</AnimatedText>
      </h1>
      <p>
        <AnimatedText nth={1}>{message}</AnimatedText>
      </p>
      <br />
      <h1 style={{ fontWeight: 300 }}>
        <MailTo email={email} color={font.default} nth={3} />
      </h1>
    </>
  );
};

export default TryAgain;
