import * as z from 'zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuthStore } from '@/hooks/useAuthStore';

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username is required.',
  }),
  password: z.string().min(4, {
    message: 'Password is required.',
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', values, { withCredentials: true });
      const { user } = res.data;
      setUser(user.username, user._id);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();

      navigate('/');
    }
  };

  return (
    <div>
      <h1 className='text-xl mb-4'>Log in</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder='Enter username...'
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder='Enter password...'
                    {...field}
                  />
                </FormControl>
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

export default Login;
