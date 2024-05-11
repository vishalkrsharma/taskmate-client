import Avatar from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useDialogStore } from '@/hooks/use-dialog-store';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuthStore } from '@/hooks/use-auth-store';

const ProfileDialog = () => {
  const { isOpen, onClose, onOpen, type } = useDialogStore();
  const username = useAuthStore((state) => state.username);

  const isDialogOpen = isOpen && type === 'profile';

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>
            Manage your user profile with options to view info, change username/password, customize profile, and delete account.
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center gap-4 my-4'>
          <Avatar />
          <div className='font-bold text-xl'>{username}</div>
        </div>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            Change Username
            <Button onClick={() => onOpen('changeUsername')}>Change</Button>
          </div>
          <div className='flex justify-between items-center'>
            Change Password
            <Button onClick={() => onOpen('changePassword')}>Change</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
