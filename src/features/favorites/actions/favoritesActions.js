import { ADD_FAVORITE, REMOVE_FAVORITE } from 'Features/favorites/constants/favoritesConstants';


export function addFavorite(beer) {
  return {
    type: ADD_FAVORITE,
    payload: beer,
  };
}

export function removeFavorite(beer) {
  return {
    type: REMOVE_FAVORITE,
    payload: beer,
  };
}

export default { addFavorite, removeFavorite };
