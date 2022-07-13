import { Language, setLanguage } from 'features/language/languageSlice';
import { useDispatch } from 'react-redux';
import { useGlobalState } from 'utils/hooks';
import Button from '..';

type Props = {
  language: Language;
  children: string;
};

const LanguageButton = ({ language, children }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const changeLanguage = () => dispatch(setLanguage(language));
  const { LANGUAGE } = useGlobalState().languageReducer;

  const buttonStyle = {
    fontColor: '#fff',
    backgroundColor: 'transparent',
    style: {
      fontWeight: language === LANGUAGE ? 'normal' : 'lighter',
    } as React.CSSProperties,
  };

  return (
    <Button onClick={changeLanguage} {...buttonStyle}>
      {children}
    </Button>
  );
};

export default LanguageButton;
