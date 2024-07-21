import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required.' }),
});

type FormType = z.infer<typeof formSchema>;

const NewScratchadDialog = () => {
  const { toast } = useToast();
  const { isOpen, onClose, type } = useDialogStore();
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const isDialogOpen = isOpen && type === 'new-scratchpad';

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const onSubmit = async (values: FormType) => {
    try {
      const { data } = await axios.post('/api/scratchpad/new-scratchpad', values);

      toast({
        description: data.message,
        duration: 2000,
      });
      handleClose();
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
      open={isDialogOpen}
      onOpenChange={handleClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new scratchpad</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder='Enter title...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end gap-4'>
              <Button
                type='button'
                variant='outline'
                disabled={isLoading}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
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

export default NewScratchadDialog;
