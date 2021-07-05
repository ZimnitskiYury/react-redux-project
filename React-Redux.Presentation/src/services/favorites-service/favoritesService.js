import { getFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from 'Services/storage-services/localStorageService';
import { authHeader } from 'Services/auth-service/authHelper';


const FAVORITES_STORAGE = 'favoriteBeers';
const URL_FAVORITESAPI = new URL('http://localhost:5050/');

const getFavoritesFromStorage = () => getFromLocalStorage(FAVORITES_STORAGE);

async function getFavoritesFromApi() {
  const url = new URL(
    'favorites',
    URL_FAVORITESAPI,
  );

  const response = await fetch(
    url,
    {
      method: 'GET',
      headers:
        authHeader(),
    },
  );

  const favorites = await response.json();

  return favorites;
}

const addFavoriteToStorage = (beer) => {
  addToLocalStorage(
    FAVORITES_STORAGE,
    beer,
  );
};
async function addFavoriteToApi({ id }) {
  const url = new URL(
    'favorites',
    URL_FAVORITESAPI,
  );
  const headers = new Headers();
  headers.append(
    'Content-Type',
    'application/json;charset=utf-8',
  );
  headers.append(
    'Authorization',
    authHeader().Authorization,
  );
  await fetch(
    url,
    {
      method: 'POST',
      headers,
      body: id,
    },
  );
}

const removeFavoriteFromStorage = (beer) => {
  removeFromLocalStorage(
    FAVORITES_STORAGE,
    beer,
  );
};

async function removeFavoriteFromApi({ id }) {
  const url = new URL(
    'favorites',
    URL_FAVORITESAPI,
  );
  const headers = new Headers();
  headers.append(
    'Content-Type',
    'application/json;charset=utf-8',
  );
  headers.append(
    'Authorization',
    authHeader().Authorization,
  );
  await fetch(
    url,
    {
      method: 'DELETE',
      headers,
      body: id,
    },
  );
}

export {
  getFavoritesFromStorage,
  getFavoritesFromApi,
  addFavoriteToStorage,
  addFavoriteToApi,
  removeFavoriteFromStorage,
  removeFavoriteFromApi,
  FAVORITES_STORAGE,
};
