import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';

import { useParams } from 'react-router-dom';

import MainContent from '../../components/MainContent';
import MovieCard from '../../components/MovieCard';

export function SingleCardPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const moviePage = useCallback(async () => {
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        authorization: localStorage.getItem('token'),
      }
    );

    if (!response.ok) {
      console.log(response);
      throw response.json();
    }

    setData(await response.json());
  }, [id, setData]);

  useEffect(() => {
    moviePage();
  }, [moviePage]);

  return (
    <MainContent>
      {!!data && (
        <MovieCard
          ownClass="singleMoviePage"
          id={data.id}
          title={data.title}
          description={data.description}
          source={data.image}
        />
      )}
    </MainContent>
  );
}

export default SingleCardPage;
