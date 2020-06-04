import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Login from './pages/Login';
import UserContent from './pages/UserContent';
// import SingleCardPage from './pages/SingleCardPage';

// import Button from './components/Button';

class App extends React.Component {
  // const {isLoading, setIsLoading} = useState(false)

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <MainContent>
                <Login />
              </MainContent>
            </Route>
            <PrivateRoute exact path="/content/items">
              <UserContent />
            </PrivateRoute>
            {/* <PrivateRoute exact path="/content/items/:itemId">
              <SingleCardPage />
            </PrivateRoute> */}
            <Redirect
              exact
              from="/"
              to={localStorage.getItem('token' ? '/content' : '/home')}
            />
          </Switch>
          <Footer>
            We care about your entertainment. Copyright © 2019–2020 felix.com
          </Footer>
        </Router>
      </div>
    );
  }
}

export default App;
