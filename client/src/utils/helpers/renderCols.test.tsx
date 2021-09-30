import { render } from '../testing';
import { getAllByTestId, getByTestId } from '@testing-library/react';
import { renderCols } from './renderCols';

it('Renders a JSX element n times', () => {
  const initialState = {};
  const quantity = 5;
  const col = (i: number) => <div data-testid="col" key={'col' + i} />;

  const { container } = render(
    <div>{renderCols(col, quantity)}</div>,
    initialState,
  );
  const cols = getAllByTestId(container, 'col');

  expect(cols).toHaveLength(quantity);
});
