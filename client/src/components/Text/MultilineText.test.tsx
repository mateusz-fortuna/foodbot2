import { getByTestId, render } from '@testing-library/react';
import MultilineText from './MultilineText';

describe('Testing multiline text component', () => {
  it('Should render 4 span elements', () => {
    const text = 'the quick\nbrown fox\njumps over\nthe lazy dog';
    const { container } = render(<MultilineText>{text}</MultilineText>);

    const component = getByTestId(container, 'multilineText');
    expect(component.children).toHaveLength(4);
  });
});
