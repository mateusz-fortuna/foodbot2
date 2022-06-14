import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

const CustomNavigation = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    const handleCustomNavigation = () => {};
  }, []);

  return <>{children}</>;
};

export default CustomNavigation;
