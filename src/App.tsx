import { useEffect } from 'react';

import axios from '@/lib/axios';
import { useCookies } from 'react-cookie';
import { AppRouter } from '@/router/AppRouter';
import { useAuthStore } from '@/hooks/useAuthStore';
import { useToast } from '@/components/ui/use-toast';

const App = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const { toast } = useToast();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    (async () => {
      if (!cookies.token) {
        setUser(null, null);
        toast({
          description: 'Token nout found.',
          duration: 3000,
        });
      }

      const { data } = await axios.post('/api/auth/', {}, { withCredentials: true });

      const { status, user, message } = data;

      if (status === false) {
        setUser(null, null);
        toast({
          description: message,
          duration: 3000,
        });
      } else {
        const { _id, username } = user;
        setUser(username, _id);
      }
    })();
  }, [cookies]);

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
