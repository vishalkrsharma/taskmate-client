import ChangePasswordDialog from '@/components/dialog/change-password-dialog';
import ChangeUsernameDialog from '@/components/dialog/change-username-dialog';
import DeleteTaskDialog from '@/components/dialog/delete-task-dialog';
import LogoutDialog from '@/components/dialog/logout-dialog';
import MemberDialog from '@/components/dialog/member-dialog';
import NewScratchadDialog from '@/components/dialog/new-scratchpad-dialog';
import ProfileDialog from '@/components/dialog/profile-dialog';

const DialogProvider = () => {
  return (
    <>
      <LogoutDialog />
      <ProfileDialog />
      <DeleteTaskDialog />
      <NewScratchadDialog />
      <ChangePasswordDialog />
      <ChangeUsernameDialog />
      <MemberDialog />
    </>
  );
};

export default DialogProvider;
