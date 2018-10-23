import axios from 'axios';

let { token } = localStorage;
if (!token) {
  localStorage.token = Math.random()
    .toString(36)
    .substring(-8);

  token = localStorage;
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers,
});

export default api;
