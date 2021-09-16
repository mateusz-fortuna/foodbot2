import React from 'react';
import './styles.sass';

type Props = {
  menuColor?: string;
  openedMenuColor?: string;
  children: JSX.Element;
};

const MainLayout = ({ children }: Props) => (
  <div className="mainLayout">{children}</div>
);

export default MainLayout;
