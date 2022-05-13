//import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path=""
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
