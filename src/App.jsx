import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import Home from './pages/Home';
import useUserContext from './hooks/useUserContext';

function App() {
  const { user } = useUserContext();

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/register'
          element={Object.keys(user).length === 0 ? <Register /> : <Navigate to='/' />}
        />
        <Route
          path='/login'
          element={Object.keys(user).length === 0 ? <Login /> : <Navigate to='/' />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            index
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
