import Button from 'components/Button';
import './index.sass';

type Props = {
  onClick: () => void;
  style?: React.CSSProperties;
};

const CircleButton = ({ style, onClick }: Props): JSX.Element => {
  return (
    <div className="circleButton" style={style ? style : undefined}>
      <Button onClick={onClick} backgroundColor="transparent" fontColor="#fff">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      </Button>
    </div>
  );
};

export default CircleButton;
