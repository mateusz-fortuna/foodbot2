import { ReactNode } from 'react';
import Underline from 'components/Underline';
import './index.sass';

type Props = {
  children: ReactNode;
};

const NavbarItem = ({ children }: Props): JSX.Element => {
  return (
    <li className="navbar__item">
      {children}
      <Underline />
    </li>
  );
};

export default NavbarItem;
