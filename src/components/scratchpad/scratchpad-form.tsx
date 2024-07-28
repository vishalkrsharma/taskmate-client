import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from '@/lib/axios';
import { useToast } from '@/hooks/use-toast';
import { ScratchpadType } from '@/types';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useDialogStore } from '@/hooks/use-dialog-store';

const ScratchpadForm = () => {
  const [scratchpad, setScratchpad] = useState<ScratchpadType>();
  const params = useParams();
  const scratchpadId = params.scratchpadId;
  const navigate = useNavigate();
  const { toast } = useToast();
  const onOpen = useDialogStore((state) => state.onOpen);

  useEffect(() => {
    if (!scratchpadId) return navigate(-1);
    (async () => {
      try {
        const { data } = await axios.get(`/api/scratchpad/get-scratchpad?scratchpadId=${scratchpadId}`);
        setScratchpad(data);
      } catch (error: any) {
        const { data, status } = error.response;
        toast({
          description: data.error,
          duration: 2000,
          variant: 'destructive',
        });
        // if (status === 401) navigate(-1);
      }
    })();
  }, []);

  console.log(scratchpad);

  return (
    <div className='flex-1 flex flex-col justify-start items-start h-[calc(100vh-60px)] p-4'>
      <div className='flex justify-between item-center w-full'>
        <h1 className='text-2xl font-medium mt-1 mb-2'>Scratchpad</h1>
        <div className='flex justify-center item-center'>
          <Button
            variant='outline'
            className='space-x-2'
            onClick={() => onOpen('members')}
          >
            <Plus size={20} />
            <span>Add Members</span>
          </Button>
        </div>
      </div>
      <div className='space-y-4 w-full'>
        <div className='space-y-2'>
          <div className='text-sm'>Title</div>
          <Input
            value={scratchpad?.title}
            disabled
            className='w-full'
          />
        </div>
        <div className='space-y-2 flex-1 flex flex-col'>
          <div className='text-sm'>Content</div>
          <Textarea
            value={scratchpad?.content}
            className='flex-1'
          />
        </div>
      </div>
    </div>
  );
};

export default ScratchpadForm;
