import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/theme-toggle';
import ProfileDropdown from '@/components/dropdown/profile-dropdown';
import { useDialogStore } from '@/hooks/use-dialog-store';

const Navbar = () => {
  const state = useDialogStore((state) => state);

  console.log(state);
  return (
    <div className='flex justify-between items-center p-4 border-b h-[60px]'>
      <Link to='/'>
        <h1 className='text-3xl font-semibold'>TaskMate</h1>
      </Link>
      <div className='flex item-center justify-center gap-4'>
        <ThemeToggle />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
