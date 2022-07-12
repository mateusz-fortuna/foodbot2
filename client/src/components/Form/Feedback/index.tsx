import { Status } from 'components/FormContainer';
import ThankYou from './ThankYou';
import TryAgain from './TryAgain';

type Props = {
  status: Status;
};

const Feedback = ({ status }: Props): JSX.Element => (
  <div className="feedback">
    {status === 'error' && <TryAgain />}
    {status === 'success' && <ThankYou />}
  </div>
);

export default Feedback;
