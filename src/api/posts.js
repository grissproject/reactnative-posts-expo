import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const { data } = await axios.get(`${API_URL}/posts`);

  return { posts: data };
};

export const getPost = async (id) => {
  const { data } = await axios.get(`${API_URL}/posts/${id}`);

  return { post: data };
};

export const getComments = async (postId) => {
  const { data } = await axios.get(`${API_URL}/posts/${postId}/comments`);

  return { comments: data };
};
