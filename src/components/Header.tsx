import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/hooks/useAuthStore';
import { Link } from 'react-router-dom';

const Header = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const logout = () => {
    setUser(null, null);
  };

  return (
    <div className='flex justify-between items-center p-2 border-b h-[60px]'>
      <Link to='/'>
        <h1 className='text-3xl font-semibold'>TaskMate</h1>
      </Link>
      <Button onClick={logout}>logout</Button>
    </div>
  );
};

export default Header;
