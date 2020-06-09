import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './state';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import MainContent from './components/MainContent';
//pages
import Home from './pages/Home';
import Login from './pages/Login';
import UserContent from './pages/UserContent';
import SingleCardPage from './pages/SingleCardPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
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
              <PrivateRoute exact path="/content/items/:id">
                <SingleCardPage />
              </PrivateRoute>
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
        </Provider>
      </div>
    );
  }
}

export default App;
