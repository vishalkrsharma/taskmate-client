import axios from '@/lib/axios';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@/hooks/use-toast';
import { useDialogStore } from '@/hooks/use-dialog-store';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const DeleteTaskDialog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isOpen, onClose, type, dialogData } = useDialogStore();

  const isDialogOpen = isOpen && type === 'delete-task';

  const handleClose = () => {
    onClose();
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete('/api/task/delete-task', { params: { taskId: dialogData?.taskId } });

      toast({
        description: data.message,
        duration: 2000,
      });
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.error,
        duration: 2000,
        variant: 'destructive',
      });
    } finally {
      navigate('/');
    }
  };

  return (
    <AlertDialog
      open={isDialogOpen}
      onOpenChange={handleClose}
    >
      <AlertDialogContent>
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
  );
};

export default DeleteTaskDialog;
