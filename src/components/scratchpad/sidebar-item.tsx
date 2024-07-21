import { Link } from 'react-router-dom';

import { ScratchpadType } from '@/types';

const SidebarItem = ({ scratchpad }: { scratchpad: ScratchpadType }) => {
  return (
    <Link
      to={`/scratchpad/${scratchpad._id}`}
      className='border rounded-sm w-full p-2 block'
    >
      <h2 className='text-lg font-semibold'>{scratchpad.title}</h2>
      <p className='text-gray-500'>{scratchpad.createdAt.toString().substring(0, 10)}</p>
    </Link>
  );
};

export default SidebarItem;
