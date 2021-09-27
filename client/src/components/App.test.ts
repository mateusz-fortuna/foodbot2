import { render } from '../utils/testing';
import App from './App';

describe('App component', () => {
  it('Should renders properly', () => {
    const initialState = {};
    const { container } = render(App(), initialState);
    const component = container.querySelector('.App');
    expect(component).not.toBeNull();
  });
});
