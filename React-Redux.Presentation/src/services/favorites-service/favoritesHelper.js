import { getDataById } from 'Services/beer-service/punkService';
import { addFavoriteToApi, getFavoritesFromApi, removeFavoriteFromApi } from './favoritesService';


const addFavorite = (beer) => addFavoriteToApi(beer);

async function getFavorites() {
  const response = await getFavoritesFromApi();
  const promises = [];
  for (let i = 0; i < response.length; i++) {
    promises.push(getDataById(response[i].beerId));
  }
  const data = Promise.all(promises)
    .then((responses) => responses.map((resp) => resp[0]));

  return data;
}

const removeFavorite = (beer) => removeFavoriteFromApi(beer);

export {
  addFavorite,
  getFavorites,
  removeFavorite,
};
