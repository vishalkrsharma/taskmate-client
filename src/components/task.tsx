import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';

import axios from '@/lib/axios';
import { cn } from '@/lib/utils';
import { TaskType } from '@/types';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useDialogStore } from '@/hooks/use-dialog-store';

const Task = () => {
  const [task, setTask] = useState<TaskType>();
  const { onOpen } = useDialogStore();
  const params = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('/api/task/get-task/', {
        params: { taskId: params.taskId },
      });
      setTask(data.task);
    })();
  }, [params]);

  console.log(params);

  return (
    <div className='flex-1 flex-col justify-start items-start h-[calc(100vh-60px)] p-2'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium'>Task details</h1>
        <div className='flex item-center justify-center gap-4'>
          <Button
            variant='outline'
            className='font-semibold'
          >
            <Link
              to={`/dashboard/tasks/${params.taskId}/edit`}
              state={{ task }}
            >
              Edit
            </Link>
          </Button>
          <Button
            variant='destructive'
            className='font-semibold'
            onClick={() => onOpen('delete-task', { taskId: task?._id })}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className='space-y-4'>
        <div>
          <div className='text-sm'>Title</div>
          <div className='opacity-50 border p-2 rounded-sm text-sm'>{task?.title}</div>
        </div>
        <div>
          <div className='text-sm'>Description</div>
          <div className='opacity-50 border p-2 rounded-sm text-sm'>{parse(task?.description ?? '')}</div>
        </div>
        <div>
          <div className='text-sm'>Date</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn('w-[240px] justify-start text-left font-normal', !task?.date && 'text-muted-foreground')}
                disabled
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {task?.date ? format(task?.date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className='w-auto p-0'
              align='start'
            >
              <Calendar
                mode='single'
                selected={task?.date}
                disabled
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Task;
