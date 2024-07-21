import Avatar from '@/components/ui/avatar';
import { useAuthStore } from '@/hooks/use-auth-store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDialogStore } from '@/hooks/use-dialog-store';

const ProfileDropdown = () => {
  const username = useAuthStore((state) => state.username);

  const { onOpen } = useDialogStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-full'>
        <Avatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='font-noto-sans'
      >
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onOpen('profile')}>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen('logout')}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
