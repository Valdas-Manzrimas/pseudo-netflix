const DEFAULT_TOKEN_STATE = {
  token: localStorage.getItem('token'),
};

function tokenReducer(state = DEFAULT_TOKEN_STATE, action) {
  switch (action.type) {
    case 'SET_TOKEN': {
      console.log(action);
      return { ...state, token: action.token };
    }
  }

  return state;
}

export default tokenReducer;
