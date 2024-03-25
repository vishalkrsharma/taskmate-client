import { Dispatch, SetStateAction, useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Sidebar = ({ filter, setFilter }: { filter: any; setFilter: Dispatch<SetStateAction<any>> }) => {
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
          className={cn('flex-1', Object.keys(filter).length === 0 && 'bg-accent')}
          onClick={() => setFilter({})}
        >
          All Tasks
        </Button>
        <Button
          variant='outline'
          className={cn('flex-1', filter.past && 'bg-accent')}
          onClick={() =>
            setFilter({
              past: true,
            })
          }
        >
          Past Tasks
        </Button>
        <Button
          variant='outline'
          className={cn('flex-1', filter.today && 'bg-accent')}
          onClick={() =>
            setFilter({
              today: true,
            })
          }
        >
          Today's Tasks
        </Button>
        <Button
          variant='outline'
          className={cn('flex-1', filter.future && 'bg-accent')}
          onClick={() =>
            setFilter({
              future: true,
            })
          }
        >
          Future Tasks
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
