import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from '@redux-saga/core/effects';

import searchResultsReducer from 'modules/landing-page/reducers/searchBeersReducer';
import searchSagas from 'modules/landing-page/sagas/searchBeersSagas';
import favoritesReducer from 'features/favorites/reducers/favoritesReducer';
import favoriteSagas from 'features/favorites/sagas/favoritesSagas';
import authSagas from 'features/authorization/sagas/authSagas';
import authReducer from 'features/authorization/reducers/authReducer';
import { getUser } from 'services/auth-service/authHelper';


const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
  favoritesStore: favoritesReducer,
  auth: authReducer,
});
const authFromLocal = getUser();
const initialState = {
  searchResults: {
    beers: [],
  },
  favoritesStore: {
    favorites: [],
  },
  auth: {
    user: authFromLocal || undefined,
    isLogged: !!authFromLocal || false,
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
