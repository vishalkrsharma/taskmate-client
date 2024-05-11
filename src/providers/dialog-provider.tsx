import ChangePasswordDialog from '@/components/dialog/change-password-dialog';
import ChangeUsernameDialog from '@/components/dialog/change-username-dialog';
import LogoutDialog from '@/components/dialog/logout-dialog';
import ProfileDialog from '@/components/dialog/profile-dialog';

const DialogProvider = () => {
  return (
    <>
      <ChangePasswordDialog />
      <ChangeUsernameDialog />
      <ProfileDialog />
      <LogoutDialog />
    </>
  );
};

export default DialogProvider;
