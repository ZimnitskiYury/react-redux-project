import { getFromLocalStorage, addToLocalStorage, removeFromLocalStorage } from 'services/storage-services/localStorageService';
import { authHeader } from 'services/auth-service/authHelper';
import { getDataByParams } from 'services/beer-service/punkService';


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
  let favoritesId = [];

  if (response.status === 200) {
    const data = await response.json();
    favoritesId = data.map((x) => x.beerId);
  }

  if (!favoritesId.length) {
    return favoritesId;
  }

  const params = new Map();
  params.set(
    'ids',
    favoritesId.join('|'),
  );
  const favorites = await getDataByParams(params);

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
