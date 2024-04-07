import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import axios from '@/lib/axios';
import { stringToDate } from '@/lib/utils';
import { TaskFilterType, TaskType } from '@/types';
import { useAuthStore } from '@/hooks/useAuthStore';
import Home from '@/pages/Home';

const PrivateRoutes = () => {
  const _id = useAuthStore((state) => state._id);
  const [filter, setFilter] = useState({});
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskDates, setTaskDates] = useState<Date[]>([]);

  useEffect(() => {
    getTaskDays();
  }, [tasks]);

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
    <Home
      filter={filter}
      setFilter={setFilter}
      taskDates={taskDates}
      tasks={tasks}
      getTasks={getTasks}
    />
  ) : (
    <Navigate to='/auth' />
  );
};

export default PrivateRoutes;
