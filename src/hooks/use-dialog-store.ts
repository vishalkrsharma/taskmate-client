import { create } from 'zustand';

import { DialogStoreType } from '@/types';

export const useDialogStore = create<DialogStoreType>((set) => ({
  type: null,
  isOpen: false,
  data: null,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
