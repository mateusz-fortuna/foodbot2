import { useDispatch } from 'react-redux';
import { toggleMenuOpened } from 'features/menu/menuSlice';
import Button from 'components/Button';
import './index.sass';

const MenuButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const toggleMenu = () => dispatch(toggleMenuOpened());

  return (
    <div className="menu__button">
      <Button
        fontColor="#fff"
        backgroundColor="transparent"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </Button>
    </div>
  );
};

export default MenuButton;
