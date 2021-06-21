import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import searchResultsReducer from 'Modules/landing-page/reducers/searchBeersReducer';
import sideBarReducer from 'Modules/sidebar/reducers/sideBarReducer';
import favoritesReducer from 'Modules/favorites-page/reducers/favoritesReducer';
import { sagaWatcher } from 'Modules/landing-page/sagas/searchBeersSagas';

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
