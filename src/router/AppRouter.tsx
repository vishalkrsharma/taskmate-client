import { useAuthStore } from '@/hooks/useAuthStore';
import Auth from '@/pages/Auth';
import PrivateRoutes from '@/routes/PrivateRoutes';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

type Status = boolean;

export const AppRouter = () => {
  const [status, setStatus] = useState<boolean>();
  const _id = useAuthStore((state) => state._id);

  useEffect(() => {
    if (_id) setStatus(true);
    else setStatus(false);
  }, [_id]);

  return (
    <Routes>
      {status ? (
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
