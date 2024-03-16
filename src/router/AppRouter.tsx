import { Routes, Route } from 'react-router-dom';

import AnonmyousRoutes from '@/routes/AnonmyousRoutes';
import PrivateRoutes from '@/routes/PrivateRoutes';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path='/'
          element={<Home />}
        />
      </Route>
      <Route element={<AnonmyousRoutes />}>
        <Route
          path='auth'
          element={<Auth />}
        />
      </Route>
    </Routes>
  );
};
