import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/theme-toggle';
import Profile from '@/components/profile';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b h-[60px]'>
      <Link to='/'>
        <h1 className='text-3xl font-semibold'>TaskMate</h1>
      </Link>
      <div className='flex item-center justify-center gap-4'>
        <ThemeToggle />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
