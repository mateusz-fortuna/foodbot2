import { getByTestId, render } from '@testing-library/react';
import AnimatedText from '.';

describe('Testing multiline text component', () => {
  it('Should render 4 span elements', () => {
    const text = 'the quick\nbrown fox\njumps over\nthe lazy dog';
    const { container } = render(<AnimatedText mount>{text}</AnimatedText>);

    const component = getByTestId(container, 'text__wrapper');
    expect(component.children).toHaveLength(4);
  });
});
