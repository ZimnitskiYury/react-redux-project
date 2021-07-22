import { getFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from 'Services/storage-services/localStorageService';


const getFavoritesFromStorage = () => {
  getFromLocalStorage();
};

const addFavoriteToStorage = (beer) => {
  addToLocalStorage(beer);
};

const removeFavoriteFromStorage = (beer) => {
  removeFromLocalStorage(beer);
};

export {
  getFavoritesFromStorage,
  addFavoriteToStorage,
  removeFavoriteFromStorage,
};
