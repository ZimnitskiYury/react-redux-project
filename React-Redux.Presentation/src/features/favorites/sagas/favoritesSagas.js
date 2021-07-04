import { all, takeEvery } from '@redux-saga/core/effects';
import { addFavorite, removeFavorite } from 'Services/storageService';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/favoritesConstants';


export function* addFavoriteWorker(action) {
  yield addFavorite(action.payload);
}

export function* addFavoriteWatcher() {
  yield takeEvery(
    ADD_FAVORITE,
    addFavoriteWorker,
  );
}

export function* removeFavoriteWorker(action) {
  yield removeFavorite(action.payload);
}

export function* removeFavoriteWatcher() {
  yield takeEvery(
    REMOVE_FAVORITE,
    removeFavoriteWorker,
  );
}

export default function* favoriteSagas() {
  yield all([
    addFavoriteWatcher(),
    removeFavoriteWatcher(),
  ]);
}
