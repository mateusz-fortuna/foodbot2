import { useGlobalState } from '../../utils/hooks';
import AnimatedText from 'components/AnimatedText';
import NavigationButton from 'components/Button/NavigationButton';
import './index.sass';

const Home = (): JSX.Element => {
  const state = useGlobalState();
  const { font, background } = state.themeReducer.THEME;
  const { title, description, button, imgUrl } =
    state.languageReducer.CONTENT.home;

  return (
    <main className="home page__container" style={{ color: font.default }}>
      <section
        style={{ backgroundColor: background.inverted }}
        className="home__imageContainer"
      >
        <img src={imgUrl} alt="The FoodBot printer" />
      </section>
      <section
        style={{ backgroundColor: background.default }}
        className="home__contentContainer"
      >
        <div className="home__contentWrapper">
          <AnimatedText mount={true}>{description}</AnimatedText>
          <NavigationButton
            page="features"
            fontColor={font.inverted}
            backgroundColor={background.inverted}
          >
            {button}
          </NavigationButton>

          <h1 className="h1--decorative">
            <AnimatedText mount={true} nth={3}>
              {title}
            </AnimatedText>
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
