import AnimatedText from 'components/AnimatedText';
import { Inputs } from 'components/Form';
import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';
import { RootState } from 'redux/rootReducer';

type ErrorMessages =
  RootState['languageReducer']['CONTENT']['contact']['form']['errorMessages'];
type Props = {
  register: UseFormRegister<Inputs>;
  name: UseFormRegister<Inputs>['arguments']['name'];
  type?: 'text' | 'textarea';
  rows?: number;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  nth: number;
  errors: FieldErrors<Inputs>;
  errorMessages: ErrorMessages;
};

const InputBox = ({
  type = 'text',
  rows = 12,
  name,
  required = false,
  pattern,
  nth,
  register,
  errors,
  errorMessages,
}: Props): JSX.Element => {
  const textInput = <input {...register(name, { required, pattern })} />;
  const textArea = (
    <textarea
      {...register('message', { required: required, pattern })}
      rows={rows}
    />
  );
  return (
    <div className="inputBox">
      <label>
        <AnimatedText nth={nth}>{`${name}:`}</AnimatedText>
      </label>
      {type === 'text' ? textInput : textArea}
      {errors.name && <span>{errorMessages.required}</span>}
      {name === 'email' && <span>{errors.email?.message}</span>}
    </div>
  );
};

export default InputBox;
