import { useTheme } from '../../utils/hooks/useTheme';
import './index.sass';

const Home = (): JSX.Element => {
  const { font, background } = useTheme();
  const imageURL =
    'https://images.unsplash.com/photo-1652074847108-0b4294408ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80';

  return (
    <main className="home" style={{ color: font.default }}>
      <section
        style={{ backgroundColor: background.transition }}
        className="home__imageContainer"
      >
        <img src={imageURL} alt="" />
      </section>
      <section>
        <p>FoodBot</p>
      </section>
    </main>
  );
};

export default Home;
