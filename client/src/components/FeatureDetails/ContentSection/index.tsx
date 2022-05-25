import AnimatedText from 'components/AnimatedText';

type Props = {
  mount: boolean;
  nth: number;
  title: string;
  description: string;
};

const ContentSection = ({
  mount,
  nth,
  title,
  description,
}: Props): JSX.Element => (
  <div className="features__details_contentSection">
    <h1>
      <AnimatedText mount={mount} nth={nth}>
        {title}
      </AnimatedText>
    </h1>
    <AnimatedText mount={mount} nth={nth + 1}>
      {description}
    </AnimatedText>
  </div>
);

export default ContentSection;
