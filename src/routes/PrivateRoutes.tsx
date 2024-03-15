import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='*'
        element={
          <Navigate
            to='/'
            replace
          />
        }
      />
    </Routes>
  );
};

export default PrivateRoutes;
