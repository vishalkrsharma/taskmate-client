import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import axios from '@/lib/axios';
// import { socket } from '@/lib/socket';
import { ScratchpadType } from '@/types';
import { useToast } from '@/hooks/use-toast';
import Sidebar from '@/components/scratchpad/sidebar';

const Scratchpad = () => {
  const { toast } = useToast();
  const [scratchpads, setScratchpads] = useState<ScratchpadType[]>([]);
  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('User Id: ' + socket.id);
  //     socket.on('welcome', (s) => {
  //       console.log(s);
  //     });
  //   });

  //   socket.on('receive-message', (message) => {
  //     console.log(message);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/api/scratchpad/get-scratchpads');

        setScratchpads(data.scratchpads);
      } catch (error: any) {
        const { data } = error.response;
        toast({
          description: data.message,
          duration: 2000,
        });
      }
    })();
  }, []);

  return (
    <div className='flex justify-start items-center h-[calc(100vh-60px)] font-noto-sans'>
      <Sidebar scratchpads={scratchpads} />
      <Outlet />
    </div>
  );
};

export default Scratchpad;
