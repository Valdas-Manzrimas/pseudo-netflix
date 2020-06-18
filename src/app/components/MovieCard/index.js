import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import Title from '../Title';
import FavoriteButton from '../FavoriteButton';
import Description from '../Description';

function MovieCard({ source, title, description, id, ownClass }) {
  return (
    <div className="MovieCard" id={id} className={ownClass}>
      <Link to={`/content/items/${id}`}>
        <img src={source} alt="movie poster" />
      </Link>
      <Title level="3">{title}</Title>><Description>{description}</Description>
      <FavoriteButton movieId={id}>Favorite</FavoriteButton>
    </div>
  );
}
export default MovieCard;
