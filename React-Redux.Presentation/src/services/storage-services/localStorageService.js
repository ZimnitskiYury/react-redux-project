import { FAVORITES_STORAGE } from 'Services/favorites-service/favoritesService';


const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  return data
    ? JSON.parse(data)
    : undefined;
};

const addToLocalStorage = (
  key, value,
) => {
  switch (key) {
    case FAVORITES_STORAGE: {
      const data = getFromLocalStorage(key);
      localStorage.setItem(
        key,
        JSON.stringify([
          ...data,
          value,
        ]),
      ); }
      break;
    default: localStorage.setItem(
      key,
      JSON.stringify(value),
    );
      break;
  }
};

const removeFromLocalStorage = (
  key, beer,
) => {
  switch (key) {
    case FAVORITES_STORAGE: {
      const data = getFromLocalStorage();
      localStorage.setItem(
        key,
        JSON.stringify(data.filter((item) => item.id !== beer.id)),
      ); }
      break;
    default: localStorage.removeItem(key); break;
  }
};


export {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
};
