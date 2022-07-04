import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGlobalState, useOrientation } from 'utils/hooks';
import InputBox from 'components/InputBox';
import AnimatedText from 'components/AnimatedText';
import ReCAPTCHA from 'react-google-recaptcha';
import SubmitButton from 'components/Button/SubmitButton';
import './index.sass';
import { sendData } from './sendData';

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = (): JSX.Element => {
  const serverPath = '';
  const recaptchaSiteKey = '6LerWc0aAAAAAHshuCVA20zxcp1UbBPCDFGXL1Dg';
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const isLandscape = useOrientation() === 'landscape';
  const state = useGlobalState();
  const { title, name, email, message, submitButton, errorMessages } =
    state.languageReducer.CONTENT.contact.form;

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

  const submit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitButtonClicked(true);
    if (isCaptchaValid) {
      sendData(serverPath, data);
    }
  };

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
      <ReCAPTCHA
        sitekey={recaptchaSiteKey}
        onChange={() => setIsCaptchaValid(true)}
      />
      {!isCaptchaValid && isSubmitButtonClicked && (
        <span className="spanError">{errorMessages.captcha}</span>
      )}
      <SubmitButton>{submitButton}</SubmitButton>
    </form>
  );
};

export default Form;
