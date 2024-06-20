import { useNavigate } from 'react-router-dom';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/hooks/use-auth-store';
import {
  AlertDialogAction,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useDialogStore } from '@/hooks/use-dialog-store';

const LogoutDialog = () => {
  const { isOpen, onClose, type } = useDialogStore();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const { toast } = useToast();

  const isDialogOpen = isOpen && type === 'logout';

  const logout = async () => {
    try {
      const res = await axios.post('/api/auth/logout');
      const { success, status } = res.data;

      if (success === true && status === 200) {
        setUser(null, null);
        navigate('/');
        toast({
          description: 'User logged out',
          duration: 2000,
        });
      }
    } catch (error: any) {
      const { data } = error.response;
      toast({
        description: data.message,
        duration: 2000,
      });
    }
  };

  return (
    <AlertDialog
      open={isDialogOpen}
      onOpenChange={onClose}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action will log you out from this session.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={logout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutDialog;
