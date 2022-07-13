import { useGlobalState } from 'utils/hooks';

const ThankYou = (): JSX.Element => {
  const { header, message } =
    useGlobalState().languageReducer.CONTENT.contact.form.status.success;

  return (
    <>
      <h1>{header}</h1>
      <p>{message}</p>
    </>
  );
};
export default ThankYou;
