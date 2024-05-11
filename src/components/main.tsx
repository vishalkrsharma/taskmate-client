import { ListTodo } from 'lucide-react';

const Main = () => {
  return (
    <div className='flex-1 flex justify-center items-center h-[calc(100vh-60px)]'>
      <div className='text-xl text-gray-400 font-semibold'>
        <ListTodo className='w-20 h-20 mb-4 mx-auto' />
        <p className='text-xl text-gray-400 font-semibold'>Please select a task...</p>
      </div>
    </div>
  );
};

export default Main;
