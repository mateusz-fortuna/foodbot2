import './index.sass';

type Props = {
  children: React.ReactNode;
  fontColor: string;
  backgroundColor: string;
  onClick?: () => void;
};

const Button = ({
  children,
  fontColor,
  backgroundColor,
  onClick,
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick ? () => onClick() : undefined}
      className="button"
      style={{
        color: fontColor,
        backgroundColor: backgroundColor,
        outlineColor: backgroundColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
