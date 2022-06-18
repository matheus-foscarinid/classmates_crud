import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    'Authorization': 'Token token="aac0b9ce94265159cca34703e1132582"',
    'Access-Control-Allow-Origin': '*',
  },
});

export const apiRequest = async (url, method = 'GET', data = {}) => {
  const response = await api({ method, url, data });
  return response.data;
};
