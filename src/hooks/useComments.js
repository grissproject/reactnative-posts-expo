import { useState, useEffect } from 'react';
import { getComments } from '../api/posts';

const useComments = (postId) => {
  const [comments, setComments] = useState();

  const loadComments = async () => {
    const response = await getComments(postId);
    setComments(response.comments);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return { comments };
};

export default useComments;
