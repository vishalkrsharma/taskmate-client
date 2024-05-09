import { Routes, Route } from 'react-router-dom';

import Auth from '@/pages/Auth';
import Task from '@/components/Task';
import Main from '@/components/Main';
import TaskForm from '@/components/TaskForm';
import PrivateRoutes from '@/routes/PrivateRoutes';
import AnonmyousRoutes from '@/routes/AnonmyousRoutes';

export const AppRouter = () => {
  return (
    <div className='font-mono'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path='dashboard'
            element={<Main />}
          />
          <Route
            path='dashboard/tasks/new-task'
            element={<TaskForm />}
          />
          <Route
            path='dashboard/tasks/:taskId'
            element={<Task />}
          />
          <Route
            path='dashboard/tasks/:taskId/edit'
            element={<TaskForm />}
          />
        </Route>
        <Route element={<AnonmyousRoutes />}>
          <Route
            path='/'
            element={<Auth />}
          />
        </Route>
      </Routes>
    </div>
  );
};
