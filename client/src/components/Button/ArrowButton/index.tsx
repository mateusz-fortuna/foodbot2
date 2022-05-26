import Button from 'components/Button';
import './index.sass';

export type Props = { direction: 'previous' | 'next'; onClick?: () => void };

const ArrowButton = ({ direction, onClick }: Props): JSX.Element => {
  return (
    <div
      className={`arrowButton ${direction === 'next' ? 'next' : 'previous'}`}
    >
      <Button backgroundColor="transparent" fontColor="#fff" onClick={onClick}>
        <span />
        <span />
      </Button>
    </div>
  );
};

export default ArrowButton;
