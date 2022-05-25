import Button from 'components/Button';
import './index.sass';

type Props = { direction: 'previous' | 'next' };

const ArrowButton = ({ direction }: Props): JSX.Element => {
  return (
    <div
      className={`arrowButton ${direction === 'next' ? 'next' : 'previous'}`}
    >
      <Button backgroundColor="transparent" fontColor="#fff">
        <span />
        <span />
      </Button>
    </div>
  );
};

export default ArrowButton;
