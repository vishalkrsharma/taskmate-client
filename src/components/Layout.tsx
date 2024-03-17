import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Taskbar from '@/components/Taskbar';

const Layout = () => {
  return (
    <div className='font-mono'>
      <Header />
      <div className='flex justify-start items-center h-[calc(100vh-60px)]'>
        <Sidebar />
        <Taskbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
