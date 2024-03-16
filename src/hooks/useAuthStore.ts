import { create } from 'zustand';

interface useAuthStore {
  username: null | string;
  _id: null | string;
  setUser: (username: string, _id: string) => void;
}

export const useAuthStore = create<useAuthStore>((set) => ({
  username: null,
  _id: null,
  setUser: (username: string, _id: string) => set({ username, _id }),
}));
