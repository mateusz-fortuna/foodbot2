import LanguageButton from 'components/Button/LanguageButton';
import './index.sass';

type Props = {
  mount: boolean;
};

const LanguageButtonsWrapper = ({ mount }: Props): JSX.Element => (
  <div className="languageButtonsWrapper">
    <LanguageButton language="english" mount={mount}>
      EN
    </LanguageButton>
    <LanguageButton language="polish" mount={mount}>
      PL
    </LanguageButton>
  </div>
);

export default LanguageButtonsWrapper;
