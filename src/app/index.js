import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import ImageScreen from './components/ImageScreen';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import Login from './pages/Login';

// import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      data: [],
      favorites: [],
      // kai mygtukas paspaustas id eina i favorites
      // if pressed --> mygtuko stilius pakeicia
    };
  }
  componentDidMount() {
    this.data = fetch(
      'https://academy-video-api.herokuapp.com/content/free-items',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch(console.log);
  }

  addFavorite(event) {
    let movieCardId = event.target.parentNode.id;
    // this.setState({ favorites: this.state.favorites.push(movieCardId) });
    // console.log(this.state.favorites);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <ImageScreen />
              <MainContent>
                {this.state.data.map((item) => {
                  return (
                    this.state.data.length > 0 && (
                      <MovieCard
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        source={item.image}
                        onClick={this.addFavorite}
                      />
                    )
                  );
                })}
              </MainContent>
            </Route>
            <Route exact path="/login">
              <MainContent>
                <Login />
              </MainContent>
            </Route>
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
