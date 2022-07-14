import AnimatedText from 'components/AnimatedText';
import './index.sass';

type Props = {
  email: string;
  color: string;
  nth?: number;
};

const MailTo = ({ email, color, nth = 0 }: Props): JSX.Element => {
  return (
    <div className="mailTo">
      <a href={`mailto:${email}`} style={{ color: color }}>
        <AnimatedText nth={nth}>{email}</AnimatedText>
      </a>
    </div>
  );
};

export default MailTo;
