import { Routes, Route } from 'react-router-dom';

import Auth from '@/pages/auth';
import Task from '@/components/task';
import Main from '@/components/main';
import TaskForm from '@/components/task-form';
import PrivateRoutes from '@/routes/private-routes';
import AnonmyousRoutes from '@/routes/anonmyous-routes';

export const AppRouter = () => {
  return (
    <div className='font-noto-sans'>
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
