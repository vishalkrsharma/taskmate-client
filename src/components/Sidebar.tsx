import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const bookedStyle = { border: '1px solid #000000', borderRadius: '5px' };

const Sidebar = ({ filter, setFilter, taskDates }: { filter: any; setFilter: Dispatch<SetStateAction<any>>; taskDates: Date[] }) => {
  const [date, setDate] = useState<Date | undefined>();

  useEffect(() => {
    if (typeof date !== 'undefined')
      setFilter({
        date,
      });
  }, [date]);

  return (
    <div className='w-[300px] h-[calc(100vh-60px)] flex flex-col justify-start items-center p-2 border-r'>
      <Calendar
        modifiers={{ booked: taskDates }}
        modifiersStyles={{ booked: bookedStyle }}
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
      <Separator className='my-2' />
      <div className='flex flex-col gap-2 w-full'>
        <Button
          variant='outline'
          className={cn('flex-1', filter.future && 'bg-accent')}
          onClick={() =>
            setFilter({
              isArchieved: true,
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
