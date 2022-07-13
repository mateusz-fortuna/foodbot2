import { useGlobalState } from 'utils/hooks';
import MailTo from 'components/MailTo';

const TryAgain = (): JSX.Element => {
  const state = useGlobalState();
  const contactContent = state.languageReducer.CONTENT.contact;
  const { header, message } = contactContent.form.status.error;
  const { email } = contactContent;
  const { font } = state.themeReducer.THEME;

  return (
    <>
      <h1>{header}</h1>
      <p>{message}</p>
      <br />
      <h1 style={{ fontWeight: 300 }}>
        <MailTo email={email} color={font.default} />
      </h1>
    </>
  );
};

export default TryAgain;
