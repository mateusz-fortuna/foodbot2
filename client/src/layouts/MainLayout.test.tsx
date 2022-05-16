import { getByTestId } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { render } from '../utils/testing';
import MainLayout from './MainLayout';

describe('Main layout test', () => {
  it('Should render children', () => {
    const history = createMemoryHistory();
    const initialState = {};

    const content = <div data-testid="content">Example content</div>;
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <MainLayout>{content}</MainLayout>{' '}
      </Router>,
      initialState,
    );

    const children = getByTestId(container, 'content');
    expect(container).toContainElement(children);
  });
});
