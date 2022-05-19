import MenuTransitions from 'components/MenuTransitions';
//import Navbar from 'components/Navbar';
import './index.sass';

const Menu = (): JSX.Element => {
  return (
    <div className="menu">
      <MenuTransitions />
    </div>
  );
};

export default Menu;
