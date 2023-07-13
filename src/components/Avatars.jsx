import Avatar from 'boring-avatars';
import useUserContext from '../hooks/useUserContext';

export default function Avatars() {
  const { user } = useUserContext();
  return (
    <Avatar
      size={40}
      name={user.username}
      variant='beam'
      colors={['#595B5A', '#14C3A2', '#0DE5A8', '#7CF49A', '#B8FD99']}
    />
  );
}
