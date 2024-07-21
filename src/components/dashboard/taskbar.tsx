import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

import { TaskType } from '@/types';
import { Button } from '@/components/ui/button';
import TaskbarItem from '@/components/dashboard/taskbar-item';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const Taskbar = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <ScrollArea className='w-[400px] h-[calc(100vh-60px)] border-r flex flex-col p-2 justify-start items-center overflow-scroll'>
      <Button className='w-full'>
        <Link
          to='/dashboard/tasks/new-task'
          className='w-full h-10 flex justify-center items-center rounded-sm'
        >
          New task
          <Plus className='w-4 h-4 ml-2' />
        </Link>
      </Button>
      <Separator className='my-2' />
      <div className='flex flex-col gap-2 w-full'>
        {!tasks ? (
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
    </ScrollArea>
  );
};

export default Taskbar;
