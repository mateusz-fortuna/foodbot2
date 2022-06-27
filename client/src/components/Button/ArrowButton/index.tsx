import { CSSProperties } from 'react';
import Button from 'components/Button';
import './index.sass';

export type Props = {
  direction: 'previous' | 'next';
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
