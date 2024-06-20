import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { useAuthStoreType } from '@/types';

export const useAuthStore = create<useAuthStoreType>()(
  persist(
    (set) => ({
      username: null,
      _id: null,
      setUser: (username, _id) => set({ username, _id }),
      setUsername: (username) => set({ username }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
