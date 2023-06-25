import { Outlet, Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PrivateRoute() {
  const { user } = useUserContext();

  return Object.keys(user).length !== 0 ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
