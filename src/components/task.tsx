import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from '@/lib/axios';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { TaskType } from '@/types';

const Task = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskType>();
  const { toast } = useToast();
  const params = useParams();

  useEffect(() => {
    (async function () {
      const { data } = await axios.get('/api/task/get-task/', {
        params: { taskId: params.taskId },
      });
      setTask(data.task);
    })();
  }, [params]);

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete('/api/task/delete-task', { params: { taskId: task?._id } });
      toast({
        description: data.message,
        duration: 2000,
      });
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.message,
        duration: 2000,
      });
    } finally {
      navigate('/');
    }
  };

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
              to='edit'
              state={{ task }}
            >
              Edit
            </Link>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 font-semibold'>
              Delete
            </AlertDialogTrigger>
            <AlertDialogContent className='font-victor'>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your task and remove the data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
