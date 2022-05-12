import React, { useState, useEffect, createContext, useContext } from 'react';
import _ from 'lodash';
import { getPosts } from '../api/posts';

const postsContext = createContext();

export const ProvidePosts = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const isFavoritePost = (id) => favorites.indexOf(id) !== -1;

  const updatePosts = (list) => {
    const postsWithFavFlag = list.map((post) => (
      { ...post, favorite: isFavoritePost(post.id) }
    ));

    setPosts(postsWithFavFlag);
  };

  const loadPosts = async () => {
    const { posts: newPosts} = await getPosts();

    updatePosts(newPosts);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    updatePosts(posts);
  }, [favorites]);

  const toggleFavoritePost = (id) => {
    if (!isFavoritePost(id)) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(_.without(favorites, id));
    }
  };

  const getPost = (id) => posts.find((post) => post.id === id);

  const removePost = (id) => setPosts(_.without(posts, getPost(id)));

  const removeAll = () => {
    setPosts([]);
    // Is it OK to clean favorites as well? Or should we keep it so they keep as favs when the user reload?
    setFavorites([]);
  };


  const value = {
    posts,
    getPost,
    reload: loadPosts,
    toggleFavoritePost,
    removePost,
    removeAll,
  };

  return (
    <postsContext.Provider value={value}>
      {children}
    </postsContext.Provider>
  );
};

const usePosts = () => {
  return useContext(postsContext);
};

export default usePosts;
