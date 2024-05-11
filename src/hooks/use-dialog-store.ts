import { create } from 'zustand';

export type DialogType = 'changePassword' | 'changeUsername' | 'profile' | 'logout';

export interface DialogStore {
  type: DialogType | null;
  isOpen: boolean;
  onOpen: (type: DialogType) => void;
  onClose: () => void;
}

export const useDialogStore = create<DialogStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
}));
