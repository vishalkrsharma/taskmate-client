import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from '@/lib/axios';
import { TaskType } from '@/types';
import { Button } from '@/components/ui/button';
import TaskbarItem from '@/components/TaskbarItem';
import { useAuthStore } from '@/hooks/useAuthStore';
import { Separator } from '@/components/ui/separator';

const Taskbar = () => {
  const _id = useAuthStore((state) => state._id);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('http://localhost:5000/api/task/get-tasks', {
        params: {
          userId: _id,
        },
      });
      setTasks(data.tasks);
    })();
  }, []);

  return (
    <div className='w-[400px] h-[calc(100vh-60px)] border-r flex flex-col p-2 justify-start items-center overflow-scroll'>
      <Button
        variant='outline'
        className='w-full p-0'
      >
        <Link
          to='/new-task'
          className='w-full h-10 flex justify-center items-center rounded-sm'
        >
          New task
          <Plus className='w-4 h-4 ml-2' />
        </Link>
      </Button>
      <Separator className='my-2' />
      <div className='flex flex-col gap-2 w-full'>
        {tasks.length === 0 ? (
          <div className='text-center'>No tasks</div>
        ) : (
          tasks.map((task) => (
            <TaskbarItem
              key={task._id}
              task={task}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Taskbar;
