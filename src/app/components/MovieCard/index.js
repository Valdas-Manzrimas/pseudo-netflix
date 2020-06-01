import React from 'react';
import './index.scss';
import Title from '../Title';
import Button from '../Button';
import MovieCardImage from '../MovieCardImage';
import Description from '../Description';

function MovieCard({ source, title, description, onClick, id }) {
  return (
    <div className="MovieCard" id={id}>
      <MovieCardImage source={source} />
      <Title level="3">{title}</Title>
      <Description>{description}</Description>
      <Button size="small" onClick={onClick}>
        Favorite
      </Button>
    </div>
  );
}
export default MovieCard;
