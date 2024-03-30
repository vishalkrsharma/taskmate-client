import { useAuthStore } from '@/hooks/useAuthStore';
import BoringAvatar from 'boring-avatars';

const Avatar = () => {
  const username = useAuthStore((state) => state.username) || '';
  return (
    <BoringAvatar
      size={40}
      name={username}
      variant='beam'
      colors={['#6499E9', '#9EDDFF', '#A6F6FF', '#BEFFF7', '#FFC0CB']}
    />
  );
};

export default Avatar;
