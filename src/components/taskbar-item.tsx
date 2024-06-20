import { Link } from 'react-router-dom';

import { TaskType } from '@/types';

const TaskbarItem = ({ task }: { task: TaskType }) => {
  return (
    <Link
      to={`dashboard/tasks/${task._id}`}
      className='border rounded-sm w-full p-2'
    >
      <h2 className='text-lg font-semibold'>{task.title}</h2>
      <p className='text-gray-500'>{task.date.toString().substring(0, 10)}</p>
    </Link>
  );
};

export default TaskbarItem;
