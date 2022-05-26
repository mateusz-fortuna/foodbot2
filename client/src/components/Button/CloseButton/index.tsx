import Button from 'components/Button';
import './index.sass';

type Props = {
  onClick: () => void;
};

const CloseButton = ({ onClick }: Props): JSX.Element => {
  return (
    <div className="closeButton">
      <Button onClick={onClick} backgroundColor="inherit" fontColor="inherit">
        <span />
        <span />
      </Button>
    </div>
  );
};

export default CloseButton;
