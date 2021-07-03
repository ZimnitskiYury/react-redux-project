import { all, takeEvery } from '@redux-saga/core/effects';
import { addFavoriteToStorage, removeFavoriteFromStorage } from 'Services/storageService';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/favoritesConstants';


export function* addFavoriteWorker(action) {
  yield addFavoriteToStorage(action.payload);
}

export function* addFavoriteWatcher() {
  yield takeEvery(
    ADD_FAVORITE,
    addFavoriteWorker,
  );
}

export function* removeFavoriteWorker(action) {
  yield removeFavoriteFromStorage(action.payload);
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
