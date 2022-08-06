import create from "zustand";

interface StoreType {
  currentUser: object | undefined | null;
  setCurrentUser: (user: null | object) => void;
}


export const useStore = create<StoreType>((set: any) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
