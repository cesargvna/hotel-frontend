const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return !!value && JSON.parse(value);
};

const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export { saveInLocalStorage, getFromLocalStorage, removeFromLocalStorage };
