import { SubmitHandler, useForm } from 'react-hook-form';
import { useGlobalState, useOrientation } from 'utils/hooks';
import InputBox from 'components/InputBox';
import AnimatedText from 'components/AnimatedText';
import SubmitButton from 'components/Button/SubmitButton';
import './index.sass';

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = (): JSX.Element => {
  const isLandscape = useOrientation() === 'landscape';
  const { title, name, email, message, submitButton, errorMessages } =
    useGlobalState().languageReducer.CONTENT.contact.form;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const inputBoxProps = {
    errorMessages,
    errors,
    register,
    required: true,
  };

  const emailPattern = {
    value:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: errorMessages.pattern,
  };

  const submit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      style={{ marginTop: isLandscape ? 0 : '4rem' }}
    >
      <h1>
        <AnimatedText>{`${title}!`}</AnimatedText>
      </h1>
      <InputBox name={name} nth={1} {...inputBoxProps} />
      <InputBox
        name={email}
        nth={2}
        pattern={emailPattern}
        {...inputBoxProps}
      />
      <InputBox name={message} nth={3} type="textarea" {...inputBoxProps} />
      <SubmitButton>{submitButton}</SubmitButton>
    </form>
  );
};

export default Form;
