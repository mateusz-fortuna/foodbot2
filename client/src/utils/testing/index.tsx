import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../../redux/rootReducer';

const render = (
  ui: JSX.Element,
  { store = configureStore({ reducer: rootReducer }), ...renderOptions },
) => {
  const Wrapper: React.FC = ({ children }): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
