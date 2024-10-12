import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useDialogStore } from '@/hooks/use-dialog-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import InputTags from '@/components/ui/input-tags';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  memberIds: z.array(z.string().min(1, { message: 'Member is Required.' })).min(1, {
    message: 'Atleast one member is required.',
  }),
});

type FormType = z.infer<typeof formSchema>;

const MemberDialog = () => {
  const { toast } = useToast();
  const { isOpen, onClose, type } = useDialogStore();
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      memberIds: [],
    },
  });

  const isDialogOpen = isOpen && type === 'members';

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const onSubmit = async (values: FormType) => {
    console.log(values);

    try {
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
          <DialogTitle>Add Members</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='memberIds'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputTags
                      placeholder='Add Members'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Add</Button>
          </form>
        </Form>
        <DialogHeader>
          <DialogTitle>Added Members</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MemberDialog;
