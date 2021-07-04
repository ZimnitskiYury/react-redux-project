const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  return data
    ? JSON.parse(data)
    : [];
};

const addToLocalStorage = (
  key, beer,
) => {
  const data = getFromLocalStorage();
  localStorage.setItem(
    key,
    JSON.stringify([
      ...data,
      beer,
    ]),
  );
};

const removeFromLocalStorage = (
  key, beer,
) => {
  const data = getFromLocalStorage();
  localStorage.setItem(
    key,
    JSON.stringify(data.filter((item) => item.id !== beer.id)),
  );
};

export {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
};
