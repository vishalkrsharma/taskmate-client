import { useEffect } from 'react';

import { AppRouter } from '@/router/app-router';
import { useAuthStore } from '@/hooks/use-auth-store';

const App = () => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { state } = JSON.parse(storedUser);
      setUser(state.username, state._id);
    }
  }, []);

  return <AppRouter />;
};

export default App;
