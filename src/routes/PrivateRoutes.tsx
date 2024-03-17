import { Navigate, Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Taskbar from '@/components/Taskbar';
import { useAuthStore } from '@/hooks/useAuthStore';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);

  return _id ? (
    <div>
      <Header />
      <div className='flex justify-start items-center h-[calc(100vh-60px)]'>
        <Sidebar />
        <Taskbar />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to='/auth' />
  );
};

export default PrivateRoutes;
