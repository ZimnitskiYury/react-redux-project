import { getFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from 'Services/storage-services/localStorageService';


const FAVORITES_STORAGE = 'favoriteBeers';

const getFavorites = () => getFromLocalStorage(FAVORITES_STORAGE);

const addFavorite = (beer) => {
  addToLocalStorage(
    FAVORITES_STORAGE,
    beer,
  );
};

const removeFavorite = (beer) => {
  removeFromLocalStorage(
    FAVORITES_STORAGE,
    beer,
  );
};

export {
  getFavorites,
  addFavorite,
  removeFavorite,
  FAVORITES_STORAGE,
};
