import { useAuthStore } from '@/hooks/useAuthStore';
import { Navigate, Outlet } from 'react-router-dom';

const AnonmyousRoutes = () => {
  const _id = useAuthStore((state) => state._id);

  return !_id ? <Outlet /> : <Navigate to='/' />;
};

export default AnonmyousRoutes;
