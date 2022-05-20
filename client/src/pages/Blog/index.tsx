import AnimatedText from 'components/AnimatedText';
import './index.sass';

const Blog = (): JSX.Element => {
  return (
    <div className="blog">
      <h1>
        <AnimatedText mount>Blog</AnimatedText>
      </h1>
    </div>
  );
};

export default Blog;
