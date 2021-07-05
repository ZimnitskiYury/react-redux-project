import { ADD_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE } from 'Features/favorites/constants/favoritesConstants';


function initFavorites() {
  return {
    type: INIT_FAVORITES,
  };
}

function addFavorite(beer) {
  return {
    type: ADD_FAVORITE,
    payload: beer,
  };
}

function removeFavorite(beer) {
  return {
    type: REMOVE_FAVORITE,
    payload: beer,
  };
}

export {
  initFavorites,
  addFavorite,
  removeFavorite,
};
