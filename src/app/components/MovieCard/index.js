import React from 'react';
import { Redirect } from 'react-router-dom';
import './index.scss';

import Title from '../Title';
import FavoriteButton from '../FavoriteButton';
import MovieCardImage from '../MovieCardImage';
import Description from '../Description';

function MovieCard({ source, title, description, id }) {
  const singleCardPage = (e) => {
    e.preventDefault();
    console.log('here');
    return <Redirect to={`/content/items/${id}`} />;
  };

  return (
    <div className="MovieCard" id={id}>
      <MovieCardImage source={source} onClick={singleCardPage} />
      <Title level="3" onClick={singleCardPage}>
        {title}
      </Title>
      ><Description onClick={singleCardPage}>{description}</Description>
      <FavoriteButton movieId={id}>Favorite</FavoriteButton>
    </div>
  );
}
export default MovieCard;
