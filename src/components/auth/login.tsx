import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/use-auth-store';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be atleast 4 characters long.',
  }),
  password: z.string().min(4, {
    message: 'Password must be atleast 4 characters long.',
  }),
});

type FormType = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const { toast } = useToast();
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormType) => {
    try {
      const { data } = await axios.post('/api/auth/login', values, { withCredentials: true });
      const { user } = data;
      setUser(user.username, user._id);
      toast({
        description: data.message,
        duration: 2000,
      });
      navigate('/dashboard');
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.error,
        duration: 2000,
        variant: 'destructive',
      });
    } finally {
      form.reset();
    }
  };

  return (
    <div>
      <h1 className='text-xl mb-4 font-bold'>Log in</h1>
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
                <FormLabel className='font-bold'>Username</FormLabel>
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
                <FormLabel className='font-bold'>Password</FormLabel>
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
            className='font-bold'
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
