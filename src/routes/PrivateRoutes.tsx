import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/hooks/useAuthStore';
import Auth from '@/pages/Auth';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);

  return _id ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoutes;
