//import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
