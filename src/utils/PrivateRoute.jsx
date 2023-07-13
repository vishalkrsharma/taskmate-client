import { Outlet, Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import LoginOrRegister from '../pages/LoginOrRegister';

function PrivateRoute() {
  const { user } = useUserContext();

  return Object.keys(user).length !== 0 ? <Outlet /> : <LoginOrRegister />;
}

export default PrivateRoute;
