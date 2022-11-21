export const KEY_LOCAL_STORAGE = 'random-web-user-data';

const getTokenFromLocalStorage = () => {
  const data = localStorage.getItem(KEY_LOCAL_STORAGE);

  if (!data) {
    return null;
  }

  return JSON.parse(data).token;
};

const getIsAdminFromLocalStorage = () => {
  const data = localStorage.getItem(KEY_LOCAL_STORAGE);

  if (!data) {
    return false;
  }

  return JSON.parse(data).isAdmin;
};

const setTokenFromLocalStorage = (token, isAdmin) => {
  const data = {
    token,
    isAdmin
  };

  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(data));
};

const changeIsAdminLocalStorage = (isAdmin) => {
  const data = localStorage.getItem(KEY_LOCAL_STORAGE);

  if (data) {
    const { token } = JSON.parse(data);

    setTokenFromLocalStorage(token, isAdmin);
  }
};

export {
  getIsAdminFromLocalStorage,
  getTokenFromLocalStorage,
  setTokenFromLocalStorage,
  changeIsAdminLocalStorage
};
