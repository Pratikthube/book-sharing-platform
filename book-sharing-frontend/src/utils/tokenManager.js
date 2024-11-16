const tokenKey = "token";

function setToken(token) {
  localStorage.setItem(tokenKey, token);
}

function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  setToken,
  getToken,
};
