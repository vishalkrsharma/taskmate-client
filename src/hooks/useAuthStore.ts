import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface useAuthStore {
  username: null | string;
  _id: null | string;
  setUser: (username: string | null, _id: string | null) => void;
}

export const useAuthStore = create<useAuthStore>()(
  persist(
    (set) => ({
      username: null,
      _id: null,
      setUser: (username, _id) => set({ username, _id }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
