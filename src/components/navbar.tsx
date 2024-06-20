import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/theme-toggle';
import ProfileDropdown from '@/components/dropdown/profile-dropdown';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b h-[60px]'>
      <div className='flex item-center gap-8'>
        <h1 className='text-3xl font-semibold'>TaskMate</h1>
        <Link
          to='/dashboard'
          className='text-lg mt-1'
        >
          Dashboard
        </Link>
        <Link
          to='/scratchpad'
          className='text-lg mt-1'
        >
          Scratchpad
        </Link>
      </div>
      <div className='flex item-center justify-center gap-4'>
        <ThemeToggle />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
