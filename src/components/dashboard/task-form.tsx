import * as z from 'zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { CalendarIcon } from 'lucide-react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from '@/lib/axios';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { TaskFilterType } from '@/types';
import Tiptap from '@/components/tiptap';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required.',
  }),
  description: z.string().min(1, {
    message: 'Description is required.',
  }),
  date: z.date({
    required_error: 'Date is required.',
  }),
  isArchived: z.boolean(),
});

type FormType = z.infer<typeof formSchema>;

const TaskForm = () => {
  const [getTasks, filter]: [(filter: TaskFilterType) => Promise<void>, TaskFilterType] = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state ? location.state.task : null;
  const { toast } = useToast();

  const form = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
    defaultValues: task
      ? { ...task, date: new Date(task.date) }
      : {
          title: '',
          description: '',
          date: new Date(),
          isArchived: false,
        },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormType) => {
    try {
      if (task) {
        const { data } = await axios.put('/api/task/edit-task', { ...values, taskId: task._id });
        toast({
          description: data.message,
          duration: 2000,
        });
      } else {
        const { data } = await axios.post('/api/task/new-task', values);
        toast({
          description: data.message,
          duration: 2000,
        });
      }

      navigate('/');
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.error,
        duration: 2000,
        variant: 'destructive',
      });
    } finally {
      form.reset();
      getTasks(filter);
    }
  };

  return (
    <div className='flex-1 flex flex-col justify-start items-start h-[calc(100vh-60px)] p-4'>
      <h1 className='text-2xl font-medium mt-1 mb-2'>{task ? 'Edit' : 'New'} Task</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 flex flex-col flex-1 items-start w-full'
        >
          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='w-[300px]'>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Enter title...'
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Write a title for yout task.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='mt-[6px] mb-[4px]'>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Pick the date for the task.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem className='w-full flex-1'>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Tiptap
                    description={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='isArchived'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Archived</FormLabel>
                  <FormDescription>This task will not appear in the task list.</FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={isLoading}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TaskForm;
