import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserContext from './useUserContext';
import useTaskcontext from './useTaskContext';
import toastConfig from '../config/toast';
import { toast } from 'react-toastify';

const useUser = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const { setTasks } = useTaskcontext();

  const login = async (userInfo) => {
    try {
      const res = await axios.post('/api/user/login', userInfo);
      const { data, status } = res;
      if (status === 200) {
        setUser(data);
        navigate('/');
      }
    } catch (err) {
      const { response: res } = err;
      toast.error(res.data.message, toastConfig);
    }
  };

  const register = async (userInfo) => {
    try {
      const res = await axios.post('/api/user/register', userInfo);
      const { data, status } = res;
      if (status === 201) {
        setUser(data);
        navigate('/');
      }
    } catch (err) {
      const { response: res } = err;
      toast.error(res.data.message, toastConfig);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser({});
    setTasks([]);
  };

  const changeUsername = async (newUsername) => {
    try {
      const res = await axios.post('/api/user/changeusername', { user, newUsername });
      const { data, status } = res;
      if (status === 200) {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeEmail = async (newEmail) => {
    try {
      const { data } = await axios.post('/api/user/changeemail', { user, newEmail });
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const changePassword = async (newPassword) => {
    try {
      await axios.post('/api/user/changepassword', { user, newPassword });
    } catch (err) {
      console.log(err);
    }
  };

  return { login, register, logout, changeUsername, changeEmail, changePassword };
};

export default useUser;
