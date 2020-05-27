import React from 'react';
import './index.scss';

import Header from './components/Header';
import ImageScreen from './components/ImageScreen';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import MovieCardImage from './components/MovieCardImage';

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

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <ImageScreen />
        <MainContent>
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[0].title}
              description={this.state.data[0].description}
              source={this.state.data[0].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[1].title}
              description={this.state.data[1].description}
              source={this.state.data[1].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[2].title}
              description={this.state.data[2].description}
              source={this.state.data[2].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[3].title}
              description={this.state.data[3].description}
              source={this.state.data[3].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[4].title}
              description={this.state.data[4].description}
              source={this.state.data[4].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[5].title}
              description={this.state.data[5].description}
              source={this.state.data[5].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[6].title}
              description={this.state.data[6].description}
              source={this.state.data[6].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[7].title}
              description={this.state.data[7].description}
              source={this.state.data[7].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[8].title}
              description={this.state.data[8].description}
              source={this.state.data[8].image}
            />
          )}
          {this.state.data.length > 0 && (
            <MovieCard
              title={this.state.data[9].title}
              description={this.state.data[9].description}
              source={this.state.data[9].image}
            />
          )}
        </MainContent>
        <Footer>
          We care about your entertainment. Copyright © 2019–2020 felix.com
        </Footer>
      </div>
    );
  }
}

export default App;
