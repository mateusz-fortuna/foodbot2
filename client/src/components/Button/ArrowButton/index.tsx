import { CSSProperties } from 'react';
import Button from 'components/Button';
import './index.sass';

export type Direction = 'previous' | 'next';
export type Props = {
  direction: Direction;
  onClick?: () => void;
  style?: CSSProperties;
};

const ArrowButton = ({ direction, onClick, style }: Props): JSX.Element => {
  return (
    <div
      className={`arrowButton ${direction === 'next' ? 'next' : 'previous'}`}
      style={style}
    >
      <Button backgroundColor="transparent" fontColor="#fff" onClick={onClick}>
        <span />
        <span />
      </Button>
    </div>
  );
};

export default ArrowButton;
