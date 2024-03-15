import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import PrivateRoutes from '@/routes/PrivateRoutes';
import { Routes, Route, Navigate } from 'react-router-dom';

type Status = 'checking' | 'authenticated' | 'no-authenticated';

let status: Status = 'authenticated';

export const AppRouter = () => {
  if (status === 'checking') return <div className='loading'>Checking credentials...</div>;

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route
          path='/*'
          element={<PrivateRoutes />}
        />
      ) : (
        <Route
          path='auth'
          element={<Auth />}
        />
      )}
      <Route
        path='*'
        element={
          <Navigate
            to='/auth'
            replace
          />
        }
      />
    </Routes>
  );
};
