import LanguageButtonsWrapper from 'components/LanguageButtonsWrapper';
import MenuItem from 'components/Menu/MenuItem';
import MenuTransitions from 'components/MenuTransitions';
import { useGlobalState, usePageNames } from 'utils/hooks';
import './index.sass';

const Menu = (): JSX.Element => {
  const state = useGlobalState();
  const pageNames = usePageNames();
  const { IS_MENU_OPENED, IS_MENU_ITEM_TRANSITION } = state.menuReducer;
  const { PAGES } = state.navigationReducer;

  return (
    <div className="menu">
      <MenuTransitions />

      <ul className="menu__list">
        {IS_MENU_OPENED &&
          PAGES.map((name, index) => {
            return (
              <MenuItem
                pageName={pageNames[index]}
                page={name}
                mount={IS_MENU_ITEM_TRANSITION}
                key={index}
              />
            );
          })}
      </ul>

      <LanguageButtonsWrapper mount={IS_MENU_ITEM_TRANSITION} />
    </div>
  );
};

export default Menu;
