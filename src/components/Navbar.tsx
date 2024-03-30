import { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@/components/ui/avatar';
import { useAuthStore } from '@/hooks/useAuthStore';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

const Navbar = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const username = useAuthStore((state) => state.username);
  const [open, setIsOpen] = useState(false);

  const logout = () => {
    setUser(null, null);
  };

  return (
    <div className='flex justify-between items-center p-4 border-b h-[60px]'>
      <Link to='/'>
        <h1 className='text-3xl font-semibold'>TaskMate</h1>
      </Link>
      <div className='flex item-center justify-center gap-4'>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='font-mono'
          >
            <DropdownMenuLabel>{username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsOpen(true)}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <AlertDialog
        open={open}
        onOpenChange={setIsOpen}
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
    </div>
  );
};

export default Navbar;
