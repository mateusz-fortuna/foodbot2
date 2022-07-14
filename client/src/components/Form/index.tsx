import axios, { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGlobalState, useOrientation } from 'utils/hooks';
import { Status } from 'components/FormContainer';
import InputBox from 'components/InputBox';
import ReCAPTCHA from 'react-google-recaptcha';
import SubmitButton from 'components/Button/SubmitButton';
import './index.sass';

export type Inputs = {
  name: string;
  email: string;
  message: string;
};
type Props = {
  submittingStatus: Status;
  setSubmittingStatus: React.Dispatch<React.SetStateAction<Status>>;
};

const Form = ({
  submittingStatus,
  setSubmittingStatus,
}: Props): JSX.Element => {
  const serverPath = 'http://localhost:3001/contact/submit';
  const recaptchaSiteKey = '6LerWc0aAAAAAHshuCVA20zxcp1UbBPCDFGXL1Dg';
  const state = useGlobalState();
  const isLandscape = useOrientation() === 'landscape';
  const { DURATION } = state.transitionReducer;
  const [isInputFocused, setIsInputFocused] = useState(false);
  const captchaWrapperRef = useRef<HTMLDivElement | null>(null);
  const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const { title, name, email, message, submitButton, errorMessages } =
    state.languageReducer.CONTENT.contact.form;

  const emailPattern = {
    value:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: errorMessages.pattern,
  };

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
    setInputFocus: () => setIsInputFocused(true),
  };

  const handleResponseStatus = ({ status }: AxiosResponse) => {
    if (status === 200) return setSubmittingStatus('success');
    return setSubmittingStatus('error');
  };

  const submit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitButtonClicked(true);
    if (isCaptchaValid) {
      setSubmittingStatus('inProgress');
      axios.post(serverPath, data).then((res) => handleResponseStatus(res));
    }
  };

  // Show captcha
  useEffect(() => {
    const captha = captchaWrapperRef.current;
    if (isInputFocused && captha) {
      transitionTimeout.current = setTimeout(() => {
        captha.style.opacity = '1';
      }, DURATION);
    }
    return () => {
      if (transitionTimeout.current) clearTimeout(transitionTimeout.current);
    };
  }, [isInputFocused, DURATION]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      style={{ marginTop: isLandscape ? '2rem' : '4rem' }}
    >
      <h1>{title}</h1>
      <InputBox id="name" name={name} {...inputBoxProps} />
      <InputBox
        id="email"
        name={email}
        pattern={emailPattern}
        {...inputBoxProps}
      />
      <InputBox
        id="message"
        name={message}
        type="textarea"
        {...inputBoxProps}
      />
      {isLandscape && isInputFocused && (
        <div className="captchaWrapper" ref={captchaWrapperRef}>
          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            onChange={() => setIsCaptchaValid(true)}
          />
          {!isCaptchaValid && isSubmitButtonClicked && (
            <span className="spanError">{errorMessages.captcha}</span>
          )}
        </div>
      )}
      <SubmitButton isFormSubmitting={submittingStatus === 'inProgress'}>
        {submittingStatus === 'inProgress'
          ? submitButton.submitting + '...'
          : submitButton.default}
      </SubmitButton>
    </form>
  );
};

export default Form;
