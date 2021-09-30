type Col = (i: number) => JSX.Element;

export const renderCols = (col: Col, quantity: number): JSX.Element[] => {
  const cols: JSX.Element[] = [];
  for (let i = 0; i < quantity; i++) {
    cols.push(col(i));
  }
  return cols;
};
