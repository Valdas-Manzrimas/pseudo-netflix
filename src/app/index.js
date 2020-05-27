import React from 'react';
import './index.scss';

import Header from './components/Header';
import ImageScreen from './components/ImageScreen';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import Title from './components/Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      data: [],
    };
  }
  componentDidMount() {
    let movies = fetch(
      'https://academy-video-api.herokuapp.com/content/free-items',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.setState({ movies: data });
      })

      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ImageScreen />
        <MainContent>
          <MovieCard>
            <Title></Title>
          </MovieCard>
        </MainContent>
        <Footer>
          We care about your entertainment. Copyright © 2019–2020 felix.com
        </Footer>
      </div>
    );
  }
}

export default App;
