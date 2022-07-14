import AnimatedText from 'components/AnimatedText';
import { Language, setLanguage } from 'features/language/languageSlice';
import { useDispatch } from 'react-redux';
import { useGlobalState } from 'utils/hooks';
import Button from '..';

type Props = {
  language: Language;
  mount: boolean;
  children: string;
};

const LanguageButton = ({ language, mount, children }: Props): JSX.Element => {
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
      <AnimatedText mount={mount}>{children}</AnimatedText>
    </Button>
  );
};

export default LanguageButton;
