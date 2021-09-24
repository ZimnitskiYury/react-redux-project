import { addFavoriteToApi, getFavoritesFromApi, removeFavoriteFromApi } from './favoritesService';


const addFavorite = (beer) => addFavoriteToApi(beer);

const getFavorites = () => getFavoritesFromApi();

const removeFavorite = (beer) => removeFavoriteFromApi(beer);

export {
  addFavorite,
  getFavorites,
  removeFavorite,
};
