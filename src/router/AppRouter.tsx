import { Routes, Route } from 'react-router-dom';

import Auth from '@/pages/Auth';
import Task from '@/components/Task';
import Main from '@/components/Main';
import PrivateRoutes from '@/routes/PrivateRoutes';
import AnonmyousRoutes from '@/routes/AnonmyousRoutes';
import TaskForm from '@/components/TaskForm';

export const AppRouter = () => {
  return (
    <div className='font-mono'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path='/'
            element={<Main />}
          ></Route>
          <Route
            path='new-task'
            element={<TaskForm />}
          />
          <Route
            path=':id'
            element={<Task />}
          />
          <Route
            path=':id/edit'
            element={<TaskForm />}
          />
        </Route>
        <Route element={<AnonmyousRoutes />}>
          <Route
            path='auth'
            element={<Auth />}
          />
        </Route>
      </Routes>
    </div>
  );
};
