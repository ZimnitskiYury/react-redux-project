import { all, takeEvery, put } from '@redux-saga/core/effects';

import {
  ADD_FAVORITE, UPDATE_FAVORITES, REMOVE_FAVORITE, INIT_FAVORITES,
} from 'features/favorites/constants/favoritesConstants';
import { addFavorite, getFavorites, removeFavorite } from 'services/favorites-service/favoritesHelper';


function* initFavoriteWorker() {
  const payload = yield getFavorites();
  yield put({
    type: UPDATE_FAVORITES,
    payload,
  });
}

function* initFavoriteWatcher() {
  yield takeEvery(
    INIT_FAVORITES,
    initFavoriteWorker,
  );
}
function* addFavoriteWorker(action) {
  yield addFavorite(action.payload);
  const payload = yield getFavorites();
  yield put({
    type: UPDATE_FAVORITES,
    payload,
  });
}

function* addFavoriteWatcher() {
  yield takeEvery(
    ADD_FAVORITE,
    addFavoriteWorker,
  );
}

function* removeFavoriteWorker(action) {
  yield removeFavorite(action.payload);
  const payload = yield getFavorites();
  yield put({
    type: UPDATE_FAVORITES,
    payload,
  });
}

function* removeFavoriteWatcher() {
  yield takeEvery(
    REMOVE_FAVORITE,
    removeFavoriteWorker,
  );
}

export default function* favoriteSagas() {
  yield all([
    initFavoriteWatcher(),
    addFavoriteWatcher(),
    removeFavoriteWatcher(),
  ]);
}
