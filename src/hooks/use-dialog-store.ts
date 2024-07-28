import { create } from 'zustand';

import { DialogStoreType } from '@/types';

export const useDialogStore = create<DialogStoreType>((set) => ({
  type: null,
  isOpen: false,
  dialogData: null,
  onOpen: (type, dialogData, refresh) => set({ isOpen: true, type, dialogData, refresh }),
  onClose: () => set({ type: null, isOpen: false }),
  refresh: undefined,
}));
