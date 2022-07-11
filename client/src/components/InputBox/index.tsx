import { Inputs } from 'components/Form';
import { FieldErrors, UseFormRegister, ValidationRule } from 'react-hook-form';
import { RootState } from 'redux/rootReducer';

type ErrorMessages =
  RootState['languageReducer']['CONTENT']['contact']['form']['errorMessages'];
type Props = {
  register: UseFormRegister<Inputs>;
  setInputFocus: () => void;
  id: UseFormRegister<Inputs>['arguments']['name'];
  name: string;
  type?: 'text' | 'textarea';
  rows?: number;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  errors: FieldErrors<Inputs>;
  errorMessages: ErrorMessages;
};

const InputBox = ({
  id,
  type = 'text',
  rows = 12,
  name,
  required = false,
  pattern,
  errors,
  errorMessages,
  register,
  setInputFocus,
}: Props): JSX.Element => {
  const textInput = (
    <input
      id={id}
      {...register(id, { required, pattern })}
      onFocus={setInputFocus}
    />
  );
  const textArea = (
    <textarea
      id={id}
      {...register(id, { required: required, pattern })}
      rows={rows}
    />
  );
  return (
    <div className="inputBox">
      <label htmlFor={id}>{`${name}:`}</label>
      {type === 'text' ? textInput : textArea}
      {errors.name && (
        <span className="spanError">{errorMessages.required}</span>
      )}
      {name === 'email' && (
        <span className="spanError">{errors.email?.message}</span>
      )}
    </div>
  );
};

export default InputBox;
