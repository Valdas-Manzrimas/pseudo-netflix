import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';

import MainContent from '../components/MainContent';
import MovieCard from '../components/MovieCard';

export function UserContent() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const dataAPI = useCallback(async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (response.ok) {
      setData(await response.json());
    }
  }, [setData]);

  useEffect(() => {
    dataAPI();
  }, [dataAPI]);

  const toogleFavorite = (event) => {
    let movieCardId = event.target.parentNode.id;
    if (favorites.includes(movieCardId)) {
      setFavorites(favorites.filter((event) => event !== movieCardId));
    } else {
      setFavorites(favorites.concat(movieCardId));
    }
    console.log(favorites);
  };

  return (
    <React.Fragment>
      <MainContent>
        {data.map((item) => {
          return (
            <MovieCard
              id={item.id}
              title={item.title}
              description={item.description}
              source={item.image}
              onClick={toogleFavorite}
            />
          );
        })}
      </MainContent>
    </React.Fragment>
  );
}

export default UserContent;
