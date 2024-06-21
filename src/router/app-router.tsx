import { Routes, Route } from 'react-router-dom';

import Auth from '@/pages/auth';
import Task from '@/components/task';
import TaskForm from '@/components/task-form';
import PrivateRoutes from '@/routes/private-routes';
import AnonmyousRoutes from '@/routes/anonmyous-routes';
import Scratchpad from '@/pages/scratchpad';
import Home from '@/pages/home';
import Main from '@/components/main';

export const AppRouter = () => {
  return (
    <div className='font-noto-sans'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path='/dashboard'
            element={<Home />}
          >
            <Route
              index
              element={<Main />}
            />
            <Route path='tasks'>
              <Route
                path='new-task'
                element={<TaskForm />}
              />
              <Route path=':taskId'>
                <Route
                  index
                  element={<Task />}
                />
                <Route
                  path='edit'
                  element={<TaskForm />}
                />
              </Route>
            </Route>
          </Route>

          <Route
            path='/scratchpad'
            element={<Scratchpad />}
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
