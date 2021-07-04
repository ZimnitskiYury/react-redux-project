import { getFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from 'Services/storage-services/localStorageService';


const getFavorites = () => {
  getFromLocalStorage('favoriteBeers');
};

const addFavorite = (beer) => {
  addToLocalStorage(
    'favoriteBeers',
    beer,
  );
};

const removeFavorite = (beer) => {
  removeFromLocalStorage(
    'favoriteBeers',
    beer,
  );
};

export {
  getFavorites,
  addFavorite,
  removeFavorite,
};
