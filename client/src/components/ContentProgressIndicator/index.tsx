import AnimatedText, { AnimatedTextProps } from 'components/AnimatedText';
import './index.sass';

export type ContentProgressProps = { numerator: number; denominator: number };
type Props = ContentProgressProps & AnimatedTextProps;

const ContentProgressIndicator = ({
  numerator,
  denominator,
  mount,
}: Props): JSX.Element => (
  <div className="contentProgressIndicator">
    <AnimatedText mount={mount}>{`${numerator}`}</AnimatedText>
    <span>{`/${denominator}`}</span>
  </div>
);

export default ContentProgressIndicator;
