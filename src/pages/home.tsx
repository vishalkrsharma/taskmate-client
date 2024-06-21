import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '@/lib/axios';
import Sidebar from '@/components/sidebar';
import Taskbar from '@/components/taskbar';
import { stringToDate } from '@/lib/utils';
import { TaskFilterType, TaskType } from '@/types';

const Home = () => {
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
        ...filter,
      },
    });
    setTasks(data.tasks);
  };

  const getTaskDays = async () => {
    const { data } = await axios.get('/api/task/get-task-dates');

    setTaskDates(stringToDate(data.taskDates));
  };

  return (
    <div className='flex justify-start items-center h-[calc(100vh-60px)] font-noto-sans'>
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        taskDates={taskDates}
      />
      <Taskbar tasks={tasks} />
      <Outlet context={[getTasks, filter]} />
    </div>
  );
};

export default Home;
