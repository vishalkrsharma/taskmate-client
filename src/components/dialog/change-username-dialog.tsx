import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { useAuthStore } from '@/hooks/use-auth-store';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be atleast 4 characters long.',
  }),
});

type FormType = z.infer<typeof formSchema>;

const ChangeUsernameDialog = () => {
  const { toast } = useToast();
  const { isOpen, onClose, type } = useDialogStore();
  const setUsername = useAuthStore((state) => state.setUsername);
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const isDialogOpen = isOpen && type === 'change-username';

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const onSubmit = async (values: FormType) => {
    try {
      const { data } = await axios.patch('/api/user/change-username', values);
      const { user } = data;
      setUsername(user.username);
      toast({
        description: data.message,
        duration: 2000,
      });
      handleClose();
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.error,
        duration: 2000,
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={handleClose}
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

export default ChangeUsernameDialog;
