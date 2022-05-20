import { useTheme } from '../../utils/hooks';
import Button from '../../components/Button';
import AnimatedText from 'components/AnimatedText';
import './index.sass';

const Home = (): JSX.Element => {
  const { font, background } = useTheme();

  const imageURL =
    'https://images.unsplash.com/photo-1652074847108-0b4294408ca1';

  return (
    <main className="home page__container" style={{ color: font.default }}>
      <section
        style={{ backgroundColor: background.inverted }}
        className="home__imageContainer"
      >
        <img src={imageURL} alt="The FoodBot printer" />
      </section>
      <section
        style={{ backgroundColor: background.default }}
        className="home__contentContainer"
      >
        <div className="home__contentWrapper">
          <AnimatedText mount={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AnimatedText>
          <Button
            fontColor={font.inverted}
            backgroundColor={background.inverted}
          >
            Learn more
          </Button>
          <h1 className="h1--decorative">
            <AnimatedText mount={true} nth={3}>
              Sample Text
            </AnimatedText>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
