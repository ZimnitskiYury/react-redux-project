import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from 'Services/storage-services/localStorageService';


const USER_STORAGE = 'user';

const getUser = () => getFromLocalStorage(USER_STORAGE);

const saveUser = (user) => {
  addToLocalStorage(
    USER_STORAGE,
    user,
  );
};

const removeUser = () => {
  removeFromLocalStorage(USER_STORAGE);
};

function authHeader() {
  const user = getUser();

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }

  return {};
}

export {
  getUser, saveUser, removeUser, authHeader, USER_STORAGE,
};
