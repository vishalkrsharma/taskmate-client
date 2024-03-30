import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import axios from '@/lib/axios';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Taskbar from '@/components/Taskbar';
import { stringToDate } from '@/lib/utils';
import { TaskFilterType, TaskType } from '@/types';
import { useAuthStore } from '@/hooks/useAuthStore';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);
  const [filter, setFilter] = useState({});
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskDates, setTaskDates] = useState<Date[]>([]);

  useEffect(() => {
    getTaskDays();
  }, []);

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

  const getTaskDays = async () => {
    const { data } = await axios.get('/api/task/get-task-dates', {
      params: {
        userId: _id,
      },
    });

    setTaskDates(stringToDate(data.taskDates));
  };

  return _id ? (
    <div>
      <Navbar />
      <div className='flex justify-start items-center h-[calc(100vh-60px)]'>
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          taskDates={taskDates}
        />
        <Taskbar tasks={tasks} />
        <Outlet context={[getTasks, filter]} />
      </div>
    </div>
  ) : (
    <Navigate to='/auth' />
  );
};

export default PrivateRoutes;
