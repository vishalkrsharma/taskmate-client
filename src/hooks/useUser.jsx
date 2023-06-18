import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserContext from './useUserContext';

function useUser() {
  const navigate = useNavigate();
  const { user, dispatch } = useUserContext();

  const login = async (userInfo) => {
    try {
      const res = await axios.post('/api/login', userInfo);
      const { data } = res;
      localStorage.setItem('user', JSON.stringify(data));
      console.log(data);
      dispatch({ type: 'LOGIN', payload: data });
      navigate('/');
      return data;
    } catch (err) {
      return err;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return { login, logout };
}

export default useUser;
