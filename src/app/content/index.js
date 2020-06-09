const DEFAULT_CONTENT_STATE = {
  favorites: ['ee9499-Spider-Man:-14b56c'],
};

function contentReducer(state = DEFAULT_CONTENT_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      if (!state.favorites.includes(action.id)) {
        return { ...state, favorites: [...state.favorites, action.id] };
      } else {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.id),
        };
      }
    }
  }

  return state;
}

export default contentReducer;
