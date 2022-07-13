import LanguageButton from 'components/Button/LanguageButton';
import './index.sass';

const LanguageButtonsWrapper = (): JSX.Element => (
  <div className="languageButtonsWrapper">
    <LanguageButton language="english">EN</LanguageButton>
    <LanguageButton language="polish">PL</LanguageButton>
  </div>
);

export default LanguageButtonsWrapper;
