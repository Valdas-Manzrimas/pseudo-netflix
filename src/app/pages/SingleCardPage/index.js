import React, { useState, useCallback, useEffect } from 'react';
import './index.scss';

import { useHistory, useLocation, useParams } from 'react-router-dom';

import MainContent from '../../components/MainContent';
import MovieCard from '../../components/MovieCard';

// const history = useHistory();
// const location = useLocation();

export function SingleCardPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const moviePage = useCallback(async () => {
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${id}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(data);
    if (response.ok) {
      setData(await response.json());
    }
  }, [setData]);

  useEffect(() => {
    moviePage();
  }, [moviePage]);

  return (
    <React.Fragment>
      <MainContent>
        {/* {data.map((item) => {
          return ( */}
        <MovieCard
          id={data.id}
          title={data.title}
          description={data.description}
          source={data.image}
          // onClick={toogleFavorite}
        />
        {/* ); */}
        })
      </MainContent>
    </React.Fragment>
  );
}

export default SingleCardPage;
