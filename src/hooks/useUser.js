// import { useQuery, useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';
import { getUser } from '../api/users';

const useUser = (id) => {
  const [user, setUser] = useState();

  const loadUser = async () => {
    const response = await getUser(id);
    setUser(response.user);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return { user };
};

export default useUser;
