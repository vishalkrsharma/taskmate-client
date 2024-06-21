import { Navigate, Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';
import { useAuthStore } from '@/hooks/use-auth-store';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);

  return _id ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to='/' />
  );
};

export default PrivateRoutes;
