import { ReactNode, useRef } from 'react';
import { useCurrentPage } from 'utils/hooks';
import Underline from 'components/Underline';
import './index.sass';

type Props = {
  children: ReactNode;
};

const NavbarItem = ({ children }: Props): JSX.Element => {
  const ref = useRef<HTMLLIElement | null>(null);
  const currentPage = useCurrentPage();
  const innerText = ref?.current?.innerText?.toLowerCase();
  const isCurrentPage = innerText === (currentPage || 'home');

  return (
    <li className="navbar__item" ref={ref}>
      {children}
      <Underline isCurrentPage={isCurrentPage} />
    </li>
  );
};

export default NavbarItem;
