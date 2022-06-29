/*eslint-disable*/
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
        <input {...register('email', { required: true })} />
        {errors.name && <span>{errorMessages.required}</span>}
      </div>

      <div className="inputBox">
        <label>{`${message}:`}</label>
        <textarea {...register('message', { required: true })} rows={8} />
        {errors.name && <span>{errorMessages.required}</span>}
      </div>

      <Button backgroundColor={background.inverted} fontColor={font.inverted}>
        {submitButton}
        <input type="submit" style={submitButtonStyle} />
      </Button>

      {/* <input type="submit" /> */}
    </form>
  );
};

export default Form;
