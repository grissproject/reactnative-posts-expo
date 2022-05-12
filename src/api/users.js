import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const { data } = await axios.get(`${API_URL}/users`);

  return { user: data };
};

export const getUser = async (id) => {
  const { data } = await axios.get(`${API_URL}/users/${id}`);

  return { user: data };
};
