import NavbarItem from 'components/NavbarItem';
import NavigationButton from 'components/NavigationButton';
import { useNavigation } from 'utils/hooks';
import './index.sass';

const Navbar = (): JSX.Element => {
  const { PAGES } = useNavigation();

  return (
    <nav className="navbar">
      {PAGES.slice(1).map((name) => (
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
