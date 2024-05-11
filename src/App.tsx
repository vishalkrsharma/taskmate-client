import { useEffect } from 'react';

import { AppRouter } from '@/router/AppRouter';
import { useAuthStore } from '@/hooks/useAuthStore';

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
