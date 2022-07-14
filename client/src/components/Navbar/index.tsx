import NavbarItem from 'components/Navbar/NavbarItem';
import NavigationButton from 'components/Button/NavigationButton';
import { useGlobalState } from 'utils/hooks';
import './index.sass';
import LanguageButtonsWrapper from 'components/LanguageButtonsWrapper';

const Navbar = (): JSX.Element => {
  const { PAGES } = useGlobalState().navigationReducer;

  return (
    <nav className="navbar">
      <ol>
        {PAGES.map((name) => (
          <NavbarItem key={name}>
            <NavigationButton
              page={name}
              fontColor="#fff"
              backgroundColor="transparent"
            />
          </NavbarItem>
        ))}
      </ol>
      <LanguageButtonsWrapper mount />
    </nav>
  );
};

export default Navbar;
