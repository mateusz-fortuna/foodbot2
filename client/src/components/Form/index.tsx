import Button from 'components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => console.log(data);
  const state = useGlobalState();
  const { background, font } = state.themeReducer.THEME;
  const { title, name, email, message, submitButton, errorMessages } =
    state.languageReducer.CONTENT.contact.form;

  const emailPattern = {
    value:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: errorMessages.pattern,
  };

  const submitButtonStyle = {
    position: 'absolute',
    inset: 0,
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>{`${title}!`}</h1>

      <div className="inputBox">
        <label>{`${name}:`}</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>{errorMessages.required}</span>}
      </div>

      <div className="inputBox">
        <label>{`${email}:`}</label>
        <input
          {...register('email', { required: true, pattern: emailPattern })}
        />
        {errors.email && <span>{errorMessages.required}</span>}
        <span>{errors.email?.message}</span>
      </div>

      <div className="inputBox">
        <label>{`${message}:`}</label>
        <textarea {...register('message', { required: true })} rows={8} />
        {errors.message && <span>{errorMessages.required}</span>}
        {}
      </div>

      <Button backgroundColor={background.inverted} fontColor={font.inverted}>
        {submitButton}
        <input type="submit" style={submitButtonStyle} />
      </Button>
    </form>
  );
};

export default Form;
