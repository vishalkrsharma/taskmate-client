import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/use-auth-store';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be atleast 4 characters long.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ChangeUsername = ({ open, setIsOpen }: { open: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { toast } = useToast();
  const setUsername = useAuthStore((state) => state.setUsername);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormValues) => {
    try {
      const { data } = await axios.patch('/api/user/change-username', values);
      const { user } = data;
      setUsername(user.username);
      toast({
        description: data.message,
        duration: 2000,
      });
      form.reset();
      setIsOpen(false);
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.message,
        duration: 2000,
      });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setIsOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change username</DialogTitle>
          <DialogDescription>Enter a unique username.</DialogDescription>
        </DialogHeader>
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
                  <FormLabel>Change username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Enter username...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button
                className=''
                type='submit'
                disabled={isLoading}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUsername;
