import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Taskbar from '@/components/Taskbar';
import { TaskFilterType, TaskType } from '@/types';

const Home = ({
  filter,
  setFilter,
  taskDates,
  tasks,
  getTasks,
}: {
  filter: TaskFilterType;
  setFilter: Dispatch<SetStateAction<TaskFilterType>>;
  taskDates: Date[];
  tasks: TaskType[];
  getTasks: (filter: TaskFilterType) => Promise<void>;
}) => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-start items-center h-[calc(100vh-60px)]'>
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          taskDates={taskDates}
        />
        <Taskbar tasks={tasks} />
        <Outlet context={[getTasks, filter]} />
      </div>
    </div>
  );
};

export default Home;
