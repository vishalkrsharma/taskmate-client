import { useAuthStore } from '@/hooks/use-auth-store';
import { Navigate, Outlet } from 'react-router-dom';

const AnonmyousRoutes = () => {
  const _id = useAuthStore((state) => state._id);

  return !_id ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default AnonmyousRoutes;
