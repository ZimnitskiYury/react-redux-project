/* eslint-disable import/no-absolute-path */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import searchResultsReducer from '/src/modules/landing-page/reducers/searchBeersReducer';
import sideBarReducer from './modules/sidebar/reducers/SideBarReducer';
import sagaWatcher from '/src/modules/landing-page/sagas/searchBeersSagas';

const rootReducer = combineReducers(
  {
    searchResults: searchResultsReducer,
    sidebar: sideBarReducer,
  },
);
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export default store;
