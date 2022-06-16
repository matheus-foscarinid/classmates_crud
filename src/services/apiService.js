import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    'Authorization': 'Token token="aac0b9ce94265159cca34703e1132582"',
    'Access-Control-Allow-Origin': '*',
  },
});

// eslint-disable-next-line
export const postRequest = async (url, data) => {
  const response = await api.post(url, {
    ...data,
  });

  return response.data;
};

export const getRequest = async (url) => {
  const response = await api.get(url);
  return response.data;
};

export const deleteRequest = async (url) => {
  const response = await api.delete(url);
  return response.data;
};

export const putRequest = async (url) => {
  const response = await api.put(url);
  return response.data;
};
