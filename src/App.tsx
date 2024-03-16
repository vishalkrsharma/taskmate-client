import { AppRouter } from '@/router/AppRouter';
import { useAuthStore } from './hooks/useAuthStore';
import { useEffect } from 'react';

const App = () => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { state } = JSON.parse(storedUser);
      setUser(state.username, state._id);
      console.log(state);
    }
  }, []);

  return <AppRouter />;
};

export default App;
