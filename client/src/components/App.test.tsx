import { render } from '../utils/testing';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

describe('App component', () => {
  it('Should renders properly', () => {
    const history = createMemoryHistory();
    const initialState = {};

    const { container } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
      initialState,
    );
    const component = container.querySelector('.App');
    expect(component).not.toBeNull();
  });
});
