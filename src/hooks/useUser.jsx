import axios, { AxiosHeaders } from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserContext from './useUserContext';

function useUser() {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const login = async (userInfo) => {
    try {
      const res = await axios.post('/api/user/login', userInfo);
      const { data, status } = res;
      localStorage.setItem('user', JSON.stringify(data));
      if (status === 200) {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (userInfo) => {
    try {
      const res = await axios.post('/api/user/register', userInfo);
      const { status } = res;
      if (status === 201) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser({});
    navigate('/login');
  };

  return { login, register, logout };
}

export default useUser;
