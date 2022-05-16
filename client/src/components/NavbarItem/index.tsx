import Underline from 'components/Underline';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { handleNavigation } from 'utils/helpers/handleNavigation';
import { useNavigation } from 'utils/hooks';
import './index.sass';

type Props = {
  children: ReactNode;
};

const NavbarItem = ({ children }: Props): JSX.Element => {
  const { PREV_PAGE, NEXT_PAGE } = useNavigation();
  const navigate = useNavigate();

  return (
    <li
      className="navbar__item"
      onClick={() => handleNavigation('next', PREV_PAGE, NEXT_PAGE, navigate)}
    >
      {children}
      <Underline />
    </li>
  );
};

export default NavbarItem;
