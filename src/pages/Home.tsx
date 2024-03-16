import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cookies, removeCookie] = useCookies(['token']);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) navigate('/auth');

      const { data } = await axios.post('https://localhost:5000', {}, { withCredentials: true });

      // const { status, user } = data;
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
