import { getByTestId, render } from '@testing-library/react';
import AnimatedText from '.';

describe('Testing multiline text component', () => {
  it('Should split text to spans after 65 characters', () => {
    const text =
      'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.';
    const { container } = render(<AnimatedText mount>{text}</AnimatedText>);

    const component = getByTestId(container, 'text__container');
    expect(component.children[0].children).toHaveLength(2);
  });
});
