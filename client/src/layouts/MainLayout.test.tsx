import { getByTestId } from '@testing-library/react';
import { render } from '../utils/testing';
import MainLayout from './MainLayout';

describe('Main layout test', () => {
  it('Should render children', () => {
    const initialState = {};

    const content = <div data-testid="content">Example content</div>;
    const { container } = render(
      <MainLayout>{content}</MainLayout>,
      initialState,
    );

    const children = getByTestId(container, 'content');
    expect(container).toContainElement(children);
  });
});
