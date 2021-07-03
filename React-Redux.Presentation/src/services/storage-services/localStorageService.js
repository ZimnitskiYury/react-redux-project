const getFromLocalStorage = () => {
  const data = localStorage.getItem('favoriteBeers');

  return data
    ? JSON.parse(data)
    : [];
};

const addToLocalStorage = (beer) => {
  const data = getFromLocalStorage();
  localStorage.setItem(
    'favoriteBeers',
    JSON.stringify([
      ...data,
      beer,
    ]),
  );
};

const removeFromLocalStorage = (beer) => {
  const data = getFromLocalStorage();
  localStorage.setItem(
    'favoriteBeers',
    JSON.stringify(data.filter((item) => item.id !== beer.id)),
  );
};

export {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
};
