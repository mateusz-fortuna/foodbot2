import './index.sass';

export type ButtonTheme = {
  fontColor: string;
  backgroundColor: string;
};
type Props = ButtonTheme & {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  fontColor,
  backgroundColor,
  onClick,
  type,
}: Props): JSX.Element => {
  return (
    <button
      type={type ? type : 'button'}
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
