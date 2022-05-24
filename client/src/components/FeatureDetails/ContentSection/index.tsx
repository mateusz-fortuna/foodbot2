import AnimatedText from 'components/AnimatedText';

type Props = {
  title: string;
  description: string;
};

const ContentSection = ({ title, description }: Props): JSX.Element => (
  <div className="features__details_contentSection">
    <h1>
      <AnimatedText mount nth={0}>
        {title}
      </AnimatedText>
    </h1>
    <AnimatedText mount nth={1}>
      {description}
    </AnimatedText>
  </div>
);

export default ContentSection;
