import React from 'react';
import './index.scss';

function MovieCardImage({ source }) {
  return (
    <div className="MovieCardImage">
      <img src={source} alt="movie poster" />
    </div>
  );
}
export default MovieCardImage;
