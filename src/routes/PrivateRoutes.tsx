import { Navigate, Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Taskbar from '@/components/Taskbar';
import { useAuthStore } from '@/hooks/useAuthStore';
import { useEffect, useState } from 'react';
import { TaskFilterType, TaskType } from '@/types';
import axios from '@/lib/axios';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);
  const [filter, setFilter] = useState({});
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    getTasks(filter);
  }, [filter]);

  const getTasks = async (filter: TaskFilterType) => {
    const { data } = await axios.get('/api/task/get-tasks', {
      params: {
        userId: _id,
        ...filter,
      },
    });
    setTasks(data.tasks);
  };

  return _id ? (
    <div>
      <Header />
      <div className='flex justify-start items-center h-[calc(100vh-60px)]'>
        <Sidebar
          filter={filter}
          setFilter={setFilter}
        />
        <Taskbar tasks={tasks} />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to='/auth' />
  );
};

export default PrivateRoutes;
