import MenuItem from 'components/Menu/MenuItem';
import MenuTransitions from 'components/MenuTransitions';
import { useGlobalState } from 'utils/hooks';
import './index.sass';

const Menu = (): JSX.Element => {
  const state = useGlobalState();
  const { IS_MENU_OPENED, IS_MENU_ITEM_TRANSITION } = state.menuReducer;
  const { PAGES } = state.navigationReducer;

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
