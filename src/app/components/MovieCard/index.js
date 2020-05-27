import React from 'react';
import './index.css';
import Title from '../Title';
import SmallButton from '../buttons/SmallButton';

function MovieCard({ picture, title, description }) {
  return (
    <div className="MovieCard">
      {picture}
      <Title level="3">{title}</Title>
      {description}
      <SmallButton>Favorite</SmallButton>
    </div>
  );
}
export default MovieCard;
