import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Navigation from './Navigation';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <Navigation>
        <MainLayout>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
        </MainLayout>
      </Navigation>
    </div>
  );
};

export default App;
