import { createStore, combineReducers } from 'redux';
import contentReducer from '../content/contentReducer';
import tokenReducer from '../content/tokenReducer';

const allReducers = combineReducers({
  content: contentReducer,
  authentication: tokenReducer,
});

const store = createStore(
  allReducers,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
