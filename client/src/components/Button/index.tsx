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
}: Props): JSX.Element => {
  return (
    <button
      type="button"
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
