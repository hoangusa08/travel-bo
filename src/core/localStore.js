// return the user data from the local storage
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the local storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the local storage
export const removeUserLocal = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// set the token and user from the local storage
export const setUserLocal = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// return the language from the local storage
export const getLanguage = () => {
  return localStorage.getItem("lang") || "en";
};

// set the language from the local storage
export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
};
