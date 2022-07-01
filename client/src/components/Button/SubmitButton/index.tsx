import { useGlobalState, useOrientation } from 'utils/hooks';
import Button from '..';

type Props = {
  children: string;
};

const SubmitButton = ({ children }: Props): JSX.Element => {
  const { background, font } = useGlobalState().themeReducer.THEME;
  const isLandscape = useOrientation() === 'landscape';

  const submitButtonStyle = {
    position: 'absolute',
    inset: 0,
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  } as React.CSSProperties;

  return (
    <Button
      backgroundColor={background.inverted}
      fontColor={font.inverted}
      style={isLandscape ? undefined : { marginTop: 0 }}
    >
      {children}
      <input type="submit" style={submitButtonStyle} />
    </Button>
  );
};

export default SubmitButton;
