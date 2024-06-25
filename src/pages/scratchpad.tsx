import { z } from 'zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { socket } from '@/lib/socket';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  message: z.string({
    required_error: 'req',
  }),
});

type FormType = z.infer<typeof formSchema>;

const Scratchpad = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: undefined,
    },
  });

  useEffect(() => {
    socket.on('connect', () => {
      console.log('User Id: ' + socket.id);
      socket.on('welcome', (s) => {
        console.log(s);
      });
    });

    socket.on('receive-message', (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const onSubmit = async (values: FormType) => {
    socket.emit('message', values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='shadcn'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Scratchpad;
