import React from 'react';
import './index.scss';
import { connect } from 'react-redux';

function FavoriteButton({ movieId, favorites, toggleFavorite }) {
  const onClick = () => toggleFavorite(movieId);

  return (
    <button className="FavoriteButton" onClick={onClick}>
      {!!favorites && favorites.includes(movieId) ? 'Remove 💔' : 'Favorite'}
    </button>
  );
}

function mapStateToProps({ favorites }) {
  return {
    favorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: 'TOGGLE_FAVORITE', id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
