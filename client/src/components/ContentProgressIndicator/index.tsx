import AnimatedText, { AnimatedTextProps } from 'components/AnimatedText';

export type ContentProgressProps = { numerator: number; denominator: number };
type Props = ContentProgressProps & AnimatedTextProps;

const ContentProgressIndicator = ({
  numerator,
  denominator,
  mount,
}: Props): JSX.Element => {
  return (
    <div className="contentProgressIndicator">
      <AnimatedText mount={mount}>{`${numerator}/${denominator}`}</AnimatedText>
    </div>
  );
};

export default ContentProgressIndicator;
