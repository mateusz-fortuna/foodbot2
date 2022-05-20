import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Navigation from './Navigation';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Gallery from 'pages/Gallery';
import Features from 'pages/Features';
import Contact from 'pages/Contact';
import Blog from 'pages/Blog';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <Navigation>
        <MainLayout>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="features" element={<Features />}></Route>
          </Routes>
          <Routes>
            <Route path="gallery" element={<Gallery />}></Route>
          </Routes>
          <Routes>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
          <Routes>
            <Route path="blog" element={<Blog />}></Route>
          </Routes>
        </MainLayout>
      </Navigation>
    </div>
  );
};

export default App;
