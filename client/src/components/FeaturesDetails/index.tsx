import { useTheme } from 'utils/hooks';
import './index.sass';

const FeaturesDetails = (): JSX.Element => {
  const { background, font } = useTheme();

  return (
    <div
      className="features__details"
      style={{ backgroundColor: background.default, color: font.default }}
    >
      {' '}
    </div>
  );
};

export default FeaturesDetails;
