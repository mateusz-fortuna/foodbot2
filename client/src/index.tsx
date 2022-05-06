import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './redux/store';
import './styles.sass';

const persistor = persistStore(store);

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
