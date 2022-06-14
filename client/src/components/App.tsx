import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import ScrollDetector from './ScrollDetector';
import Navigation from './Navigation';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Gallery from 'pages/Gallery';
import Features from 'pages/Features';
import Contact from 'pages/Contact';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <ScrollDetector>
        <Navigation>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        </Navigation>
      </ScrollDetector>
    </div>
  );
};

export default App;
