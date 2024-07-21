import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '@/lib/axios';
import { stringToDate } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { TaskFilterType, TaskType } from '@/types';
import Sidebar from '@/components/dashboard/sidebar';
import Taskbar from '@/components/dashboard/taskbar';

const Home = () => {
  const { toast } = useToast();
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
    try {
      const { data } = await axios.get('/api/task/get-tasks', {
        params: {
          ...filter,
        },
      });
      setTasks(data.tasks);
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.message,
        duration: 2000,
      });
    }
  };

  const getTaskDays = async () => {
    try {
      const { data } = await axios.get('/api/task/get-task-dates');
      setTaskDates(stringToDate(data.taskDates));
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.message,
        duration: 2000,
      });
    }
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
