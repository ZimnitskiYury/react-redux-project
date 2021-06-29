import { all, takeEvery } from '@redux-saga/core/effects';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../constants/favoritesConstants';


const getLocalStorage = () => {
  const data = localStorage.getItem('favoriteBeers');

  return data
    ? JSON.parse(data)
    : [];
};

const addToLocalStorage = (beer) => {
  const data = getLocalStorage();
  localStorage.setItem(
    'favoriteBeers',
    JSON.stringify([
      ...data,
      beer,
    ]),
  );
};

const removeFromLocalStorage = (beer) => {
  const data = getLocalStorage();
  localStorage.setItem(
    'favoriteBeers',
    JSON.stringify(data.filter((item) => item.id !== beer.id)),
  );
};

export function* addFavoriteWorker(action) {
  yield addToLocalStorage(action.payload);
}

export function* addFavoriteWatcher() {
  yield takeEvery(
    ADD_FAVORITE,
    addFavoriteWorker,
  );
}

export function* removeFavoriteWorker(action) {
  yield removeFromLocalStorage(action.payload);
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
