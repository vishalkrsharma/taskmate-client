import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Home from './pages/Home';
import useUserContext from './hooks/useUserContext';
import LoginOrRegister from './pages/LoginOrRegister';

function App() {
  const { user } = useUserContext();

  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={Object.keys(user).length === 0 ? <LoginOrRegister /> : <PrivateRoute />}
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
