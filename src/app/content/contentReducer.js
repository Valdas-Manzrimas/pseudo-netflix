import * as actionTypes from './actionTypes';

const DEFAULT_CONTENT_STATE = {
  favorites: [],
  movies: [], //kai ateinam tiesiai i sita puslapi, pridedam i sita sarasa
};

const addFavorite = (state, action) => ({
  ...state,
  favorites: [...state.favorites, action.id],
});
const removeFavorite = (state, action) => ({
  ...state,
  favorites: state.favorites.filter((id) => id !== action.id),
});

function contentReducer(state = DEFAULT_CONTENT_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return !state.favorites.includes(action.id)
        ? addFavorite(state, action)
        : removeFavorite(state, action);

    case actionTypes.REMOVE_FAVORITE:
      return removeFavorite(state, action);

    case actionTypes.ADD_FAVORITE:
      return addFavorite(state.action);

    default:
      return state;
  }
}

export default contentReducer;
