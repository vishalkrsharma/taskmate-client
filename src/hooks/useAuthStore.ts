import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface useAuthStore {
  username: null | string;
  _id: null | string;
  setUser: (username: string, _id: string) => void;
}

export const useAuthStore = create<useAuthStore>()(
  persist(
    (set) => ({
      username: null,
      _id: null,
      setUser: (username: string, _id: string) => set({ username, _id }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
