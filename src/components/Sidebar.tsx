import { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className='w-[300px] h-[calc(100vh-60px)] flex flex-col justify-start items-center p-2 border-r'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
      <Separator className='my-2' />
      <div className='flex flex-col gap-2 w-full'>
        <Button
          variant='outline'
          className='flex-1'
        >
          Past Tasks
        </Button>
        <Button
          variant='outline'
          className='flex-1'
        >
          Today's Tasks
        </Button>
        <Button
          variant='outline'
          className='flex-1'
        >
          Future Tasks
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
