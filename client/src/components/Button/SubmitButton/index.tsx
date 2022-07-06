/* eslint-disable @typescript-eslint/indent */
import { useGlobalState, useOrientation } from 'utils/hooks';
import Button from '..';

type Props = {
  children: string;
  isFormSubmitting: boolean;
};

const SubmitButton = ({ children, isFormSubmitting }: Props): JSX.Element => {
  const { background, font } = useGlobalState().themeReducer.THEME;
  const isLandscape = useOrientation() === 'landscape';

  const submitButtonStyle = {
    position: 'absolute',
    inset: 0,
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  } as React.CSSProperties;

  const marginTop = (
    isLandscape
      ? {
          marginTop: 0,
        }
      : undefined
  ) as React.CSSProperties | undefined;

  return (
    <Button
      backgroundColor={background.inverted}
      fontColor={font.inverted}
      style={{
        ...marginTop,
        opacity: isFormSubmitting ? 0.6 : 1,
      }}
    >
      {children}
      <input type="submit" style={submitButtonStyle} />
    </Button>
  );
};

export default SubmitButton;
