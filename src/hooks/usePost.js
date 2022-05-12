// import { useQuery, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import usePosts from './usePosts';

const usePost = (id) => {
  const { posts, getPost, toggleFavoritePost, removePost } = usePosts();
  // We should call the backend for a full/updated post version, but since in this case it is the same, we're just
  // retrieving from the posts' list.
  const [post, setPost] = useState(getPost(id));

  useEffect(() => {
    // Awefull trick to update the 'favorite' flag. In a real scenario, the backend should include the flag in the
    // post response. This is slow and may cause unnecessary re-renders.
    setPost(getPost(id));
  }, [posts]);

  const toggleFavorite = () => toggleFavoritePost(id);

  const remove = () => removePost(id);

  return { post, toggleFavorite, remove };
};

export default usePost;
