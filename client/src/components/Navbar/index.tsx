import NavbarItem from 'components/Navbar/NavbarItem';
import NavigationButton from 'components/Button/NavigationButton';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Navbar = (): JSX.Element => {
  const { PAGES } = useGlobalState().navigationReducer;

  return (
    <nav className="navbar">
      {PAGES.map((name) => (
        <NavbarItem key={name}>
          <NavigationButton
            page={name}
            fontColor="#fff"
            backgroundColor="transparent"
          />
        </NavbarItem>
      ))}
    </nav>
  );
};

export default Navbar;
