/* eslint-disable import/no-absolute-path */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import searchResultsReducer from '/src/modules/landing-page/reducers/searchBeersReducer';
import sideBarReducer from '/src/modules/sidebar/reducers/sideBarReducer';
import favoritesReducer from '/src/modules/favorites-page/reducers/favoritesReducer';

import sagaWatcher from '/src/modules/landing-page/sagas/searchBeersSagas';

const rootReducer = combineReducers(
  {
    searchResults: searchResultsReducer,
    sidebar: sideBarReducer,
    favoritesStore: favoritesReducer,
  },
);
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export default store;
