import {
  ADD_FAVORITE, CLEAR_FAVORITE, INIT_FAVORITES, REMOVE_FAVORITE,
} from 'features/favorites/constants/favoritesConstants';


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
function clearFavorites() {
  return {
    type: CLEAR_FAVORITE,
  };
}
export {
  initFavorites,
  addFavorite,
  removeFavorite,
  clearFavorites,
};
