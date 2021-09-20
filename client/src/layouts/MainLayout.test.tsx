import { getByTestId, render } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('Main layout test', () => {
  it('Should render children', () => {
    const content = <div data-testid="content">Example content</div>;
    const { container } = render(<MainLayout>{content}</MainLayout>);

    const children = getByTestId(container, 'content');
    expect(container).toContainElement(children);
  });
});
