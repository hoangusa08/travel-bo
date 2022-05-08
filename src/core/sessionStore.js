const sessionStore = {
  setItem: (name, object) => {
    sessionStorage.setItem(name, JSON.stringify(object));
  },
  getItem: (name) => {
    return JSON.parse(sessionStorage.getItem(name));
  },
  removeItem: (name) => {
    sessionStorage.removeItem(name);
  }
};

export default sessionStore;
