import CircleButton from 'components/CircleButton';
import FeaturesDetails from 'components/FeaturesDetails';
import { useState } from 'react';
import { useContent, useTheme } from 'utils/hooks';
import { core } from './core';
import './index.sass';

const Features = (): JSX.Element => {
  const { background } = useTheme();
  const features = useContent().features.map((content, index) => ({
    ...content,
    ...core[index],
  }));
  const [currentFeature, setCurrentFeature] = useState<string | null>(null);
  const imageURL =
    'https://images.unsplash.com/photo-1652074847108-0b4294408ca1';

  console.log(currentFeature);

  return (
    <div
      className="features page__container"
      style={{ backgroundColor: background.inverted }}
    >
      <div className="features__imageContainer">
        <img src={imageURL} alt="lorem ipsum" />
        {features.map(({ id, buttonPosX, buttonPosY }) => (
          <CircleButton
            key={id}
            onClick={() => setCurrentFeature(id)}
            style={{
              top: buttonPosY + '%',
              left: buttonPosX + '%',
            }}
          />
        ))}
      </div>

      {currentFeature && <FeaturesDetails />}
    </div>
  );
};

export default Features;
