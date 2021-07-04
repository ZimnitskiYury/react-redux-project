import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from '@redux-saga/core/effects';

import searchResultsReducer from 'Modules/landing-page/reducers/searchBeersReducer';
import favoritesReducer from 'Features/favorites/reducers/favoritesReducer';
import searchSagas from 'Modules/landing-page/sagas/searchBeersSagas';
import favoriteSagas from 'Features/favorites/sagas/favoritesSagas';
import authSagas from 'Features/authorization/sagas/authSagas';
import authReducer from 'Features/authorization/reducers/authReducer';


const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  favoritesStore: favoritesReducer,
  auth: authReducer,
});

const favoritesFromLocal = JSON.parse(localStorage.getItem('favoriteBeers'));

const initialState = {
  searchResults: {
    beers: [],
  },
  favoritesStore: {
    favorites: favoritesFromLocal || [],
  },
};

const rootSagas = function* rootSagas() {
  yield all([
    searchSagas(),
    favoriteSagas(),
    authSagas(),
  ]);
};

const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(rootSagas);

export default store;
