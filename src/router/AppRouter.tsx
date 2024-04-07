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
            index
            element={<Main />}
          />
          <Route
            path='new-task'
            element={<TaskForm />}
          />
          <Route
            path=':taskId'
            element={<Task />}
          ></Route>
          <Route
            path=':taskId/edit'
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
