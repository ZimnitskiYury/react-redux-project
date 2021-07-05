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

export {
  getUser, saveUser, removeUser, USER_STORAGE,
};
