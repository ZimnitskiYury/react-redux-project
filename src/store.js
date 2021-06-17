import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import searchResultsReducer from './modules/search-beers/reducers/SearchBeersReducer';
import sagaWatcher from './modules/search-beers/sagas/SearchBeersSagas';

const rootReducer = combineReducers(
  { searchResults: searchResultsReducer },
);
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export default store;
