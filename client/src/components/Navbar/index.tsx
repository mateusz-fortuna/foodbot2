import NavbarItem from 'components/NavbarItem';
import { useNavigation } from 'utils/hooks';
import './index.sass';

const Navbar = (): JSX.Element => {
  const { PAGES } = useNavigation();

  return (
    <nav className="navbar">
      {PAGES.slice(1).map((name) => (
        <NavbarItem key={name}>{name}</NavbarItem>
      ))}
    </nav>
  );
};

export default Navbar;
