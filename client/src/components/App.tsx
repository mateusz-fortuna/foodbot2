import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import './styles.sass';

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
