import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';

import ImageScreen from '../components/ImageScreen';
import MovieCard from '../components/MovieCard';
import MainContent from '../components/MainContent';

export function Home() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const dataAPI = useCallback(async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/free-items',
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

  console.log('here', data);
  return (
    <div className="Home">
      <ImageScreen />
      <MainContent>
        {data.map((item) => {
          return (
            <MovieCard
              id={item.id}
              title={item.title}
              description={item.description}
              source={item.image}
            />
          );
        })}
      </MainContent>
    </div>
  );
}

export default Home;
