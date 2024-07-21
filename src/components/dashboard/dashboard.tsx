import { Link } from 'react-router-dom';
import { ListTodo, Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='flex-1 flex justify-center items-center h-[calc(100vh-60px)]'>
      <div className='text-xl text-gray-400 font-semibold space-y-8'>
        <div>
          <ListTodo className='w-20 h-20 mx-auto' />
          <p className='text-xl text-gray-400 font-bold tracking-widest'>Please select a task...</p>
        </div>
        <Link
          to='/dashboard/tasks/new-task'
          className='w-full font-bold text-lg flex justify-center item-center gap-4'
        >
          Add Task <Plus className='w-6 h-6' />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
