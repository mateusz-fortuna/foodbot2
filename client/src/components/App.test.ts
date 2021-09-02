import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('Should renders properly', () => {
    const { container } = render(App());
    const component = container.querySelector('.App');
    expect(component).not.toBeNull();
  });
});
