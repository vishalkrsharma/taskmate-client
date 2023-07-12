import { Outlet, Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';
import Login from '../pages/Login';

function PrivateRoute() {
  const { user } = useUserContext();

  return Object.keys(user).length !== 0 ? <Outlet /> : <Login />;
}

export default PrivateRoute;
