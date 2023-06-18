import { Outlet, Navigate } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PrivateRoute() {
  const { user } = useUserContext();

  return <>{user ? <Outlet /> : <Navigate to='/login' />}</>;
}

export default PrivateRoute;
