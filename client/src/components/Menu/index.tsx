import MenuItem from 'components/MenuItem';
import MenuTransitions from 'components/MenuTransitions';
import { useMenuState, useNavigation } from 'utils/hooks';
import './index.sass';

const Menu = (): JSX.Element => {
  const { IS_MENU_OPENED, IS_MENU_ITEM_TRANSITION } = useMenuState();
  const { PAGES } = useNavigation();

  return (
    <div className="menu">
      <MenuTransitions />

      <ul className="menu__list">
        {IS_MENU_OPENED &&
          PAGES.map((name, index) => {
            const pageName = index === 0 ? 'home' : name;
            return (
              <MenuItem
                pageName={pageName}
                page={name}
                mount={IS_MENU_ITEM_TRANSITION}
                key={index}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
