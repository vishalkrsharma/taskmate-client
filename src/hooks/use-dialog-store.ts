import { create } from 'zustand';

import { DialogStoreType } from '@/types';

export const useDialogStore = create<DialogStoreType>((set) => ({
  type: null,
  isOpen: false,
  dialogData: null,
  onOpen: (type, dialogData) => set({ isOpen: true, type, dialogData }),
  onClose: () => set({ type: null, isOpen: false }),
}));
