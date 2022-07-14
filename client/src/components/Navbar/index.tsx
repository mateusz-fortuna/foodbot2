import { useGlobalState, usePageNames } from 'utils/hooks';
import NavbarItem from 'components/Navbar/NavbarItem';
import NavigationButton from 'components/Button/NavigationButton';
import LanguageButtonsWrapper from 'components/LanguageButtonsWrapper';
import './index.sass';

const Navbar = (): JSX.Element => {
  const state = useGlobalState();
  const { PAGES } = state.navigationReducer;
  const { LANGUAGE } = state.languageReducer;
  const pageNames = usePageNames();
  const marginRight = LANGUAGE === 'english' ? '0.5rem' : '5.5rem';

  return (
    <nav className="navbar">
      <ol style={{ marginRight }}>
        {PAGES.map((name, index) => (
          <NavbarItem key={name}>
            <NavigationButton
              page={name}
              fontColor="#fff"
              backgroundColor="transparent"
            >
              {pageNames[index]}
            </NavigationButton>
          </NavbarItem>
        ))}
      </ol>
      <LanguageButtonsWrapper mount />
    </nav>
  );
};

export default Navbar;
